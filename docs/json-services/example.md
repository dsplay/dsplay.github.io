---
parent: JSON Services
nav_order: 1
---
# Example: hello service

A service that returns a greeting, and a template that shows it.

## The service

A Node.js server with no dependencies. `GET /?name=DSPLAY` returns a greeting valid for one minute.

```js
const http = require('http');

const TTL_MS = 60 * 1000; // how long the player may keep using a result

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const name = url.searchParams.get('name') || 'World';

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (name.length > 50) {
    // errors are plain JSON too: the player won't show the media and retries later
    res.statusCode = 400;
    res.end(JSON.stringify({
      error: { message: 'name is too long' },
      expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
    }));
    return;
  }

  res.end(JSON.stringify({
    expiresAt: new Date(Date.now() + TTL_MS).toISOString(), // when the player should fetch again
    showOutdated: true, // keep showing the last result if a refresh fails
    data: {
      greeting: `Hello, ${name}!`,
      generatedAt: new Date().toISOString(),
    },
  }));
}).listen(8080);
```

Response:

```json
{
  "expiresAt": "2026-10-11T17:35:55.445Z",
  "showOutdated": true,
  "data": {
    "greeting": "Hello, DSPLAY!",
    "generatedAt": "2026-10-11T17:34:55.446Z"
  }
}
```

The service must be reachable by the player over the internet. To use a service that needs a key, add it as a header in the media.

## The template

Start from the [vanilla JS boilerplate](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/javascript) (or the [React](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/react) one). The template reads `result` from the media with [`@dsplay/template-utils`](https://github.com/dsplay/dsplay-templates/tree/main/packages/template-utils):

```js
var u = dsplayTemplateUtils;

var data = u.media.result.data;

document.querySelector('.title').innerHTML = data.greeting;
```

To develop it locally, mock the service response in `scripts/dsplay-data.js`. In production the player replaces it with the real one:

```js
var dsplay_media = {
  duration: 15000,

  // JSON Service specific
  result: {
    expiresAt: '2030-01-01T00:00:00.000Z',
    showOutdated: true,
    data: {
      greeting: 'Hello, DSPLAY!',
      generatedAt: '2026-10-11T17:34:55.446Z',
    },
  },
};
```

## Using it

1. Run the service somewhere the player can reach, e.g. `https://my.service/?name=DSPLAY`.
2. Zip the template (`npm run zip`) and upload it in the CMS.
3. Create a JSON Service media with the service URL and select the template.
4. Add the media to a playlist.

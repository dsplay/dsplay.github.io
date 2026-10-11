---
nav_order: 4
title: JSON Services
has_children: true
---
# JSON Services

Any data you can reach over HTTP can be on a DSPLAY screen. A JSON Service is the whole integration: an endpoint that returns JSON, and a [template](../html-templates) that renders it.

<figure class="fig"><img src="{{ '/assets/images/diagrams/json-flow.en.svg' | relative_url }}" alt="Your data, your endpoint, the DSPLAY player, your template, the screen"></figure>

Stock levels, queue numbers, sales dashboards, sensor readings, an internal API: if you can return it as JSON, you can show it. Your service doesn't depend on DSPLAY, it only adds a couple of control fields to its JSON.

## Three steps

1. **Return JSON.** Any HTTP endpoint that answers with the [response format](#response-format) below.
2. **Render it.** A template that reads `dsplay_media.result`.
3. **Connect.** In the CMS, create a JSON Service media with the endpoint URL (and headers, for API keys), and select the template.

The [example](./example) has a complete service and template in a few lines.

## Response format

The response must be a JSON object. The player only looks at three control keys; everything else is yours, and the whole object is delivered to the template as `dsplay_media.result`.

```js
{
  expiresAt: '2026-10-11T18:00:00.000Z', // When the result expires (ISO 8601, UTC). The player fetches again after it
  showOutdated: true, // Keep showing the result after it expires, until a new one arrives (default: false)
  error: { message: 'Something went wrong' }, // Present only on failure. The media is not shown
  data: {}, // Your payload. The name is a convention, use any keys you want
}
```

`validity` is accepted instead of `expiresAt` for legacy services, either as ISO 8601 or as `yyyy-MM-dd HH:mm:ss`.

## How the player uses it

- **Fetching:** the player calls the URL the first time the media is prepared after the app starts, and again whenever the result has expired. It keeps the last result on the device, so the media keeps working offline while the result is valid (or `showOutdated` is true).
- **Showing:** the media only plays when there is a result that is not expired (or has `showOutdated: true`) and has no `error`. Otherwise it is skipped.
- **No `expiresAt`:** the result never expires, so the player only fetches again when the app restarts. Set it to control how often the data is refreshed.
- **Errors:** return an `error` key. The HTTP status is ignored when the body is JSON, so it can be any. The player retries after `expiresAt`, or after 30 minutes if you don't send one.
- **Device clock:** a result is only considered valid if the device date is correct.

## Request

The player sends a `GET` to the URL configured in the media, with the headers configured in the media (use them for API keys and tokens).

The URL can use `${...}` variables, expanded on each request:

| Variable | Value |
|---|---|
| `project.id`, `project.key`, `project.name` | Project info |
| `project.tags.<tag>` | Project tag value |
| `terminal.name`, `terminal.modified` | Terminal info |
| `terminal.tags.<tag>` | Terminal tag value |
| `terminal.lat`, `terminal.lon` | Terminal location (the device's, if available) |

For example, `https://my.service/weather?lat=${terminal.lat}&lon=${terminal.lon}` returns data for each terminal's location.

## In the template

The service response is in `dsplay_media.result`. The fields the player adds to the media are listed in [JSON Service](../html-templates/dsplay_media/json-service).

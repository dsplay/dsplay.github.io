---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 6
---
# Instagram

Used by the Instagram ([basic](https://github.com/dsplay/dsplay-templates/tree/main/templates/instagram-basic) and [image only](https://github.com/dsplay/dsplay-templates/tree/main/templates/instagram-image-only)) templates. The player downloads the images and rewrites their paths to local ones.

```js
var dsplay_media = {
  // All general fields are also included...

  // Instagram specific
  postCount: 5, // Number of posts requested
  desiredTags: 'tag1,tag2', // Hashtags the posts are filtered by (empty for all)
  rawResult: '{...}', // The service response, as a string
  result: { // The service response, as an object
    time: '2026-10-11 12:00:00', // When the result was fetched
    userKey: 'abc123', // Key of the connected account
    data: {
      user: {
        id: '1234567890', // Account ID
        name: 'DSPLAY - Digital Signage', // Account name
        username: 'dsplaytv', // Account handle, without @
        pic: '/path/to/profile/picture', // Profile picture, local path
      },
      posts: [
        {
          id: '0987654321', // Post ID
          text: 'Post text',
          created: '2018-06-17T17:24:51.000Z', // Post creation date
          link: 'https://www.instagram.com/p/Cexample001/', // Link to the original post
          tags: ['myhashtag', 'tag2'], // Post hashtags
          likes: 14,
          comments: 3,
          media: [ // Post images and videos
            {
              id: '1324354657687980', // Media ID
              type: 'image', // 'image' or 'video'
              urls: { // Local paths of the image. Only the resolution in use is downloaded
                tb: '/path/to/thumbnail',
                sm: '/path/to/small',
                md: '/path/to/medium',
                lg: '/path/to/large',
              },
            },
          ],
        },
      ],
    },
  },
}
```

The resolution downloaded is `md`, unless the template's `metadata.json` has a `resolution` key (`tb`, `sm`, `md` or `lg`).

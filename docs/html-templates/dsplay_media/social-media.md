---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 3
---
# Social Media

```js
var dsplay_media = {
  // All general fields are also included...
  
  // Social Media service (Twitter or Instagram)
  result: {
    data: {
      user: {
        id: "1234567890",
        name: "DSPLAY - Digital Signage",
        username: "dsplaytv",
        pic: "/path/to/profile/picture",
      },
      posts: [
        {
          id: "0987654321", // post id
          text: "Post text",
          created: "2018-06-17T17:24:51.000Z", // post creation date
          media: [ // list of post media
            {
              id: "1324354657687980", // media id
              type: "image", // media type ("image" or "video")
              urls: { // paths to media images
                tb: "/path/to/thumbnail",
                sm: "/path/to/small",
                md: "/path/to/medium",
                lg: "/path/to/large"
              }
            }
        ],
        link: "https://link/to/original/post",
        tags: [
          "myhashtag",
          "tag2",
        ],
        likes: 14,
        comments: 0
        shares: 6,
        },
      ]
    }
  }
};
}
``` 
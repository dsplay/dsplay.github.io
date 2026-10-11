---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 1
---
# Image Media

Used by the [Image](https://github.com/dsplay/dsplay-templates/tree/main/templates/image) and [Photo Collage](https://github.com/dsplay/dsplay-templates/tree/main/templates/photo-collage) templates.

```js
var dsplay_media = {
  // All general fields are also included...

  // Image Media specific
  images: ['/path/to/image/1', '/path/to/image/2'], // Paths of all the media's images
  imagePath: '/path/to/image/1', // Image selected for this exhibition (round-robin by `iteration`, or random if the media is set to random)
  size: 'contain', // How the image should fit the screen. Always 'contain'
}
```

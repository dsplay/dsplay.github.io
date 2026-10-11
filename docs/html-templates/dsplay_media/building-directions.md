---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 13
---
# Building Directions

Used by the [Building Directions Board](https://github.com/dsplay/dsplay-templates/tree/main/templates/building-directions-board) template.

```js
var dsplay_media = {
  // All general fields are also included...

  // Building Directions specific
  logo: '/path/to/logo', // Board logo (optional)
  maxPageDurationSeconds: 10, // Max seconds each page of destinations stays on screen (default 60)
  targets: [ // Destinations, paginated to fit the screen
    {
      name: 'Reception', // Destination name
      place: 'Floor 1', // Place description
      floor: 'Ground floor', // Floor
      direction: 'down_left', // up, up_right, right, down_right, down, down_left, left, up_left
      logo: '/path/to/logo', // Destination logo (optional)
    },
  ],
}
```

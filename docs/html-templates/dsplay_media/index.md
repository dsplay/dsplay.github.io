---
nav_order: 2
parent: DSPLAY HTML Templates
title: dsplay_media
has_children: true
---
# `dsplay_media`

This object exposes the media properties. Part of the fields are type-specific.

Follow the general fields available in `dsplay_media` for all media types, with some sample values.

```js
var dsplay_media = {
  // General Info
  id: 1, // Media ID
  name: 'My Media', //
  count: 25, // A internal counter that stores how many media items were played until this point
  iteration: 4, // A internal counter that stores haw many times this particular media was played
  duration: 15000, // The media duration in milliseconds
  // type-specific fields...
```

For type-specific fields, check each media type page in the Table at the end of this page.

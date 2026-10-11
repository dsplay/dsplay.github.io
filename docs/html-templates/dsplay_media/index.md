---
nav_order: 2
parent: HTML Templates
title: dsplay_media
has_children: true
---
# `dsplay_media`

Properties of the media being played. The general fields below exist for every media type; each type adds its own, flat in the same object.

```js
var dsplay_media = {
  // General fields (all media types)
  id: 1, // Media ID
  name: 'My Media', // Media name
  count: 25, // How many media items the player has played so far
  iteration: 4, // How many times this media has been played so far
  duration: 15000, // Media duration in milliseconds
  // type-specific fields...
}
```

String values have `$` replaced by `&#36;`. Lists are sent as JSON arrays.

## Media types

| Media | Templates |
|---|---|
| [Image](./image) | Image, Photo Collage |
| [Message](./message) | Countdown, Count Up, Wi-Fi, Meeting Room, Flight Information, Building Directions |
| [RSS](./rss) | RSS |
| [Weather](./weather) | Weather Forecast |
| [Twitter](./twitter) | Twitter Basic |
| [Instagram](./instagram) | Instagram Basic, Instagram Image Only |
| [Facebook](./facebook) | Facebook Posts |
| [Ticket Calling](./ticket-calling) | Chamador Loterias Caixa |
| [JSON Service](./json-service) | [Lottery (Brazil)](./lottery-br), [Exchange Rates](./exchange-rates), [Menu Board](./menuboard) |

Video, audio, website, YouTube, video stream and playlist media don't use templates.

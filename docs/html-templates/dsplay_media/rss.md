---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 2
---
# RSS Media

```js
var dsplay_media = {
  // All general fields are also included...
  
  // RSS Media specific
  imageUrl: '/path/to/image', // Image path of selected RSS Item (if available)
  imageTitle: 'Image Title', // Title of RSS item image (if available)
  qrCode: '/path/to/qrcode', // Path to auto-generated QRCode image
  hasImage: true, // A flag indicating if the current item has image
  itemDescription: 'Description', // RSS item description
  itemContent: 'Content', // RSS item content
  itemTitle: 'Item Title', // RSS item title
  source: 'CNN', // An internal control field indicating the source of RSS. 
                 // You define the value of source when create a RSS Channel.
  title: 'Breaking News', // The media title
}
``` 
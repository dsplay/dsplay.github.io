---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 3
---
# RSS Media

Used by the [RSS](https://github.com/dsplay/dsplay-templates/tree/main/templates/rss) template. One random item among the most recent ones is selected on each exhibition.

```js
var dsplay_media = {
  // All general fields are also included...

  // RSS Media specific
  itemTitle: 'Item Title', // RSS item title
  itemDescription: 'Description', // RSS item description
  itemContent: 'Content', // RSS item content (currently the same text as itemDescription)
  hasImage: true, // Whether the selected item has an image
  imageUrl: '/path/to/image', // Path of the item's image (only if hasImage)
  imageTitle: 'Image Title', // Title of the item's image (only if the feed provides one)
  categories: ['World'], // Item categories (only if the item has them)
  link: 'https://link/to/item', // Link to the original item (only if the item has one)
  source: 'CNN', // Source name, defined when the RSS channel is created
  title: 'Breaking News', // Localized media title ("Breaking News" / "Últimas Notícias")
}
```

There is no QR Code field: a template that needs one should generate it from `link`.

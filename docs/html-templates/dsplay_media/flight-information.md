---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 12
---
# Flight Information

Used by the [Flight Information](https://github.com/dsplay/dsplay-templates/tree/main/templates/flight-information) template. Flights are fetched by the template from [aviation-edge.com](https://aviation-edge.com/).

```js
var dsplay_media = {
  // All general fields are also included...

  // Flight Information specific
  apiKey: 'xxxxxx-xxxxxx', // aviation-edge.com API key
  iataCode: 'LIS', // IATA code of the airport
  arrivalDeparture: 'arrival', // Which list to show: 'arrival' or 'departure'
  offsetTimeMinutes: -240, // Time offset in minutes used to filter out older flights
  maxPageDurationSeconds: 10, // Max seconds each page of flights stays on screen (default 60)
}
```

`duration` is split evenly across the pages of flights, up to `maxPageDurationSeconds` per page.

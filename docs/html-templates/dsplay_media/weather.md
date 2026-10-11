---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 4
---
# Weather Media

Used by the [Weather Forecast](https://github.com/dsplay/dsplay-templates/tree/main/templates/weather-forecast) template. Current weather and a 4-day forecast. The location is the media's, falling back to the device's and then to the terminal's.

```js
var dsplay_media = {
  // All general fields are also included...

  // Weather Media specific
  title: 'Weather Forecast', // Localized media title ("Weather Forecast" / "Previsão do Tempo")
  rawResult: '{...}', // The service response, as a string
  result: { // The service response, as an object
    data: {
      weather: {
        city: 'Recife',
        state: 'PE', // State code
        country: 'BR', // Country code
        current: {
          code: 802, // Weather condition code (https://www.weatherbit.io/api/codes)
          description: 'Scattered clouds', // Condition description, in the media's language
          icon: 'c02d', // Weatherbit icon code
          temp: 27.3, // Current temperature, in °C
          value: 27.3, // Same as temp
          min: 24.0, // Today's minimum, in °C
          max: 30.1, // Today's maximum, in °C
          humidity: 78, // Relative humidity, %
          wind: 4.2, // Wind speed, in m/s
          uv: 7, // UV index
          sunrise: '08:12', // Sunrise time (UTC)
          sunset: '20:41', // Sunset time (UTC)
          date: '2026-10-11T12:00:00.000Z', // Date of the reading (ISO 8601)
        },
        forecast: [ // Next 4 days. Each item has the same fields as `current`
          { date: '2026-10-12T00:00:00.000Z', code: 804, min: 23.5, max: 29.0 /* ... */ },
        ],
      },
    },
  },
}
```

---
parent: HTML Templates
nav_order: 1
---
# `dsplay_config`

Device and app information.

```js
var dsplay_config = {
  orientation: 'landscape', // Device orientation: 'landscape' or 'portrait'. It is the screen's, not the region's
  width: 1920, // Screen width in pixels (the whole screen, not the region)
  height: 1080, // Screen height in pixels (the whole screen, not the region)
  screenRatio: 3, // Screen width in pixels / 640
  fontRatio: 0.4, // 1 / scaledDensity
  scaledDensity: 2.5, // Android scaled density, the factor applied to font sizes
  xdpi: 320, // Physical pixels per inch, horizontally
  ydpi: 320, // Physical pixels per inch, vertically
  os: 'android', // Operating system
  osVersion: 30, // Android SDK version
  appVersion: '101', // DSPLAY app version code, as a string
  appVersionName: '2.50.8', // DSPLAY app version name
  locale: 'en_US', // Device locale, as language_COUNTRY (absent if the device has none)
  tasks: { // Internal background task counters, by context
    'some-context': {
      pending: '0', // Tasks waiting
      current: '1', // Tasks running
    },
  },
};
```

`width`, `height`, `screenRatio` and `fontRatio` describe the whole screen. To size a layout use `window.innerWidth` and `window.innerHeight`, which are the region's real size.

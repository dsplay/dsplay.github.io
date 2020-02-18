---
parent: HTML Templates
nav_order: 1
---
# `dsplay_config`

This object exposes the terminal configuration, so you can take advantage of that in your template.

Follow the fields available in `dsplay_config` with some sample values.

```js
var dsplay_config = {
  orientation: 'landscape', // 'landscape' or 'portrait'
  width: 1280, // Screen width of device
  height: 720, // Screen height of device
  os: 'android', // for future use
  osVersion: 17, // Android SDK version
  appVersion: 101, // DSPLAY App version code
  appVersionName: '2.50.8', // DSPLAY App version name
  locale: 'en_us', // Current locale
};
```
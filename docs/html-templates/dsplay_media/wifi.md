---
parent: dsplay_media
grand_parent: HTML Templates
nav_order: 10
---
# Wi-Fi

Used by the [Wi-Fi QR Code](https://github.com/dsplay/dsplay-templates/tree/main/templates/qrcode-wifi) template.

```js
var dsplay_media = {
  // All general fields are also included...

  // Wi-Fi specific
  ssid: 'Customer Wifi', // Network name
  password: 'wifi-password-123', // Network password
  auth_type: 'wpa', // Authentication: 'wpa', 'wep' or 'nopass' (open network)
  hidden: false, // Whether the network is hidden
}
```

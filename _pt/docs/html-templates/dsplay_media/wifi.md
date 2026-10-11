---
parent: dsplay_media
grand_parent: Templates HTML
nav_order: 10
permalink: /pt/docs/html-templates/dsplay_media/wifi.html
title: Wi-Fi
---
# Wi-Fi

Usado pelo template [Wi-Fi QR Code](https://github.com/dsplay/dsplay-templates/tree/main/templates/qrcode-wifi).

```js
var dsplay_media = {
  // Todos os campos gerais também estão incluídos...

  // Específicos do Wi-Fi
  ssid: 'Wifi Clientes', // Nome da rede
  password: 'wifi-password-123', // Senha da rede
  auth_type: 'wpa', // Autenticação: 'wpa', 'wep' ou 'nopass' (rede aberta)
  hidden: false, // Se a rede é oculta
}
```

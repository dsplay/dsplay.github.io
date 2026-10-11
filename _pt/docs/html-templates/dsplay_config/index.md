---
parent: Templates HTML
nav_order: 3
permalink: /pt/docs/html-templates/dsplay_config/
title: dsplay_config
---
# `dsplay_config`

Informações do dispositivo e do app.

```js
var dsplay_config = {
  orientation: 'landscape', // Orientação do dispositivo: 'landscape' ou 'portrait'. É a da tela, não a da região
  width: 1920, // Largura da tela em pixels (a tela inteira, não a região)
  height: 1080, // Altura da tela em pixels (a tela inteira, não a região)
  screenRatio: 3, // Largura da tela em pixels / 640
  fontRatio: 0.4, // 1 / scaledDensity
  scaledDensity: 2.5, // Scaled density do Android, o fator aplicado aos tamanhos de fonte
  xdpi: 320, // Pixels físicos por polegada, na horizontal
  ydpi: 320, // Pixels físicos por polegada, na vertical
  os: 'android', // Sistema operacional
  osVersion: 30, // Versão do SDK do Android
  appVersion: '101', // Version code do app DSPLAY, como string
  appVersionName: '2.50.8', // Version name do app DSPLAY
  locale: 'en_US', // Locale do dispositivo, no formato idioma_PAÍS (ausente se o dispositivo não tiver)
  tasks: { // Contadores de tarefas internas em segundo plano, por contexto
    'some-context': {
      pending: '0', // Tarefas aguardando
      current: '1', // Tarefas em execução
    },
  },
};
```

`width`, `height`, `screenRatio` e `fontRatio` descrevem a tela inteira. Para dimensionar um layout, use `window.innerWidth` e `window.innerHeight`, que são o tamanho real da região.

---
parent: dsplay_media
grand_parent: DSPLAY HTML Templates
nav_order: 4
---
# Weather Forecast (Brazil)

```js
var dsplay_media = {
  // All general fields are also included...
  
  // Brazilian Weather Forecast
  title: 'Weather Forecast'
  city: 'Recife',
  text: 'Céu Nublado com Pancadas de Chuva',
  weatherCode: 'ps' // possible values in http://servicos.cptec.inpe.br/XML/#condicoes-tempo
  forecasts: [
    {
      code: 'ps' // possible values in http://servicos.cptec.inpe.br/XML/#condicoes-tempo
      date: 'Hoje'
      min: 25,
      max: 30,
      uvi: 10,
    },
    {
      code: 'ps' // possible values in http://servicos.cptec.inpe.br/XML/#condicoes-tempo
      date: '27/03/2014'
      min: 25,
      max: 30,
      uvi: 10,
    },
    {
      code: 'ps' // possible values in http://servicos.cptec.inpe.br/XML/#condicoes-tempo
      date: '28/03/2014'
      min: 27,
      max: 30,
      uvi: 11,
    },
    {
      code: 'ps' // possible values in http://servicos.cptec.inpe.br/XML/#condicoes-tempo
      date: '29/03/2014'
      min: 22,
      max: 28
      uvi: 10,
    },
  ],
}
``` 
---
title: Home
nav_order: 1
---
# DSPLAY for Developers

Most of what DSPLAY shows on a screen is rendered by an **HTML template**: images, clocks, news, weather, social posts, lottery results, menu boards. Only video, audio, websites and YouTube play natively. A template is just a web page, so you control how it looks, and you can use, change or build any of them.

<figure class="fig"><img src="{{ '/assets/images/diagrams/home-flow.en.svg' | relative_url }}" alt="A media (its type and data), a template (HTML, CSS, JS) and the variables set in the CMS go to the player, which renders them on the screen"></figure>

## What do you want to do?

### Create a template from scratch

Use React, jQuery, vanilla JavaScript or any framework that outputs HTML and JavaScript. A template is a folder with an `index.html`, zipped.

[Create a template from scratch](./docs/html-templates/create-from-scratch)

### Customize a system template

Tune an official template with its variables, with no code, or copy its source and change anything.

<ul class="tpl-gallery"><li><a href="https://github.com/dsplay/dsplay-templates/tree/main/templates/countdown" target="_blank"><img src="{{ '/assets/images/templates/countdown.jpg' | relative_url }}" alt="Screenshot of the Countdown" loading="lazy"><span>Countdown</span></a></li><li><a href="https://github.com/dsplay/dsplay-templates/tree/main/templates/instagram-basic" target="_blank"><img src="{{ '/assets/images/templates/instagram-basic.jpg' | relative_url }}" alt="Screenshot of the Instagram" loading="lazy"><span>Instagram</span></a></li><li><a href="https://github.com/dsplay/dsplay-templates/tree/main/templates/weather-forecast" target="_blank"><img src="{{ '/assets/images/templates/weather-forecast.jpg' | relative_url }}" alt="Screenshot of the Weather Forecast" loading="lazy"><span>Weather Forecast</span></a></li><li><a href="https://github.com/dsplay/dsplay-templates/tree/main/templates/menuboard" target="_blank"><img src="{{ '/assets/images/templates/menuboard.jpg' | relative_url }}" alt="Screenshot of the Menu Board" loading="lazy"><span>Menu Board</span></a></li></ul>

[Customize a system template](./docs/html-templates/customize-a-template) · [All the official templates](./docs/html-templates/examples)

### Integrate a data source with a JSON service

Write one endpoint that returns JSON and a template that renders it, to show data from anything reachable over HTTP.

<figure class="fig"><img src="{{ '/assets/images/diagrams/json-flow.en.svg' | relative_url }}" alt="Your data, your endpoint, the DSPLAY player, your template, the screen"></figure>

[JSON Services](./docs/json-services)

### Integrate with the DSPLAY API (partners)

If you are a DSPLAY partner, create customer accounts straight from your own website or system with the DSPLAY API.

[Partners](./docs/partners)

## Reference

- [HTML Templates](./docs/html-templates): overview, SDKs, local development and packaging.
- [`dsplay_media`](./docs/html-templates/dsplay_media): the data each media type gives to a template.
- [Examples](./docs/html-templates/examples): the official templates.
- [Partners](./docs/partners): sell DSPLAY to your own customers and manage their accounts.

---
title: Início
nav_order: 1
permalink: /pt/
---
# DSPLAY para Desenvolvedores

A maior parte do que o DSPLAY mostra numa tela é renderizada por um **template HTML**: imagens, relógios, notícias, previsão do tempo, posts de redes sociais, resultados de loteria, cardápios. Só vídeo, áudio, sites e YouTube rodam de forma nativa. Um template é só uma página web, então você controla a aparência, e pode usar, alterar ou criar qualquer um deles.

<figure class="fig"><img src="{{ '/assets/images/diagrams/home-flow.pt.svg' | relative_url }}" alt="Uma mídia (seu tipo e seus dados), um template (HTML, CSS, JS) e as variáveis definidas no CMS vão para o player, que os renderiza na tela"></figure>

## O que você quer fazer?

### Criar um template do zero

Use React, jQuery, JavaScript puro ou qualquer framework que gere HTML e JavaScript. Um template é uma pasta com um `index.html`, compactada em zip.

[Criar um template do zero](./docs/html-templates/create-from-scratch)

### Customizar um template do sistema

Ajuste um template oficial pelas variáveis, sem código, ou copie o código-fonte e altere o que quiser.

<ul class="tpl-gallery"><li><a href="https://github.com/dsplay/dsplay-templates/tree/main/templates/countdown" target="_blank"><img src="{{ '/assets/images/templates/countdown.jpg' | relative_url }}" alt="Captura de tela do template Countdown" loading="lazy"><span>Countdown</span></a></li><li><a href="https://github.com/dsplay/dsplay-templates/tree/main/templates/instagram-basic" target="_blank"><img src="{{ '/assets/images/templates/instagram-basic.jpg' | relative_url }}" alt="Captura de tela do template Instagram" loading="lazy"><span>Instagram</span></a></li><li><a href="https://github.com/dsplay/dsplay-templates/tree/main/templates/weather-forecast" target="_blank"><img src="{{ '/assets/images/templates/weather-forecast.jpg' | relative_url }}" alt="Captura de tela do template Weather Forecast" loading="lazy"><span>Weather Forecast</span></a></li><li><a href="https://github.com/dsplay/dsplay-templates/tree/main/templates/menuboard" target="_blank"><img src="{{ '/assets/images/templates/menuboard.jpg' | relative_url }}" alt="Captura de tela do template Menu Board" loading="lazy"><span>Menu Board</span></a></li></ul>

[Customizar um template do sistema](./docs/html-templates/customize-a-template) · [Todos os templates oficiais](./docs/html-templates/examples)

### Integrar uma fonte de dados com um serviço JSON

Escreva um endpoint que retorna JSON e um template que o renderiza, para exibir dados de qualquer coisa acessível por HTTP.

<figure class="fig"><img src="{{ '/assets/images/diagrams/json-flow.pt.svg' | relative_url }}" alt="Seus dados, seu endpoint, o player DSPLAY, seu template, a tela"></figure>

[Serviços JSON](./docs/json-services)

### Integrar com a API do DSPLAY (parceiros)

Se você é parceiro DSPLAY, crie contas de clientes direto do seu site ou sistema com a API do DSPLAY.

[Parceiros](./docs/partners)

## Referência

- [Templates HTML](./docs/html-templates): visão geral, SDKs, desenvolvimento local e empacotamento.
- [`dsplay_media`](./docs/html-templates/dsplay_media): os dados que cada tipo de mídia entrega a um template.
- [Exemplos](./docs/html-templates/examples): os templates oficiais.
- [Parceiros](./docs/partners): venda o DSPLAY para os seus clientes e gerencie as contas deles.

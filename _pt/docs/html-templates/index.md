---
nav_order: 2
title: Templates HTML
has_children: true
has_toc: false
permalink: /pt/docs/html-templates/
---
# Templates HTML
{: .no_toc }

## Índice
{: .no_toc .text-delta }

1. TOC
{:toc}

## O que é um Template HTML?

Um **template HTML** é o software responsável por renderizar o conteúdo da sua mídia na tela.

No DSPLAY, a maioria dos tipos de mídia pode ter layout e apresentação personalizados.
Você pode alterar cores, fontes, imagens, adicionar sua marca e redefinir por completo a forma como uma mídia é exibida.

Os tipos de mídia marcados abaixo permitem personalização através de templates HTML customizados:
- COVID-19
  - [ ] Vacinação COVID-19
  - [ ] Casos de COVID-19
- Dos seus arquivos locais
  - [ ] Vídeo
  - [ ] Áudio
  - [x] Imagem
- Redes Sociais
  - [x] Twitter
  - [x] Instagram
  - [x] Facebook
- Conteúdo Dinâmico
  - [x] Notícias (RSS)
  - [x] Previsão do Tempo
  - [ ] Web Site
  - [x] Relógio Digital
  - [x] Relógios do Mundo (analógicos)
  - [x] Barra de Informações Horizontal
- Google
  - [ ] YouTube
  - [ ] Apresentação Google
  - [ ] Planilha Google
  - [ ] Documento Google
  - [ ] Google Agenda
- Brasil
  - [x] Loterias Brasileiras
  - [x] Cotações do BCB
- Utilidades
  - [x] Acesso Wi-Fi
- Personalizado
  - [x] Mensagem
  - [x] JSON Service

> Os tipos de mídia **Mensagem** e **JSON Service** são genéricos demais e por isso não têm um template padrão. Esses tipos de mídia só podem ser criados usando um template customizado.


## Básico

Todos os templates no DSPLAY são apps HTML simples. Podem ser construídos com qualquer ferramenta que gere uma aplicação HTML5 estática.

Seu template pode incluir:
- [x] HTML 5
- [x] CSS 3
- [x] JavaScript
- [x] Imagens
- [x] Fontes
- [x] Áudio
- [x] Vídeo
- [ ] Plugin (ex.: Flash, Applet)


## Estrutura de diretórios

O único requisito quanto à estrutura do projeto é ter um `index.html` na raiz e um arquivo chamado `dsplay-data.js` em qualquer lugar da pasta do projeto. O restante da estrutura é livre.

Um exemplo de estrutura de projeto pode ser algo como:

```
|-- my-template
|   |-- index.html  <-- deve estar na raiz
|   |
|   |-- scripts
|   |   |-- dsplay-data.js  <-- pode estar em qualquer lugar da estrutura do template
|   |   |-- app.js
|   |
|   |-- images
|   |-- styles
```

## `index.html`

Este arquivo é o ponto de entrada do seu template e deve estar na raiz do projeto.

Um `index.html` bem simples pode ser assim:

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles/main.css">
</head>
<body>
    <div id="root"></div>
    <script src="scripts/dsplay-data.js"></script>
    <script src="scripts/app.js"></script>
</body>
</html>
```

> Na prática, este é o único arquivo obrigatório em um template HTML do DSPLAY.
> É possível, embora não recomendado, ter um template com apenas o arquivo `index.html`.

## SDKs

O DSPLAY tem algumas bibliotecas SDK que ajudam a criar templates com facilidade. Elas permitem simular (mock) os dados do app e testar seus templates localmente.

### O SDK básico

É aqui que a mágica acontece.

[@dsplay/template-utils](https://github.com/dsplay/dsplay-templates/tree/main/packages/template-utils) é uma biblioteca JavaScript pura que cuida da interação entre o app DSPLAY e o seu template. Por essa interface, o template obtém dados do app DSPLAY e também envia alguns comandos para o app (ex.: conclusão ou erro).

> A biblioteca detecta automaticamente o ambiente em que o template está rodando e obtém os dados do lugar certo. No navegador, os dados [de teste] vêm do arquivo `dsplay-data.js`. No app DSPLAY Player para Android, ela obtém os dados [reais] do app.

Você pode usar este SDK em qualquer template, construído com [vanilla javascript](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/javascript), [jQuery](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/jquery) ou qualquer outro framework.

### O SDK React

Construído sobre o SDK básico, o [@dsplay/react-template-utils](https://github.com/dsplay/dsplay-templates/tree/main/packages/react-template-utils) oferece as mesmas funcionalidades, além de alguns componentes e hooks React úteis para facilitar a sua vida. 

Se você está construindo seu template com [React](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/react), recomendamos usar este SDK.


## Desenvolvimento local: `dsplay-data.js`

Para facilitar o teste do template no navegador durante o desenvolvimento, você deve ter um arquivo chamado `dsplay-data.js`, em qualquer lugar e "importado" no seu `index.html` (geralmente antes dos demais scripts).

Este arquivo deve conter 3 variáveis do tipo `object`, assim:

```js
var dsplay_config = {};
var dsplay_media = {};
var dsplay_template = {};
```

> Durante o desenvolvimento do template, o `dsplay-data.js` será apenas um mock com os seus dados de teste.


As páginas a seguir mostram em detalhe os campos dos objetos de `dsplay-data.js`:
- [`dsplay_config`](./dsplay_config)
- [`dsplay_media`](./dsplay_media)
- [`dsplay_template`](./dsplay_template)

## Testando em um dispositivo

A forma mais fácil de ver como o template renderiza em dispositivos reais (ou no emulador Android) é servir seu HTML por meio de algum servidor HTTP estático
(ex.: [serve](https://www.npmjs.com/package/serve), [apache](https://httpd.apache.org/), etc). Assim você pode criar uma mídia [Web Site](https://manager.dsplay.tv/media/createWebsite) no Web Manager apontando para o seu endereço local (IP).

Dessa forma, você poderá ver como o template se comporta em dispositivos reais.

> O ideal é que o dispositivo tenha uma [conexão ADB](https://developer.android.com/studio/command-line/adb) com o seu PC. Isso ajuda na depuração e no tratamento das limitações do navegador nativo. 

## Empacotamento

Para enviar seu template ao [DSPLAY Web Manager](https://manager.dsplay.tv), você deve empacotar todos os arquivos em um `.zip`.

> **IMPORTANTE:** Ao compactar o template, o arquivo `index.html` deve estar na raiz do `.zip`, não dentro de alguma pasta.

> A maioria dos [boilerplates](./boilerplates) tem um script para empacotar o template.

## Publicação

Para publicar seu template, basta [criar](https://manager.dsplay.tv/template/create) (ou editar) um template no Web Manager.

1. Escolha o tipo de mídia ao qual seu template se aplica;
1. Dê um nome ao template;
1. Escolha o arquivo `.zip`;
1. Marque a opção responsivo (em breve será o padrão);
1. Se o template define variáveis customizadas, registre-as clicando no botão **'Add'** na região **'Template Vars'**;
1. Confirme clicando em **'Create'**.

Pronto! Seu template está disponível para uso.

## Migrando seu template para funcionar corretamente no app DSPLAY versão 3.x

Siga [este guia](./dsplay_3_0_migration/) para ver as alterações necessárias para tornar seu template compatível com o novo app DSPLAY

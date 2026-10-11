---
nav_order: 2
title: HTML Templates
has_children: true
has_toc: false
---
# HTML Templates
{: .no_toc }

A DSPLAY template is just a web page. If you can build it with HTML, CSS and JavaScript, it can run on a screen: any framework, any layout, your brand.

- **Simple to customize.** Expose a color, a logo or a flag as a *template variable* and anyone can change it from a form in the CMS, with no code.
- **Simple to feed.** Read what the player gives you from `dsplay_media`, or pair the template with a [JSON Service](../json-services) to show live data from anything reachable over HTTP.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Start here

- [Create a template from scratch](./create-from-scratch): React, jQuery, vanilla JavaScript or any other stack.
- [Customize a system template](./customize-a-template): tune an official template, or copy it and change the code.
- [JSON Services](../json-services): feed a template with data from your own endpoint.

## Which media can use templates

Most media types can be customized with a template: change colors, fonts and images, add your brand, redefine the layout. The checked ones allow custom HTML templates:
- COVID-19
  - [ ] COVID-19 Vaccination
  - [ ] COVID-19 Cases
- From your local files
  - [ ] Video
  - [ ] Audio
  - [x] Image
- Social Networks
  - [x] Twitter
  - [x] Instagram
  - [x] Facebook
- Dynamic Content
  - [x] News (RSS)
  - [x] Weather Forecast
  - [ ] Web Site
  - [x] Digital Clock
  - [x] World Clocks (analog)
  - [x] Horizontal Information Bar
- Google
  - [ ] YouTube
  - [ ] Google Presentation
  - [ ] Google Spreadsheet
  - [ ] Google Document
  - [ ] Google Calendar
- Brazil
  - [x] Brazilian Lottery
  - [x] BCB Exchange Rates
- Util
  - [x] Wi-Fi Access
- Custom
  - [x] Message
  - [x] JSON Service

> **Message** and **JSON Service** have no default template: they are the building blocks for your own. These media can only be created with a custom template.


## Basics

A template is a static HTML5 app. Build it with any tool that outputs one: a bundler, a framework or plain files.

Your Template can include:
- [x] HTML 5
- [x] CSS 3
- [x] JavaScript
- [x] Images
- [x] Fonts
- [x] Audio
- [x] Video
- [ ] Plugin (e.g. Flash, Applet)


## Directory Structure

The only requirement regarding the project structure is that you must have an `index.html` in the root of your project, and a file called `dsplay-data.js` located anywhere in the project folder. The rest of the structure is up to you.

A sample project structure can be something like:

```
|-- my-template
|   |-- index.html  <-- must be on the root
|   |
|   |-- scripts
|   |   |-- dsplay-data.js  <-- can be located anywhere in the template structure
|   |   |-- app.js
|   |
|   |-- images
|   |-- styles
```

## `index.html`

This file is your template entrypoint, and it must be located at the root of your project.

A very simple `index.html` can look like the following:

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

> This is actually the only file required in a DSPLAY HTML template.
> It's possible, although not recommended, to have a template with only the `index.html` file.

## SDKs

The SDKs read the player's data for you and let you test locally with mock data.

### The basic SDK

This is where the magic happens.

[@dsplay/template-utils](https://github.com/dsplay/dsplay-templates/tree/main/packages/template-utils) is a pure javascript library that handles the interaction between DSPLAY app and your template. Through this interface your template can get data from DSPLAY app and also send some commands to the app (e.g. completion or error).

> The library will automatically detect the environment where your template is running and will get data from the right place. When running on your web browser, [test] data will come from the `dsplay-data.js` file. When running on the DSPLAY Player Android app it will get [real] data from the app.

You can use this SDK in any template, built with [vanilla javascript](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/javascript), [jQuery](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/jquery) or any other framework.

### The React SDK

Built on top of the basic SDK, [@dsplay/react-template-utils](https://github.com/dsplay/dsplay-templates/tree/main/packages/react-template-utils) provides the same functionality plus React components and hooks.

If you are building your template with [React](https://github.com/dsplay/dsplay-templates/tree/main/boilerplates/react), we recommend using this SDK.


## Local development: `dsplay-data.js`

To develop in your browser, include a file called `dsplay-data.js`, located anywhere and imported in your `index.html` (usually before the other scripts). It mocks the data the player will provide.

This file must contain 3 variables of `object` type, like this:

```js
var dsplay_config = {};
var dsplay_media = {};
var dsplay_template = {};
```

> During template development, `dsplay-data.js` will be just a mock with your test data.


The following pages show in detail the fields of `dsplay-data.js` objects:
- [`dsplay_config`](./dsplay_config)
- [`dsplay_media`](./dsplay_media)
- [`dsplay_template`](./dsplay_template)

## Testing on a device

The easiest way to check how your template renders in the real devices (or Android emulator) is serving your HTML through some static HTTP server 
(e.g. [serve](https://www.npmjs.com/package/serve), [apache](https://httpd.apache.org/), etc). So you can create a [Web Site](https://manager.dsplay.tv/media/createWebsite) media item on the Web Manager pointing to your local address (IP).

In this way, you will be able to see how your template behaves on real devices.

> Ideally, your device should have an [ADB connection](https://developer.android.com/studio/command-line/adb) with your PC. This helps debugging and managing the native browser limitations. 

## Packing

To upload your template to the [DSPLAY Web Manager](https://manager.dsplay.tv) you must pack all your files in a `.zip` file.

> **IMPORTANT:** When zipping your template, the `index.html` file must be located in the root of the `.zip` file, not inside any folder.

> Most [boilerplates](./boilerplates) have a script to pack your template.

## Deploying

To deploy your template, just [create](https://manager.dsplay.tv/template/create) (or edit) a template in the Web Manager.

1. Choose the media type your template applies for;
1. Give your template a name;
1. Choose your `.zip` file;
1. Check the responsive option (it will be default soon);
1. Template variables: the CMS detects the ones in the manifest generated by the boilerplates' `npm run zip`. Otherwise, register each one with the **'Add'** button in the **'Template Vars'** region;
1. Confirm by clicking **'Create'**.

Done! Your template is available for use.

## Migrating your template to run properly on DSPLAY app version 3.x

Follow [this guide](./dsplay_3_0_migration/) to see what changes you need to do to make your template compatible with the new DSPLAY app
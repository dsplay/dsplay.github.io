---
nav_order: 2
title: DSPLAY HTML Templates
has_children: true
has_toc: false
---
# DSPLAY HTML Templates
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Basics

All DSPLAY templates are just simple HTML apps. They can be built using any tool that outputs a static HTML5 application.

Your Template can include:
- [x] HTML 5
- [x] CSS 3
- [x] JavaScript
- [x] Images
- [x] Fonts
- [x] Audio
- [x] Video
- [ ] Plugin (e.g. Flash, Applet)


## Dir Structure

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
> It's possible, however unrecommended, to have a template with only the `index.html` file.

## `dsplay-data.js`

That's where the magic happens.

All DSPLAY HTML template must have a file called `dsplay-data.js`, located anywhere and "imported" in your `index.html` (usually before the other scripts files).

This file must contain 3 variables of `object` type, like this:

```js
var dsplay_config = {};
var dsplay_media = {};
var dsplay_template = {};
```

> During template development, `dsplay-data.js` will be just a mock with your test data. The DSPLAY Player App will automatically replace this file with real content at runtime.


The following pages show in details the fields of `dsplay_data.js` objects:
- [`dsplay_config`](./dsplay_config)
- [`dsplay_media`](./dsplay_media)
- [`dsplay_template`](./dsplay_template)

## Packing

To upload your template to the [DSPLAY Web Manager](https://manager.dsplay.tv) you must pack all your files in a `.zip` file.

> **IMPORTANT:** When zipping your template, the `index.html` file must be located in the root of the `.zip` file, not inside any folder.

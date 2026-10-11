---
parent: HTML Templates
nav_order: 3
---
# `dsplay_template`

Template variables make a template customizable without code. You define them, the CMS shows them as form fields, and the values the user picks arrive in `dsplay_template`.

```js
// All fields here are custom and template specific
var dsplay_template = {
  my_color: '#FF4477', // a color the user picks
  my_image: '/path/to/image', // an image the user uploads
  my_flag: 'true', // a boolean
};
```

Read them with the SDK, which converts the types and applies defaults:

```js
var u = dsplayTemplateUtils;
u.tval('my_color', '#000'); // string
u.tbval('my_flag', false); // boolean
u.tival('page_size', 10); // integer
u.tfval('opacity', 1); // float
```

> The CMS detects your variables from the `template-variables.json` generated when you pack the template (`npm run zip` in the boilerplates). If your project doesn't generate it, register each variable as a "Template Var" in the template creation form (on [DSPLAY Web Manager](https://manager.dsplay.tv/template/create)), with the same name and type.

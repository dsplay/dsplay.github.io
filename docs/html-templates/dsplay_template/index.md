---
parent: DSPLAY HTML Templates
nav_order: 3
---
# `dsplay_template`

The content of `dsplay_template` must be defined by you (template creator). 

```js
// All fields here are custom and template specific
var dsplay_template = {
  my_color: '#FF4477',
  my_image: '/path/to/image',
  my_flag: 'true', // boolean
  ...
};
```

> remember to register the variables defined in `dsplay_template` as "Template Vars" in the template creation form (on [DSPLAY Web Manager](https://manager.dsplay.tv/template/create)), informing the same name and type

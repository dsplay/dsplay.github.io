---
parent: Templates HTML
nav_order: 3
permalink: /pt/docs/html-templates/dsplay_template/
title: dsplay_template
---
# `dsplay_template`

O conteúdo de `dsplay_template` deve ser definido por você (criador do template). 

```js
// Todos os campos aqui são customizados e específicos do template
var dsplay_template = {
  my_color: '#FF4477',
  my_image: '/path/to/image',
  my_flag: 'true', // boolean
  ...
};
```

> Lembre-se de registrar as variáveis definidas em `dsplay_template` como "Template Vars" no formulário de criação do template (no [DSPLAY Web Manager](https://manager.dsplay.tv/template/create)), informando o mesmo nome e tipo

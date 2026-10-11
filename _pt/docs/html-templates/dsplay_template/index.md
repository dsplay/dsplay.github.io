---
parent: Templates HTML
nav_order: 5
permalink: /pt/docs/html-templates/dsplay_template/
title: dsplay_template
---
# `dsplay_template`

Variáveis de template deixam um template personalizável sem código. Você as define, o CMS as mostra como campos de um formulário, e os valores escolhidos pelo usuário chegam em `dsplay_template`.

```js
// Todos os campos aqui são customizados e específicos do template
var dsplay_template = {
  my_color: '#FF4477', // uma cor escolhida pelo usuário
  my_image: '/path/to/image', // uma imagem enviada pelo usuário
  my_flag: 'true', // um booleano
};
```

Leia com o SDK, que converte os tipos e aplica valores padrão:

```js
var u = dsplayTemplateUtils;
u.tval('my_color', '#000'); // string
u.tbval('my_flag', false); // booleano
u.tival('page_size', 10); // inteiro
u.tfval('opacity', 1); // decimal
```

> O CMS detecta suas variáveis pelo `template-variables.json` gerado ao empacotar o template (`npm run zip` nos boilerplates). Se o seu projeto não gera esse arquivo, registre cada variável como "Template Var" no formulário de criação do template (no [DSPLAY Web Manager](https://manager.dsplay.tv/template/create)), com o mesmo nome e tipo.

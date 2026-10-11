---
parent: Templates HTML
nav_order: 4
permalink: /pt/docs/html-templates/dsplay_3_0_migration/
title: Guia de migração para o DSPLAY 3.x
---
# Guia de migração para o DSPLAY 3.x


## Meu template usa o SDK `@dsplay/react-template-utils`

Nesse caso, basta atualizar o SDK para a [última versão](https://www.npmjs.com/package/@dsplay/react-template-utils).

```bash
npm i -S @dsplay/react-template-utils@4
```

> Não esqueça de [empacotar](../#empacotamento) e [publicar novamente](../#publicação) seu template no [DSPLAY Web Manager](https://manager.dsplay.tv)

## Meu template usa o SDK `@dsplay/template-utils`

Nesse caso, basta atualizar o SDK para a [última versão](https://www.npmjs.com/package/@dsplay/template-utils).

### com um gerenciador de pacotes
Se o seu projeto usa npm, basta executar:

```bash
npm update
```

### sem um gerenciador de pacotes
Se o seu projeto não usa um gerenciador de pacotes, baixe a versão UMD em <https://unpkg.com/@dsplay/template-utils> e substitua o arquivo local.

> Não esqueça de [empacotar](../#empacotamento) e [publicar novamente](../#publicação) seu template no [DSPLAY Web Manager](https://manager.dsplay.tv)

## Meu template não usa nenhum SDK

É hora de começar a usar.

Para fazer as alterações no seu template, siga estes passos simples:

1. Adicione o SDK correspondente ao tipo do seu projeto (React ou Javascript/JQuery)
1. Procure usos de `window.dsplay_media`, `window.dsplay_config` e `window.dsplay_template` e substitua-os pelas funções/objetos fornecidos pelo SDK.
    1. Javascript/jQuery
        ```js
        // troque isto
        var someMediaValue = window.dsplay_media.images;
        var someTemplateValue = window.dsplay_template.bg_color;

        // por isto
        var someMediaValue = dsplayTemplateUtils.media.images;
        var someTemplateValue = dsplayTemplateUtils.tval('bg_color');
        ```
    1. React
        ```javascript
        // troque isto
        const someMediaValue = window.dsplay_media.images;
        const someTemplateValue = window.dsplay_template.bg_color;

        // por isto
        const media = useMedia();
        const someMediaValue = media.images;
        const someTemplateValue = useTemplateVal('bg_color');
        ```

> Você sempre pode consultar os [projetos boilerplate](../boilerplates/) para ver em mais detalhes como usar o SDK.

> **IMPORTANTE** Se você atualizar seu template, ele continuará funcionando na versão anterior do app DSPLAY, então NÃO SE PREOCUPE e atualize seus templates mesmo que ainda use uma versão antiga do app DSPLAY.
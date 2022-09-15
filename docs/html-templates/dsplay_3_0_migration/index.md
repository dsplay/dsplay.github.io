---
parent: HTML Templates
nav_order: 4
---
# DSPLAY 3.x migration guide

## My template uses `@dsplay/template-utils` SDK

In this case you just need to upgrade the SDK to the [latest version](https://www.npmjs.com/package/@dsplay/template-utils).

### with a package manager
If your project uses npm (or similar) just run:

```bash
npm update
```

### without a package manager
If your project doesn't use a package manager, just download the UMD version from <https://unpkg.com/@dsplay/template-utils> and replace your local file.

> Don't forget to [pack](../#packing) and [redeploy](../#deploying) your template on [DSPLAY Web Manager](manager.dsplay.tv)

## My template uses `@dsplay/react-template-utils` SDK

In this case you just need to upgrade the SDK to the [latest version](https://www.npmjs.com/package/@dsplay/react-template-utils).

```bash
npm i -S @dsplay/react-template-utils@4
```

> Don't forget to [pack](../#packing) and [redeploy](../#deploying) your template on [DSPLAY Web Manager](manager.dsplay.tv)

## My template doesn't use any SDK

It's time to start using them.

To make the changes on your template follow these simple steps:

1. Add the SDK corresponding to your project type (React or Javascript/JQuery)
1. Search for uses of `window.dsplay_media`, `window.dsplay_config` and `window.dsplay_template` and replace them by the SDK-provided functions.
    1. Javascript/jQuery
        ```js
        // replace this
        var someValue = window.dsplay_media.images;

        // for this
        var someValue = dsplayTemplateUtils.media.images;
        ```
    1. React
        ```js
        // replace this
        const someValue = window.dsplay_media.images;

        // for this
        var someValue = useMedia().images;

        ```

> You can always check the [boilerplate projects](../boilerplates/) to see how to use the SDK in more detail.

> **IMPORTANT** If you update your template it will continue to work on the previous version of DSPLAY app, so DON'T WORRY and upgrade your templates even if you are still using an old version of DSPLAY app.
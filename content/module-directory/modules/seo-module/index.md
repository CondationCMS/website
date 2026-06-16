---
title: Seo Module
template: module.html
seo:
  keywords: ''
  author: ''
  description: ''
unpublish_date: null
published: true
publish_date: null
module:
  description: Seo solution
  version: v4.0.0
  github: https://github.com/CondationCMS/seo-module
  issues: https://github.com/CondationCMS/seo-module/issues
  license: GPLv3
  author: 'Condation'
  description: ''
  installation: |-
    Installation using the cli

    ```shell
    server.sh module get so-module
    ```

    After the module is downloaded use it in the site.toml

    ```toml
    [modules]
    active = ["seo-module"]
    ```
  features: "Creates a sitemap.xml under: \n```\nhttps://yourhost.com/module/seo-module/sitemap.xml\n\
    ```"
---

# Seo Module

The seo-module generates a **sitemap.xml** which can be submitted to search engines.

## Activation
Add the module to the site.toml.
```toml
[modules]
active = ["seo-module"]
```

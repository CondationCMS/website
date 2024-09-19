---
title: Theming
template: documentation/content.html
---

Support for themes allows the reuse of templates, extensions, assets and messages in different sites.

```shell
<root>
- hosts/
- themes/
    - default-theme/
        assets/
        extensions/
        messages/
        templates/
        theme.yaml
```

## configuration

```yaml
name: test
template:
  engine: thymeleaf
modules:
  active:
    - thymeleaf-module
    - search-module
media:
  formats:
    - name: small
      width: 256
      height: 256
      format: webp
      compression: true
```

### Name

Each theme requires a unique name. It can then be referenced in a site using this name.

### Template-Engine

Each theme can define a template engine. If an engine is defined, it cannot be changed for a site

### Active modules

List of modules that are required for this theme. This list can be extended in the respective site.

### Media formats

A list of media formats that are required in the theme can be configured here. This list can be extended in the site.

## Overwrite templates in a site

To overwrite a template in a site, a template with the same name must be created in the *host/templates* folder. If the template is in a subfolder, the subfolder must also be created accordingly.
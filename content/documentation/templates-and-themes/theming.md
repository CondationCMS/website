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

```toml
name = "test"

\[template\]
engine = "thymeleaf"

\[modules\]
active = \[ "thymeleaf-module", "search-module" \]
```

### required configuration
#### Name
Each theme requires a unique name. It can then be referenced in a site using this name.

### optional configuration
#### Parent theme name
A theme can have a parent theme. If the parent is defined, everything (style, assets, templates, properties) are inherited from that parent. It is possible to override parts in the child theme.

#### Template-Engine
Each theme can define a template engine. If an engine is defined, it cannot be changed for a site. If no template engine is configured, the default twig like system template engine is used.

#### Active modules
List of modules that are required for this theme. This list can be extended in the respective site.

## Overwrite templates
It is possible to override single template files in a child theme or in the site.
A template with the same name must be created in the */templates* folder of the theme or site. If the template is in a subfolder, the subfolder must also be created accordingly.

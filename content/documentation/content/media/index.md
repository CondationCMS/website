---
title: Media
template: documentation/content.html
menu:
    position: 10
---

# Media

Media formats are configured in [theme](/documentation/templates-and-themes/theming) or [site](/documentation/basics/site-config) config.
To add formats you need the file **configs/media.toml**.

## Example configuration

```toml
\[\[formats\]\]
name = "small"
width = 256
height = 256
format = "webp"
compression = true

```
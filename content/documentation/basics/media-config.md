---
title: Site configuration
template: documentation/content.html
menu:
    position: 1
---

# Media configuration

Media configuration is stored in **config/media.toml**

```toml
\[\[media.formats\]\]   # (1)
name = "small"          # (2.1)
width = 256             # (2.2)
height = 256            # (2.3)
format = "webp"         # (2.4)
compression = true      # (2.5)
```

(1) definition of required media formats of the site. The media formats are used if images are accessed via the media handler: **/media/images/logo.jpg?small**

(2.1) name if the format, used for referencing

(2.2 and 2.3) width an height

(2.4) the desired file format, supported formats: webp, jpeg and png

(2.5) enable compression
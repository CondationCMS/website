---
title: Shortcodes
template: documentation/content.html
---

# ShortCodes

With ShortCodes it is possible to extend the rendering of the markdown content. 

The video integration for example uses ShortCodes to provided simple integration of videos inside content or template.

Markdown content usage example:
```shortcode
\[\[video type="youtube" id="y0sF5xhGreA" title="Everybody loves little cats" /\]\]
```

Pebble template usage example:
```twig
{{ shortCode.call('video', {'type': 'youtube', 'id': 'y0sF5xhGreA', 'title' : 'Everybody loves little cats'}) }}
```
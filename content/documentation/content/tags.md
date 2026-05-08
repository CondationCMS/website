---
title: Shortcodes
template: documentation/content.html
---

# Tags

With Tags it is possible to extend the rendering of the markdown content. 

The video integration for example uses Tags to provided simple integration of videos inside content or template.

Markdown content usage example:
```tag
\[\[video type="youtube" id="y0sF5xhGreA" title="Everybody loves little cats" /\]\]
```

Pebble template usage example:
```twig
{{ tags.call('video', {'type': 'youtube', 'id': 'y0sF5xhGreA', 'title' : 'Everybody loves little cats'}) }}
```

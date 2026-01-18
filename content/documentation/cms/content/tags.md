---
title: Tags
template: documentation/documentation.html
menu:
  position: 4
---

With Tags it is possible to extend the rendering of the markdown content. 

The video integration for example uses Tags to provided simple integration of videos inside content or template.

Markdown content usage example:
```tag
\[\[video type="youtube" id="y0sF5xhGreA" title="Everybody loves little cats" /\]\]
```

Sometimes tags will work with some content:

```tag
\[\[contentTag\]\]Here is the content to work with\[\[/contentTag\]\]
```

It's possible to create custom tags via [extensions](/documentation/cms/extending/extensions) or [modules](/documentation/cms/extending/modules). 
Tags are a great way for theme developers to add custom features.

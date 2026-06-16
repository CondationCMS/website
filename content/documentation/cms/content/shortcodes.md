---
title: ShortCodes
template: documentation/documentation.html
menu:
  position: 4
unpublish_date: null
published: true
publish_date: null
---

With ShortCodes it is possible to extend the rendering of the markdown content. 

The video integration for example uses ShortCodes to provided simple integration of videos inside content or template.

Markdown content usage example:
```tag
\[\[ext:video type="youtube" id="y0sF5xhGreA" title="Everybody loves little cats" /\]\]
```

Sometimes ShortCodes will work with some content:

```tag
\[\[shortCode\]\]Here is the content to work with\[\[/shortCode\]\]
```

It's possible to create custom ShortCode via [extensions](/documentation/cms/extending/extensions) or [modules](/documentation/cms/extending/modules). 
ShortCodes are a great way for theme developers to add custom features.

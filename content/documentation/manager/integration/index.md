---
template: documentation/content.html
createdAt: 2025-10-08T12:03:44.905Z
createdBy: thorsten
published: false
title: Integration
seo:
  keywords: ''
  author: ''
  description: ''
unpublish_date: null
publish_date: null
---

# Integration into website

To integrate your website with the manager application, you need at first the manager javascript and styles

```condation
{% if PREVIEW_MODE %}
    <script  src="{{ cms.links.createUrl('/manager/js/manager-inject.js') }}" type="module"></script>
    <link rel="stylesheet" href="{{ cms.links.createUrl('/manager/css/manager-inject.css') }}" />
{% endif %}
```

After the the js and css is added you can start adding toolbars:

## Editing main content and meta attributes

Use the **ui** helper to add the _main_ toolbar definition to edit the content and attributes to you main div.
```condation
<div {{ ui.toolbar("main", "main", ["editContent", "editAttributes"]) | raw }}>
...
</div>
```

## Editing sections

Use the **ui** helper to add the edit sections toolbar, with actions to add and order sections.
```condation
<div {{ ui.toolbar("content", "sections", ["addSection", "orderSections"], { "sectionName": "content"}) | raw }}>
...
</div>
```


For more information about forms read the [forms documentation](forms/). 
For more information about form fields read the [field types documentation](field-types/)
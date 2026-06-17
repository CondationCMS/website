---
template: documentation/documentation.html
createdAt: 2025-10-08T12:03:44.905Z
createdBy: thorsten
published: true
title: Integration
seo:
  keywords: ''
  author: ''
  description: ''
unpublish_date: null
publish_date: null
menu:
  position: 3
---

# Integration

There are just a view steps necessary to integration the manager application with your website.

## Activate for site

To activate the manager for a site, it has to be enabled in the site properties.

```toml
[ui]
managerEnabled = true
```


## Template

To integrate your website with the manager application, you need at first the manager javascript and styles.

```condation
{% if PREVIEW_MODE %}
    <script  src="{{ cms.links.createUrl('/manager/js/manager-inject.js') }}" type="module"></script>
    <link rel="stylesheet" href="{{ cms.links.createUrl('/manager/css/manager-inject.css') }}" />
{% endif %}
```

After the js and css is added you can start adding toolbars,
Toolbars are a set of action buttons, place in a top corner of the div they are added.
**Main** and **section** toolbars are added on the right side, **sections** toolbar on the left.

Basic usage:
```javascript
ext.ui.toolbar("<id>", "<type>", ["<actions>"], {<attributes>})
```
**id**: a unique id for every toolbar.  
**type**: the toolbar type, available **main**, **sections**, **sections** And **media**.  
**actions**: list of actions available in the toolbar: **editContent**, **editAttributes**, **addSection**, **orderSections**.  
**attributes**: map of attributes, for example the id of the form used for **editAttributes**

### Main toolbar

Use the **ui** helper to add the _main_ toolbar definition to edit the content and attributes to you main div.
```condation
<div {{ ext.ui.toolbar("main", "main", ["editContent", "editAttributes"], {"form": "attributes"}) | raw }}>
...
</div>
```

### Sections toolbar

Use the **ui** helper to add the edit sections toolbar, with actions to add and order sections.
```condation
<div {{ ext.ui.toolbar("content", "sections", ["addSection", "orderSections"], { "sectionName": "content"}) | raw }}>
...
</div>
```

### Section toolbar

This adds a toolar for a section into the template.
Actions are **editContent**, **editAttributes** and **deleteSection**, as options the uri of the node is added, so saving knows the corrent file.

```condation
<div
{{ ext.ui.toolbar(node.uri, "section" , ["editContent", "editAttributes" , "deleteSection" ], {"uri": node.uri, "form": "attributes"}) | raw }}
>
...
</div>
```


For more information about forms read the [forms documentation](forms/). 
For more information about form fields read the [field types documentation](field-types/)

### Media toolbar 

For templates that are not part of the markdown but configured in the meta

```condation
<img {{ ext.ui.mediaToolbar(["select", "meta", "focalPoint"], {"uri": node.uri, "element": "media_url" }) | raw }} />
```

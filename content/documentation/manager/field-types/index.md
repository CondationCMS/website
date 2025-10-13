---
template: documentation/content.html
createdAt: 2025-10-08T12:03:44.905Z
createdBy: thorsten
published: false
title: Field types
seo:
  keywords: ''
  author: ''
  description: ''
unpublish_date: null
publish_date: null
---

# Field types

To provide users the possibility of creating content multiple field types exits.
Form fields can be used in json format, what is used for the settings forms of page templates, or forms of list item types.
The other use is directly in the html templates, to provide content related forms for pages and sections.

## text field type

```json
{
	type: "text",
	name: "title",
	title: "Title of the page"
}
```
```condation
{% if PREVIEW_MODE %}
<div style="display: none;" {{ ui.editMeta("text", "title" , node.uri, node.uri) | raw }}></div>
{% endif %}
```

## multiline text field type

```json
{
	type: "textarea",
	name: "description",
	title: "Description of the page"
}
```
```html
{% if PREVIEW_MODE %}
<div style="display: none;" {{ ui.editMeta("textarea", "description" , node.uri, node.uri) | raw }}></div>
{% endif %}
```

## number field type

## mail field type

## select field type

## radio field type

## range field type

## markdown field type

## color field type

## date field type

## datetime field type

## media field type

## checkbox field type

## divider field type

## list field type

---
template: documentation/documentation.html
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
menu:
    position: 5
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
<div style="display: none;" {{ ext.ui.editMeta("text", "title" , node.uri, node.uri) | raw }}></div>
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
```condation
{% if PREVIEW_MODE %}
<div style="display: none;" {{ ext.ui.editMeta("textarea", "description" , node.uri, node.uri) | raw }}></div>
{% endif %}
```

## number field type

```json
{
	type: "number",
	name: "number_field",
	title: "A number field"
}
```

```condation
{% if PREVIEW_MODE %}
<div style="display: none;" {{ ext.ui.editMeta("number", "description" , node.uri, node.uri) | raw }}></div>
{% endif %}
```

## mail field type

```json
{
	type: "mail",
	name: "email",
	title: "A Mail"
}
```

```condation
{% if PREVIEW_MODE %}
<div style="display: none;" {{ ext.ui.editMeta("mail", "email" , node.uri, node.uri) | raw }}></div>
{% endif %}
```

## select field type
```json
{
	name: "icon",
	title: "Icon",
	type: "select",
	options: {
		choices: [
			{ label: "Bullseye", value: "bi-bullseye" },
			{ label: "Command", value: "bi-command" },
			{ label: "Bar Chart", value: "bi-bar-chart" }
		]
	}
} 
```

## radio field type

```json
{
	type: "radio",
	name: "choose_color",
	title: "Choose the color",
	options: {
		choices: [
			{ label: "Red", value: "red" },
			{ label: "Green", value: "green" },
			{ label: "Blue", value: "blue" }
		]
	}
}
```

## range field type

```json
{
	type: "range",
	name: "range_test",
	title: "RangField",
	options: {
		min: 1,
		max: 100,
		step: 1
	}
}
```

## markdown field type

```json
{
	type: "markdown",
	name: "some_content",
	title: "A markdown field"
}
```

## color field type

```json
{
	type: "color",
	name: "background_color",
	title: "Background Color"
}
```

## date field type

```json
{
	type: "date",
	name: "date_field",
	title: "A date field"
}
```

## datetime field type

```json
{
	type: "datetime",
	name: "datetime_field",
	title: "Date & time field"
}
```

## media field type

```json
{
	type: "media",
	name: "media_url",
	title: "Media"
}
```

## checkbox field type

```json
{
	name: "features",
	title: "Select feature",
	type: "checkbox",
	options: {
		choices: [
			{ label: "Search", value: "search" },
			{ label: "Filter", value: "filter" },
			{ label: "Export", value: "export" }
		]
	}
}
```

## divider field type

```json
{
	type: "divider",
	name: "divider",
	title: "Custom attributes",
}
```

## list field type

```json
{
	name: "object.values",
	title: "Objekt-Liste",
	type: "list"
}
```

## reference field

```json
{
	type: "reference",
	name: "linked_page",
	title: "A page to link to"
}
```
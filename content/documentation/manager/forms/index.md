---
template: documentation/content.html
createdAt: 2025-10-08T12:03:44.905Z
createdBy: thorsten
published: false
title: Forms
seo:
  keywords: ''
  author: ''
  description: ''
unpublish_date: null
publish_date: null
---

# Manager forms

In CondationCMS there are different types of forms

## Page settings

```js
$hooks.registerFilter("manager/contentTypes/register", (context) => {
    var contentTypes = context.value();
    contentTypes.registerPageTemplate({
        name: "Default",
        template: "default.html"
    });

    return contentTypes;
})
```

## Section forms


```js
$hooks.registerFilter("manager/contentTypes/register", (context) => {
    var contentTypes = context.value();
    contentTypes.registerSectionTemplate({
        section: "asection",
        name: "SectionTemplate",
        template: "section.html"
    });

    return contentTypes;
})
```


## List item forms


```js
$hooks.registerFilter("manager/contentTypes/register", (context) => {
    var contentTypes = context.value();
    /*
    global definition if ListItemTypes
    */
    contentTypes.registerListItemType({
        name: "object.values",
        form: [
            {
                name: "name",
                title: "Name",
                type: "text"
            },
            {
                name: "description",
                title: "Description",
                type: "text"
            }
        ]
    });

    return contentTypes;
})
```


## Forms in template

## Media forms


```javascript
$hooks.registerFilter("manager/media/forms", (context) => {
	var mediaForms = context.value();
	mediaForms.registerForm("meta", {
		fields: [
			{
				type: "text",
				name: "alt",
				title: "Alt-Text"
			}
		]
	});
	return mediaForms;
})  
```

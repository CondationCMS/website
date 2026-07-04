---
template: documentation/documentation.html
createdAt: 2025-10-08T12:03:44.905Z
createdBy: thorsten
published: true
title: Forms
seo:
  keywords: ''
  author: ''
  description: ''
unpublish_date: null
publish_date: null
menu:
  position: 4
---

# Manager forms

In CondationCMS there are different types of forms

## Page settings

```js
$hooks.registerFilter("manager/contentTypes/register", (contentTypes) => {
    contentTypes.registerPageTemplate({
        name: "Default",
        template: "default.html"
        forms: {
			settings: [
				...
			]
		}    
    });

    return contentTypes;
})
```

## Section forms


```js
$hooks.registerFilter("manager/contentTypes/register", (contentTypes) => {
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
$hooks.registerFilter("manager/contentTypes/register", (contentTypes) => {
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

tpd

## Media forms


```javascript
$hooks.registerFilter("manager/media/forms", (contentTypes) => {
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

---
title: Components Module
template: content.html
seo:
    description: "The components modules provides reusable components for the CondationCMS."
---

# Components Module

The components-module is a small module that introduces reusable components, which can be integrated into markdown content or template code.

[Download](https://github.com/thmarx/components-module/releases)

## Documentation

### Templates

Components consist of a template and the associated data that ist passed at runtime.
The templates must be stored **templates/components** folder of the site or the theme.
The relative path corresponds to the name of the component and is used for referencing. 
The file extension is not part of the name and is added dynamically at runtime.

Some examples:

| Component    | resolved template |
| -------- | ------- |
| test  | templates/components/test.html    |
| sub/test | templates/components/sub/test.html     |


### Usage

#### In shortcode

The ShortCode *components* can be used to render a component.

```shortcode
\[\[components component="test-component" param1="some data" param2="some other data" /\]\]
```

#### In template

The helper *components* can be used to render and insert components.

```html
<div class="container">
    {{components.render('test-component', {'param1' : 'some data', 'param2': 'some other data'})}}
</div>
```


### Create custom components

There are two ways of creating components. 
The first by creating templates. 
The other is via shortcode.


```js
import { $hooks } from 'system/hooks.mjs';

$hooks.registerAction("components/test-hook", (context) => {
	return `Hello ${context.arguments().get("name")}, this is a custom component!`
})
```
---
title: Extensions
template: documentation/documentation.html
menu:
  position: 1
---

CondationCMS offers different ways add new features to the cms. One of them are extensions.
The idea behind extension is to offer the possiblity for project or theme developer to add new functionality without the need to create, compile and build a Java project.
Extension are created via Javascript, supported by the awesome graal-js project.

### Create a content tag

```javascript
import { $hooks } from 'system/hooks.mjs';
$hooks.registerAction("system/content/tags", (context) => {
	context.arguments().get("tags").put(
			"theme_name",
			(params) => `Hello, I'm your <b>demo</b> theme.`
	)
	return null;
})
```

After the tag is registered, it's usable inside the markdown content files. 
To avoid conflicts, the tag is registered under the *ext:* namespace.

```tag
\[\[ ext:theme_name /\]\]
```

### Create a custom template function

```javascript
import { $hooks } from 'system/hooks.mjs';
$hooks.registerAction("system/template/function", (context) => {
	context.arguments().get("functions").put(
			"fn_message",
			(params) => `<div style="color: ${params.color}">${params.message}</div>`
	)
	return null;
})
```
Template functions are registered under the *ext:* namespace.

```condation
{{ ext.fn_message({'message': "Hello", 'color': "red"}) | raw }}
```

### Create a template component

```javascript
import { $hooks } from 'system/hooks.mjs';
$hooks.registerAction("system/template/component", (context) => {
	context.arguments().get("components").put(
			"component",
			(params) => `<div style="color: ${params.color}">${params.message}</div>`
	)
	return null;
})
```
Template components are registered under the *ext:* namespace also.

```condation
{[ ext:component color="red" message="its a component" ]}
{[ /ext:component ]}
```

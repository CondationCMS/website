---
title: Extensions
template: documentation/content.html
menu:
  position: 30
---

# Extensions

Extensions are a simple way to extend the condation-server to your needs.
Extensions are written in JavaScript and stored inside the *extension/* folder of your site.
Due to the single threaded nature of the used [JavaScript Engine](https://www.graalvm.org/) they are loaded and executed on every request.


## Example registering a content tags

```javascript
import { $hooks } from 'system/hooks.mjs';


$hooks.registerAction("system/content/tags", (context) => {
	context.arguments().get("tags").put(
			"hello",
			(params) => `Hello ${params.get("name")}`
	)
	return null;
})
```

### Usage in markdown content
```tag
\[\[hello name="CondationCMS" /\]\]
```


## Registering a template component
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

### Usage in template code
```twig
{[ component color="#6FA8DC" message="Attention" ]}
```

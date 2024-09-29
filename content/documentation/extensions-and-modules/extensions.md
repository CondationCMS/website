---
title: Extensions
template: documentation/content.html
menu:
    position: 30
---

# Extensions



## Register Shortcode

```javascript
import { $hooks } from 'system/hooks.mjs';


$hooks.registerAction("system/content/shortcodes", (context) => {
	context.arguments().get("shortCodes").put(
			"hello",
			(params) => `Hello ${params.get("name")}`
	)
	return null;
})
```

```html
\[\[hello name="CondationCMS"\]\]
```


## Site globals
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


## Example registering a Shortcode

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

```shortcode
\[\[hello name="CondationCMS"\]\]
```


## Site globals
---
title: Hooks
template: documentation/content.html
menu:
    position: 30
---

# Hooks

We use a hook system to allow extensions and modules to hook into various parts of condation.


## system/content/shortcodes

```js
import { $hooks } from 'system/hooks.mjs';

$hooks.registerAction("system/content/shortcodes", (context) => {
	context.arguments().get("shortCodes").put(
			"hello",
			(params) => `Hello ${params.get("name")}, I'm a TAG!`
	)
	return null;
})
```

Usage in markdown content:
```markdown
\[\[hello name="CondationCMS" /\]\]
```

Example use in the pebble template engine:
```twig
{{ shortCode.call('hello', {'name': 'CondationCMS'}) }}
```

## system/content/filter

## system/db/query/operations

## system/scheduler/register

## system/scheduler/remove

## system/server/http/extension

HttpExtension are available under path *extension*, e.g. **/extension/test2**

```js
import { UTF_8 } from 'system/charsets.mjs';
import { $hooks } from 'system/hooks.mjs';

$hooks.registerAction("system/server/http/extension", (context) => {
	context.arguments().get("httpExtensions").add(
			"GET",
			"/test2",
			(request, response) => {
				response.addHeader("Content-Type", "text/html; charset=utf-8")
				response.write("http extension via hook!", UTF_8)
			}
	)
	return null;
})
```

## system/server/http/route

Routes are available direct under root **/hello-route**.

```js
import { UTF_8 } from 'system/charsets.mjs';
import { $hooks } from 'system/hooks.mjs';

$hooks.registerAction("system/server/http/route", (context) => {
	context.arguments().get("httpRoutes").add(
			"GET",
			"/hello-route",
			(request, response) => {
				response.addHeader("Content-Type", "text/html; charset=utf-8")
				response.write("route via hook!", UTF_8)
			}
	)
	return null;
})
```

## system/template/supplier

## system/template/function
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

```js
$hooks.registerFilter("system/content/filter", (context) => "return the new content or append other content")
```

## system/db/query/operations

Adds an custom operator that can be used in queries.

```js
$hooks.registerAction("system/db/query/operations", (context) => {
	context.arguments().get("operations").add(
			"none",
			(nodeValue, value) => {
				return false
			}
	)
	return null;
})
```
```js
query.create().where('featured', 'none', 'any' ).page(1, 1).items
/*
nodeValue = value of the meta field 'featured' 
value = 'any'
*/
```

## system/scheduler/register

Register a new cronjob. It's online possible in the site.globals.js and not called in scripts in the extensions/-Folder.

```js
$hooks.registerAction("system/scheduler/register", (context) => {
	context.arguments().get("scheduler").schedule(
			"0/10 * * * * ?", 
			"test-cron-job-1", 
			(context) => {
				console.log("job 1")
			})
})
```

## system/scheduler/remove

Remove registers CronJob, is online possible in 

```js
$hooks.registerAction("system/scheduler/remove", (arguments) => {
	context.arguments().get("scheduler").remove("test-cron-job-1")
})
```

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

```js
$hooks.registerAction("system/template/supplier", (context) => {
	context.arguments().get("suppliers").add(
			"myName",
			() => "My name is CondationCMS"
	)
	return null;
})
```

## system/template/function

```js
$hooks.registerAction("system/template/function", (context) => {
	context.arguments().get("functions").add(
			"getHello",
		(name) => "Hello " + name + "!!"
	)
	return null;
})
```

```twig
```
---
template: sections/content-example.html
layout:
  order: 1000
title: Register a custom template function
description: Template functions add reusable logic and custom functionality directly to your templates.
published: true
---

[[ext:code-tabs-container tabs="javascript:JavaScript,java:Java,template:Template" ]]
[[ext:code-tabs-item id="javascript" class="active" render-markdown=true]]
```javascript
import { $hooks } from 'system/hooks.mjs';
// register function via js extensions
$hooks.registerAction("system/template/function", ({functions}) => {
	functions.put(
			"hello",
			({name}) => `Hello ${name}`
	)
	return null;
})
```
[[/ext:code-tabs-item]]

[[ext:code-tabs-item id="java" render-markdown=true]]
```java
// register function via java module
@TemplateFunction("hello")
public void hello_function (String name) {
	return "Hello " + name;
}
```
[[/ext:code-tabs-item]]

[[ext:code-tabs-item id="template" render-markdown=true]]

```condation
\{\{ hello({"name" : "CondationCMS"}) \}\}
```

[[/ext:code-tabs-item]]
[[/ext:code-tabs-container]]

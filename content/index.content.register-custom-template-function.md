---
template: sections/content-text.html
layout:
  order: 1000
title: Register custom template function
published: true
---

[[ext:code-tabs-container tabs="javascript:JavaScript,java:Java,html:HTML" ]]
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

[[ext:code-tabs-item id="html" render-markdown=true]]

```condation
\{\{ hello({"name" : "CondationCMS"}) \}\}
```

[[/ext:code-tabs-item]]
[[/ext:code-tabs-container]]

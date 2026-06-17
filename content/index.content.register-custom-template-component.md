---
template: sections/content-example.html
layout:
  order: 4
title: Register a custom template component
description: Template components let you create reusable building blocks that keep
  templates clean, consistent, and easy to maintain.
published: true
reverse: true
---

[[ext:code-tabs-container tabs="javascript:JavaScript,java:Java,template:Template" ]]
[[ext:code-tabs-item id="javascript" class="active" render-markdown=true]]
```javascript
import { $hooks } from 'system/hooks.mjs';
// register component via js extensions
$hooks.registerAction("system/template/component", ({components}) => {
	components.put(
			"hello",
			({name}) => `<div><h3>Hello</h3> <p>${name}</p></div>`
	)
	return null;
})
```
[[/ext:code-tabs-item]]

[[ext:code-tabs-item id="java" render-markdown=true]]
```java
// register component via java module
@TemplateComponent("hello")
public void hello_compnent (String name) {
	return "<div><h3>Hello</h3> <p>%s</p></div>".format(name);
}
```
[[/ext:code-tabs-item]]

[[ext:code-tabs-item id="template" render-markdown=true]]

```condation
\{\[hello name="CondationCMS" \]\}
\{\[ /hello \]\}
```

[[/ext:code-tabs-item]]
[[/ext:code-tabs-container]]

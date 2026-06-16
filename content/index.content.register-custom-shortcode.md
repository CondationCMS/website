---
template: sections/content-example.html
layout:
  order: 3
title: Register a custom ShortCode
description: Shortcodes let you extend Markdown with reusable, dynamic content elements
  while keeping content simple and readable.
unpublish_date: null
publish_date: null
published: true
---

[[ext:code-tabs-container tabs="javascript:JavaScript,java:Java,markdown:Markdown" ]]
[[ext:code-tabs-item id="javascript" class="active" render-markdown=true]]
```javascript
import { $hooks } from 'system/hooks.mjs';
// register component via js extensions
$hooks.registerAction("system/content/shortCodes", ({shortCodes}) => {
	shortCodes.put(
			"hello",
			({name}) => `Hello ${name}`
	)
	return null;
})
```
[[/ext:code-tabs-item]]

[[ext:code-tabs-item id="java" render-markdown=true]]
```java
// register component via java module
@ShortCode("hello")
public void hello_shortcode (String name) {
	return "Hello " + name;
}
```
[[/ext:code-tabs-item]]

[[ext:code-tabs-item id="markdown" render-markdown=true]]

```tag
\[\[hello name="CondationCMS" /\]\]
```

[[/ext:code-tabs-item]]
[[/ext:code-tabs-container]]

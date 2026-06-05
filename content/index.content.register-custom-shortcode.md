---
template: sections/content-text.html
layout:
  order: 1000
title: Register a custom ShortCode
unpublish_date: null
publish_date: null
published: true
---

[[ext:code-tabs-container tabs="javascript:JavaScript,markdown:Markdown" ]]
[[ext:code-tabs-item id="javascript" class="active" render-markdown=true]]

```javascript
import { $hooks } from 'system/hooks.mjs';

$hooks.registerAction("system/content/shortCodes", ({shortCodes}) => {
	shortCodes.put(
			"hello",
			({name}) => `Hello ${name}`
	)
	return null;
})
```

[[/ext:code-tabs-item]]

[[ext:code-tabs-item id="markdown" render-markdown=true]]

```tag
\[\[hello name="CondationCMS" /\]\]
```

[[/ext:code-tabs-item]]
[[/ext:code-tabs-container]]

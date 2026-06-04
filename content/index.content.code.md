---
template: sections/content-text.html
layout:
  order: 1000
title: code
---

[[ext:code-tabs-container]]
[[ext:code-tabs-item id="javascript" class="active" render-markdown=true]]

```javascript
import { $hooks } from 'system/hooks.mjs';

$hooks.registerAction("system/content/shortCodes", (shortCodes) => {
	shortCodes.put(
			"hello",
			(params) => `Hello ${params.get("name")}`
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

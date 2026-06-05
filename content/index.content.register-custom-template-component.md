---
template: sections/content-text.html
layout:
  order: 1000
title: Register custom template component
published: true
---

[[ext:code-tabs-container tabs="javascript:JavaScript,html:HTML" ]]
[[ext:code-tabs-item id="javascript" class="active" render-markdown=true]]

```javascript
import { $hooks } from 'system/hooks.mjs';

$hooks.registerAction("system/template/component", ({components}) => {
	components.put(
			"hello",
			({name}) => `Hello ${name}`
	)
	return null;
})
```

[[/ext:code-tabs-item]]

[[ext:code-tabs-item id="html" render-markdown=true]]

```tag
\{\[hello name="CondationCMS" /\]\{}
```

[[/ext:code-tabs-item]]
[[/ext:code-tabs-container]]

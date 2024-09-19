---
title: "[RELEASE] CMS Release 4.18.1 ist verfügbar"
seo:
    description: "Das Java basierte Flat-File CMS ist nun in Version 4.18.1 veröffentlicht!"
publish_date: 2024-06-04
template: blog-entry.html
---

Ich freue mich heute die Veröffentlichung der Version 4.18.1 des Java basierten Falt-File CMS ankündigen zu können.

Download: [cms v4.18.1](https://github.com/thmarx/cms/releases/tag/v4.18.1)

## Release Notes

* **FEATURE** Make RequestContext available in scripting [#201](https://github.com/thmarx/cms/issues/201)
* **MAINTENANCE** pug4j template engine not longer actively supported [#198](https://github.com/thmarx/cms/issues/198)
* **MAINTENANCE** dependencies updated [#202](https://github.com/thmarx/cms/issues/202)
* **FEATURE** Hooks to change navigations [#200](https://github.com/thmarx/cms/issues/200)
* **FEATURE** relative links in markdown [#197](https://github.com/thmarx/cms/issues/197)
* **MAINTENANCE** deprecate third party markdown implementations [#203](https://github.com/thmarx/cms/issues/203)

## Highlights

### RequestContext in Skripten verwendbar

Über die Verwendung des AuthFeature kann zum Beispiel geprüft werden, ob ein User angemeldet ist

```js
import { AuthFeature, $features } from 'system/features.mjs';

if ($features.has(AuthFeature)) {
    console.log($features.get(AuthFeature).username())
}
```

### Per Hooks eigenen Menüpunkte erstellen

Neben dem erstellen einen Route, kann diese nun auch in Navigationen integriert werden.

```js
import { $hooks } from 'system/hooks.mjs';
import { NavNode } from 'system/navigation.mjs';

$hooks.registerFilter("navigation/top/list", (context) => {
	var nodes = context.values()
	nodes.add(2, new NavNode("Hello-Extension", "/hello-extension"))
	return nodes
})
```

Dieses einklinken in Navigationen funktioniert allerdings nur, wenn dies Navigationen über die Navigations-Funktion erstellt wurden und mit einem Namen versehen wurden.

```html
<ul th:with="nodes=${navigation.named('top').list('/')}">
    
</ul>
```


Bis dahin!
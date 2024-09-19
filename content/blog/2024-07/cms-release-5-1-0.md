---
title: "[CMS] Release 5.1.0 erschienen"
seo:
    description: "Gerade ist Version 5.1.0 erschienen, welches eine cli zum managen von extension, module und themes enthält."
publish_date: 2024-07-04
template: blog-entry.html
---

Version 5.1.0 wurde veröffentlicht und enthält einige Neuerungen, auf die hier etwas ausführlicher eingegangen werden soll.

[Download](https://github.com/thmarx/cms/releases/download/v5.1.0/cms-server-5.1.0.zip)


## Release Notes

* **FEATURE** Persistenter Index für MetaDaten [#217](https://github.com/thmarx/cms/issues/217)  
* **FEATURE** Syntax für ShortCodes korrigiert [#216](https://github.com/thmarx/cms/issues/216)  
* **FEATURE** Mehrzeilige ListItems in Markdown [#215](https://github.com/thmarx/cms/issues/215)
* **FEATURE** Zur Laufzeit hinzugefügte Taxonomien werden mit dem *host reload* Kommando nun auch neu geladen [#213](https://github.com/thmarx/cms/issues/213)
* **FEATURE** Neue Hooks eingeführt [#218](https://github.com/thmarx/cms/issues/218)


## Highlights

### Persistenter Index für MetaDaten

Pro host kann nun in der *site.yaml* ein persistenter Index konfiguriert werden. 
Der Index für die Queries im Template-Code wird dann in Lucene persistiert und bietet in der Regel einen fast genauso schnellen Zugriff wie der Standard Memory-Index.
Bietet aber darüber hinaus den Vorteil, dass es auch im MultiSite betrieben mit vielen Inhalten nicht zu speicher Problemen kommt.

```yaml
query:
    index:
        mode: PERSISTENT
```

### Angepasster ShortCode Syntax

Der Syntax für ShortCodes wurde optimiert. Während in den letzten Versionen die Parameter noch als kommaseparierte Liste angegeben werden mussten, genügt nun ein einfach Leerzeichen.

```html
[code param1="" param2=""/]
```
bzw.
```html
[code param1="" param2=""][/code]
```

### Neue Hooks hinzugefügt

Um die Erweiterungen zu vereinheitlichen, wurden alle Erweiterungspunkte für Extensions nun auf Hooks umgestellt.
Die Verwendung von Hooks hilft uns, einfacher und schneller neue Erweiterungspunkte zu definieren, die sowohl aus Extensions als auch Modulen auf die gleiche Weise verwendet werden können.
Die alten Methoden bleiben bis zum nächsten Major-Release erhalten.
Neue Erweiterungsmöglichkeiten werden allerdings nur noch in Form von Hooks implementiert.

**Anlegen eines ShortCodes**

```js
// alt
$shortcodes.register(
	"hello",
	(params) => `Hello ${params.get("name")}, I'm a TAG!`
)
// neu
$hooks.registerAction("content/shortcodes/filter", (context) => {
	context.arguments().get("shortCodes").put(
			"hello",
			(params) => `Hello ${params.get("name")}, I'm a TAG!`
	)
	return null;
})
```

**Anlegen eines HTTP Endpunktes bzw. einer Route**

```js
// alt
$http.get("/test", (request, response) => {
	response.addHeader("Content-Type", "text/html; charset=utf-8")
	response.write("ich bin einen test extension!öäü", UTF_8)
})
// neu
$hooks.registerAction("server/http/extension/add", (context) => {
	context.arguments().get("httpExtensions").add(
			"GET",
			"/test",
			(request, response) => {
				response.addHeader("Content-Type", "text/html; charset=utf-8")
				response.write("ich bin einen test extension, registered via hook!", UTF_8)
			}
	)
	return null;
})
// alt
$routes.get("/hello-extension", (request, response) => {
	response.addHeader("Content-Type", "text/html; charset=utf-8")
	response.write("extension route", UTF_8)
})
// neu
$hooks.registerAction("server/http/route/add", (context) => {
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

**Custom Operator für Queries definieren**

```js
// alt
$query.registerOperation(
	"none",
	(fieldValue, value) => {
		console.log("none operator")
		return false
	}
)
// neu
$hooks.registerAction("db/query/operations/add", (context) => {
	context.arguments().get("operations").add(
			"none",
			(fieldValue, value) => {
				console.log("none operator")
				return false
			}
	)
	return null;
})
```

**Template Suppliere bzw. Function definieren**

```js
// alter Syntac
$template.registerTemplateSupplier(
	"myName",
	() => "Thorsten"
)
// neuer Syntax
$hooks.registerAction("template/supplier/add", (context) => {
	context.arguments().get("suppliers").add(
			"myName",
			() => "My name is Thorsten"
	)
	return null;
})

// alt
$template.registerTemplateFunction(
	"getHello",
	(name) => "Hello " + name + "!"
)
// neu
$hooks.registerAction("template/function/add", (context) => {
	context.arguments().get("functions").add(
			"getHello",
		(name) => "Hello " + name + "!!"
	)
	return null;
})
```

Viel Spaß beim ausprobieren!

Bis dahin!
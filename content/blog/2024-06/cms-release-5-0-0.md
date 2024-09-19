---
title: "[CMS] Release 5.0.0 erschienen"
seo:
    description: "Gerade ist Version 5.0.0 erschienen, welches eine cli zum managen von extension, module und themes enthält."
publish_date: 2024-06-13
template: blog-entry.html
---

Version 5.0.0 wurde veröffentlicht und enthält einige Breaking-Changes, wodurch der Versionssprung nach 5.x.x erforderlich wurde.


## Release Notes

* **BREAKING CHANGE** Introduce module registry [#205](https://github.com/thmarx/cms/issues/205)
* **BREAKING CHANGE** Reload host cli command [#209](https://github.com/thmarx/cms/issues/209)
* **FEATURE** Extension management [#9](https://github.com/thmarx/cms/issues/9)
* **FEATURE** Theme management [#208](https://github.com/thmarx/cms/issues/208)
* **FEATURE** Module management [#206](https://github.com/thmarx/cms/issues/206)

Die Basis-Distribution enthält nur noch ein einziges Module, die Thymeleaf-TemplateEngine, da diese für das Demo-Projekt verwendet wird. 
Alle anderen Module können nach Bedarf über die neue CLI nachinstalliert werden.
Hintergedanke ist hier, die Distribution so schmal wie möglich zu halten.

Zur Durchführung des Reloads musste das Interface für die TemplateEngine-Implementierungen angepasst werden.

## Registries für die Erweiterungen

Es gibt nun drei Registries über die verschiedene Erweiterungen bereitgestellt werden. Auf beide Arten kann bequem über die CLI zugegriffen werden.
Aktuell wird noch keine Suche unterstützt, was bedeutet, ihr müsst den Namen genau kennen. Das sollte bei der aktuell noch geringen Zahl allerdings kein Problem sein.

[module-registry](https://github.com/thmarx/module-registry)

[extension-registry](https://github.com/thmarx/extension-registry)

[theme-registry](https://github.com/thmarx/theme-registry)


Informationen über ein Module holen

```shell
java -java cms-server.jar module info pebble-module

module: pebble-module
name: Pebble module
description: A module to integrate the pebble template engine
author: Thorsten Marx
url: https://github.com/thmarx/pebble-module
file: https://github.com/thmarx/pebble-module/releases/download/v1.2.0/pebble-module-bin.zip
compatibility: >=5.0.0
your server version: 5.0.0
compatibility with server version: true
local installed: false
```

Hier werden einige Informationen zu dem Module ausgegeben und ob die Version Kompatible zur betriebenen Server-Version ist.


Ein Module in den Server laden.

```shell
java -java cms-server.jar module get pebble-module
```

Ein Module kann nur in den Server geladen werden, während dieser nicht läuft.

Ähnlich sehen die Kommandos für Themes aus:

```shell
java -java cms-server.jar theme info demo

java -java cms-server.jar theme get demo
```

Einen Unterschied gibt es nur bei den Extensions, diese können bzw. müssen direkt in einen host installiert werden:

```shell
java -java cms-server.jar extension info test-extension

java -java cms-server.jar extension install test-extension <host>
```


Bis dahin!
---
title: Site configuration
template: documentation/content.html
menu:
    position: 1
---

# Site configuration
```toml
id = "feature-site"                       # (1)
hostname = \[ "localhost2" \]             # (2)
baseurl = "http://localhost2:1010"        # (3)
theme = "test"                            # (4)
context_path = "/"                        # (5)

\[cache\]
content = true                            # (6.1)
engine = "local"                          # (6.2)

\[index.query\]                       
mode = "MEMORY"                           # (7)

\[modules\]
active = \[ "thymeleaf-module" \]         # (8)

\[content\]
type = "text/html"                        # (9.1)
pipeline = \[ "markdown", "shortcode" \]  # (9.1)

\[template\]
engine = "thymeleaf"                      # (10)
```

(1) every site needs a unique id. The id is used for logging and IPC (inter process communication).

(2) a list of hosts the site listens to.

(3) the base url of the site. mostly used in themes to generate the canonical link.

(4) the used the of the site. Usage of a theme is optional.

(5) the context path. The parameter is optional and the default is **/**. Can be used to add a site with different language under same host with different context path, e.q. *https://yousite.org/de* for the german version of your site.

(6.1) enables th caching of content, so every generated content is cached for a five seconds. The default engine (6.2) is *local*, this is the only implementation right now.

(7) with large sites, the memory consumption for the metadata can become a problem. In these cases it is advisable to set the configuration to **PERSISTENT**.

(8) the list of active modules, at least the uses template engine is required.

(9.1) the default content type for content rendering. Default is **text/html**.

(9.2) the content pipeline for content rendering. Possible values **markdown**, **shortcode** and **template**. If you add **template** to the content pipeline, template code will be rendered in the content rendering process using the configured template engine. If **template** is used, it must be the first step of the pipeline.

(10) the template engine used for the site. Available [template engines](/modules/template-engines). If the used themes has a template engine configured, it is not possible to override the engine with another one.
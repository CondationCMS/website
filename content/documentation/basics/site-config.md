---
title: Site Configuration
template: documentation/content.html
menu:
    position: 1
---

# Site Configuration

Site configuration defines the fundamental settings for your website, including identity, hosting, theming, caching, content processing, and template engine settings.

```toml
id = "feature-site"                       # (1)
hostname = ["localhost2"]                 # (2)
baseurl = "http://localhost2:1010"        # (3)
theme = "test"                            # (4)
context_path = "/"                        # (5)

[cache]
content = true                            # (6.1)
engine = "local"                          # (6.2)

[index.query]
mode = "MEMORY"                           # (7)

[modules]
active = ["seo-module"]             # (8)

[content]
type = "text/html"                        # (9.1)
pipeline = ["markdown", "shortcode"]      # (9.2)

[template]
engine = "system"                      # (10)
```

## Site Identity

**(1) Site ID**

Every site requires a unique identifier. This ID is used for logging purposes and inter-process communication (IPC), allowing the system to distinguish between multiple sites running on the same server instance. Choose a descriptive ID that clearly identifies your site's purpose or name.

## Hosting Configuration

**(2) Hostname**

A list of hostnames that the site responds to. Multiple hostnames can be specified as an array, allowing a single site configuration to serve requests from different domain names. This is useful when you want to serve the same site content from multiple domains or subdomains.

**(3) Base URL**

The complete base URL of the site, including the protocol and port. This URL is primarily used by themes to generate canonical links and absolute references. The canonical link helps search engines understand which URL is the preferred version of a page when multiple URLs might access the same content.

## Theme Configuration

**(4) Theme**

The name of the theme to be used for rendering the site's frontend. The theme parameter is optional—if not specified, the site will render without a predefined theme. Themes provide consistent styling and layout across your site. Available themes can be managed through the theme system.

## Context Path Configuration

**(5) Context Path**

The context path defines the URL prefix under which the site is accessible. The default value is `/`, meaning the site is accessible at the root of the domain. This parameter is optional and useful for hosting multiple versions of a site under the same hostname with different paths. For example, you could host a German version at `https://yoursite.org/de` and an English version at `https://yoursite.org/en` by setting the appropriate context paths in separate site configurations.

## Caching Configuration

Content caching improves performance by storing generated content to avoid redundant processing.

**(6.1) Content Caching**

When enabled (true), the caching system stores all generated content for a duration of five seconds. This cache duration means that content changes will be visible within five seconds of publishing. Enabling caching significantly improves site performance by reducing the need to regenerate content for every request.

**(6.2) Cache Engine**

The caching implementation to use. Currently, `local` is the only available implementation, which stores cached content in the local server's memory. As additional cache engines are developed, they can be configured here.

## Index and Query Configuration

**(7) Index Query Mode**

Determines how metadata indexing is handled for the query system. Two modes are available:

- **MEMORY** - Stores all metadata in memory, providing faster query performance but consuming more RAM. Suitable for smaller to medium-sized sites.
- **PERSISTENT** - Stores metadata persistently on disk, reducing memory consumption. Recommended for large sites where memory consumption from metadata indexing could become problematic.

## Module Configuration

**(8) Active Modules**

A list of server modules that are required or desired for this site's functionality. Each module provides specific capabilities. At minimum, you must include the module corresponding to your configured template engine (e.g., `thymeleaf-module` for Thymeleaf). Additional modules can be added to extend site functionality with features like advanced content processing, caching strategies, or custom handlers.

## Content Configuration

Content configuration defines how your content is processed and what format it is served in.

**(9.1) Default Content Type**

The MIME type used as the default content type when rendering content. The default value is `text/html`, which is appropriate for web-based HTML content. You can specify alternative content types if your site serves different content formats.

**(9.2) Content Pipeline**

The ordered sequence of processing steps applied to content during the rendering process. Available pipeline processors include:

- **markdown** - Converts Markdown syntax to HTML
- **tags** - Processes custom tags (e.g., `[gallery]`, `[button]`)
- **template** - Renders template engine code within content using the configured template engine

If you include `template` in the pipeline, it must be the first step in the sequence. This ensures that template code is processed before other pipeline steps. For example, a pipeline of `["template", "markdown", "shortcode"]` would first process template code, then convert any resulting Markdown syntax to HTML, and finally process shortcodes.

## Template Engine Configuration

**(10) Template Engine**

The template engine used to render dynamic content and templates on the site. The configured engine processes template syntax and generates the final HTML output. Available template engines are documented in the [template engines module documentation](/modules/template-engines). The default template engine is *system*.

**Important Note:** If the selected theme has a pre-configured template engine, that engine cannot be overridden with a different one. The theme's template engine takes precedence and must be used.
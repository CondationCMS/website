---
title: MetaData
template: documentation/documentation.html
menu:
  position: 2
unpublish_date: null
published: true
publish_date: null
---

# MetaData

Metadata describes the properties and behavior of content pages in ConditionCMS. While the system provides several reserved metadata attributes (described below), you can also define custom attributes that will be available in your template code for flexible content management.

## Title

The page title serves as the primary heading and is used throughout the system for display and reference purposes.

```yaml
title: The title of your page.
```

The title is typically displayed in browser tabs, search results, and template headers.

## Render Template

The render template defines which template file should be used to render and display this specific page.

```yaml
template: blog-entry.html
```

This allows different pages to use different layouts and designs based on their content type or purpose. The template file is resolved relative to your theme's template directory.

## Excerpt

The page excerpt is a brief summary or description of the page content. This excerpt is automatically used whenever the Query or NodeList function is used in templates to display content listings, search results, or content previews.

```yaml
excerpt: Short excerpt of the content describing the main topic.
```

Excerpts are particularly useful for blog listings, content aggregations, and search result displays where the full content is not appropriate.

## Visibility and Publishing

ConditionCMS provides several attributes to control when and how pages are published.

### Published Status

In the standard system, a page is considered published immediately upon creation. However, you can explicitly control publication status using the `published` attribute:

```yaml
published: false
```

Setting this to `false` will prevent the page from being displayed, even if it exists in the system. This is useful for creating draft content or temporarily hiding pages.

### Publish From a Certain Date

You can schedule a page to become available starting from a specific date:

```yaml
publish_date: 2023-12-01
```

The page will not be visible or accessible before this date, allowing you to schedule content publication in advance.

### Unpublish After a Certain Date

You can also schedule a page to become unavailable after a specific date:

```yaml
unpublish_date: 2023-12-31
```

This is useful for time-sensitive content, announcements, or events that should only be visible during a specific period.

## Menu Configuration

When menus are generated using the **navigation** function in templates, the following attributes control whether a page appears in menus, its position, and its display title.

### Visibility in Menus

Control whether a page appears in generated navigation menus:

```yaml
menu:
    visible: true
```

Set this to `false` to exclude the page from navigation menus while keeping it accessible through direct URLs.

### Position in Menus

Control the order in which pages appear in navigation menus:

```yaml
menu:
    position: 50
```

Menu items are displayed in ascending order by position value. If no position attribute is assigned, the default value of 1000 is applied. If multiple items are assigned the same position, they are sorted alphanumerically by their title.

### Custom Title for Menus

If the page title is too long for menu display, you can specify a shorter title specifically for navigation menus:

```yaml
menu:
    title: Short Menu Title
```

This allows you to maintain a descriptive full title while displaying a concise menu label.

## Redirects

You can redirect pages to external URLs or other locations:

```yaml
redirect:
    status: 301
    location: https://google.de
```

The `status` parameter defines the HTTP status code used for the redirect. Use `301` for permanent redirects (which indicate to search engines that the content has permanently moved) or `302` for temporary redirects. The `location` parameter specifies the target URL. Redirects are useful when reorganizing your site structure or pointing to external resources.

## Content Type

By default, pages are rendered as HTML (`text/html`). You can specify alternative content types to create pages with different formats:

```yaml
content:
    type: "application/json"
```

This is useful for creating API endpoints, RSS feeds, or other non-HTML content from ConditionCMS. The specified content type is sent in the HTTP response headers, informing browsers and clients how to interpret the content.

## Views

Views allow you to embed dynamic content queries directly in page metadata. The query results are processed and made available in templates through the `${page.items}` variable.

```yaml
template: views/test.html
type: view
content:
  query:
    from: "/"
    excerpt: 250
    order_by: title
    order_direction: asc
    conditions: 
      - name: where
        operator: =
        key: template
        value: content.html
```

In this example:

- **from** - The root path to start the query from
- **excerpt** - The maximum length of the excerpt content in characters
- **order_by** - The metadata field to sort results by
- **order_direction** - Sort direction: `asc` for ascending or `desc` for descending
- **conditions** - Array of query conditions to filter results. Each condition specifies a field (key), operator (=, !=, <, >, etc.), and value to match

The results of the query are automatically available in the template for rendering lists, galleries, or other dynamic content.

## Aliases

Aliases allow a page to be accessible from multiple URLs, which is useful when restructuring your site or supporting legacy URLs:

```yaml
aliases: 
  - /another1
  - /another2
```

With this configuration, the page is accessible from `/another1` and `/another2` in addition to its original URL. By default, accessing the page through an alias will trigger a redirect to the original URL, preserving SEO value and user experience.

### Disabling Alias Redirects

If you want pages to be accessible through aliases without automatic redirects to the original URL:

```yaml
aliases_redirect: false
```

This is useful when you want multiple URLs to serve the same content without redirects, though this should be used carefully to avoid SEO issues like duplicate content.

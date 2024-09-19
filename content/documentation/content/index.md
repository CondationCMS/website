---
title: Editing content
template: documentation/content.html
menu:
    position: 10
---

Content is created in plan text, for formatting [Markdown](/documentation/content/markdown) can be used.

## ShortCodes

If the possibilities of Markdown are not sufficient, extensions can be created by creating your own [ShortCodes](/documentation/extensions-and-modules). These extensions should be able to cover most use cases.

## Preview

If the CMS is running in DEV mode (caution, this is not recommended for productive operation), you can activate preview mode by appending **?preview** to the URL.
This means that unpublished content is also displayed.

## Meta attributes

In addition to the reserved attributes presented below, any attributes can also be defined.
These are then available in the template code.

### Title

```yaml
title: The title.
```

### Render template

The template to be used to render this page.

```yaml
template: blog-entry.html
```

### Excerpt

The content excerpt is used wherever the Query or NodeList function is used in templates.

```yaml
excerpt: Short excerpt of the content.
```

### Visibility

In the standard system, a page is considered published as soon as it has been created.

```yaml
published: false
```

#### Publish from a certain date

```yaml
publish_date: 2023-12-01
```

#### No more publishing after a certain date

```yaml
unpublish_date: 2023-12-31
```

### Menu

If menus are created using the **navigation** function, these attributes can be used to control whether a page appears in the menu, where it appears and what title it has.

#### Visibility in menus

```yaml
menu:
    visible: true/false
```

#### Position in menus

The menu items are displayed in ascending order by position; if no position attribute has been assigned, the standard 1000 applies. 
If items are assigned more than once, they are sorted alphanumerically.

```yaml
menu:
    position: 50
```

#### Title used in menus

If the value in the title attribute is too long and therefore not suitable for the menu, it can simply be overwritten.

```yaml
menu:
    title: Short title
```


### Redirects

The redirect attribute can be used to redirect pages to external URLs.

```yaml
redirect:
    status: 301
    location: https://google.de
```

### Content-Type

Other text-based formats can also be created by setting the content type.
The default content type is **text/html** and does not have to be specified explicitly.

```yaml
content:
    type: "application/json"
```

### Views

Using views (type: view), queries can be specified directly in the metadata and processed in the template using **${page.items}**.

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

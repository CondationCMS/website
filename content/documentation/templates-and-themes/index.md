---
title: Templates & Themes
template: documentation/content.html
menu:
    position: 20
---

Next to our [default template engine](/documentation/templates-and-themes/default-template-engine), it is possible to implement a custom module to use the template of your choice.

## Template functions

Template functions are handy helpers.
Also core template functions are in the cms namespace.

### Links function

The **links** helper is responsible to create valid links.It prepends the context when necessary and appends the preview parameter when the page is viewed in preview mode or in the manager.

```condation
{{ cms.links.createUrl("/about") }}
```

### Navigation function

### NodeList function

The nodelist function is useful if you want to create a simpe blog.

```condation
{% assign pageNumber = requestContext.getQueryParameter('page', '1') %}
{% assign page = cms.nodeList.from("/usecases/blog/*").sort("publish_date").reverse(true).page(pageNumber).size(3).list() %}
{% for entry in page.items %}
    <article class="">
        <h2>{{ entry.name }}</h2>
        <p>{{ entry.content }}</p>
        <a href="{{ entry.path}}">Read more</a>
    </article>
{% endfor %}
```

### Query function

The query function 

```condation
{% assign moviews = cms.query.create("/filme-und-serien").where("template", "film-detail.html").orderby("created.year").desc().page(1, 6) %}
```

#### where clauses

| Clause         | Alternative | Description                                                                           | Example                                              |
| -------------- | ----------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `=`            | `eq`        | Matches values that are equal.                                                        | `where("status", "=", "published")`                  |
| `!=`           | `not eq`    | Matches values that are not equal.                                                    | `where("status", "!=", "draft")`                     |
| `>`            | `gt`        | Matches values greater than the given value.                                          | `where("date", ">", "2026-01-01")`                   |
| `>=`           | `gte`       | Matches values greater than or equal to the given value.                              | `where("priority", ">=", 3)`                         |
| `<`            | `lt`        | Matches values less than the given value.                                             | `where("priority", "<", 10)`                         |
| `<=`           | `lte`       | Matches values less than or equal to the given value.                                 | `where("priority", "<=", 5)`                         |
| `in`           | —           | Matches values contained in a list of values.                                         | `where("category", "in", ["news", "blog"])`          |
| `not in`       | —           | Matches values that are not contained in a list of values.                            | `where("category", "not in", ["internal", "draft"])` |
| `contains`     | —           | Matches values that contain the given value. Useful for arrays, tags, or text fields. | `where("tags", "contains", "java")`                  |
| `not contains` | —           | Matches values that do not contain the given value.                                   | `where("tags", "not contains", "archived")`          |

### Taxonomy function

tbd

## Themes

You can find out more about the possibilities offered by the use of themes [here](/documentation/templates-and-themes/theming)

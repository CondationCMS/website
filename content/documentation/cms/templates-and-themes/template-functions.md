---
title: Template functions
template: documentation/documentation.html
menu:
  position: 2
unpublish_date: null
published: true
publish_date: null
---

Next to our [default template engine](/documentation/cms/templates-and-themes/default-template-engine), it is possible to implement a custom module to use the template of your choice.

# Template functions

Template functions are handy helpers.
Also core template functions are in the cms namespace.

## Links function

The **links** helper 

```condation
{{ cms.links.createUrl("/about") }}
```

## Navigation function

tbd

## NodeList function

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

## Query Function

The `query` function retrieves content items and allows you to filter, sort, group, and paginate the result set.

A query can be built fluently by chaining functions such as `where`, `orderby`, `page`, or `groupby`. Call `get()` to return the matching items.

```condation
{% assign articles = cms.query()
    .where("published", true)
    .orderby("publish_date")
    .desc()
    .get() %}
```

### Filtering content

Use `where(attribute, value)` for a simple equality check:

```condation
{% assign featuredPages = cms.query()
    .where("featured", true)
    .get() %}
```

You can also provide an explicit operator:

```condation
{% assign pages = cms.query()
    .where("index", ">=", 2)
    .get() %}
```

Multiple `where` clauses can be combined to further narrow the result.

### Nested attributes

Attribute names support dot notation. This allows you to access values inside nested metadata objects.

For example, given this metadata:

```yaml
content:
  type: json
```

You can query the nested `type` value like this:

```condation
{% assign jsonPages = cms.query()
    .where("content.type", "json")
    .get() %}
```

Dot notation can also be used for sorting, grouping, and other operations that accept an attribute name.

### Collections and tags

For list-based metadata such as tags, use `contains` or `not contains`:

```condation
{% assign javaPages = cms.query()
    .where("tags", "contains", "java")
    .get() %}
```

Use `in` and `not in` to compare an attribute against multiple possible values:

```condation
{% assign pages = cms.query()
    .where("index", "in", [1, 2, 3])
    .get() %}
```

### Sorting

Use `orderby(attribute)` followed by `asc()` or `desc()`:

```condation
{% assign articles = cms.query()
    .where("featured", false)
    .orderby("publish_date")
    .desc()
    .get() %}
```

### Pagination

Use `page(pageNumber, pageSize)` to retrieve a paginated result:

```condation
{% assign articlePage = cms.query()
    .orderby("publish_date")
    .desc()
    .page(1, 10) %}
```

The returned page object provides the matching items through `getItems()`.

```condation
{% for article in articlePage.getItems() %}
  {{ article.meta.title }}
{% endfor %}
```

### Grouping

Use `groupby(attribute)` to group matching content items by an attribute value:

```condation
{% assign pagesByFeaturedState = cms.query()
    .groupby("featured") %}
```

The result is a map whose keys are the distinct values of the selected attribute.

### Special query helpers

The query API also provides convenience methods for common use cases:

```condation
cms.query().whereContains("tags", "java")
cms.query().whereNotContains("tags", "draft")
cms.query().whereIn("index", 1, 2, 3)
cms.query().whereNotIn("index", 1, 2, 3)
cms.query().whereExists("index")
cms.query().json()
```


### where clauses

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

You can find out more about the possibilities offered by the use of themes [here](/documentation/cms/templates-and-themes/theming)

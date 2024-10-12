---
title: Views
template: documentation/content.html
menu:
    position: 10
---

# Views

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

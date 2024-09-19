---
title: "Use case: Headless"
template: documentation/content.html
---

# Use case: Headless

In the modern web landscape, there are more and more SPAs and other complex web applications that only require content as JSON.
To support this scenario, it is possible to deliver JSON via the cms.

## Customize ContentType of the site

This adjustment means that the default content type in which content is delivered is now JSON.
Please note that in this case the templates must also generate the corresponding JSON.

```yaml
content:
    type: application/json
```

## Deliver individual content pages as JSON

To generate only individual content as JSON, the content type can also be set in the respective page in the YAML header. 
The content type of the site should not be adapted in this case.

```yaml
content:
    type: application/json
```
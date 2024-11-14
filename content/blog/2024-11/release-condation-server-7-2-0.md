---
title: "[Release] CondationCMS server version 7.2.0"
seo:
    description: "Today, we released CondationCMS version 7.2.0"
publish_date: 2024-11-07
template: blog-entry.html
---

Today we released version 7.2.0 of the CondationCMS server.

[Download](https://github.com/CondationCMS/cms-server/releases/tag/v7.2.0)

## Highlights

In addition to some bug fixes, this version also contains two useful features that simplify both template development and deployment.

### Easier access of meta data in template

In template code before this version you have to check every key on nested properties

```twig
{% if meta contains 'seo' AND meta.get("seo") contains 'description' %}
    {{ meta.get('seo').get('description') }}
{% endif %}
```

Not real handy, isn't it?

We think that should be easier and it is with the current version.

```twig
{% if meta contains 'seo.description' %}
    {{ meta.get('seo.description') }}
    <!-- or with default -->
    {{ meta.getOrDefault('seo.description', 'Here comes the default description') }}
{% endif %}
```

This is not only much easier, but also avoids many errors.

### CMS_HOME directory

This makes deployments and updates a lot easier, because now it is possible separate the installation of the CondationCMS Software and the hosts, themes and modules.

```shell
export CMS_HOME=/opt/www/
java -jar cms-server.jar server start
```

After updating the core cms software there is no need to copy hosts, themes and modules. Just set the CMS_HOME directory and start the newly installed software.


have fun trying it out!

CU

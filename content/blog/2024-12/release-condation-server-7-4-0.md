---
title: "[Release] CondationCMS server version 7.4.0"
seo:
    description: "Today, we released CondationCMS version 7.4.0"
publish_date: 2024-12-10
template: blog-entry.html
---

Today we released version 7.4.0 of the CondationCMS server.

[Download](https://github.com/CondationCMS/cms-server/releases/tag/v7.4.0)

## Highlights

In addition to some bug fixes, this version also contains two useful features that simplify both template development and deployment.

### Nested shortcodes

Shortcodes just got a whole lot cooler—you can now nest them inside each other! But, there’s a little catch: you can’t nest the same shortcode within itself. Why? It’s just how the parser rolls right now.

Here’s a quick example to keep it chill:

```shortcode
\[\[tag1\]\]
    \[\[tag2 atr="vale" /\]\]
\[\[/tag1\]\]
```

So, mix and match your tags, but don’t double up on the same one. Have fun experimenting!

### Default Template Engine: A New Beginning

We’re taking the first big step towards our vision for CMS projects with the introduction of a new default template engine! Inspired by familiar syntaxes like Twig, Pebble, and Liquid, this engine feels right at home for developers. But this is just the starting point—future updates will bring even more features and powerful syntax enhancements.

One notable difference? Our template engine doesn’t support tests as you might be used to. 
For instance, something like:
```twig
{% if meta contains 'seo.description' %}
{% endif %}
```
needs to be written like this instead:
```twig
{% if meta.containsKey('seo.description') %}
{% endif %}
```
It’s a small adjustment, but it keeps things clean and logical. Get ready for more exciting updates in the upcoming versions!


Have fun trying it out!

CU

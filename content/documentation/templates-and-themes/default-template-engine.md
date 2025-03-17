---
title: Default template engine
template: documentation/content.html
menu:
    position: 20
---

# Default template engine

The default template engine has simple intuitive syntax inspired by twig an liquid.

## Variables

Variables are escaped by default

```twig
{{ variable }}
{{ node.meta.title }}
```

Printing the unescaped content of a variable.

```twig
{{ variable | raw }}
```

## assign variables

```twig
{% assign variable = 5 %}
```

## if-elseif-else

```twig
{% if <expression> %}
{% elseif <expression> %}
{% else %}
{% endif %}
```

## for

```twig
{% for item in items %}
    {{ look.index }}
{% endfor %}
```
## include

```twig
{% include 'fragement.html' %}
```

## macros

Definition and usage of a macro

```twig
{% macro hello(name) %}
    Hello {{ name }}
{% endmacro %}

{{ hello('CondationCMS') }}
```

Or import the macro in another template

```twig
{% import 'macros.html' %}

{{ hello('CondationCMS') }}
```

## components

The default template engines allow the registration of custom components.

```twig
{[component param=12 param2="text value"]}

{[endcomponent]}
```

## layouts with extends and blocks

in base template
```twig
{% block header %}
{% endblock %}

{% block content %}
{% endblock %}
```

in child template
```twig

{% extends 'base.html' %}

{% block header %}
    Override default block
{% endblock %}

{% block content %}
    Override default block
{% endblock %}
```
---
title: Default template engine
template: documentation/documentation.html
menu:
  position: 20
---

# Default template engine

The default template engine has a simple, intuitive syntax inspired by twig. We do not provide complete compatibility to twig.

## Reserved word

Some names are used to provide default functionality and are not allowed to be used.

*node*, *cms*

## Variables
Variables are escaped by default
```condation
{{ variable }}
{{ node.meta.title }}
```

Printing the unescaped content of a variable.
```condation
{{ variable | raw }}
```

## assign variables
```condation
{% assign variable = 5 %}
```

## if-elseif-else
```condation
{% if <expression> %}
{% elseif <expression> %}
{% else %}
{% endif %}
```

## for
```condation
{% for item in items %}
    {{ look.index }}
{% endfor %}
```
## include
```condation
{% include 'fragement.html' %}
```

## macros

Definition and usage of a macro
```condation
{% macro hello(name) %}
    Hello {{ name }}
{% endmacro %}

{{ hello('CondationCMS') }}
```

Or import the macro in another template
```condation
{% import 'macros.html' %}

{{ hello('CondationCMS') }}
```

## components

The default template engines allow the registration of custom components.
```condation
{[ ext:component param=12 param2="text value" ]}

{[ /ext:component ]}
```

## comments
```condation
{# this is a comment #}
```

## layouts with extends and blocks
in base template
```condation
{% block header %}
{% endblock %}

{% block content %}
{% endblock %}
```

in child template
```condation

{% extends 'base.html' %}

{% block header %}
    Override default block
{% endblock %}

{% block content %}
    Override default block
{% endblock %}
```

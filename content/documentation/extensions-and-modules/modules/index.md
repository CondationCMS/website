---
title: Modules
template: documentation/content.html
menu:
    position: 30
---

# Modules

Creating custom modules allows you the register custom template and markdown engines.
And everything possible via extension is also possible within a module.
As a good starting point for your own development, we provide some basic implemetations in our [example-module](https://github.com/CondationCMS/cms-server/tree/main/modules/example-module)

## Template component

```java
public class MyCustomTemplateComponents extends RegisterTemplateComponentExtensionPoint {
    @TemplateComponent("comp1")
    public String comp1 (Parameter parameter) {
	    return "<div>%s</div>".formatted(parameter.get("_content"));
    }
}
```

```condation
{[comp1]}
Here is the Content!
{[endcomp1]}
```

## Template function

```java
public class MyCustomTemplateFunctions extends RegisterTemplateFunctionExtensionPoint {
    @TemplateFunction("hello")
    public String hello (Parameter parameter) {
	    return "Hello <b>%s</b>".formatted(parameter.get("name"));
    }
}
```

```condation
{{ name({'name' : 'CondationCMS'}) | raw }}
```

## Markdown tags

```java
public class MyCustomTags extends RegisterTagsExtensionPoint {
    @Tag("hello")
    public String hello (Parameter parameter) {
        return "hello " + parameter.getOrDefault("name", "");
    }
}
```

```tag
\[\[hello name="CondationCMS" \]\]
```
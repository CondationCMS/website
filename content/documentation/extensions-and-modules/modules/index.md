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

## Extending the manager

With modules it's possible to extend the manager application

```java
@Extensions({
	@Extension(UIActionsExtensionPoint.class),
	@Extension(UIScriptActionSourceExtension.class)
})
public class ExampleUiScriptActionSourceExtension extends AbstractExtensionPoint implements UIScriptActionSourceExtension, UIActionsExtensionPoint {

	@Override
	public Map<String, String> getActionSources() {
		return Map.of("example/source", ClasspathResourceLoader.loadRelative(ExampleUiScriptActionSourceExtension.class, "example-action.js"));
	}

	@MenuEntry(
			id = "exampleMenu",
			name = "Example",
			permissions = {Permissions.CONTENT_EDIT},
			position = 10
	)
	public void exampleMenu() {

	}

	@MenuEntry(
			parent = "exampleMenu",
			id = "example-action",
			name = "Example action",
			permissions = {Permissions.CONTENT_EDIT},
			position = 1,
			scriptAction = @com.condation.cms.api.ui.annotations.ScriptAction(module = "/manager/actions/example/source")
	)
	@ShortCut(
			id = "example-action",
			title = "Example Action",
			permissions = {Permissions.CONTENT_EDIT},
			section = "Example",
			scriptAction = @com.condation.cms.api.ui.annotations.ScriptAction(module = "/manager/actions/example/source")
	)
	public void example_action() {

	}
}
```
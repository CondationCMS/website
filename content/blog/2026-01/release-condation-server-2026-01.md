---
title: '[Release] CondationCMS server version v2026.01'
seo:
  description: Today, we released CondationCMS version v2026.01
  keywords: ''
  author: ''
publish_date: 2026-01-01T00:00:00Z
template: blog-entry.html
unpublish_date: null
published: true
---

Today we released version v2026.01 of the CondationCMS server.

[Download](https://github.com/CondationCMS/distribution/releases/tag/v2025.01)

* **BREAKING CHANGE** Sorted sections now use the _layout.order_ meta attribute for sorting
* **BREAKING CHANGE** ShortCodes are renamed to tags
* **BREAKING CHANGE** The default value for published switched from _true_ to _false_

* **BUGFIX** TemplateEngine should use cache only if activated [456](https://github.com/CondationCMS/cms-server/issues/456)
* **MAINTENANCE** multiple dependencies updated
* **MAINTENANCE** maven wrapper added to project
* **MAINTENANCE** Dynamic themes, add some comments to make decisions clear [458](https://github.com/CondationCMS/cms-server/issues/458)
* **MAINTENANCE** Deprecate/replace PathUtil.toURI with PathUtil.toURL [462](https://github.com/CondationCMS/cms-server/issues/462)
* **FEATURE** Developer Experience [PR-440](https://github.com/CondationCMS/cms-server/pull/440)
* **FEATURE** Aliases for content [442](https://github.com/CondationCMS/cms-server/issues/442)
* **FEATURE** Add redirect support for aliases [454](https://github.com/CondationCMS/cms-server/issues/454)
* **FEATURE** Signature for modules and themes [471](https://github.com/CondationCMS/cms-server/issues/471)
* **FEATURE** Switch password has to secure algorithm [472](https://github.com/CondationCMS/cms-server/issues/472)
* **FEATURE** Simple http api for basic use cases [479](https://github.com/CondationCMS/cms-server/issues/479)
* **FEATURE** Add spa mode for sites [476](https://github.com/CondationCMS/cms-server/issues/476)
* **FEATURE** Custom repository urls for modules, extensions and themes [466](https://github.com/CondationCMS/cms-server/issues/466)
* **FEATURE** UI to manage content [PR-446](https://github.com/CondationCMS/cms-server/pull/446)
* **FEATURE** Simple solution for backups [492](https://github.com/CondationCMS/cms-server/pull/492)

## Developer experience

In this release we introduced some features to make life of developers easier.

### Registering hooks via annotations

It is now possible to pass an object with annotated hook definitions to the HookSystem.register method.

```java
@Filter("test/annotation/filter1")
public List<String> filter (FilterContext<List<String>> context) {
	context.value().remove("2");
	return context.value();
}
@Action("test/annotation/action1")
public void action1 (ActionContext<?> context) {
	// do something
}
```

### HTTP-Controllers

The RoutesExtensionPoint is an extension point for defining HTTP routes. 
It allows developers to provide a list of objects whose methods can be registered as routes using annotations.

```java
@Route("/test2")
public boolean handle2 (Request request, Response response, Callback callback) {
	return true;
}
```

### ShortCodes

The RegisterShortCodesExtensionPoint interface now includes a new method, shortCodeDefinitions, which returns a list of objects that contain shortcode definitions provided through annotations.

```java
@ShortCode("printHello")
public String printHello (Parameter parameter) {
	return "hello " + parameter.getOrDefault("name", "");
}
```

### TemplateComponents

A new method, componentDefinitions, has been added to the RegisterTemplateComponentExtensionPoint interface. It returns a list of objects that define template components using annotations.

```java
@TemplateComponent("tag3")
public String tag3 (Parameter parameter) {
	return "<div>%s</div>".formatted(parameter.get("_content"));
}

```

```condation
{[ tag2 ]}
This is the content
{[ endtag2 ]} 
```

### Template functions

A new 

```java
@TemplateFunction("testfn")
public Object testfn (Parameter params) {
	return "hi I'm testfn";
}  
```

Usage in template code
```condation
{{ testfn()  }}
```

Have fun trying it out!

CU

---
title: "[Release] CondationCMS server version 6.4.0"
seo:
    description: "Today, we released the first version of the new video module to integrate videos from youtube and vimeo."
publish_date: 2024-10-11
template: blog-entry.html
---

Today we released version 6.4.0 of the CondationCMS server.

[Download](https://github.com/CondationCMS/cms-server/releases/tag/v6.4.0)

## Highlights

### Messaging

We’ve implemented a new messaging infrastructure that offers the advantage of working across module boundaries. To enable this, messages are serialized and deserialized seamlessly.

In future versions, more and more components will transition to using this new messaging system.

```java
public static record DataObject (String value){}
public static record AnotherObject (String value){}

messaging.topic("test/test").subscribe((data) -> {
    System.out.println(data.value);
}, AnotherObject.class);

// send it synchron
messaging.topic("test/test").publish(new DataObject("Hello CondationCMS!"), Topic.Mode.SYNC);
// or send it asynchron
messaging.topic("test/test").publish(new DataObject("Hello CondationCMS!"));
```

### New ShortCode parser

We’re excited to introduce a new feature we’re particularly proud of: the revamped parser for shortcodes.

Our previous parser, which relied on regular expressions, had significant limitations—only strings could be used as parameter values. The new parser overcomes these restrictions by supporting numbers and booleans as well. To make it even more powerful, it now allows the use of expressions that can access the metadata of the current page.

```html
[[title title="${meta.title}" /]]
[[person age=46 /]]
[[person admin=false /]]
```


have fun trying it out!

CU
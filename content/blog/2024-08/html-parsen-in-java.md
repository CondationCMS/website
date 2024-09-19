---
title: "[JAVA] Wie parse ich eigentlich HTML in Java"
seo:
    description: "Immer mal wieder stehe ich vor der Anforderung, HTML parsen zu müssen."
publish_date: 2024-08-07
template: blog-entry.html
---

An ein paar Stellen bei der Entwicklung meines CMS stand ich vor dem Problem, HTML parsen zu müssen. 
Jeder der in Java unterwegs ist weiß, dass es dafür im Standard nichts gibt.
Es gibt aber einiger Helfer, von denen ich hier zwei Vorstellen möchte.

## Der Klassiker jsoup

Jsoup gibt ist schon sei 2010 ein nützlicher Helfer für viele Java-Entwickler.

**Einbinden der Abhängigkeit**

```xml
<dependency>
    <groupId>org.jsoup</groupId>
    <artifactId>jsoup</artifactId>
    <version>1.18.1</version>
</dependency>
```

**Parsen eines Strings mit HTML**

```java
String html = """
<html>
	<head>
		<title>First parse</title>
	</head>
	<body>
		<p class="text">Der Inhalt um den es geht.</p>
	</body>
</html>""";
// das html parsen
Document doc = Jsoup.parse(html);
// auf element zugreifen per css selector
doc.select(".text").stream()
		.forEach(element
				-> System.out.println(element.text())
		);
```

## JFiveParse

**Einbinden der Abhängigkeit**

```xml
<dependency>
    <groupId>ch.digitalfondue.jfiveparse</groupId>
    <artifactId>jfiveparse</artifactId>
    <version>1.1.1</version>
</dependency>
```

**Parsen eines Strings mit HTML**

```java
String html = """
<html>
	<head>
		<title>Irgendein Titel</title>
	</head>
	<body>
		<p class="text">Der Inhalt um den es geht.</p>
	</body>
</html>""";
// das html parsen
Document doc = JFiveParse.parse(html);
// auf element zugreifen per css selector
NodeMatcher matcher = Selector.select().element("p").hasClass("text").toMatcher();
doc.getAllNodesMatching(matcher).stream()
		.map(Element.class::cast)
		.forEach(a -> System.out.println(a.getTextContent())
		);
```

## Alternativen

Neben den beiden Vorgestellten gibt es noch noch Alternativen, auf die ich nicht näher eingegangen bin, sie aber trotzdem hier nennen möchte.

[jTidy](https://github.com/jtidy/jtidy) & [htmlcleaner](https://htmlcleaner.sourceforge.net/index.php), beide zwei wirklich alte Bibliotheken, für die es allerdings beide noch aktuelle Versionen gibt.

Viel Spaß beim ausprobieren!

Bis dahin!
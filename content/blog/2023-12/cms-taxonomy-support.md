---
title: "[CMS] Support für Taxonomien eingebaut"
publish_date: 2023-12-19
template: blog-entry.html
seo:
    description: "Brandaktuell wurde die Unterstützung von Taxonomien wie Kategorien und Tags in das cms eingebaut."
---

Eine Standardfunktionalität, die in keinem CMS fehlen darf sind Taxonomien. Die wohl bekanntesten Beispiele hier sind Kategorien und Tags.
Also dürfen die natürlich auch bei mir nicht fehlen.

## Konfiguration

Zu Konfiguration muss die Datei *config/taxonomy.yaml* angelegt werden. In dieser Datei werden alle in dem System bekannten Taxonomien konfiguriert.
```yaml
taxonomies:
  - title: Kategorie
    slug: kategorien
    field: taxonomy.category
  - title: Tags
    slug: tags
    field: taxonomy.tags
    array: true
```
Jede Taxonomie hat einen Titel, einen Slug und ein Feld. Das optionale Attribute _array_ gibt an, dass diese Taxonomie mehrere Werte gepflegt werden können. Hier in diesem Beispiel kann jede Seite in genau einer Kategorie sind, aber mehrere Tags besitzen.

## Templates

Zusätzlich müssen zwei Templates angelegt werden, eins zum Rendern der Taxonomy-Übersicht (aller Werte einer Taxonomy) und eins für einen einzelnen Wert einer Taxonomy (plus die Seiten, die dieser Taxonomy angehören).
* taxonomy.html
* taxonomy.single.html

## Inhalte pflegen

Im Frontmatter Bereich einer Seite können dann Werte für die Taxonomien gepflegt werden. Diese hat nun für die Taxonomy *tags* die Werte **blue** und **orange**.
```yaml
taxonomy:
    tags: [blue, orange]
```

## Anzeigetexte für Taxonomy-Werte hinterlegen

Wenn als Werte für eine Taxonomy jetzt zum Beispiel kryptischer IDs verwendet werden als in diesem Beispiel, ist es auch möglich, Texte zu hinterlegen, die für die Anzeige verwendet werden können.

Dazu muss für jede Taxonomy einen entsprechende Datei gepflegt werden. Für diese Dateien gilt das folgende Namesschema: taxonomy.**slug der taxonomy**..yaml

In unserem Beispiel wären das **taxonomy.kategorien.yaml** und **taxonomy.tags.yaml**. 
Beispielhaft würde diese Datei für tags dann so aussehen:
```yaml
values:
    - id: blue
      title: Blau
    - id: red
      title: Rot
    - id: orange
      title: Orange
```

Im Template gibt es dann zwei Möglichkeiten darauf zuzugreifen:

**In den Taxonomy-Templates**
```html
${taxonomy.getValueTitle('blue')}
```

**In allen anderen Templates**
```html
${taxonomyFN.getTitle('tags', 'blue')}
```

Für mehr Informationen und aussagekräftiger Beispiele schaut euch das [Demo Projekt](https://github.com/thmarx/cms/tree/main/cms-server/hosts/demo) an.


In der Hoffnung, dass es für jemanden Nutzen bringt: 
Viel Spaß damit
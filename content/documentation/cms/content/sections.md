---
title: Sections
template: documentation/documentation.html
menu:
  position: 5
unpublish_date: null
published: true
publish_date: null
---

# Sections

## Overview

Sections are modular content building blocks that allow you to compose pages from reusable components. Instead of storing entire page content in a single file, sections break content into smaller, independent units that can be organized, maintained, and reused more easily.

---

## File Structure

Sections are stored as Markdown files following a naming convention that associates them with a parent page.

### Naming Schema

```
<node>.<sectionname>.<uniquestring>.md
```

**Components:**
- `\<node\>`: The name of the parent page file (without `.md` extension)
- `\<sectionname\>`: The identifier for the section type (e.g., `hero`, `testimonial`, `gallery`)
- `\<uniquestring\>`: A unique identifier to distinguish multiple sections of the same type (e.g., `test1`, `main`, `secondary`)
- `.md`: Markdown file extension

### Examples

If you have a page file named `index.md`, you could create sections for it like:

```
index.hero.main.md
index.content.intro.md
index.gallery.photos.md
index.testimonial.test1.md
index.testimonial.test2.md
```

In this example:
- `index.md` is the parent page
- `hero` and `gallery` are single-instance section types
- `testimonial` is a section type with multiple instances

---

## How Sections Are Loaded

When a page is rendered, ConditionCMS automatically discovers and loads all sections associated with that page. The sections are organized by type in an associative array structure.

**Discovery process:**
1. The renderer looks for the page file (e.g., `index.md`)
2. It searches for all files matching the pattern `index.<sectionname>.<uniquestring>.md`
3. Sections are grouped by their `<sectionname>` identifier
4. Sections within the same type are ordered by filename (usually the order they were created)

**Example:** When rendering `index.md`, the following sections would be discovered:
- `index.hero.main.md` → grouped under key `hero`
- `index.content.intro.md` → grouped under key `content`
- `index.testimonial.test1.md` → grouped under key `testimonial`
- `index.testimonial.test2.md` → grouped under key `testimonial`

---

## Using Sections in Templates

Sections are accessed in templates through the `node.sections` object, which is a map organized by section type.

### Basic Template Syntax

```condation
{% if node.sections.containsKey('sectionname') %}
    {% for section in node.sections.get('sectionname') %}
        {{ section.content() | raw }}
    {% endfor %}
{% endif %}
```

### Breakdown

- `node.sections` — The associative array containing all sections for the current page, grouped by type
- `containsKey('sectionname')` — Checks if sections of this type exist
- `get('sectionname')` — Retrieves all sections of the specified type as a list
- `section.content()` — Renders the Markdown content of the section to HTML
- `| raw` — Output filter that prevents escaping of HTML (allows raw HTML output)

### Example: Rendering a Hero Section

```condation
{% if node.sections.containsKey('hero') %}
    <div class="hero">
        {% for section in node.sections.get('hero') %}
            {{ section.content() | raw }}
        {% endfor %}
    </div>
{% endif %}
```

### Example: Rendering Multiple Testimonials

```condation
<div class="testimonials">
    {% if node.sections.containsKey('testimonial') %}
        {% for section in node.sections.get('testimonial') %}
            <div class="testimonial-card">
                {{ section.content() | raw }}
            </div>
        {% endfor %}
    {% endif %}
</div>
```

---

## Section Content

Section files are written in Markdown and can contain any valid Markdown content. The content is rendered to HTML when accessed via `section.content()` in the template.

### Example Section File: `index.testimonial.test1.md`

```markdown
**John Smith** — CEO at TechCorp

"ConditionCMS made managing our multi-language sites incredibly efficient. 
The modular section approach saved us weeks of development time."
```

When rendered in a template with `{{ section.content() | raw }}`, this becomes:

```html
<p><strong>John Smith</strong> — CEO at TechCorp</p>
<p>"ConditionCMS made managing our multi-language sites incredibly efficient. 
The modular section approach saved us weeks of development time."</p>
```

---

## Best Practices

**Use clear, descriptive section names:**
Choose section identifiers that clearly indicate their purpose (`hero`, `feature-list`, `cta`, `testimonial`), not generic names like `section1` or `block2`.

**Organize sections logically:**
Use the unique string portion of the filename to indicate order or purpose (`intro`, `main`, `sidebar`). This makes it easier to understand the page structure at a glance.

**Leverage the loop for repeated content:**
When multiple sections of the same type exist, use the loop to maintain consistent styling. This approach scales well as you add more testimonials, gallery images, or other repeated sections.

**Use raw filter for HTML:**
Always use the `| raw` filter when outputting section content to preserve intentional HTML formatting within the Markdown.

**Keep sections focused:**
Each section should have a single, well-defined purpose. This makes maintenance easier and allows sections to be reused or reorganized without dependencies.

---

## Common Section Types

Here are common section types you might use on a typical site:

| Section Type | Purpose | Typical Count | Example File |
|--------------|---------|---------------|--------------|
| `hero` | Large banner or headline section | 1 | `index.hero.main.md` |
| `content` | Main body content | 1-2 | `index.content.intro.md` |
| `feature` | Feature highlight or callout | Multiple | `index.feature.speed.md`, `index.feature.security.md` |
| `testimonial` | Customer quote or review | Multiple | `index.testimonial.test1.md`, `index.testimonial.test2.md` |
| `gallery` | Image or media collection | 1 | `index.gallery.photos.md` |
| `cta` | Call-to-action button or section | 1 | `index.cta.main.md` |
| `faq` | Frequently asked question | Multiple | `index.faq.shipping.md`, `index.faq.returns.md` |

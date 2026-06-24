---
title: 'Why we Built a Markdown-First CMS Instead of Another Headless CMS'
seo:
  description: Today, we released CondationCMS version v2026.06
  keywords: ''
  author: ''
publish_date: 2026-06-25T00:00:00Z
template: blog-entry.html
unpublish_date: null
published: true
postType: general
---

# Why We Built a Flat-File CMS Instead of Another Headless System

Headless CMS are everywhere right now. The reasoning is sound: separate content from presentation, put an API in the middle, attach any frontend you like. For certain use cases, that's exactly the right call. For many others, it's simply too much.

CondationCMS takes a different approach: Markdown files, flat-file structure, template-based rendering. That might sound like a step backwards. It isn't, and this article explains why.

## Content stays real files

A Markdown file with front matter is not a database record behind an API. It's readable, archivable, and portable. No running server required, no special backend, no migration script.

That sounds obvious, but it isn't. Anyone who has tried exporting content from a proprietary CMS knows how much time that takes. With flat files, the content just lives in the filesystem. An editor, a `git log`, a simple `grep` — that's enough to understand what's there.

> Content should outlive the software that created it.

That principle has shaped CondationCMS from the start.

## Git is not an add-on

With flat files, version control isn't an optional plugin – it's a natural part of the workflow. Every text change, every new page, every template update becomes a commit. Content, configuration, and code are versioned together.

The practical implications are real: changes are diffable and reversible. Branches work well for staging content or new site structures. Deployments can be tied directly to a specific Git state.

This isn't an argument for every editorial team – a classic WYSIWYG backend has its place. But for developers, technically-minded teams, and content-adjacent projects, it's a significant advantage.

## Fewer moving parts

A CMS with a database, API layer, admin backend, caching layer, and a separate frontend is complex infrastructure. That complexity is justified in some scenarios. For a lot of projects, it's simply too much to maintain.

A flat-file CMS needs no database installation, no backup strategy for table schemas, no schema migrations on updates. Deployment failures are easier to reason about, because the number of moving parts is smaller.

The foundation of a content project shouldn't itself become the biggest project on the team.

## Templates and content often belong together

Headless systems separate content from presentation – that's their promise. If you're serving multiple frontends or distributing content across channels, you need that separation.

But most websites aren't multi-channel platforms. A blog, a company site, a documentation project: they need a website, consistent design, SEO-friendly HTML, and reusable templates. For that, a template-based CMS is more direct than a headless setup where API, frontend, rendering, preview, and deployment all have to be assembled from scratch.

> Headless separates content from presentation. A traditional CMS can intentionally bring them together – when the website itself is the product.

## Markdown is not nostalgia

Markdown has a reputation as a “developer format.” That reputation is undeserved. Markdown enforces structure without imposing it. Headings, lists, links, and media are transparent and portable. There are no hidden formatting layers, no tag soup, no proprietary extensions.

For technically-minded authors, that means less distraction and more direct control over content. For developers, it means content is processable without an intermediary. Shortcodes, components, and metadata integrate cleanly without overloading the format.

Markdown is a deliberate choice for clarity – not a step back.

## Performance without a complicated stack

Flat files don't mean slow. CondationCMS caches Markdown output, pre-compiles templates, and indexes content so that most pages can be served without a database query per request. Media can be optimized automatically.

> Dynamic content does not always require a dynamic architecture.

## Backups you can understand

A complete backup is a set of files: content, media, templates, configuration, modules. Restoring means copying the project directory back and starting the server. No database dumps, no service dependencies, no special restore procedures.

That matters especially for smaller organizations, agencies, and projects that need to stay maintainable over years.

## Local development like any other project

A CondationCMS project looks like this locally:

```
project/
  content/
  templates/
  assets/
  media/
  config/
```

Clone, start, edit, commit, deploy. No external SaaS instance, no separate database, no mandatory cloud dependency. That's easy to understand for developers and practical for agencies – especially when managing multiple projects in parallel.

## Structure through convention

In a flat-file project, the directory structure is part of the information architecture. URLs, navigation, and content hierarchy are readable directly from the filesystem:

```
content/
  blog/
    markdown-first-cms.md
  docs/
    installation.md
  about.md
```

Metadata, content types, and validation are still necessary – but the core structure stays visible and traceable without opening an admin interface.

## Ownership stays with the project

No mandatory cloud service, no per-editor or per-API-request fees, no dependency on an external content provider. Projects run on their own infrastructure, and content stays in the hands of whoever runs the site.

This isn't an argument against modern platforms. It's an argument for control:

> The goal is not to avoid modern platforms. The goal is to keep ownership and deployment choices where they belong: with the project.
---
title: 'Why We Built a Markdown-First CMS Instead of Another Headless CMS'
seo:
  description: 'Why CondationCMS uses Markdown files, templates, Git, and a flat-file structure instead of a headless-first architecture.'
  keywords: ''
  author: ''
publish_date: 2026-06-25T00:00:00Z
template: blog-entry.html
unpublish_date: null
published: true
postType: general
-----------------

# Why We Built a Markdown-First CMS Instead of Another Headless CMS

Headless CMS are everywhere, and for good reasons. Separating content from presentation makes sense when content needs to appear in several frontends, apps, stores, or external systems. Put an API in the middle, let every consumer use the data in its own way.

That is not what every project needs, though.

When building CondationCMS, we kept coming back to a simpler question: what does a normal content project actually need to stay understandable over time? For many websites, the answer is not another API layer or a separate frontend application. It is content that remains readable, templates that render it directly, and a project structure that does not hide its most important parts behind infrastructure.

That is why CondationCMS is Markdown-first, flat-file based, and template-driven.

## Content should remain real files

A Markdown file with front matter is not a record trapped behind an API or inside a database. It is a file. You can open it in any editor, archive it, move it, inspect it with Git, or search through it with `grep`.

That sounds almost too simple to mention. But anyone who has had to export content from a proprietary system knows that portability is often only promised until the day you want to leave.

With flat files, the content lives in the filesystem:

```text
content/
  blog/
    markdown-first-cms.md
```

There is no export process before you can look at it. No running backend required just to read an article. No special migration tool needed to understand what is stored.

> Content should outlive the software that created it.

That principle has shaped CondationCMS from the beginning.

## Git is part of the workflow, not an integration

With a flat-file project, Git fits naturally. Content changes, template changes, configuration changes, and code changes can all live in the same history.

That has practical consequences. You can see what changed in an article. You can revert a broken template update. You can create a branch for a redesign or a new documentation section before it reaches production.

For some editorial teams, that will not be the ideal workflow. A classic editor-focused backend with a WYSIWYG interface is often the better choice there.

But for developers, agencies, technically minded teams, and documentation-heavy projects, having content and project structure under version control is a real advantage rather than a nice extra.

## Fewer moving parts means fewer things to maintain

A modern web stack can grow surprisingly quickly: database, API, admin interface, authentication, caching, frontend application, preview system, deployment pipeline.

Sometimes that complexity is necessary. Often, it is simply the price of choosing a stack that solves problems a project does not actually have.

A flat-file CMS does not remove every operational concern, but it removes quite a few of them. There is no database to install, no schema migration to run during an update, and no database dump to restore after a failure.

When something goes wrong, a smaller system is usually easier to inspect.

> The foundation of a content project should not become the biggest project on the team.

## Templates and content often belong together

The central promise of headless architecture is separation: content is independent from presentation.

That matters when content is delivered to multiple consumers. A mobile app, a web frontend, an internal portal, an external partner API, and a kiosk system all benefit from a shared content source.

But a large part of the web is not built that way.

A company site, a blog, a documentation portal, or a product website usually needs one thing first: a good website. It needs templates, structured content, SEO-friendly HTML, previews, and a deployment process that does not require assembling several separate applications.

For those projects, keeping rendering close to content is not an architectural failure. It is often the more direct solution.

> Headless separates content from presentation. A traditional CMS can intentionally bring them together when the website itself is the product.

## Markdown is not nostalgia

Markdown is sometimes treated as a developer-only format or as a compromise made for simplicity. We see it differently.

Markdown makes structure visible. Headings are headings. Links are links. Lists are lists. The source remains readable without needing a visual editor to interpret hidden formatting.

There is no tag soup, no proprietary document format, and no invisible styling layer mixed into the content.

That does not mean Markdown is right for every author. It does mean that it is a strong format for projects where clarity, portability, and long-term maintainability matter.

In CondationCMS, Markdown is not an isolated text format either. Metadata, shortcodes, components, and templates can extend content without turning the underlying files into something unreadable.

## Performance does not require a complicated stack

Flat files are sometimes associated with static generators or very small websites. That is too narrow a view.

CondationCMS caches Markdown output, pre-compiles templates, indexes content, and can optimize media automatically. The goal is not to pretend that every site is static. The goal is to avoid treating a database query and a distributed architecture as the default answer to every page request.

> Dynamic content does not always require a dynamic architecture.

## Backups should be understandable

A complete project backup can be a directory containing content, media, templates, configuration, and modules.

Restoring it means bringing those files back and starting the server again.

There are no table schemas to reconstruct, no database service to recover separately, and no special export format that only one vendor understands.

That is especially useful for smaller organizations, agencies, and long-lived projects. A website should still be maintainable years later, even when the people who originally built it are no longer involved.

## Local development should feel like working on a project

A CondationCMS project is intentionally easy to recognize:

```text
project/
  content/
  templates/
  assets/
  media/
  config/
```

Clone it, start it, edit it, commit it, deploy it.

There is no mandatory SaaS account, no required cloud service, and no separate database just to start working locally. For agencies managing several customer projects, that simplicity is valuable. For developers, it makes the project easier to inspect and easier to hand over.

## Structure through convention

With flat files, the directory structure becomes part of the information architecture.

A project can make its content hierarchy visible directly in the filesystem:

```text
content/
  blog/
    markdown-first-cms.md
  docs/
    installation.md
  about.md
```

URLs, navigation, and content organization can still be supported by metadata, content types, and validation. But the essential structure does not disappear into an admin interface.

You can see how the project is organized by opening the project.

## Ownership stays with the project

CondationCMS does not require a mandatory cloud platform, per-editor pricing, or API request quotas. Projects run on their own infrastructure, and the people operating the site keep control over the content and deployment choices.

This is not an argument against modern hosted platforms. They are useful, and in the right context they save time.

It is an argument for choosing the level of infrastructure a project actually needs.

> The goal is not to avoid modern platforms. The goal is to keep ownership and deployment choices where they belong: with the project.

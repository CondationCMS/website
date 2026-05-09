---
title: '[Release] CondationCMS server version v2026.05'
seo:
  description: Today, we released CondationCMS version v2026.05
  keywords: ''
  author: ''
publish_date: 2026-05-08T00:00:00Z
template: blog-entry.html
unpublish_date: null
published: true
---

Today we released version v2026.05 of the CondationCMS server.

[Download](https://github.com/CondationCMS/distribution/releases/tag/v2026.05)


## Highlights of this release

Alongside many smaller improvements, optimizations, and bug fixes, this release also introduces several highlights that deserve a closer look.
The following sections showcase some of the most important new features and changes included in this release.


### Custom Content for Taxonomy Pages

Taxonomy pages are now far more flexible.

Previously, taxonomies only displayed a list of values, and selecting a value simply showed the matching nodes. With this release, you can now create fully customized content pages for your taxonomies.

For example, if you have a taxonomy named *brand* with values like *nike* and *puma*, you can create dedicated content pages such as:

* *brand/index.md*
* *brand/puma.md*
* *brand/nike/index.md*

When a taxonomy page is rendered, the matching content page will automatically be loaded and made available inside the taxonomy template.

This allows you to enrich taxonomy pages with custom introductions, SEO content, images, marketing text, or any other content you want to provide for a taxonomy or a specific taxonomy value.


### License Change: GPLv3 → AGPLv3

With this release, CondationCMS changes its license from **GPLv3** to **AGPLv3**.

We know that the AGPL can sound intimidating at first, especially because it is often described as a “strict” open source license. In practice, this change is mainly about protecting the open source nature of the CMS itself — not about restricting developers, agencies, or users.

#### Why the change?

The main reason for moving to AGPLv3 is to ensure that improvements made directly to the core CMS remain available to the community, even when the software is used as a hosted service or SaaS platform.

Under the previous GPLv3 license, modifications only had to be shared when the software itself was distributed. The AGPL extends this principle to network usage, helping to prevent closed-source hosted forks of the CMS while still keeping the project open and collaborative.

#### What does this mean for users?

For most users and developers, nothing changes:

* You can still use CondationCMS for personal, commercial, and client projects.
* You can still build websites, applications, and services with it.
* You can still self-host and customize your installations.
* You are not required to open source your website content, templates, or business logic.

The AGPL only applies to modifications of the CMS core itself.

#### Extensions, Modules, and Themes

To make development around the ecosystem as friendly as possible, CondationCMS includes a **license exception** for modules, extensions, plugins, and themes.

This means:

* Modules and extensions can use any license, including proprietary/commercial licenses.
* Themes do not need to be open sourced.
* Integrations and custom functionality built on top of the CMS can remain closed source.
* Developers and agencies can continue to build commercial products and services around CondationCMS without additional restrictions.

The goal is simple:
protect the core platform as open source while keeping the ecosystem flexible and developer-friendly.

We believe this creates a healthy balance between sustainability, openness, and freedom for developers.


CU

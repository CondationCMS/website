---
title: '[Release] CondationCMS server version v2026.06'
seo:
  description: Today, we released CondationCMS version v2026.06
  keywords: ''
  author: ''
publish_date: 2026-06-22T00:00:00Z
template: blog-entry.html
unpublish_date: null
published: true
postType: release
---

# CondationCMS v2026.06 is here

We are happy to announce the release of **CondationCMS v2026.06**.

This release focuses on making CondationCMS easier to operate, more flexible for project development, and better prepared for real-world content platforms. Alongside many smaller fixes and internal improvements, the update introduces new options for image processing, improved observability, a dedicated public folder for static content, and several refinements for modules, hooks, and the Manager UI.

## Flexible image processing with libvips and ImageMagick

Image handling is an important part of almost every modern website. With this release, CondationCMS can now use external image-processing tools such as **libvips** and **ImageMagick**.

This gives projects more flexibility when working with image transformations, crops, generated formats, and optimized media delivery. Depending on the environment, you can choose the tooling that best fits your deployment setup and performance requirements.

The crop workflow has also received a small but important fix related to generated file names.

## Better observability with metrics

Operating a CMS in production should not feel like guessing.

Version v2026.06 adds improved metrics support, making it easier to understand what happens inside a running CondationCMS installation. This provides a stronger foundation for monitoring request behavior, performance characteristics, and important runtime activity.

The goal is not only to help with troubleshooting, but also to make performance optimization more measurable as projects grow.

## A dedicated public folder for static content

CondationCMS now includes a dedicated **public folder** for static content.

This gives projects a clearer place for files that should be delivered directly without going through the regular content pipeline. Typical examples include verification files, static assets, web manifests, robots-related files, and other project-specific resources.

The server can also handle `.well-known` paths more reliably, which is useful for common web standards and service integrations.

## Improved hooks and application scope

Hooks are one of the key extension mechanisms in CondationCMS. This release introduces an **application scope for hooks**, making it easier to organize project logic that belongs to the wider application rather than to a specific request or content item.

At the same time, legacy global extensions have been removed. This helps simplify the extension model and keeps the system more consistent for future development.

## Content slots and UI improvements

The content editing experience continues to evolve.

This release includes improvements around content slots as well as several updates to the Manager UI. The goal is to make structured content workflows more practical while keeping the system flexible enough for custom project requirements.

There are also refinements to module loading and startup behavior, helping ensure that server modules are initialized in the correct order.

## Improved developer experience and test coverage

A number of changes in this release focus on the day-to-day work of developers.

This includes general developer-experience improvements, internal cleanup, and expanded end-to-end testing. These changes may not always be visible immediately in the UI, but they help make the platform more reliable and easier to evolve.

## License exception clarified

The release also improves and clarifies the licensing documentation.

CondationCMS is licensed under the AGPLv3, with an additional license exception for modules, extensions, and themes that use only the public API. The updated documentation makes the intended permissions and boundaries clearer for developers building on top of the CMS.

## Upgrade notes

This release removes the legacy cache handler and legacy global extensions. Projects using older extension mechanisms should review their setup before upgrading.

As always, we recommend testing updates in a staging environment before deploying them to production.

## Full changelog

You can find the complete technical changelog, including all fixes and internal updates, in the official GitHub release:

[View the CondationCMS v2026.06 release notes](https://github.com/CondationCMS/cms-server/releases/tag/v8.2.0)

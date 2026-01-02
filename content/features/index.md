---
title: Features
template: content.html
menu:
  position: 2
seo:
  keywords: ''
  author: ''
  description: ''
unpublish_date: null
published: true
publish_date: null
---

# Features

ConditionCMS is a powerful and flexible content management system with a comprehensive feature set designed to meet the needs of modern web development and content management. This section highlights the key features that make ConditionCMS a robust choice for building and managing websites.

## Content Editing

ConditionCMS provides a dedicated manager application that simplifies content creation and management. The intuitive user interface allows content editors to create, edit, and publish pages without requiring technical expertise or direct server access. The manager application handles all aspects of content lifecycle management, from drafting and scheduling to publishing and archiving content.

## Modules & Extensions

ConditionCMS provides multiple extensibility mechanisms to customize and expand functionality according to your specific requirements.

**Java Modules** extend the server-side functionality with compiled, high-performance code. Modules can add new features to the core server or provide site-specific enhancements. They are essential for performance-critical operations and integrations with complex backend services.

**JavaScript Extensions** allow project and theme developers to add custom functionality using JavaScript. Extensions enable the creation of custom content tags, reusable template components, and custom route handlers without modifying the core system. This provides flexibility for theme-specific features and project-specific customizations.

## Templates

ConditionCMS includes a powerful, Twig-like template engine that enables dynamic content rendering. The template syntax is familiar to developers with Twig experience, featuring variables, filters, loops, conditionals, and other advanced template features.

The template engine is fully extensible through custom components. Components allow you to create reusable, encapsulated template elements that can be composed into complex page layouts. This component-based approach promotes code reuse, maintainability, and consistency across your site. Components can accept parameters, manage their own state, and be distributed through extensions or themes.

## Themes

ConditionCMS supports themes that provide pre-designed layouts, styling, and template structures. Themes allow you to change the look and feel of your site without modifying content. A single theme can be reused across multiple sites, ensuring consistent branding and design patterns across your web properties. Themes encapsulate templates, stylesheets, assets, and custom extensions, providing a complete design package that can be easily activated or switched on individual sites.

## MultiSite

ConditionCMS is built with multi-site capability at its core. A single server instance can host and manage multiple independent websites simultaneously, each with its own configuration, content, theme, and settings. This allows efficient resource utilization and streamlined management of multiple web properties from a centralized location.

**Multi-Language Support** is implemented through the multi-site architecture. You can create separate sites with different language versions of your content, each accessible from different URLs or context paths. For example, you might configure `https://yoursite.com/en` for English and `https://yoursite.com/de` for German versions. Each language version is a complete, independent site with its own content hierarchy and management, while sharing server resources and potentially the same theme structure.

## Tags

ConditionCMS supports custom tags that extend the Markdown syntax with domain-specific functionality. Custom tags allow content creators to embed interactive elements, rich media, special formatting, or other custom content directly within Markdown content without switching to HTML or requiring technical expertise.

Custom tags follow a simple syntax that integrates seamlessly with Markdown content. Tags can be registered through extensions, enabling theme developers and project leads to create domain-specific markup tailored to their content needs. Examples might include image galleries, video players, accordions, testimonial blocks, or other specialized content components. This approach keeps content authoring simple while providing powerful customization capabilities.

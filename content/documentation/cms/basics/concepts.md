---
template: documentation/documentation.html
createdAt: 2025-08-07T13:07:33.770Z
createdBy: thorsten
published: false
title: Concepts
menu:
  position: 2
---

# Concepts

Before diving into the details of ConditionCMS, it is essential to understand some fundamental concepts that form the foundation of the system. This section clarifies the key components and terminology you will encounter throughout the documentation. Understanding these concepts will make it easier to comprehend why the system works the way it does and how different components interact with each other.

## Server

The **ConditionCMS Server** is the core application that powers and manages all hosted sites. It is responsible for handling requests, processing content, managing extensions and modules, and coordinating all backend operations. A single server instance can host and manage multiple independent websites simultaneously, making it a scalable and efficient hosting solution.

## Host or Site

A **host** or **site** represents an individual website. One ConditionCMS server can host and manage multiple sites at the same time, each with its own configuration, content, theme, and settings. Each site operates independently while sharing the underlying server infrastructure, allowing efficient resource utilization and streamlined management of multiple web properties.

## Page or Node

A **page** (also referred to as a **node**) represents a single content page within a site. Pages are the fundamental units of content in ConditionCMS and can contain various types of content structured through sections. Each page has its own URL, metadata, and lifecycle management, allowing for granular control over individual pieces of content.

## Assets

**Assets** are static files managed by ConditionCMS. These include any files that are served to users but are not dynamic content. Assets can encompass:

- **Media files** - Images, videos, audio files, and other multimedia content
- **JavaScript scripts** - Client-side code for interactivity and functionality
- **Stylesheets** - CSS files for visual styling and responsive design
- **Documents** - PDFs, archives, and other downloadable files
- **Other static resources** - Fonts, icons, and any other static web resources

Assets are typically optimized and processed by ConditionCMS, including image transformations, compression, and format conversion based on configured media formats.

## Templates

**Templates** define reusable layouts and structures that can be applied across different pages and sites. Templates provide a consistent look and feel across your content while reducing duplication and maintenance effort. Templates are processed by the configured template engine and can include dynamic content, conditionals, loops, and other template language features.

## Sections

ConditionCMS structures content using smaller building blocks called **sections**. Rather than treating entire pages as monolithic units, sections allow you to break content into smaller, reusable, and composable components. This modular approach to content creation enables greater flexibility, easier maintenance, and the ability to reuse content structures across different pages and sites. Sections can be nested and combined in various ways to create complex page layouts.

## Extensions

**Extensions** are custom components built in JavaScript that extend the functionality of ConditionCMS for specific projects and themes. Extensions are primarily used by project and theme developers to:

- **Add custom content tags** - Create domain-specific markup or shortcodes that render custom content
- **Create reusable template components** - Build encapsulated, reusable components that can be used across templates
- **Register custom routes** - Define custom URL endpoints and request handlers for site-specific functionality
- **Integrate third-party services** - Connect with external APIs and services through custom logic

Extensions are executed in a JavaScript runtime environment and can leverage hooks to integrate with the core system.

## Modules

**Modules** are server-side components developed in Java that extend the functionality of the ConditionCMS server or individual sites. Modules provide more powerful and performance-critical features than extensions, including:

- **Core functionality providers** - Such as template engines (e.g., Thymeleaf module) that are essential for site operation
- **Server-wide services** - Features and services that apply to all sites or the entire server
- **Site-specific enhancements** - Additional capabilities that can be activated for particular sites
- **Performance-critical operations** - Heavy computation or resource-intensive tasks that benefit from compiled Java code

Modules must be explicitly activated in the site or server configuration before they become available.

## Hooks

**Hooks** are extension points that allow developers to integrate custom code with various parts of the ConditionCMS core system without modifying the core classes directly. Hooks follow the observer or event-driven pattern, where developers can register callbacks that execute at specific points in the system's lifecycle or during specific operations. This approach provides a clean, maintainable way to extend functionality while preserving the integrity of the core codebase and ensuring upgrades and updates do not conflict with customizations.
---
template: documentation/documentation.html
createdAt: 2025-08-07T13:07:33.770Z
createdBy: thorsten
published: true
title: Concepts
menu:
  position: 2
unpublish_date: null
publish_date: null
---

# Concepts

## Overview

ConditionCMS is built on a layered architecture. Understanding the following fundamental concepts will help you grasp how the system works and how its components interact. This section organizes concepts from infrastructure down to extensibility.

---

## Architecture Layers

| Layer | Component | Purpose | Scope |
|-------|-----------|---------|-------|
| **Infrastructure** | Server | Central management system | System-wide |
| **Project** | Host / Site | Individual website instance | Single website |
| **Content** | Page, Sections, Assets, Templates | Content and layout | Page-level |
| **Extension** | Extensions, Modules, Hooks | Custom functionality | Project or system-wide |

---

## Infrastructure Layer

### Server

The **ConditionCMS Server** is the core runtime that powers all hosted websites. It manages requests, processes content, coordinates extensions and modules, and handles all backend operations.

**Key capabilities:**
- Hosts multiple independent websites simultaneously
- Shares infrastructure across sites for efficiency
- Maintains isolation between sites (content and configuration)
- Orchestrates all backend services and operations

A single server instance can scale to manage dozens of websites while keeping each site's content and configuration completely separate.

---

## Project Layer

### Host or Site

A **host** (or **site**) is an individual website running on the ConditionCMS server. One server can manage multiple sites at the same time, each with independent configuration, content, themes, and settings.

**Characteristics:**
- Operates independently with its own content
- Shares underlying server infrastructure and users across sites
- Has its own configuration and settings
- Can have different themes and extensions enabled
- Maintains complete content isolation from other sites

**Multi-Site Architecture:**
ConditionCMS supports multi-site hosting to enable multi-language support. Users are shared across all sites on a single server instance. This is fundamentally different from multi-tenancy: multi-site is for language variants of the same organization, while multi-tenancy is for completely separate customers. For true multi-tenancy (separate customers with complete isolation), operate a dedicated server instance for each customer.

**Example use case:** A company with an English site (example.com) and a German site (example.de) shares the same user database and server infrastructure, but maintains separate content for each language.

---

## Content Layer

### Page (Node)

A **page** is a single content unit within a site. The terms "page" and "node" are used interchangeably; "node" is typically used internally in APIs and configuration files.

**Key characteristics:**
- Has its own unique URL and metadata (title, description, author)
- Composed of one or more sections (see below)
- Supports lifecycle management (published true/false)
- Can be organized in hierarchies or navigation structures

**Example:** A blog post, product page, or landing page.

---

### Sections

**Sections** are modular building blocks that compose a page. Instead of treating pages as monolithic units, sections allow you to break content into smaller, reusable, and composable components.

**Key characteristics:**
- Each section has a template that defines its structure and rendering
- Can be nested within a page to create complex layouts
- Cannot be shared across different pages—sections exist only within their parent page
- Sections within the same page can reference the same template type

**Benefits:**
- **Modularity**: Use the same section template multiple times within a page
- **Flexibility**: Combine different section types in any order
- **Maintainability**: Update a section template's logic once, apply to all instances
- **Consistency**: Enforce a common structure within a page

**Example sections:** A text section, image gallery section, testimonial section, call-to-action section, or featured products section.

---

### Templates

**Templates** define the structure and layout of sections. Each section references a template that determines how its content is rendered and displayed.

**Key points:**
- Define how a section's data is structured and rendered
- Processed by ConditionCMS's internal template engine
- Support dynamic content, conditionals, loops, and template logic
- Are theme-specific (each theme has its own templates)
- Can reference sections, variables, and assets

**How templates work with sections:** A section contains the data (e.g., title, description, image). Its template defines how that data is rendered (e.g., title in bold, image at full width, description in gray text).

---

### Assets

**Assets** are static files managed and served by ConditionCMS. Unlike sections (which define content structure and are dynamically rendered), assets are raw files delivered directly to users.

**Types of assets:**
- **Media files**: Images, videos, audio files
- **Stylesheets**: CSS files for visual styling
- **JavaScript**: Client-side scripts for interactivity
- **Documents**: PDFs, archives, downloadable files
- **Resources**: Fonts, icons, other static web files

**Processing:**
ConditionCMS automatically optimizes assets, including image compression, format conversion, and responsive image generation based on configured media profiles.

**Example:** A product image, a PDF brochure, or a web font.

---

## Extension Layer

### Extensions

**Extensions** are custom JavaScript components that extend ConditionCMS functionality for specific projects and themes. They run in a JavaScript runtime and integrate with the core system via hooks.

**Use extensions for:**
- **Custom content tags**: Create domain-specific shortcodes or markup that renders specialized content
- **Reusable template components**: Build encapsulated, interactive components for templates
- **Custom routes**: Define custom URL endpoints and request handlers
- **Third-party integrations**: Connect with external APIs and services

**Characteristics:**
- Written in JavaScript
- Project or theme-specific
- Lightweight and quick to develop
- Suitable for client-side and lightweight server-side logic

**Example:** A custom "testimonial slider" component, a Stripe payment form, or a live search feature.

---

### Modules

**Modules** are server-side components written in Java that extend ConditionCMS functionality with more powerful and performance-critical features than extensions.

**Use modules for:**
- **Core services**: Essential functionality like template engines
- **Server-wide features**: Features and services that apply to all sites
- **Site-specific enhancements**: Powerful capabilities activated for particular sites
- **Performance-critical operations**: Heavy computation, resource-intensive tasks, or high-throughput services

**Characteristics:**
- Written in Java (compiled code)
- More powerful and performant than extensions
- Must be explicitly configured before use
- Can access backend resources directly (databases, file systems, etc.)
- Suitable for complex, performance-critical logic

**Example:** A database connector, a bulk content importer, or an image processing service.

---

### Hooks

**Hooks** are extension points that allow developers to integrate custom code into various parts of the ConditionCMS core without modifying core classes directly. They follow an event-driven pattern.

**How hooks work:**
- The core system triggers hooks at specific lifecycle points
- Developers register callbacks that execute when a hook is triggered
- Multiple callbacks can register to the same hook
- Callbacks can inspect data, modify it, or trigger side effects

**Samples of built-in hook categories:**
- **system/content**: Hooks realted to content
- **system/template**: Hooks related to templates

**Benefits:**
- Keeps custom code separate from core code
- Survives core upgrades without conflicts
- Enables clean, maintainable extensions
- Prevents tight coupling between extensions and core

---

## How It All Fits Together: A Practical Example

Let's trace how these concepts work together when you create a blog post:

1. **Server** routes the request to your **site**
2. A **page** (blog post) is created within the site
3. The page is composed of multiple **sections**:
   - A "title" section with text content
   - A "featured image" section with an asset reference
   - A "body" section with markdown content that is rendered to HTML
   - An "author card" section that displays author information
4. Each section references a **template** that defines how its content is structured and rendered
5. A custom **extension** can be used to add interactive features (hover effects, social links)
6. A **module** can automatically generate responsive versions of the featured image
7. A **hook** (system/content) triggers when the blog post is published to update a search index
8. **Assets** (stylesheets, JavaScript, fonts) are delivered to the browser

---

## Glossary

**Asset**: A static file (image, document, stylesheet, font) managed and served by ConditionCMS.

**Extension**: A custom JavaScript component that adds specialized functionality to templates or pages.

**Hook**: An extension point in the core system that allows custom code to execute at specific lifecycle events.

**Host**: A single website instance running on the ConditionCMS server. Synonym: Site.

**Module**: A server-side Java component that provides powerful, performance-critical functionality.

**Node**: The technical term for a page (used in APIs and configuration).

**Page**: A single content unit with its own URL and lifecycle management.

**Section**: A modular content building block that composes a page, referencing a template for rendering.

**Server**: The core ConditionCMS runtime that hosts and manages all sites.

**Template**: A reusable layout definition that structures how a section's content is rendered.

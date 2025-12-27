---
template: documentation/content.html
createdAt: 2025-08-07T13:07:33.770Z
createdBy: thorsten
published: false
title: concepts.md
---

# Concepts

Before diving in, let’s clarify some fundamental concepts.  
This will make it easier to understand why things in CondationCMS work the way they do.

## Server
The **Condation Server** is the core application that powers and manages all hosted sites.

## Host or Site
A **host** or **site** is an individual website.  
One server can host and manage multiple sites at the same time.

## Page or Node
A **page** (or **node**) represents a single content page within a site.

## Assets
**Assets** are files managed by CondationCMS.  
These can include:

- Media files (images, videos, documents)  
- JavaScript scripts  
- Stylesheets  
- Other static resources

## Templates
**Templates** define reusable layouts that can be applied across different sites.

## Sections
CondationCMS structures content using smaller building blocks called **sections**.  
These allow flexible and modular content creation.

## Extensions
**Extensions** are built in JavaScript.  
They are primarily used by project and theme developers to:

- Add custom content tags  
- Create reusable template components  
- Register custom routes  

## Modules
**Modules** are developed in Java.  
They can extend the functionality of the server or individual sites by providing additional features or services.

## Hooks
**Hooks** allow developers to integrate with various parts of the core system  
without modifying the core classes directly.

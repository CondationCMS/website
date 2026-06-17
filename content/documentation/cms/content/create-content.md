---
title: Create Content
template: documentation/documentation.html
menu:
  position: 1
unpublish_date: null
published: true
publish_date: null
---

# Create Content

## Overview

CondationCMS provides flexible approaches for managing content to accommodate different workflows and user preferences. Whether you prefer working directly with files or using a visual interface, you can choose the method that best fits your team's needs.

---

## Two Approaches to Content Management

### 1. Manual File Editing

Create and edit content directly using your preferred text editor and version control system.

**How it works:**
- Write content in Markdown files manually
- Organize files according to CondationCMS file structure conventions
- Manage metadata (frontmatter) in each file
- Commit changes to your repository

**Advantages:**
- Full control over file structure and content organization
- Integration with version control (Git) for complete history and collaboration
- Works with any text editor or IDE
- Suitable for developers and technical content creators

**Responsibilities:**
- Ensure correct file naming conventions (`\<node\>.\<sectionname\>.\<uniquestring\>.md`)
- Maintain accurate metadata in file frontmatter (title, date, template, menu position, etc.)
- Validate Markdown formatting
- Test content rendering before publishing

**Best for:** Development teams, technical writers, and content creators comfortable with Markdown and file-based workflows.

---

### 2. Manager Application

Use the CondationCMS Manager application to create and edit content through a visual interface with forms and editors.

**How it works:**
- Open the Manager application in your browser
- Edit content directly in a live preview of your site
- Access customized forms and fields defined by your template developer
- Make changes through an intuitive UI without touching files directly

**Editing interface:**
- **Live Preview Panel**: See your content rendered in real-time as you edit
- **Dialog or Sidebar**: Access structured forms for entering content, defined by your template developer
- **Visual Feedback**: Immediate preview of changes without leaving the editor

**Advantages:**
- User-friendly interface for non-technical team members
- Guided editing through template-defined forms and fields
- Automatic metadata management (no need to manually edit frontmatter)
- Real-time visual preview
- Reduced risk of syntax errors or formatting issues
- Suitable for editors and content managers

**Customization:**
The forms, fields, and editor layout are completely customizable by template developers. Each project can define its own content editing experience tailored to the content type and team workflow.

**Best for:** Content editors, managers, and non-technical team members who prefer a graphical interface and guided workflows.

---

## Choosing Your Approach

| Consideration | Manual File Editing | Manager Application |
|---|---|---|
| **User experience** | Command-line / text editor | Visual interface |
| **Learning curve** | Moderate (Markdown + conventions) | Minimal |
| **Team** | Technical (developers, writers) | Non-technical (editors, managers) |
| **Speed** | Fast for experienced users | Fast with guided workflows |
| **Error risk** | Higher (manual metadata) | Lower (automated management) |
| **Customization** | File-based flexibility | Form-based structure |
| **Version control** | Native Git integration | Optional |

---

## Workflow Examples

### Example 1: Developer Using Manual Editing

1. Create a new Markdown file: `blog/tutorial.md`
2. Add frontmatter with metadata (title, date, template, etc.)
3. Write content and create sections (`blog/tutorial.hero.main.md`, `blog/tutorial.content.intro.md`)
4. Commit changes to Git
5. Push to production; CondationCMS automatically detects and renders the new content

### Example 2: Content Editor Using Manager Application

1. Open Manager application
2. Click "New Page" and select page type (blog post, product, landing page, etc.)
3. Manager displays a form tailored to your template
4. Fill in fields: title, description, featured image, body content
5. See live preview on the right side updating in real-time
6. For advanced sections, click into a sidebar dialog to add testimonials, features, or gallery items
7. Click "Publish" when ready; CondationCMS handles all metadata and file generation automatically

---

## Content Structure Consistency

Regardless of which approach you use, all content must follow CondationCMS conventions:

**Pages:**
- Named `\<pagename\>.md`
- Located in appropriate directory
- Include required metadata in frontmatter

**Sections:**
- Named `\<node\>.\<sectionname\>.\<uniquestring\>.md`
- Associated with parent page
- Written in Markdown format

**Metadata:**
- Title, description, and other frontmatter fields
- Page template assignment
- Menu position and visibility settings
- Publication status

The Manager application handles these details automatically, while manual editing requires you to manage them explicitly.

---

## Getting Started

**If you prefer manual editing:**
1. Familiarize yourself with CondationCMS file structure (Pages and Sections documentation)
2. Set up your preferred text editor
3. Clone your content repository
4. Create files following naming conventions
5. Write Markdown content and frontmatter
6. Test locally or in staging
7. Commit and push to production

**If you prefer the Manager application:**
1. Access the Manager application (URL provided by your administrator)
2. Log in with your credentials
3. Explore the interface and available content types
4. Create a new page and follow the form workflow
5. Use the live preview to verify your content
6. Publish when ready

Both approaches coexist—you can have developers managing some content via files while editors use the Manager application for other content on the same site.

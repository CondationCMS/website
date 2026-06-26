---
title: 'Why I Built a Markdown-First CMS Instead of Another Headless CMS'
seo:
  description: 'Why CondationCMS uses Markdown files, templates, Git, and a flat-file structure instead of a headless-first architecture.'
  keywords: ''
  author: ''
publish_date: 2026-06-25T00:00:00Z
template: blog-entry.html
unpublish_date: null
published: true
postType: general
---

To answer that question, I need to go back a bit. It all started in 2020, when I needed a CMS for a few personal projects. Up until that point I had mostly worked with WordPress, but it didn't feel like the right fit for what I had in mind. So I started an evaluation phase, looking at various systems.

After a while I found several options that covered parts of my requirements, but none of them were quite what I wanted overall. That's when I decided to just build a CMS myself — the system I actually wanted to work with.

Headless CMS were already gaining momentum back then, and I even spent some time building a headless prototype. But for the things I wanted to build, headless was clearly overkill and would have added significantly more work per project. Don't get me wrong: headless CMS are great, just not the right solution for every problem. That pushed me towards a more traditional approach.

My goals for the first version were:

+ a lean and fast system
+ content in Markdown, so I could write using any editor I liked without having to build a UI
+ content and configuration versioned in Git
+ installation that's as simple as possible
+ a setup that's attractive for developers, both for plugin and project development

## Lightweight system, simple installation

The system needed to be as simple to handle as possible. Installation should not require running through a complex wizard, and there should be no database involved.

Installing CondationCMS is accordingly short:
```
wget https://github.com/CondationCMS/cms-server/releases/download/v8.2.0/condation-server-linux-x64-2026.06.tar.gz
tar xfvz condation-server-linux-x64-2026.06.tar.gz
cd condation-server
./server.sh server start
```

That's it. The CMS is running and the test site is available at **http://localhost:2020**.

It starts in _DEV_ mode and will need some configuration before going to production, but depending on your internet speed the whole thing is up in under five minutes.

## Content in Markdown, versioned in Git

Creating content should be as straightforward as possible: create a file in your editor of choice, add front matter and Markdown content, done.

```markdown
---
title: Page title
---

# Page content

Here is some content!
```

A big advantage here is that content is easy to create and can be managed directly in Git. And it goes beyond just the content itself: site configuration, defined image resolutions, module configuration, and project extensions all live in the same repository. Everything that belongs to the project gets versioned together, which makes deployment significantly simpler and keeps the project portable.

## A system that's attractive for developers

Through the integration of the GraalJS engine, small extensions can be implemented directly inside the project as an **Extension**.

For example, a new shortcode can be defined and then used in Markdown:

```javascript
import { $hooks } from 'system/hooks.mjs';
// register component via js extensions
$hooks.registerAction("system/content/shortCodes", ({shortCodes}) => {
	shortCodes.put(
			"hello",
			({name}) => `Hello ${name}`
	)
	return null;
})
```

Extensions are plain JavaScript files, always part of the project, and automatically included in Git. They work well for small, project-specific solutions that you don't need to share across projects.

When things get more complex, there are modules — what other systems usually call plugins. Modules are written in Java and offer everything extensions do, plus access to the full Java ecosystem. If you need to integrate a third-party library or build something that should be reusable across multiple sites, a module is the right tool.

Providing that same shortcode via a module looks like this:

```java
// register component via java module
@ShortCode("hello")
public String hello_shortcode (String name) {
	return "Hello " + name;
}
```

Modules are installed globally on the server and can then be activated per site.

Looking back at those five goals from 2020 — lean, Markdown-based, Git-versioned, easy to install, developer-friendly — CondationCMS hits all of them. It's the system I wanted back then, and it's still the one I'd reach for today. If any of this sounds like what you've been looking for, the best way to find out is to give it a try.


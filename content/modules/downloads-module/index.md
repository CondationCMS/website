---
title: Downloads Module
template: content.html
---

# Downloads Module

The downloads-module is a small module for offering downloads and a counter for the number of downloads.

[Download](https://github.com/thmarx/downloads-module/releases)

## Downloads

Downloads must be stored in the **hosts/\<host\>/downloads** folder. 
The file name serves as the ID for referencing the download file.

## ShortCode

The ShortCode *downloads\_link* can be used to create the links in the content.

```shortcode
\[\[downloads_link id="test.zip"/\]\]
// Displays with number of downloads
\[\[downloads_link id="test.zip",count="true"/\]\]
```

## Template

The helper *downloads* can be used to create links within templates.

```html
<div class="container">
    <a th:href="${downloads.url('test.zip')}">Download here</a>
    <span>Number of downloads: <span th:text="${downloads.count('test.zip')}"></span></span>
</div>
```
---
title: Redirect Module
template: content.html
---

# Redirect Module

Redirect enables you to preserve SEO value by seamlessly redirecting outdated URLs during the process of rebuilding or restructuring your website.

```yaml
redirects: 
  - oldUriPattern: "/test"
    newUri: "/java"
  - oldUriPattern: "^/fold1/(.*)$"
    newUri: "/fold2/$1"
    useRegex: true
```
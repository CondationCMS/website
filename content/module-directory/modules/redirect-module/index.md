---
title: Redirect Module
template: module.html
module:
  description: Redirect solution
  version: v1.0.0
  github: https://github.com/CondationCMS/redirect-module
  issues: https://github.com/CondationCMS/redirect-module/issues
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
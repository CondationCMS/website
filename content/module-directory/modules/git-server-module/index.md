---
template: module.html
createdAt: 2025-08-27T08:06:41Z
createdBy: thorsten
published: false
title: git-server-module
seo:
  keywords: ''
  author: ''
  description: ''
unpublish_date: null
publish_date: null
module:
  description: Git integration
  version: v1.0.0
  github: https://github.com/CondationCMS/git-server-module
  issues: https://github.com/CondationCMS/git-server-module/issues
---

The Git module is a server module

### Installation

Add to the *server.toml*.
```toml
[modules]
active = ["git-server-module"]
```

Install the module
```shell
# install all required modules
server.sh module get-all
# or install only a single module
server.sh module install git-server-module
```
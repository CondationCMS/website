---
template: module.html
createdAt: 2025-08-01T06:43:57.286Z
createdBy: thorsten
published: true
title: Backup-server-module
seo:
  keywords: ''
  author: ''
  description: ''
unpublish_date: null
publish_date: null
---

# Backup module

This modules provides a simple backup solution

## Step by step

First activate thhe module inside the _server.toml_
```toml
# add the backup to the list of active modules
[modules]
active = ["backup-server-module"]
```

Then configure you backups inside _config/backup.yaml_
```yaml
target: /tmp
backups:
  - id: site-id
    cron: cron
```

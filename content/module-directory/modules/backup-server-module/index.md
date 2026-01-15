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
module:
  description: Backup solution
  version: v1.0.0
  github: https://github.com/CondationCMS/backup-server-module
  issues: https://github.com/CondationCMS/backup-server-module/issues
  features: "scheduled backeup, s3 or ftp backup" 
  installation: "simple installation via cli"
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

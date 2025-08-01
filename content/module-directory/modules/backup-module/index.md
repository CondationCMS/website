---
template: module.html
createdAt: 2025-08-01T06:43:57.286Z
createdBy: thorsten
published: false
title: backup-module
---

# Backup module

This modules provides a simple backup solution

```toml
# add the backup to the list of active modules
[modules]
active = ["backup-module"]

# config the backup
[backup]
enabled = true
# run backup every night at 2 o'clock
cron = "0 0 2 * * ?"
target = "/temp/backups"
```

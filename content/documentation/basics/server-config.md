---
title: Server configuration
template: documentation/content.html
menu:
  position: 1
---

# Server configuration

```toml
env = "dev"               # (1)

[server]
port = 1_010              # (2)
ip = "127.0.0.1"          # (3)

[ipc]
port = 6_868              # (4)
password = "test_pwd"     # (5)

[apm]
enabled = false           # (6)
max_requests = 100        # (7)
max_suspend = 0           # (8)
thread_limit = 10         # (9)

[module]
active = ["backup-server-module"] # (10)
```

(1) the environment can be set to **dev** ord **prod**. In **dev** some caches are disable and the handling of the **?preview** request parameter is enabled.

(2) and (3) are the connection settings. Port and ip to bind to.

(4)-(5) is the configuration of the inter process communication, used to send commands to the server. 
(4) the ipc port and 
(5) the password for simple security.

(6) to (9) is about the **application performance management**, used to config some basic performance parameters.
(6) to enable the performance managment
(7) the maximum number of concurrent requests 
(8) the max duration of time a request may stay suspended.
(9) the maximum number of thread per IP address

(10) is the list of active server modules, the backup-server-module for example.

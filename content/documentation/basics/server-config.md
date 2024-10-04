---
title: Server configuration
template: documentation/content.html
menu:
    position: 1
---

# Server configuration

```yaml
server:
    port: 1010              # (1)
    ip: "127.0.0.1"         # (2)
env: dev                    # (3)
ipc:                        # (4)
  port: 6868                # (5)
  password: test_pwd        # (6)
apm:                        # (7)
  enabled: false            # (8)
  max_requests: 100         # (9)
  max_suspend: 0            # (10)
  thread_limit: 10          # (11)
performance:                # (12)
  pool_enabled: false       # (13)
```

(1) and (2) are the connection settings. Port and ip to bind to.

(3) the environment can be set to **dev** ord **prod**. In **dev** some caches are disable and the handling of the **?preview** request parameter is enabled.

(4) is the configuration of the inter process communication, used to send commands to the server. (5) the ipc port and (6) the password for simple security.

(7) and (8) to enable the **application performance management**, used to config some basic performance parameters.
(9) the maximum number of concurrent requests and (10) the max duration of time a request may stay suspended.
(11) the maximum number of thread per IP address for DOS protection.

(12) the performance optimizations are experimental at the moment.
(13) enable javascript context pooling. As GraalJS contexts are single threaded, without pooling a new context is created for every request. With pooling enabled, the application hold a pool of contexts and share these between requests.
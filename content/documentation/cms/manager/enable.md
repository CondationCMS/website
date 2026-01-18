---
title: Enable
template: documentation/documentation.html
menu:
    position: 2
---

Activate the manager in *site.toml*

```toml
[ui]
managerEnabled = true
```

Create a *.env* file in the servers root directory and add the UI_SECRET variable.

```
UI_SECRET=xnK82mcK7I9s_K3j-L8vK9L2m_N3o_P4q_R5s_T6u_V7w_X8y_Z9a_B0c_D1e
```

To access the manager a user with role manager in the correct realm (manager-users) must be created:
### Add user

```console
server.sh server add_user -r manager-users -ro admin <username> <password> <email>
```

After starting the server, the manager is accessable under the sites url with a appended /manager

For example:
```
http://localhost:8080/manager/
```
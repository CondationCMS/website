---
title: Server Configuration
template: documentation/documentation.html
menu:
  position: 1
unpublish_date: null
published: true
publish_date: null
---

# Server Configuration

Server configuration is managed through the main configuration file, which defines environment settings, network parameters, inter-process communication, application performance management, and active server modules.

```toml
env = "dev"               # (1)

\[server\]
port = 1_010              # (2)
ip = "127.0.0.1"          # (3)

\[ipc\]
port = 6_868              # (4)
password = "test_pwd"     # (5)

\[apm\]
enabled = false           # (6)
max_requests = 100        # (7)
max_suspend = 0           # (8)
thread_limit = 10         # (9)

\[modules\]
active = \["backup-server-module"\] # (10)
```

## Configuration Parameters

**(1) Environment**

The environment setting determines the operational mode of the server. Two options are available:

- **dev** - Development mode. In this mode, certain caches are disabled to allow for immediate reflection of code changes. Additionally, the `?preview` request parameter is enabled, allowing developers to preview content changes before publication.
- **prod** - Production mode. Optimized for performance with caches fully enabled and preview parameters disabled.

## Server Connection Settings

**(2) Port**

The network port that the server will bind to and listen for incoming HTTP requests. In the example, port 1010 is used. You should choose a port that is not already in use by other services on your system.

**(3) IP Address**

The IP address that the server will bind to. The example uses `127.0.0.1`, which is the localhost address, making the server accessible only from the local machine. To allow remote connections, change this to `0.0.0.0` to listen on all available network interfaces, or specify a particular IP address.

## Inter-Process Communication (IPC) Configuration

Inter-process communication allows you to send commands to the running server from external processes or command-line interfaces.

**(4) IPC Port**

The network port dedicated to inter-process communication. This port is used to send administrative commands to the server. In the example, port 6868 is designated for IPC connections.

**(5) IPC Password**

A simple password-based security mechanism for IPC connections. This password must be provided when attempting to communicate with the server through the IPC interface. While this provides basic security, it should be treated as a simple authentication layer rather than a complete security solution.

## Application Performance Management (APM) Configuration

The APM section configures basic performance monitoring and resource management parameters.

**(6) Enabled**

A boolean flag (true/false) that activates or deactivates application performance management. When enabled, the server enforces the performance constraints defined in the subsequent parameters. In the example, APM is disabled.

**(7) Maximum Requests**

The maximum number of concurrent requests the server will process simultaneously. This parameter prevents the server from being overwhelmed by too many simultaneous connections. The example sets this limit to 100 concurrent requests.

**(8) Maximum Suspend Duration**

The maximum duration (in milliseconds) that a request is allowed to remain in a suspended state. A value of `0` typically means no time limit or suspension is not enforced. This parameter helps prevent long-running or stuck requests from consuming resources indefinitely.

**(9) Thread Limit**

The maximum number of worker threads that can be allocated per IP address. This parameter protects against resource exhaustion from a single source by limiting how many concurrent threads any single IP address can use. The example limits each IP address to a maximum of 10 threads.

## Module Configuration

**(10) Active Modules**

The list of server modules that should be loaded and activated when the server starts. Modules extend the server's functionality with additional features. In the example, the `backup-server-module` is active, meaning the backup functionality is enabled. You can add multiple modules to this array to activate additional capabilities. Modules are specified by their identifier names as a string array.

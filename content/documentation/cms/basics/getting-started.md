---
title: Getting started
template: documentation/documentation.html
menu:
  position: 1
unpublish_date: null
published: true
publish_date: null
---

# Getting started

This section covers the essential steps to get CondationCMS up and running, including system requirements, installation procedures, and basic server management commands.

## Requirements

CondationCMS requires **Java version 25** or later to be installed on your system. Java 25 provides the runtime environment necessary for the CondationCMS server to execute.

If you do not have Java installed, you can download it from the official [Java website](https://www.oracle.com/java/technologies/downloads/#java25) or use your system's package manager.

## Installation

To install CondationCMS, follow these steps:

1. Download the current [latest release](https://github.com/CondationCMS/distribution/releases) from the official GitHub repository.
2. Unzip the release archive to a folder of your choice on your system.

Since version 8.0.0, CondationCMS provides pre-built releases for all major operating systems, including Linux, Windows, and macOS. These releases include the required Java 25 runtime, eliminating the need to install Java separately if you use a pre-built release.

### Configuration Files

After installation, you will need to configure three main configuration files to customize your CondationCMS deployment:

- [Server configuration](/documentation/cms/configuration/server-config) - Configure server settings such as port, IP address, IPC, and performance management
- [Site configuration](/documentation/cms/configuration/site-config) - Configure individual site settings including hostname, theme, caching, and content processing
- [Media configuration](/documentation/cms/configuration/media-config) - Configure media formats, image transformations, and compression settings

## Starting the Server

Once CondationCMS is installed and configured, you can start the server using the command-line interface:

```shell
./server.sh server start
```

This command launches the CondationCMS server with the configuration settings defined in your configuration files. The server will begin listening for incoming requests on the configured port and IP address.

## Installing Modules

Modules provide additional server-side functionality and must be installed before they can be activated in your site configuration.

To install a specific module:

```shell
./server.sh module get <module>
```

Replace `<module>` with the module name you wish to install (for example, `thymeleaf-module`).

### Installing All Required Modules

If you want to install all modules that are required or recommended for your configuration, you can use:

```shell
./server.sh module get-all
```

This command will download and install all available modules, ensuring that all potential dependencies are satisfied. After installation, you can then selectively activate the modules you need in your site configuration.

## Installing Extensions

Extensions provide project-specific and theme-specific functionality built in JavaScript.

To install an extension for a specific site:

```shell
./server.sh extension install <extension> <host>
```

Replace `<extension>` with the extension identifier and `<host>` with the hostname of the site where the extension should be installed. Extensions are site-specific and must be installed for each host that requires them.

## Installing Themes

Themes provide pre-designed layouts and styling for your sites.

To install a theme:

```shell
./server.sh theme get <theme>
```

Replace `<theme>` with the theme name you wish to install. Once a theme is installed, you can activate it by setting the `theme` parameter in your site configuration file.

---

For more detailed information about each configuration aspect, refer to the specific documentation pages linked above.

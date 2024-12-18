---
title: Basic
template: documentation/content.html
menu:
    position: 1
---

# Basics

## Requirements

Condation requires java version 21 installed.

## Installation

Download the current [latest release](https://github.com/CondationCMS/cms-server/releases) and unzip the release to a folder of your choice.

* [Server configuration](/documentation/basics/server-config)
* [Site configuration](/documentation/basics/site-config)
* [Media configuration](/documentation/basics/media-config)

## Starting the server

```shell
java -jar cms-server.jar server start
```

## Installing modules

```shell
java -jar cms-server.jar module get <module>
```

It is also possible to download all required modules

```shell
java -jar cms-server.jar module get-all
```

## Installing extensions

```shell
java -jar cms-server.jar extension install <extension> <host>
```

## Installing themes

```shell
java -jar cms-server.jar theme get <theme>
```
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
Since version 8.0.0 we create releases for linux, windows and mac, that contain the needed java version.

* [Server configuration](/documentation/basics/server-config)
* [Site configuration](/documentation/basics/site-config)
* [Media configuration](/documentation/basics/media-config)

## Starting the server

```shell
./server.sh server start
```

## Installing modules

```shell
./server.sh module get <module>
```

It is also possible to download all required modules

```shell
./server.sh module get-all
```

## Installing extensions

```shell
./server.sh extension install <extension> <host>
```

## Installing themes

```shell
./server.sh theme get <theme>
```
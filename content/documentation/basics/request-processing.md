---
title: Request processing
template: documentation/content.html
menu:
    position: 1
---

# Request processing

## Assets handler /assets/

Read more about media related stuff [here](/documentation/content/media).

## Media handler /media/

Read more about media related stuff [here](/documentation/content/media).

## Theme handler /theme/

Read more about media related stuff [here](/documentation/templates-and-themes).

## Default handler /

### Processing ordern

The default request handling consists of a couple of steps.

1. authHandler: Handler for authentication
1. initContextHandler: Handler that creates the RequestContext
1. routeHandler: Handler for ExtensionPoint **HttpRouteExtensionPoint**
1. routesHandler: Handler for ExtensionPoint **HttpRoutesExtensionPoint**
1. extensionRouteHandler: Handler for Routes registered in extensions see [hooks](/documentation/extensions-and-modules/hooks) for an example
1. viewHandler: Handler for [views](/documentation/content/views)
1. taxonomyHandler: Handler for [taxonomy](/documentation/content/taxonomy)
1. contentHandler: Default handler for content and redirects
---
title: Request processing
template: documentation/documentation.html
menu:
  position: 3
unpublish_date: null
published: true
publish_date: null
---

# Request Processing

Request processing in the application is handled through multiple specialized handlers that manage different types of requests. Each handler is responsible for processing specific resource types and following a defined workflow.

## Assets Handler: /assets/

The assets handler manages requests for static files and resources. This includes stylesheets, JavaScript files, fonts, and other static assets required by your application.

For more detailed information about media configuration and asset management, see the [media configuration documentation](/documentation/content/media).

## Media Handler: /media/

The media handler processes requests for image and media files. It applies transformations such as resizing, format conversion, and compression based on the media formats defined in your configuration.

For comprehensive details about media handling, formats, and configuration options, refer to the [media documentation](/documentation/content/media).

## Theme Handler: /theme/

The theme handler manages requests related to theme assets and resources. This includes theme-specific files, styling, and template assets required for rendering your site with a particular theme.

For more information about themes, template structure, and theme configuration, see the [templates and themes documentation](/documentation/templates-and-themes).

## Default Handler: /

The default handler processes all other requests that are not handled by the specialized handlers above. It manages content requests, view rendering, and default routing behavior.

### Processing Order

The default request handling follows a specific sequence of steps. Each handler processes the request and passes it to the next handler in the chain. This ordered processing ensures proper request context, authentication, and routing.

1. **authHandler** - Handler for authentication and authorization. Validates user identity and permissions before processing the request.

2. **initContextHandler** - Handler that creates and initializes the RequestContext. This context object is available throughout the request lifecycle and contains request-specific information.

3. **routesHandler** - Handler for the HttpRoutesExtensionPoint. This allows extensions and modules to register custom HTTP routes and handlers.

4. **extensionRouteHandler** - Handler for routes registered in extensions. Processes requests that match routes defined by installed extensions. For implementation examples, see the [hooks documentation](/documentation/extensions-and-modules/hooks).

5. **viewHandler** - Handler for processing [views](/documentation/content/views). This handler manages the rendering of view components and templates.

6. **taxonomyHandler** - Handler for [taxonomy](/documentation/content/taxonomy) requests. This manages requests related to categories, tags, and taxonomical organization of content.

7. **contentHandler** - Default handler for content and redirects. Processes standard content requests and manages URL redirects, serving as the final fallback handler in the processing chain.

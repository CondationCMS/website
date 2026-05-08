---
title: Media configuration
template: documentation/documentation.html
menu:
    position: 3
---

# Media Configuration

Media configuration settings are stored in the **config/media.toml** file. This file defines how images and other media assets are processed and served on your site.

## Configuration Format

```toml
[[media.formats]]       # (1)
name = "small"          # (2.1)
width = 256             # (2.2)
height = 256            # (2.3)
format = "webp"         # (2.4)
compression = true      # (2.5)
```

## Configuration Parameters

**(1) Media Format Definition**

This section defines the required media formats for your site. These formats are used when images are accessed through the media handler endpoint. Multiple format definitions can be added by repeating the `[[media.formats]]` block.

**(2.1) Name**

The name of the format, which is used as a reference identifier when requesting images through the media handler. For example, to access an image using the "small" format, you would use: **/media/images/logo.jpg?small**

**(2.2 and 2.3) Width and Height**

Specify the width and height of the image in pixels. These dimensions define the target size for the processed image. You can set both dimensions to the same value for square images, or use different values for rectangular proportions.

**(2.4) Format**

The desired output file format for processed images. The following formats are currently supported:

- **webp** - Modern, highly efficient image format with excellent compression (recommended for web)
- **jpeg** - Traditional JPEG format, widely compatible across browsers
- **png** - Lossless format, suitable for images requiring transparency or exact color preservation

**(2.5) Compression**

A boolean flag (true/false) that enables or disables compression for the image format. When set to `true`, the processed images will be compressed to reduce file size, which is beneficial for web performance. Set to `false` to preserve maximum image quality without compression.

## Usage Example

Once you've defined your media formats in the configuration file, you can access images using the format name as a query parameter:

```
/media/images/logo.jpg?small
/media/images/banner.png?small
```

This will automatically process and serve the image according to the specifications defined for the "small" format.
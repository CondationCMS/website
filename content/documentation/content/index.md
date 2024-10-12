---
title: Editing content
template: documentation/content.html
menu:
    position: 10
---

Content is created in plan text, for formatting [Markdown](/documentation/content/markdown) can be used.

## ShortCodes

If the possibilities of Markdown are not sufficient, extensions can be created by creating your own [ShortCodes](/documentation/extensions-and-modules). These extensions should be able to cover most use cases.

## Preview

If the CMS is running in DEV mode (caution, this is not recommended for productive operation), you can activate preview mode by appending **?preview** to the URL.
This means that unpublished content is also displayed.

## MetaData

The front matter yaml header defines the required metadata as well as your custom data, [read more](/documentation/content/metadata)

## How is content found

All content is stored inside the *content/* folder of a site.
Every content file has the file ending **.md**.

If a request comes in, the following steps are executed to find the corresponding content file.

Request: http://condation.com/documentation

1. get the uri: /documentation
2. check if there is an folder **documentation** in the sites *content/* folder
3. **if yes**: try to load the index.md of the documentation folder
4. **if no**: check if there is a file named **documentation.md** inside the **content/** folder
5. **if yes**: load it
6. if no: 404

Some example requests:

http://condation.com/ => content/index.md

http://condation.com/documentation => content/documentation/index.md

http://condation.com/documentation/content/metadata => content/documentation/content/metadata.md
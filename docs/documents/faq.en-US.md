---
order: 2
---

# FAQ

### Why not do batch downloads?

If there is a need to download a set of official [Bootstrap icons](https://github.com/twbs/icons) directly , I did not expect a more practical scenario for the time being.

**Download operation steps**

1. Enter the page [Releases the latest version](https://github.com/twbs/icons/releases/latest)
2. Click to `Source code (zip)` download all of svg icons `icons` folder

_Or you can [click here to download](https://github.com/twbs/icons/archive/refs/tags/v1.8.1.zip)_

### What if I can’t find the icon I need?

If there are too many missing, it is recommended to use [iconfont](https://iconfont.cn/) to manage project icons. Reference [using SVG Symbol icon](/en-US/documents/instruction#use-svg-symbol-icons)

If there are few missing, it is recommended to download the svg icon directly to the project. Reference [custom icons](/en-US/documents/instruction#custom-icon)

### I want to use this set of icons, but the project does not support svg?

If webpack, by configuring [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) to the `svg` icon as a React component introduced.

Or use the [official document usage directly](https://icons.getbootstrap.com/#usage).

---
order: 2
---

# 常见问题

### 为什么不做批量下载？

如果有需要直接下载一套 [Bootstrap 官方图标](https://github.com/twbs/icons) 就可以，暂时没想到比较实用的场景。

**下载操作步骤**

1. 进入页面 [Releases 最新版本](https://github.com/twbs/icons/releases/latest)
2. 点击 `Source code (zip)` 下载，全部的 svg 图标在 `icons` 文件夹下

_或者你也可以[点击此处进行下载](https://github.com/twbs/icons/archive/refs/tags/v1.8.0.zip)_

### 找不到需要的图标怎么办？

如果缺失比较多，推荐使用 [iconfont](https://iconfont.cn/) 管理项目图标。参考 [使用 SVG Symbol 图标](/documents/instruction#使用-svg-symbol-图标)

如果缺失比较少，建议直接下载 svg 图标到项目中。参考 [自定义图标](/documents/instruction#自定义图标)

### 想用这套图标，但是项目不支持 svg ？

如果使用 `webpack`，可以通过配置 [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) 来将 `svg` 图标作为 `React` 组件导入。

或者直接使用[官方文档用法](https://icons.getbootstrap.com/#usage)。

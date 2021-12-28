# 贡献指南

`doly-icons` 是一个基于 Bootstrap Icons 的 React 图标组件。

**特性**

- 内置图标使用 Bootstrap Icons
- 支持自定义图标
- 支持使用 SVG Symbol
- 全局配置

## 目录结构

```
.
├── babel.config.js       # 用于测试环境的 babel 配置
├── docs                  # 项目文档
├── es                    # 构建输出目录 ES Modules
├── lib                   # 构建输出目录 CommonJS
├── scripts               # 脚本文件
├── src                   # 源文件目录
│   ├── icon              # 组件
│   ├── icons             # 该目录下的文件由脚本自动生成
│   ├── icons-index.ts    # 该文件由脚本自动生成
└── tests                 # 测试
```

## 更新说明

原则上是同 Bootstrap Icons 版本更新而更新。

**更新步骤**

1. 安装最新的 `bootstrap-icons`

```bash
yarn add bootstrap-icons@^ --dev
```

2. 生成数据

```bash
# 将 bootstrap-icons 的图标处理到 src/icons 目录下
yarn generator:icons

# 抓取官网的标签分类生成索引数据并缓存（如果分类或标签出错，请在 scripts/data-correct.js 中修正）
# 然后生成图标数据到 src/icon/demos/all/data.ts
yarn generator:data
```

> ps: git 提交后，会自动生成文档站点。

3. 构建发布

```bash
# 构建
yarn build

# 发布
npm publish
```

## git 提交信息

> 规范使用的是 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

你可以使用交互式命令方式生成规范的提交格式。

```bash
yarn commit
```

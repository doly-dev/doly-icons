# 贡献指南

`doly-icons` 是一个基于 Bootstrap Icons 的 React 图标组件。

## 特性

- 内置图标使用 Bootstrap Icons
- 支持自定义图标
- 支持使用 SVG Symbol
- 全局配置

## 目录结构

```text
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

1. 更新 `bootstrap-icons` 依赖

```bash
yarn upgrade bootstrap-icons@latest --dev
```

2. 生成数据

```bash
yarn generator
```

在 `scripts/translate-cache.json` 中查看翻译是否准确；在 `yarn start` 运行查看分类是否准确；

校对完成后，重新运行 `yarn generator`

3. 本地测试

本地文档站点，查看变动图标是否正确

```bash
yarn start
```

快照测试

```bash
yarn test
```

4. 本地提交 git

> 提交信息规范使用的是 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

你可以使用交互式命令方式生成规范的提交格式。

```bash
yarn commit
```

5. 发布 `npm`

```bash
# 生成一个版本，并创建一个git tag
npm version [newversion]

npm publish
```

6. 远程提交 git

```bash
# git action 会自动生成文档站点
git push

# 提交tag
git push --tags
```

# 提交规范（Conventional Commits）

本项目使用 `semantic-release` 自动分析提交记录，决定：

- 是否发布新版本
- 发布什么版本（patch / minor / major）
- 自动生成 `changelog.md`

## 提交格式

```text
<type>(<scope>): <subject>
```

- `type`：提交类型（必须）
- `scope`：影响范围（可选）
- `subject`：简短说明（必须）

示例：

```text
fix(upload): 修复空文件导致的报错
feat(table): 支持行选择
docs(readme): 更新安装说明
```

## 哪些提交会触发发版

- `fix:` -> patch（如 `1.0.0 -> 1.0.1`）
- `feat:` -> minor（如 `1.0.0 -> 1.1.0`）
- `feat!:` 或正文含 `BREAKING CHANGE:` -> major（如 `1.0.0 -> 2.0.0`）

示例：

```text
fix(full-modal): 修复拖拽边界计算
feat(color-picker): 新增预设颜色分组
feat!: 移除旧版 setConfig 参数
```

Breaking change 示例：

```text
refactor(config): 调整配置结构

BREAKING CHANGE: setConfig 不再支持 legacy 字段
```

## 默认不触发发版的类型

以下类型通常不会触发版本发布（是否显示到 changelog 取决于插件配置）：

- `docs:`
- `chore:`
- `style:`
- `refactor:`
- `test:`
- `ci:`
- `build:`

## 推荐约定

- 发布相关改动优先使用：`feat` / `fix`
- 有破坏性变更必须使用：`!` 或 `BREAKING CHANGE`
- 文档、脚本、CI 改动建议使用：`docs` / `chore` / `ci`
- 一个 commit 只做一件事，`subject` 尽量写清楚

## 常用模板

```text
fix(scope): 修复 xxx 问题
feat(scope): 新增 xxx 能力
docs(scope): 更新 xxx 文档
chore(scope): 调整 xxx 配置
ci(scope): 优化 xxx 工作流
```

## FAQ

### 为什么 push 后没有发版？

检查提交类型是否是 `feat` / `fix` / breaking change。如果都是 `docs`、`chore`、`ci`，通常不会发布新版本。

### changelog 内容是怎么来的？

`semantic-release` 会根据符合 Conventional Commits 规范的提交记录自动生成。提交描述越清晰，changelog 质量越高。


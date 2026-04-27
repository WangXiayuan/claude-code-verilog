# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 协作准则

收到任何需求时，先进行头脑风暴——不要直接动手实现。向用户提问以充分理解需求，包括但不限于：预期效果、适用场景、边界条件、优先级。确认理解一致后再开始执行。

## 项目概述

这是一个基于 VitePress 的静态文档网站，内容为使用 Claude Code 进行 Verilog 开发的完整指南与个人心得。托管在 GitHub Pages，推送代码自动部署。

## 技术栈

- **VitePress**: 静态站点生成器，Markdown 编写内容
- **GitHub Pages**: 免费托管，GitHub Actions 自动部署

## 常用命令

```bash
npm run docs:dev      # 启动本地开发服务器 (http://localhost:5173)
npm run docs:build    # 构建生产版本
npm run docs:preview  # 本地预览生产构建
```

## 目录结构

```
docs/
├── .vitepress/config.js  # 站点配置（导航、侧边栏、搜索）
├── index.md              # 首页（hero + features）
├── guide/                # 使用指南（4篇核心文档）
│   ├── getting-started.md
│   ├── basic-workflow.md
│   ├── verilog-prompting.md
│   └── advanced.md
├── notes/                # 个人心得笔记（持续添加）
│   └── index.md
└── public/               # 静态资源
.github/workflows/deploy.yml  # 推送自动部署
```

## 添加新内容

- **新指南**：在 `docs/guide/` 下创建 `.md` 文件，在 `docs/.vitepress/config.js` 侧边栏中注册
- **新笔记**：在 `docs/notes/` 下创建 `.md` 文件，文件命名建议 `YYYY-MM-DD-主题.md`
- 首页特征列表在 `docs/index.md` 的 `features` 区域修改

## 部署

推送到 main/master 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。首次使用需在 GitHub 仓库 Settings → Pages 中启用 GitHub Pages，Source 设为 "GitHub Actions"。

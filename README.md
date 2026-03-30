# The Scandal Maker Has Returned

> *She was framed. She was broken. Now she is back.*

《丑闻制造者归来》韩漫粉丝站 — Next.js + Cloudflare Pages

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS + Framer Motion
- **部署**: Cloudflare Pages
- **存储**: 无（纯静态数据）

## 本地开发

```bash
npm install
npm run dev
# 访问 http://localhost:3000
```

## 页面结构

| 路由 | 内容 |
|------|------|
| `/` | 首页 — 全屏动效入场 |
| `/story` | 故事介绍 + 时间线 |
| `/characters` | 角色图鉴 |
| `/archives` | 丑闻档案馆 |

## 部署到 Cloudflare Pages

1. 将代码推送到 GitHub
2. 在 Cloudflare Pages 新建项目，连接 GitHub 仓库
3. 构建命令：`npm run build`
4. 输出目录：`.next`
5. 完成，自动部署 ✅

## 扩展计划

- [ ] 丑闻生成器（用户输入名字生成复古报纸头条）
- [ ] 章节追更提醒（邮件订阅）
- [ ] 粉丝投稿社区
- [ ] 角色关系图谱

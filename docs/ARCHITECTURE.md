# Engineering Digital Portfolio V2.0 — Phase 1 架构与交付状态

> 更新日期：2026-09-13  
> 状态依据：当前本地源码  
> 项目阶段：Phase 1 进行中，约 60% 页面开发完成

本文档只描述当前仓库中已经存在的代码与页面。旧规划中存在、但当前源码尚未完成的内容均明确标记为 **Pending** 或 **Not Implemented**。

## 1. 当前状态摘要

### 状态定义

- **Implemented**：页面已有正式内容、专用或通用组件、样式与可访问路由。
- **Pending**：路由与占位壳层已经存在，但正式内容或最终视觉尚未完成。
- **Not Implemented**：当前源码中没有对应实现，或只有未来扩展接口。

### 顶层信息架构（IA）

```text
01 Cover                         Implemented
  ↓
02 About                         Implemented
  ↓
03 Background                    Implemented
  ↓
04 Case 01                       Implemented
  ├── 01 背景
  ├── 02 问题
  ├── 03 机会
  ├── 04 方案
  ├── 05 设计
  ├── 06 验证
  ├── 07 迭代
  ├── 08 演进
  └── 09 方法
  ↓
05 Case 02                       Pending
  ↓
06 Summary                       Pending
  ↓
07 Contact                       Pending
```

Case01 是当前完成度最高的案例，包含独立章节导航、九个内部锚点、图片放大、响应式布局以及打印样式。

## 2. 路由清单与完成状态

| 路由 | App Router 入口 | 实际渲染组件 | 状态 | 当前实现 |
| --- | --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | `CoverPage` | Implemented | 作品集封面、价值路径、能力标签、两个案例入口 |
| `/about/` | `src/app/about/page.tsx` | `AboutMePage` | Implemented | 工程经历路径、业务理解、产品优势 |
| `/background/` | `src/app/background/page.tsx` | `EngineeringBackgroundPage` | Implemented | 工程经验 → 产品方法 → 数字产品能力映射 |
| `/case01/` | `src/app/case01/page.tsx` | `PortfolioPage → Case01Page` | Implemented | 工程质量验收数字化案例，九章完整叙事 |
| `/case02/` | `src/app/case02/page.tsx` | `PortfolioPage → ContentRenderer` | Pending | 仅有 Case Header 与深色占位模块，正式案例内容未实现 |
| `/summary/` | `src/app/summary/page.tsx` | `PortfolioPage → ContentRenderer` | Pending | 路由可访问，只有 Summary 内容占位 |
| `/contact/` | `src/app/contact/page.tsx` | `PortfolioPage → ContentRenderer` | Pending | 路由可访问，联系方式、简历与外部链接未配置 |

所有路由均由 Next.js App Router 在构建期生成静态 HTML。

## 3. Case01 当前页面结构

Case01 在 `src/content/pages/case01.md` 中维护内容，在 `Case01Page.tsx` 中使用专用类型和布局渲染。

| 章节 | 锚点 | 短标题 | 当前内容 |
| --- | --- | --- | --- |
| 01 | `#page04` | 背景 | 工程经验来源与验收流程拆解 |
| 02 | `#page05` | 问题 | 三种验收情境、痛点与机会 |
| 03 | `#page06` | 机会 | 产品机会评估、优先级矩阵与首轮方向 |
| 04 | `#page07` | 方案 | 验收闭环流程与产品架构 |
| 05 | `#page08` | 设计 | 场景化方案、关键交互决策与产品原则 |
| 06 | `#page09` | 验证 | 产品假设、测试信息、发现与验证边界 |
| 07 | `#page10` | 迭代 | 迭代总览素材与产品方法沉淀 |
| 08 | `#page11` | 演进 | MVP 能力、平台演进方向与路线图 |
| 09 | `#page12` | 方法 | 差异化能力、产品判断框架与岗位问题匹配 |

内部锚点沿用开发阶段的 `page04–page12` 标识，以避免破坏既有浏览器评论定位；对用户展示的编号为 01–09。

## 4. 当前组件结构

```text
src/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── background/page.tsx
│   ├── case01/page.tsx
│   ├── case02/page.tsx
│   ├── summary/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── pages/
│   │   ├── CoverPage.tsx
│   │   ├── AboutMePage.tsx
│   │   ├── EngineeringBackgroundPage.tsx
│   │   ├── Case01Page.tsx
│   │   └── PortfolioPage.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   └── ContentRenderer.tsx
│   ├── case/
│   │   ├── CaseHeader.tsx
│   │   ├── Case01SideNav.tsx
│   │   ├── CaseNavigator.tsx
│   │   ├── ComparisonBlock.tsx
│   │   ├── ProcessFlow.tsx
│   │   └── Timeline.tsx
│   ├── gallery/
│   │   ├── ImageGallery.tsx
│   │   └── Lightbox.tsx
│   ├── workflow/
│   │   ├── ArchitectureDiagram.tsx
│   │   ├── WorkflowExpandable.tsx
│   │   ├── MechanismCard.tsx
│   │   ├── FailureCard.tsx
│   │   └── VideoPlaceholder.tsx
│   ├── common/
│   ├── layout/
│   └── ui/
├── config/portfolio.config.ts
├── content/
│   ├── loader.ts
│   ├── schema.ts
│   └── pages/*.md
└── lib/utils.ts
```

### 当前渲染分流

```text
App Router page
      ↓
PortfolioPage(routeId)
      ├── case01 → Case01Page（专用九章渲染）
      └── 其他通用路由
            ├── landing/profile/closing → HeroSection
            ├── case → CaseHeader
            └── sections → ContentRenderer
```

`ComparisonBlock`、`ProcessFlow`、`Timeline`、`ImageGallery`、`FailureCard` 和 `VideoPlaceholder` 已存在于组件库，但并不代表对应正式页面内容已经完成。

## 5. 内容加载逻辑

1. `src/config/portfolio.config.ts` 维护路由 ID、路径、内容文件与导航分组。
2. `src/content/loader.ts` 使用 Node `fs` 在构建期读取 `src/content/pages/*.md`。
3. `gray-matter` 解析 YAML frontmatter；Markdown 正文作为 `body` 返回。
4. 通用页面使用 `PortfolioPageContent` 与 `ContentRenderer`。
5. Cover、About、Background 和 Case01 在基础内容类型之上定义页面专用字段。
6. Case01 的 `casePages` 数据由 `Case01Page.tsx` 的专用类型渲染；其通用 `sections` 当前为空。
7. 当前无 CMS、数据库、API Route、Server Action 或运行时内容请求。

`short` 与 `deep` 两个版本键已经配置，但目前使用相同的七个顶层路由。独立 Deep Dive 内容集合为 **Not Implemented**。

## 6. 视觉与交互实现

- 全局设计令牌与主要页面样式位于 `src/app/globals.css`。
- 当前视觉基调为白色/浅灰背景、深蓝黑文字与青绿色强调。
- Cover、About、Background、Case01 使用页面专用布局。
- Case01 支持固定侧栏章节导航、卡片化信息、深色总结模块及本地图片资产。
- `Lightbox` 提供图片放大查看。
- 已包含桌面与移动端响应式规则、`prefers-reduced-motion` 适配和打印样式。
- 大量动画、复杂 Dashboard 和运行时数据可视化均未引入。

## 7. 静态资源

当前正式视觉素材集中在：

```text
public/
├── og.png
└── assets/images/case01/
    ├── 工程现场照片
    ├── 任务与图纸流程素材
    ├── 验证 01–04 素材
    ├── 产品迭代总览
    └── 方案与交互对比素材
```

Case02 专属正式素材为 **Not Implemented**。

## 8. 部署配置与兼容性

### Next.js

`next.config.ts` 当前配置：

- `output: "export"`：生成纯静态站点至 `out/`。
- `trailingSlash: true`：输出目录式路由。
- `images.unoptimized: true`：静态导出无需图片优化服务。
- `basePath` 与 `assetPrefix` 默认为空。
- 仅在 GitHub Actions 或显式设置 `NEXT_PUBLIC_BASE_PATH` 时增加仓库子路径。

### 构建

- 包管理器：`pnpm@11.19.0`
- 构建命令：`pnpm build`
- 类型检查：`pnpm typecheck`
- 静态输出目录：`out/`
- 当前构建不依赖必填本地环境变量。

源码中使用的环境变量均有安全默认值：

- `NEXT_PUBLIC_PORTFOLIO_VERSION`：默认 `short`
- `NEXT_PUBLIC_BASE_PATH`：默认空字符串
- `GITHUB_ACTIONS`：仅用于 GitHub Pages 子路径判断
- `NEXT_PUBLIC_SITE_URL`：GitHub workflow 中设置，但当前页面代码未读取

### Vercel

当前项目可直接部署到 Vercel：

1. GitHub 仓库根目录应为包含 `package.json` 的项目目录。
2. 若 ZIP 内容直接作为仓库根目录上传，Vercel 的 **Root Directory 保持空白**，无需额外修改。
3. Framework Preset 使用 Next.js 自动识别。
4. Build Command 可使用默认值，或显式设置为 `pnpm build`。
5. 不要在 Vercel 设置 GitHub Pages 使用的 `GITHUB_ACTIONS=true` 或 `NEXT_PUBLIC_BASE_PATH=/engineering-digital-portfolio`。
6. 当前无必填环境变量，也无本地文件系统运行时依赖。
7. GitHub 仓库连接 Vercel 后，push/PR 自动预览与 main 分支生产部署可用。

如果 GitHub 仓库仍保留 `work/engineering-digital-portfolio` 这一父级目录结构，则必须在 Vercel 将 Root Directory 指向该子目录；本次交付 ZIP 已将项目文件置于 ZIP 根层级，因此不会产生该问题。

### GitHub Pages

`.github/workflows/deploy.yml` 已实现 main 分支推送与手动触发：

- 安装 pnpm 11.19.0 和 Node 24
- 使用 frozen lockfile 安装依赖
- 设置 GitHub Pages base path
- 构建并上传 `out/`
- 使用官方 Pages Actions 部署

GitHub Pages 与 Vercel 可以并存；若只保留 Vercel，可后续停用 GitHub Pages workflow，当前不影响 Vercel 构建。

## 9. Pending / Not Implemented

### Pending

- Case02 正式案例内容、页面专用视觉与素材
- Summary 最终总结内容
- Contact 联系方式、简历下载和外部链接

### Not Implemented

- 独立的 `deep` 版本页面集合
- Case02 正式工作流、失败复盘与治理机制内容
- Case02 专属图片或视频素材
- CMS、数据库、后台接口和动态鉴权
- 线上表单提交或邮件发送
- 运行时分析 Dashboard

这些项目没有被计入当前完成页面。

## 10. 与旧 Phase1 架构文档的主要变化

- Case01 已从“可扩展案例壳层”发展为专用九章完整案例页。
- 新增 Case01 固定侧栏导航和 `page04–page12` 内部锚点。
- Cover、About、Background 已从通用内容接口升级为专用页面组件。
- Case01 已完成验证、迭代、产品演进和项目沉淀内容，不再停留在 01–07 的早期说明。
- 当前架构是“专用完成页 + 通用占位页”的混合模式，不再是所有页面完全依赖 `ContentRenderer`。
- `short` 与 `deep` 目前没有内容差异；旧文档中的 Phase 2 扩展描述尚未实现。
- 部署说明补充 Vercel 根目录、base path 与 GitHub 自动部署要求。

## 11. 本次交付包规则

源码 ZIP 应包含：

- `src/`
- `public/`
- `.github/workflows/`
- `docs/`
- `scripts/`
- `package.json`、`pnpm-lock.yaml`、`pnpm-workspace.yaml`
- Next.js、TypeScript、ESLint、PostCSS 与组件配置
- `.gitignore`、`README.md`

源码 ZIP 明确排除：

- `node_modules/`
- `.next/`
- `out/`
- `.local-preview/`
- `coverage/`
- `.vercel/`
- `tsconfig.tsbuildinfo`
- 日志、临时文件与旧 ZIP

目标文件名：`engineering-digital-portfolio-phase1.zip`

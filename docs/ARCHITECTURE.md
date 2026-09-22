# Engineering Digital Portfolio V2.0 — Phase 1 架构与交付状态

> 更新日期：2026-09-17  
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
  ├── Page 01 Workflow Context   Implemented
  ├── Page 02 / Section 01       Implemented
  ├── Page 02 / Section 02       Implemented
  ├── Workflow 01–03 Detail      Implemented
  ├── Page 03 Governance         Implemented
  └── Page 03 后续章节           Pending
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
| `/case02/` | `src/app/case02/page.tsx` | `PortfolioPage → Case02Page` | Pending | Page01、Page02 工作流总览与原位详情、Page03 AI可靠性治理已实现；后续章节未实现 |
| `/case02/workflow-01/` | `src/app/case02/[workflowId]/page.tsx` | `WorkflowDetailPage` | Implemented | 研究任务规划、输入校验、任务拆解和结构化任务输出 |
| `/case02/workflow-02/` | `src/app/case02/[workflowId]/page.tsx` | `WorkflowDetailPage` | Implemented | Evidence 治理、质量审查、人工评审、三类修订路由及 A/B/C 三类输出 |
| `/case02/workflow-03/` | `src/app/case02/[workflowId]/page.tsx` | `WorkflowDetailPage` | Implemented | External AI 修订审计、返修循环及最终报告/指导语双输出 |
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
│   ├── case02/
│   │   ├── page.tsx
│   │   └── [workflowId]/page.tsx
│   ├── summary/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── pages/
│   │   ├── CoverPage.tsx
│   │   ├── AboutMePage.tsx
│   │   ├── EngineeringBackgroundPage.tsx
│   │   ├── Case01Page.tsx
│   │   ├── Case02Page.tsx
│   │   ├── Case02ReliabilityGovernance.tsx
│   │   ├── Case02ResearchWorkflow.tsx
│   │   ├── Case02WorkflowDetailPanel.tsx
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
      ├── case02 → Case02Page（Page01–03 专用视觉叙事）
      ├── case02/workflow-01–03 → WorkflowDetailPage（二级详情视图）
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
5. Cover、About、Background、Case01 和 Case02 在基础内容类型之上定义页面专用字段。
6. Case01 的 `casePages` 数据由 `Case01Page.tsx` 的专用类型渲染；其通用 `sections` 当前为空。
7. Case02 Page02 Section02 总览数据位于 `case02.md`；点击工作流节点由客户端状态在当前架构区域原位切换详情，不改变路由或滚动位置。三个详情面板使用共享类型化数据，同时保留可分享的静态详情地址。
8. Case02 Page03 由 `Case02ReliabilityGovernance.tsx` 直接维护静态内容与五种专用视觉模型，不依赖运行时数据。
9. 当前无 CMS、数据库、API Route、Server Action 或运行时内容请求。

三个 Workflow Detail 共用标题区、右侧说明栏与类型化详情数据，但主体信息架构不同：Workflow01 使用 Engine Console（Schema → Task Compilation Engine → Runtime Status → Artifact Dock）；Workflow02 使用 Human Control Input → Governance Flow → Governed Outputs；Workflow03 使用 Revision Context → Audit / Decision → Governed Outputs + Feedback Loop。详情视图不是同一模板的内容替换。

Workflow01 的产品化视觉由 `Case02WorkflowDetailPanel.tsx` 内的 `WorkflowEngine`、`WorkflowModule`、`WorkflowStatus` 与 `ArtifactCard` 组成；它们把六个真实编号节点组织为一体化执行轨道，同时把输入和输出降为辅助层。Workflow02/03 继续使用符合各自治理逻辑的专用组件。

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

Case02 Page01 的 8 个产品标识使用各产品官网提供的 favicon / app icon，并保存于 `public/assets/images/case02/icons/`，运行时不依赖外部图标服务；Page01 的流程节点、断裂连接、偏移曲线与治理层，Page02 的产品流程选择图、工作流总览和三个详情视图，以及 Page03 的门槛轨道、证据网络、推理半径、双轨状态与返修闭环，均由 React/CSS/SVG 原生绘制。后续页面专属图片或视频素材为 **Not Implemented**。

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

- Case02 Page03 之后的正式案例内容
- Summary 最终总结内容
- Contact 联系方式、简历下载和外部链接

### Not Implemented

- 独立的 `deep` 版本页面集合
- Case02 失败复盘、运行证据与 Page03 后续治理机制页面
- Case02 专属图片或视频素材
- CMS、数据库、后台接口和动态鉴权
- 线上表单提交或邮件发送
- 运行时分析 Dashboard

这些项目没有被计入当前完成页面。

## 10. 与旧 Phase1 架构文档的主要变化

- Case01 已从“可扩展案例壳层”发展为专用九章完整案例页。
- Case02 已从通用占位壳层升级为专用 Page01–03，完成产品流程语境、AI 竞品研究工作流与 AI可靠性治理叙事。
- Page03 使用五种不同的信息架构分别表达治理门槛、证据溯源、推理边界、状态隔离和定向返修闭环。
- 新增可复用详情面板与原位切换交互；总览中的 01/02/03 节点不再离开 `/case02/`。同时保留静态详情路由 `/case02/workflow-01/`、`/case02/workflow-02/`、`/case02/workflow-03/` 作为可分享入口。
- Workflow01 详情采用“Workflow Engine ＞ Output Artifact ＞ Input Schema”的三级权重；旧流程图 DOM 已替换为 Engine Console、一体化模块轨道、Runtime Status 与 Artifact Dock。桌面显示六模块执行链，中小屏自适应为 3×2 / 2×3 模块网格，不再产生详情画布横向滚动；`research_scope` 是工作流 02 的必要输入。
- 详情面板的 Sidebar 由 `Case02WorkflowDetailPanel` 统一管理收起状态。桌面端收起后保留 44px 恢复轨道与竖排“工作流 XX 简介”；被隐藏的详情内容不再参与布局高度计算。W01/W02/W03 的详情画布均以 1180px 为桌面基准宽度，收起侧栏后自动居中；响应式断点下自动恢复完整信息栏。
- W01 的 Engine、运行状态和输出产物是三个独立层级：Engine 只包含六模块执行轨道；其后用绿色成功状态与红色失败状态分别对齐正常产出组和异常产出区，避免把状态误读为流程节点。
- Workflow02 采用固定三层架构：轻量 Human Control 输入层、信息最强的 W02 治理主流程、双输出治理结果层。治理主流程在单一宽画布中保留事实证据、结构语义、人机评审与三路修订策略，并把 N1–N11 编号收纳在对应模块内部。
- Workflow03 采用固定三层架构：外部修订上下文输入、W03 审计裁决主流程、双输出治理结果。C1–C9 保留真实审计与返修节点，通过 / 需返修分叉与显式回流线共同形成闭环，而不是压缩为线性节点列表。
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

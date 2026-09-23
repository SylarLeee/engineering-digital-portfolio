# Engineering Digital Portfolio｜当前开发交接文档

> 最后更新：2026-09-18  
> 事实来源：当前本地源码与本机验证结果  
> 项目状态：Phase 1 进行中，约 60% 页面开发完成

本文档用于把项目交给另一位 Codex、其他本地 AI 或开发者继续维护。接手者应始终以当前源码为准；`docs/ARCHITECTURE.md` 用于理解架构，本文件用于快速恢复现场和继续工作。

## 1. 先回答：这个预览是否只能由 Codex 使用？

不是。它本质上是标准的 Next.js 本地开发服务器，不是 Codex 专属网页。

- 预览地址：`http://127.0.0.1:3000/`
- 同一台 Windows 电脑上的 Chrome、Edge、Codex 内置浏览器或其他浏览器均可访问。
- 任何具备本项目文件读写权限和终端执行能力的本地 AI 都可以修改源码、运行命令并刷新预览。
- 浏览器页面本身只是“预览”，不是可视化网页编辑器。真正的修改发生在 `src/`、`public/` 等源码目录中。
- 当前服务绑定 `127.0.0.1`，仅本机可访问；其他电脑、手机或云端 AI 不能直接访问该地址。
- 不建议为了交接临时开放公网端口。远程协作应优先使用 Git 仓库、源码 ZIP 或受控远程桌面环境。

项目提供的 `preview:stable` 是一个 Codex 生命周期辅助脚本，并不改变网页的通用性。它尝试注册 Windows 计划任务，在 Codex 打开时启动预览、关闭后停止预览。若当前用户没有计划任务权限，该命令会报“拒绝访问”；此时直接运行 `pnpm dev` 即可。

## 2. 项目与交付路径

### 项目根目录

```text
C:\Users\39887\Documents\Codex\2026-09-01\wa\work\engineering-digital-portfolio
```

### 关键文档

```text
docs\HANDOFF.md       当前交接、恢复步骤、最新进度和待办
docs\ARCHITECTURE.md  Phase 1 信息架构、组件、内容与部署说明
README.md             最小启动与构建说明
```

### 当前源码包

```text
C:\Users\39887\Documents\Codex\2026-09-01\wa\outputs\engineering-digital-portfolio-phase1.zip
```

### 便于脱离项目目录查看的交接副本

```text
C:\Users\39887\Documents\Codex\2026-09-01\wa\outputs\Engineering-Digital-Portfolio-Current-Handoff.md
```

注意：当前项目目录没有 `.git` 元数据，因此无法通过 `git status`、分支或提交记录判断改动归属。接手时应先备份当前目录或使用交付 ZIP，再进行修改。

## 3. 三分钟恢复本地预览

在 PowerShell 中执行：

```powershell
Set-Location 'C:\Users\39887\Documents\Codex\2026-09-01\wa\work\engineering-digital-portfolio'
pnpm install
pnpm dev --hostname 127.0.0.1 --port 3000
```

然后访问：

```text
http://127.0.0.1:3000/
http://127.0.0.1:3000/case01/
http://127.0.0.1:3000/case02/
```

健康检查：

```powershell
Invoke-WebRequest 'http://127.0.0.1:3000/case02/' -UseBasicParsing
```

若 3000 端口已被占用，应先确认占用进程是否属于本项目，不要盲目结束其他应用。也可以临时改用其他端口：

```powershell
pnpm dev --hostname 127.0.0.1 --port 3001
```

### Codex 联动预览（可选）

```powershell
pnpm run preview:stable
```

该命令会调用：

```text
scripts\start-local-preview.ps1
scripts\preview-lifecycle.ps1
```

已知限制：注册 Windows Scheduled Task 可能需要当前环境没有的权限。出现 `New-ScheduledTaskAction: 拒绝访问` 时，使用普通 `pnpm dev`；这不会影响页面开发和构建。

## 4. 技术栈与运行方式

- Next.js 16.3.3，App Router
- React 19.2.8
- TypeScript 5
- pnpm 11.19.0
- 静态导出：`output: "export"`
- 内容：本地 Markdown + `gray-matter`
- 样式：全局 CSS、页面专用 class、少量 SVG/原生 CSS 图形
- 图片：`public/assets/images/`
- 无 CMS、数据库、API Route、Server Action 或必填运行时环境变量

常用命令：

```powershell
pnpm dev
pnpm typecheck
pnpm lint
pnpm build
```

`pnpm build` 生成 `out/`，但 `out/`、`.next/`、`node_modules/` 和 `.local-preview/` 不进入交付 ZIP。

## 5. 当前信息架构与完成状态

| 顶层页面 | 路由 | 状态 | 当前内容 |
| --- | --- | --- | --- |
| Cover | `/` | Implemented | 作品集封面、价值路径、能力标签、案例入口 |
| About | `/about/` | Implemented | 工程经历路径、业务理解、产品优势 |
| Background | `/background/` | Implemented | 工程经验到数字产品能力的映射 |
| Case 01 | `/case01/` | Implemented | 工程质量验收数字化案例，九章完整叙事 |
| Case 02 | `/case02/` | Pending | Page01、Page02 Section01–02、Workflow 01–03 详情与 Page03 AI可靠性治理已实现；后续章节未实现 |
| Workflow 01 | `/case02/workflow-01/` | Implemented | 竞品研究任务规划详情 |
| Workflow 02 | `/case02/workflow-02/` | Implemented | 研究结果治理、人工评审、修订路由与 A/B/C 输出 |
| Workflow 03 | `/case02/workflow-03/` | Implemented | External AI 修订审计、返修闭环与 A/B 输出 |
| Summary | `/summary/` | Pending | 只有内容占位 |
| Contact | `/contact/` | Pending | 联系方式、简历和外部链接未配置 |

### Case01 九章

| 展示编号 | 锚点 | 短标题 | 状态 |
| --- | --- | --- | --- |
| 01 | `#page04` | 背景 | Implemented |
| 02 | `#page05` | 问题 | Implemented |
| 03 | `#page06` | 机会 | Implemented |
| 04 | `#page07` | 方案 | Implemented |
| 05 | `#page08` | 设计 | Implemented |
| 06 | `#page09` | 验证 | Implemented |
| 07 | `#page10` | 迭代 | Implemented |
| 08 | `#page11` | 演进 | Implemented |
| 09 | `#page12` | 方法 | Implemented |

内部仍使用 `page04–page12`，用于保持已有浏览器评论定位稳定，不应随意重命名。

## 6. 最近完成的内容

### Case01

- 统一章节短标题为：背景、问题、机会、方案、设计、验证、迭代、演进、方法。
- 完成 06 测试验证、07 测试驱动迭代、08 产品演进规划、09 项目方法沉淀。
- 07 使用用户提供的产品迭代总览素材，并增加“产品方法沉淀”能力模块。
- 08 呈现当前 MVP、执行工具到质量管理平台的能力演进与路线总结。
- 09 呈现工程业务理解、复杂业务抽象、验证驱动迭代、产品判断框架和岗位问题匹配。

### Case02 Page01–03

- Page01–03 使用固定页面短标题：`Page01｜协作挑战`、`Page02｜流程架构`、`Page03｜治理机制`。短标题作为 Page Level Label，原有 Hero 标题继续承担叙事视觉中心。
- Case01 / Case02 共用 `CaseSideNav`：Case01 保留九章导航，Case02 使用协作挑战 / 流程架构 / 治理机制三项导航；两者共用滚动侦测与 Active 状态。导航默认只降低背景、边框和阴影强度，文字与当前状态保持完整可读，Hover / Focus 时恢复完整容器背景。
- Case02 在 `.case02-page` 定义统一 Typography Tokens，Page Label、Hero、Section、Module、Card、Body 与英文注释按共同层级消费，响应式下按比例缩放。
- 完成 AI 能力覆盖产品流程的五阶段地图。
- 使用本地保存的官网图标：Perplexity、AlphaSense、Dovetail、Figma AI、Galileo/Stitch、Uizard、Maze、UserTesting。
- Section02 左侧改为五节点能力链：Perplexity → Dovetail → Figma AI → Uizard → Maze。
- 四个交接点均明确展示断裂原因，不再把首段误写成可靠连接：
  - 输入结构未对齐：信息未结构化、标签不统一、主题难归纳、人工整理等。
  - 洞察转译断层：洞察难转译、目标不明确、需求缺失、约束遗漏等。
  - 交互状态缺失：交互缺失、状态丢失、逻辑断层、人工补充等。
  - 验证反馈断流：目标偏移、任务不同步、反馈难回流、人工迭代等。
- Section02 右侧完成偏移累积图，表达多节点传递后最终 69% 对齐、累计偏差 31%。
- 偏移图已明确说明 5% 只是理想化假设；真实任务会受到复杂度、上下文丢失与格式转换等因素影响。
- Section03 改为风险与治理机制的对应矩阵：
  - Context Drift → Scope Control
  - Semantic Gap → Handoff Contract
  - State Loss → Quality Check
  - No Iteration → Feedback Loop
- Section04 已由原 Before/After 占位图重构为完整探索方向：六类 AI 协作问题空间 → 聚焦输出质量 → AI Agent 规则约束、质量检查与反馈机制 → 更可靠的研究结果。
- Page02 Section01 已完成产品流程切入点选择：展示六阶段数字化产品流程，高亮“竞品分析”，并用信息密度、流程标准化、结果可验证、易暴露协作问题四项标准解释选择理由。
- Page02 Section02 已完成 AI 竞品研究 Workflow 总览：研究需求输入 → 工作流 01 → AI Agent → 工作流 02，并根据治理状态分为直接输出、一次优化和循环优化三条路径。
- 总览中的工作流节点在当前 Section02 架构区域原位切换二级详情，不改变 `/case02/` 路由或当前滚动位置；详情内可切换 01/02/03，并可返回总览。
- `/case02/workflow-01/`、`/case02/workflow-02/`、`/case02/workflow-03/` 仍作为可分享、可直接访问的静态详情入口。
- 三个详情页全部采用编号化输入、航路、节点、路由与输出。工作流 02 包含 A 最终报告、B AI Agent 指导语、C 工作流 03 资料包；工作流 03 包含 A 最终报告与 B AI Agent 指导语。
- 三个详情页已完成视觉系统统一，但主体结构按业务逻辑区分：Workflow01 为 Input Schema → Task Compiler → Output Artifact；Workflow02 为 Human Control Input → Governance Flow → Governed Outputs；Workflow03 为 Revision Context → Audit / Decision → Governed Outputs + Feedback Loop。
- Workflow01 使用 W01-01–W01-G1 编号；Workflow02 使用 N1–N8.5；Workflow03 使用 C1–C9，保持可追溯性。
- Workflow01 已删除旧版“流程图展示”视觉并重建为产品化 Engine Console：启动参数使用低权重 Schema 窄栏，Task Compilation Engine 采用独立网格 Canvas 与一体化六模块执行轨道，Runtime Status 显示 G1 门禁状态，Artifact Dock 承接正常与异常输出。页面不再依赖详情画布横向滚动；`research_scope` 明确标注为工作流 02 的必要输入。
- Workflow01 新增可复用视觉组件 `WorkflowEngine`、`WorkflowModule`、`WorkflowStatus` 与 `ArtifactCard`。这组组件只负责 W01 的 Engine 详情表达，不强制 Workflow02/03 套用同一信息架构。
- 详情工具栏的 01 → 02 → 03 已增加方向箭头，三个详情仍在同一区域原位切换。
- 三个 Workflow Detail 共用的右侧详情栏支持桌面端向右收起与恢复；收起后 W02/W03 主画布使用完整宽度，W01 保持原有展示宽度并在扩展后的主区域居中。1100px 以下保留完整详情内容，不启用侧栏收起。
- Workflow02 主展示区域已按“三层治理系统”重建：顶部为结果确认、用户反馈、修订验收三类人类控制输入；中部为 AI 研究结果 → 事实证据治理 → 结构语义审计 → 人机评审 → 三路修订策略；底部并列标准化报告与修订指导语，并明确保留 Workflow03 资料包桥梁。N1–N11 仍在模块内部保留，未通过概念化简图隐藏复杂度。
- Workflow03 主展示区域已按“三层修订治理系统”重建：顶部汇聚 External AI 修订结果、原始治理状态与返修上下文；中部以 C1–C4 完成解析、边界审计、语义审计与裁决，再分流至 C5/C6 发布路径或 C8/C9 返修路径；底部并列标准化报告与 `revision_guidance`，并用 `External AI → 新版本 → C1` 明确表现闭环。
- Page03「从工作流实践到可靠性治理探索」已完成长页面叙事，不使用 Tab、折叠或轮播；先展示无编号 Governance Overview，再依次展示 01 证据治理、02 边界治理、03 状态治理、04 修订治理。
- Page03 Hero 明确承接 Page02：左侧说明从工作流实践提炼可靠性机制的页面定位，右侧以轻量 W02/W03 节点切片作为来源，并将其抽象为“内容验证 → 状态裁决 → 正式状态 / 修订回流”。中文是主叙事，英文仅作为术语注释。
- Page03 Governance Overview 使用 Candidate → 内容验证（证据验证 + 边界控制）→ 状态裁决 → PASS / REJECT；REJECT 进入修订治理、形成 New Candidate 并重新验证。
- Page03 01 证据治理使用 Evidence Pool → Fact → Inference 的可追溯网络，并明确阻止无证据路径的 Inference X 升级。
- Page03 02 边界治理使用推理半径表达 Research Scope，将合理推断、接近边界与越界结论分层。
- Page03 03 状态治理使用 Baseline / Candidate 双轨模型，表达 Candidate 通过审计前不能污染已验证状态。
- Page03 04 修订治理使用 Human controls + AI executes 的定向返修闭环，并以四类可信条件汇聚至 Trusted / Publishable Output。
- Case02 Page03 之后的正式章节仍为 Pending。

## 7. 关键文件导航

```text
src\app\globals.css                       全站及 Case01/Case02 主要样式
src\components\case\CaseSideNav.tsx    Case01 / Case02 共用悬浮导航与滚动侦测
src\components\pages\PortfolioPage.tsx  顶层页面渲染分流
src\components\pages\Case01Page.tsx     Case01 九章专用渲染
src\components\pages\Case02Page.tsx     Case02 Page01–03 专用渲染
src\components\pages\Case02ReliabilityGovernance.tsx  Page03 AI可靠性治理五段视觉叙事
src\components\pages\Case02ResearchWorkflow.tsx  Section02 总览与原位详情切换
src\components\pages\Case02WorkflowDetailPanel.tsx  三个工作流共用详情面板
src\app\case02\[workflowId]\page.tsx    Workflow 01–03 二级详情视图
src\content\case02-workflow-details.ts  Workflow 01–03 共用类型化详情数据
src\content\pages\case01.md              Case01 内容数据
src\content\pages\case02.md              Case02 Page01–02 内容数据
src\content\loader.ts                    构建期 Markdown 加载
src\config\portfolio.config.ts           路由、导航、版本配置
next.config.ts                             静态导出、basePath、资源前缀
public\assets\images\case01\             Case01 图片素材
public\assets\images\case02\icons\      Case02 官网图标
.github\workflows\deploy.yml              GitHub Pages 自动部署
```

`ComparisonBlock`、`ProcessFlow`、`Timeline`、`ImageGallery`、`FailureCard` 等通用组件已经存在，但“组件存在”不代表所有对应页面内容均已完成。

## 8. 内容与渲染逻辑

1. `src/config/portfolio.config.ts` 定义路由 ID、路径、导航分组和内容文件。
2. App Router 页面调用 `PortfolioPage(routeId)`。
3. `case01` 分流至 `Case01Page`，`case02` 分流至 `Case02Page`。
4. 其他页面通过通用 `HeroSection` / `ContentRenderer` 渲染。
5. `src/content/loader.ts` 在构建期使用 Node `fs` 读取 `src/content/pages/*.md`。
6. `gray-matter` 解析 frontmatter；运行时不向外部服务请求正文。
7. 主要视觉样式集中在 `src/app/globals.css`，修改时需检查桌面端、窄屏、打印和 `prefers-reduced-motion`。

## 9. 当前待办与建议优先级

### P0：继续当前视觉迭代

- 在真实浏览器中检查 Case02 Section02 四个多行断裂卡的窄屏溢出和横向滚动体验。
- 检查 Case02 Section03 风险→治理矩阵在常见笔记本高度下的首屏信息密度。
- 每次改动后同时检查 `/case01/`，避免全局 CSS 回归。

### P1：继续完成 Case02

- Page02 Section02 总览与 Workflow 01–03 二级详情已经完成。
- Page03 AI可靠性治理已完成；Page03 之后的失败复盘、运行证据和后续案例证据仍为 Not Implemented。
- 下一轮优先校验三个详情视图在 1280–1440px 笔记本屏幕上的信息密度，并补充真实运行证据时严格区分设计方案与已验证结果。
- 继续保持“AI能力 → Workflow → 系统治理”的叙事，不把页面退化为工具罗列。

### P2：补齐收尾页面

- Summary：补最终总结内容与视觉。
- Contact：配置真实联系方式、简历下载和外部链接。
- 确认 `short` 与 `deep` 是否需要真正拆分；当前两者使用相同路由集合。

## 10. 视觉与内容约束

- 延续白底、深蓝黑文字、青绿色强调和大留白。
- 保持 Stripe 式叙事、Linear 式科技感和 B 端案例风格。
- 不引入赛博朋克、大量机器人、复杂 Dashboard 或与现有系统不一致的新视觉语言。
- Case01 强调工程业务理解、产品判断与验证能力。
- Case02 强调 AI 能力如何被组织为可靠、连续、可控的专业工作流。
- 不虚构测试数据、用户反馈、已上线效果或未实现功能。
- 用户通过浏览器评论提出的具体文案和布局要求优先于旧规划文档。

## 11. 部署与兼容性

### Vercel

- ZIP 内容可直接作为仓库根目录，Vercel Root Directory 保持空白。
- Framework Preset 使用 Next.js 自动识别。
- Build Command：`pnpm build`。
- 当前无必填环境变量。
- 不要在 Vercel 设置 GitHub Pages 专用的 `GITHUB_ACTIONS=true` 或 `NEXT_PUBLIC_BASE_PATH=/engineering-digital-portfolio`。
- 连接 GitHub 后，push / PR 预览与主分支生产部署可正常使用。

### GitHub Pages

`.github/workflows/deploy.yml` 已配置静态构建和 Pages 部署，并会在 GitHub Actions 环境自动使用仓库子路径。

### 本地与线上差异

- 本地开发使用 `127.0.0.1:3000`。
- 构建产物是纯静态 `out/`。
- 线上不会运行本地预览生命周期脚本。

## 12. 交付 ZIP 规则

应包含：

```text
src/
public/
docs/
scripts/
.github/
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
next.config.ts
tsconfig.json
eslint.config.mjs
postcss.config.mjs
components.json
README.md
.gitignore
```

应排除：

```text
node_modules/
.next/
out/
.local-preview/
coverage/
.vercel/
tsconfig.tsbuildinfo
日志、缓存、临时文件、旧 ZIP
```

每次正式交付前执行：

```powershell
pnpm typecheck
pnpm lint
pnpm build
```

然后重新生成 ZIP 并记录 SHA-256，避免把旧源码包误认为最新版本。

## 13. 交给下一位 AI 的启动提示词

可将下面整段直接发送给另一位本地 Codex 或 AI：

```text
请接手 Engineering Digital Portfolio 项目。

项目根目录：
C:\Users\39887\Documents\Codex\2026-09-01\wa\work\engineering-digital-portfolio

请先完整阅读：
1. docs\HANDOFF.md
2. docs\ARCHITECTURE.md

以当前本地源码为唯一准确信息源，不要根据旧任务书虚构未实现内容。先检查 http://127.0.0.1:3000/；若预览未运行，在项目根目录执行：
pnpm dev --hostname 127.0.0.1 --port 3000

浏览器只是预览，修改应写入项目源码。保留现有视觉系统和用户已有改动，不覆盖无关文件。完成修改后运行：
pnpm typecheck
pnpm lint
pnpm build

正式交付时更新 docs\HANDOFF.md，并重新生成 outputs\engineering-digital-portfolio-phase1.zip；ZIP 不得包含 node_modules、.next、out、.local-preview 或缓存文件。
```

## 14. 最后验证记录

### 2026-09-22 Workflow Detail 交互与层级修正

- 三个 Workflow Detail 共用的右侧简介栏支持桌面端收起；收起后隐藏内容本身不再参与高度计算，避免下方出现大面积空白，并保留“工作流 XX 简介”竖向恢复提示。
- W01 画布总宽度统一为 1180px，与 W02/W03 一致；三套详情的标题、阶段、节点、说明和输出字号已按同一层级比例放大。
- W01 六个执行模块之间改为高对比、粗线条、带明确箭头尖端的数据流连接。
- W01 的运行结果从 Engine 内部拆出为两条互斥状态：绿色 `PASS` 对齐 `task_book + research_scope`，红色 `FAILED` 对齐 `error_messages`，并分别以向下连接指示对应产出。
- “点击节点，在本区域查看详细设计”及总览图例只在 Workflow 总览显示，进入任一详情后不渲染。
- 本轮已实际验证 W01/W02/W03 切换、简介栏展开/收起、收起前后高度、W01 状态与产出横向对齐；浏览器错误日志为空。

### 2026-09-23 Page03 Section01 治理逻辑重构

- 仅重构 Page03 Section01「从 AI输出 到 可信状态」的信息图；Hero、Section02–05、Section 标题结构和页面宽度保持不变。
- 删除 `Evidence Gate → Scope Gate → State Gate → Revision Gate → Trusted State` 的错误线性关系，改为 `Candidate → 内容验证（证据验证 + 边界控制）→ 状态裁决`，并在裁决后分出 `PASS → 可信状态` 与 `REJECT → 修订治理`。
- 修订治理明确输出 `New Candidate`，通过橙色回流线重新进入内容验证，不再直接连接可信状态。
- AI生成结果、证据验证、边界控制、状态裁决、可信状态、修订治理六张卡片均支持卡片内部 Hover / 键盘 Focus 切换，显示对应的 W02/W03 mini workflow slice；没有 Tooltip、弹窗或布局位移。
- 中文机制名为主信息，英文术语降为辅助层；已逐张验证六个交互状态，浏览器错误日志为空。

### 2026-09-23 Page03 Hero 叙事重构

- 仅替换 Page03 Hero 的标题、说明和右侧信息图；Section01–05、页面宽度、纵向结构与全站基础视觉语言保持不变。
- 主标题改为“从工作流实践到可靠性治理探索”，明确 Page03 是对 Page02 W02/W03 的总结、抽象与机制提炼，而不是另起一套完整治理理论。
- 删除 `AI Output → Governance → Reliable Insight` 的强结论图，改为 `W02/W03 来源切片 → 机制提炼 → 内容验证 → 状态裁决 → 正式状态 / 修订治理`。
- 修订路径明确形成 `New Candidate → 重新验证` 回路；证据验证与边界控制归入内容验证，状态裁决负责正式状态升级。
- Hero 全部主要叙事以中文优先，英文只保留为较弱的专业术语注释；构建与浏览器渲染检查通过。

### 2026-09-23 Case02 跨 Page 层级统一

- Case02 Page01–03 新增固定短标题“协作挑战 / 流程架构 / 治理机制”，作为弱于 Hero 的 Page Level Label。
- 原 Case01 导航逻辑抽为共享 `CaseSideNav`，Case01 与 Case02 共用位置、尺寸、滚动 Active、动画和响应式规则；Case02 导航锚点为 `case02-page01`、`case02-page02`、`case02-page03`。
- 两套导航默认只使用约 50% 强度的半透明容器背景、边框和阴影，文字、编号与 Active 指示不做整体透明；Hover / Focus 在 220ms 内恢复完整背景。
- Case02 新增统一 Typography Tokens，并让 Page01 Hero、Page02 Hero、Page03 Hero、Section 标题、Module 标题、正文和英文注释按共同层级消费。
- Page03“从 AI输出 到 可信状态”改为无编号 Governance Overview，并用独立容器、机制地图和向下引导与后续机制区分；后续机制重新编号为 01 证据、02 边界、03 状态、04 修订。
- 已验证移动端 Page Label / Overview / 编号顺序，以及桌面端共享导航的 01 Active 状态和正文避让；TypeScript、ESLint、生产构建均通过。

2026-09-17 交接整理时：

- `preview:stable` 在当前权限环境注册计划任务失败，错误为“拒绝访问”。
- 已改用标准 `pnpm dev --hostname 127.0.0.1 --port 3000` 恢复预览。
- `pnpm typecheck`：Passed。
- `pnpm lint`：Passed。
- `pnpm build`：Passed；7 个正式路由与 `_not-found` 均已静态生成。
- HTTP 检查：`/`、`/case01/`、`/case02/`、`/summary/`、`/contact/` 均返回 200。
- ZIP SHA-256：见本次交付报告；每次重建源码包后该值都会变化。

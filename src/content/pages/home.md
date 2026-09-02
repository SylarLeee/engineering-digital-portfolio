---
id: home
route: /
kind: landing
eyebrow: Portfolio Engine / Phase 1
title: 工程经验，转化为数字产品能力
subtitle: 一套面向工程数字化岗位的可扩展案例展示系统。当前交付聚焦技术架构、组件、内容机制与视觉基础。
status: ENGINE ONLINE
sections:
  - id: system
    type: architecture
    eyebrow: SYSTEM ARCHITECTURE
    title: 一套引擎，承载两个内容版本
    description: 页面不绑定最终文案。配置决定内容规模，渲染器决定呈现方式，组件保持复用。
    layers:
      - index: "01"
        name: Content Configuration
        detail: Markdown frontmatter + typed schema
      - index: "02"
        name: Component Renderer
        detail: Section type → reusable component mapping
      - index: "03"
        name: Hybrid Routes
        detail: Home + independent case pages + internal sections
      - index: "04"
        name: Static Export
        detail: Next.js output → GitHub Pages
  - id: workflow
    type: workflow
    theme: dark
    eyebrow: AI WORKFLOW COMPONENT
    title: 展示系统设计，而不是复刻工具编辑器
    description: WorkflowExpandable 已支持折叠、展开与节点细节，未来只需替换配置数据。
    workflows:
      - id: W00
        name: Context Intake
        purpose: 建立任务边界与证据范围
        input: 工程资料、业务约束、目标问题
        output: 结构化上下文包
        nodes: [Source Check, Scope Map, Context Pack]
      - id: W01
        name: Evidence Pipeline
        purpose: 将复杂知识转化为可追溯证据
        input: 多源文档与过程数据
        output: Evidence candidates
        nodes: [Extract, Normalize, Validate]
      - id: W02
        name: Decision Layer
        purpose: 形成候选、基线与判断机制
        input: Evidence candidates
        output: 可解释的产品决策
        nodes: [Candidate, Baseline, Decision]
  - id: principles
    type: principles
    eyebrow: ENGINEERING PRINCIPLES
    title: Phase 1 的三个系统约束
    description: 先保证未来内容可编辑、案例可扩展、页面可打印，再进入逐页内容实现。
    items:
      - label: "01"
        title: 内容与代码分离
        description: 页面正文来自 Markdown 数据，组件只负责结构、交互和视觉表达。
      - label: "02"
        title: 配置驱动版本
        description: short / deep 由统一配置切换，无需复制页面或重写组件。
      - label: "03"
        title: Web / PDF 同源
        description: 打印样式、分页策略与浅色降级在设计系统层统一处理。
---
此文件只承载 Phase 1 系统演示数据，正式作品集文案将在 Phase 2 逐页替换。

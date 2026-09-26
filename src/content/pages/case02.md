---
id: case02
route: /case02
kind: case
title: AI增强型产品工作流探索
subtitle: 当AI能力进入研究、洞察、设计与验证，新的挑战不再是寻找单个工具，而是把多个AI能力组织成稳定、连续、可控的专业工作流。
status: CASE 02 · PAGE 01 / CONTEXT
pageLabel: AI-ENHANCED PRODUCT WORKFLOW
ecosystem:
  title: AI正在重新拆解数字化产品流程
  lead: AI已经从概念走向具体工作节点，逐步覆盖研究、洞察、设计、原型与验证环节。
  stages:
    - index: "01"
      title: Research
      description: 信息检索与市场情报
      tools:
        - name: Perplexity
          icon: /assets/images/case02/icons/perplexity.svg
          brand: perplexity
          tag: AI Research
        - name: AlphaSense
          icon: /assets/images/case02/icons/alphasense.png
          brand: alphasense
          tag: Market Intelligence
    - index: "02"
      title: Insight
      description: 研究材料归纳与洞察
      tools:
        - name: Dovetail
          icon: /assets/images/case02/icons/dovetail.svg
          brand: dovetail
          tag: Research Synthesis
    - index: "03"
      title: Design
      description: 界面生成与方案探索
      tools:
        - name: Figma AI
          icon: /assets/images/case02/icons/figma.svg
          brand: figma
          tag: UI Generation
        - name: Galileo AI
          icon: /assets/images/case02/icons/galileo-stitch.png
          brand: galileo
          tag: Interface Design
    - index: "04"
      title: Prototype
      description: 快速原型与交互表达
      tools:
        - name: Uizard
          icon: /assets/images/case02/icons/uizard.png
          brand: uizard
          tag: Rapid Prototype
    - index: "05"
      title: Validation
      description: 用户测试与行为反馈
      tools:
        - name: Maze
          icon: /assets/images/case02/icons/maze.png
          brand: maze
          tag: Product Testing
        - name: UserTesting
          icon: /assets/images/case02/icons/usertesting.ico
          brand: usertesting
          tag: User Feedback
problems:
  title: AI工具组合后的系统问题
  lead: 单个AI能力可以有效完成局部任务，但多个节点连续连接后，并不会自然形成可靠流程。
  islands:
    title: AI能力孤岛
    description: 多个AI能力已经覆盖数字化产品流程，但缺少统一上下文与状态连接，无法形成连续 Workflow。
    tools:
      - name: Perplexity
        stage: Research
      - name: Dovetail
        stage: Insight
      - name: Figma AI
        stage: Design
      - name: Uizard
        stage: Prototype
      - name: Maze
        stage: Validation
    breaks:
      - title: 输入结构未对齐
        reasons: [信息未结构化, 标签不统一, 主题难归纳, 人工整理]
      - title: 洞察转译断层
        reasons: [洞察难转译, 目标不明确, 需求缺失, 约束遗漏]
      - title: 交互状态缺失
        reasons: [交互缺失, 状态丢失, 逻辑断层, 人工补充]
      - title: 验证反馈断流
        reasons: [目标偏移, 任务不同步, 反馈难回流, 人工迭代]
    conclusion: AI覆盖产品流程各环节，但不同工具之间缺少统一上下文与状态连接。
    equation: 能力组合 ≠ 可靠工作流
  deviation:
    title: AI输出偏移累积
    description: 即使单个AI节点的输出偏差很小，在连续传递中也会被后续节点继承并放大，导致最终结果显著偏离最初目标。
    nodes:
      - label: 节点 01
        tool: Perplexity
        stage: 研究
        deviation: +5%
        cumulative: 5%
        alignment: 95%
      - label: 节点 02
        tool: Dovetail
        stage: 洞察
        deviation: +5%
        cumulative: 10%
        alignment: 90%
      - label: 节点 03
        tool: Figma AI
        stage: 界面设计
        deviation: +5%
        cumulative: 16%
        alignment: 84%
      - label: 节点 04
        tool: Uizard
        stage: 原型生成
        deviation: +5%
        cumulative: 23%
        alignment: 77%
      - label: 节点 05
        tool: Maze
        stage: 用户测试
        deviation: +5%
        cumulative: 31%
        alignment: 69%
    insight: 5%的偏差只是一个假设性的最理想值。
    detail: 在真实任务中，受到任务复杂度、上下文丢失、格式转换等多重因素影响，节点输出的实际偏差通常会高达40%以上。
    formula: 微小偏差 × 多次传递 → 输出逐渐偏离目标
governance:
  title: 从AI工具组合到AI工作流治理
  lead: 可靠的专业流程需要在工具链之间增加治理机制，对范围、交接、质量与反馈进行持续管理。
  items:
    - risk: Context Drift
      riskDescription: 丢失信息混入，研究范围失控
      control: Scope Control
      controlDescription: 明确研究边界，避免无关信息进入流程
    - risk: Semantic Gap
      riskDescription: 洞察难以转化为可执行的设计输入
      control: Handoff Contract
      controlDescription: 将洞察转化为结构化设计输入
    - risk: State Loss
      riskDescription: 设计意图在交接中丢失或变形
      control: Quality Check
      controlDescription: 检查设计意图、页面逻辑与状态是否一致
    - risk: No Iteration
      riskDescription: 缺乏有效反馈，难以形成迭代
      control: Feedback Loop
      controlDescription: 让测试结果回流并驱动后续迭代
  conclusion: 治理不是替代AI，而是在节点交接处增加约束、校验与反馈，使多个AI能力形成可靠协作。
  detail: AI Workflow 的关键不在于增加更多工具，而在于让上游输出能够被下游正确接收、验证与迭代。
  signature: BETTER AI WORKFLOWS FOR REAL WORK
exploration:
  title: Case02 探索方向
  lead: AI 协作的挑战是多维且复杂的，本案例不试图解决所有问题，而是聚焦其中一个关键方向进行深入探索。
  sideNote: [从复杂的问题空间中，选择一个具体的切入点，做有边界的、可落地的探索。]
  challengeTitle: AI 协作的主要挑战（问题空间）
  challengeLead: 多个 AI 能力协同时，会在不同环节产生新的系统性问题。
  challenges:
    - title: 上下文连接
      details: [信息无法继承, 状态难以同步]
    - title: 任务规划
      details: [目标不够清晰, 执行路径不稳定]
    - title: 工具协同
      details: [输入输出不一致, 格式与标准不同]
    - title: 输出质量
      details: [事实准确性, 引用完整性, 结论边界控制, …]
    - title: 反馈闭环
      details: [结果难以回流, 迭代依赖人工]
    - title: 人机协作
      details: [角色与责任不清, 人工介入成本高, …]
  focusLabel: 聚焦探索
  focusEyebrow: CASE 02
  focusTitle: 聚焦：AI Agent 输出的可靠性治理
  focusLead: 本案例选择“输出质量”作为切入点，探索如何通过制度化的规则、检查和反馈机制，提升 AI Agent 在专业研究任务中的输出可信度。
  source:
    title: AI Agent
    label: 产出
    details: [研究内容, 洞察分析, 方案建议, …]
  controls:
    - title: 规则约束
      description: 输出格式与引用规范
    - title: 质量检查
      description: 事实校验与范围控制
    - title: 反馈机制
      description: 问题修正与迭代优化
  outcome:
    title: 更可靠的研究结果
    details: [可追溯, 有边界, 可验证]
  conclusion: 本案例不试图解决所有 AI 协作问题，而是聚焦 AI Agent 输出可靠性这一关键方向，探索通过规则约束、质量检查与反馈机制，提升专业研究流程的可控性。
  conclusionAside: 从问题到探索，迈出构建可靠 AI Workflow 的第一步。
entryPoint:
  eyebrow: CASE 02 — PAGE 02
  title: 从产品流程中找到 AI 协作的切入点
  lead: 在数字化产品流程中选择具有高信息密度、流程可拆解、结果可验证的环节，探索 AI Agent 可靠性治理。
  sideNote: [不是所有环节都适合 AI 自动化，我们选择了一个信息密集、流程清晰且可验证的场景作为起点。]
  flowTitle: 数字化产品流程
  flowLead: 不同环节的特点不同，AI 的适用性也不同。
  stages:
    - index: "01"
      title: 用户研究
      details: [深度访谈, 用户洞察]
    - index: "02"
      title: 竞品分析
      details: [信息收集, 功能分析, 趋势判断]
      selected: true
    - index: "03"
      title: 产品策略
      details: [市场定位, 机会判断]
    - index: "04"
      title: 方案设计
      details: [体验设计, 交互方案]
    - index: "05"
      title: 开发实现
      details: [技术开发, 产品迭代]
    - index: "06"
      title: 上线验证
      details: [用户测试, 数据分析]
  reasonsTitle: 为什么选择竞品分析？
  reasons:
    - index: "01"
      title: 信息密度高
      description: 需要收集、整理和分析大量公开信息，AI 具备明显的信息处理优势。
    - index: "02"
      title: 流程相对标准化
      description: 从信息收集到功能分析，存在较清晰的任务步骤和输入输出关系。
    - index: "03"
      title: 输出结果可验证
      description: 竞品资料、功能信息和市场信息，可以通过公开资料进行交叉验证。
    - index: "04"
      title: 易暴露 AI 协作问题
      description: 涉及检索、理解、归纳、推理等多个环节，适合作为可靠性治理实验。
researchWorkflow:
  title: AI 竞品研究 Workflow
  lead: 通过多个 Workflow 与 AI Agent 协作，将开放式研究任务转化为可验证、可迭代的研究流程。
  interactionHint: 点击任意工作流节点，查看详细设计
  input:
    title: 研究需求输入
    details: [竞品范围, 研究目标, 输出要求]
  workflow01:
    index: "01"
    label: 工作流 01
    title: 研究规划
    details: [任务拆解, 范围定义, 研究框架]
    role: 将开放式研究需求转化为 AI 可执行任务。
    href: /case02/workflow-01/
  agent:
    title: AI Agent
    details: [信息检索, 内容分析, 初步生成]
  workflow02:
    index: "02"
    label: 工作流 02
    title: 输出治理
    details: [Evidence 检查, 质量审查, 问题识别]
    role: 判断 AI 输出是否满足可靠性要求。
    href: /case02/workflow-02/
  workflow03:
    index: "03"
    label: 工作流 03
    title: 修订治理
    details: [结果整合, 报告封装, 质量检查]
    role: 对 External AI 修订结果进行审计、裁决与闭环治理。
    href: /case02/workflow-03/
  optimizationAgent:
    title: External AI 优化修订
    details: [问题修订, 内容校准]
  output:
    title: 标准化报告输出
    note: 封装产出标准化报告
  paths:
    direct:
      index: "1"
      title: 直接输出
      condition: 当结果通过过程检查且满足要求时
    external:
      index: "2"
      title: 外部修订
      condition: 当结果需要复杂修订时，进入 External AI 修订与工作流03治理流程
      loopNote: 未通过则继续下一轮修订
  conclusion: 通过在产品流程中选择“竞品分析”作为探索起点，我们构建了一套可治理的 AI 协作工作流，能够在不同的输出状态下采取相应的治理策略，最终封装产出标准化的研究报告。
  next: 下一步：深入了解每个工作流的设计与治理机制
sections: []
---
Case 02 Page 01：从分散AI工具进入可控专业工作流的叙事入口。

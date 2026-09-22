export type DetailNode = { id: string; title: string; description: string };
export type DetailLane = { id: string; title: string; description: string; nodes: DetailNode[] };
export type DetailOutput = { id: string; type: "A" | "B" | "C"; title: string; description: string; items: string[] };

export type WorkflowDetail = {
  index: "01" | "02" | "03";
  theme: "cyan" | "violet" | "amber";
  title: string;
  lead: string;
  input: { title: string; items: Array<{ id: string; key: string; value: string }> };
  lanes: DetailLane[];
  routes?: Array<{ id: string; title: string; description: string }>;
  outputs: DetailOutput[];
  sidebar: { goal: string; values: string[]; boundaryTitle: string; boundary: string };
};

export const workflowDetails = {
  "workflow-01": {
    index: "01",
    theme: "cyan",
    title: "工作流 01｜竞品研究任务规划工作流",
    lead: "将用户输入的研究需求参数，转换成可直接交给 AI Agent 执行的结构化任务书，同时产出标准化研究范围。",
    input: {
      title: "用户研究需求",
      items: [
        { id: "I-01", key: "research_goal", value: "研究目标" },
        { id: "I-02", key: "research_type", value: "研究类型" },
        { id: "I-03", key: "competitors", value: "竞品对象" },
        { id: "I-04", key: "focus_module", value: "重点模块" },
        { id: "I-05", key: "output_format", value: "输出模式" },
        { id: "I-06", key: "time_window", value: "时间范围" },
        { id: "I-07", key: "task_id / date", value: "任务身份信息" },
      ],
    },
    lanes: [{
      id: "L-01",
      title: "结构化任务规划链路",
      description: "从需求解析到执行门槛检查",
      nodes: [
        { id: "01-01", title: "目标解析", description: "理解用户需求，明确研究范围" },
        { id: "01-02", title: "输入校验", description: "检查参数完整性与合法性" },
        { id: "01-03", title: "量规检索", description: "匹配适用的研究规则与量规" },
        { id: "01-04", title: "任务规划（上层）", description: "规划研究范围与检索方法" },
        { id: "01-05", title: "任务规划（下层）", description: "细化执行要求与输出标准" },
        { id: "01-06", title: "门槛检查 G1｜Code", description: "验证任务结构是否满足执行条件" },
      ],
    }],
    outputs: [
      { id: "O-01", type: "A", title: "task_book", description: "AI Agent 研究任务书", items: ["研究目标", "竞品对象", "检索规则", "输出格式"] },
      { id: "O-02", type: "C", title: "research_scope", description: "标准化研究范围｜工作流 02 的必要输入", items: ["时间范围", "研究边界", "任务逻辑"] },
    ],
    sidebar: {
      goal: "把用户的自然语言研究需求，转换成一份高度结构化、能够直接交给 AI Agent 执行的研究任务书，同时产出标准化研究范围。",
      values: ["明确研究边界与执行约束", "减少后续执行流程中的歧义", "为 AI Agent 提供稳定、可执行的输入"],
      boundaryTitle: "不执行研究",
      boundary: "本工作流不执行具体的竞品研究，而是作为后续 AI Agent 执行的任务编排层。",
    },
  },
  "workflow-02": {
    index: "02",
    theme: "violet",
    title: "工作流 02｜研究结果治理、人工评审与修订路由",
    lead: "对 AI 生成的竞品研究结果进行证据治理、质量检查和人工评审，并根据问题类型选择不同的处理路径。",
    input: {
      title: "AI 研究结果",
      items: [
        { id: "I-01", key: "AI_agent_output", value: "AI 生成的研究结果" },
        { id: "I-02", key: "Evidence", value: "证据与引用集" },
        { id: "I-03", key: "Branch", value: "多维度分析结果" },
        { id: "I-04", key: "SWOT", value: "初步的战略分析" },
      ],
    },
    lanes: [
      { id: "L-01", title: "航路 1｜Evidence 治理与事实保障", description: "先判断事实与来源是否可信", nodes: [
        { id: "02-01", title: "Evidence 处理", description: "统一证据结构与来源格式" },
        { id: "02-02", title: "事实层治理", description: "交叉核验关键事实" },
        { id: "02-03", title: "引用绑定与溯源", description: "建立结论与证据的映射" },
      ] },
      { id: "L-02", title: "航路 2｜质量检查与分析提炼", description: "检查结构、逻辑与结论质量", nodes: [
        { id: "02-04", title: "SWOT 战略提炼", description: "收敛战略结论" },
        { id: "02-05", title: "结构与引用校验", description: "检查章节和引用完整性" },
        { id: "02-06", title: "语义问题发现", description: "识别逻辑冲突与表达偏差" },
        { id: "02-07", title: "规则执行／质量评分", description: "量化输出可靠性状态" },
      ] },
      { id: "L-03", title: "航路 3｜人工评审与修订路由", description: "确定问题责任与治理路径", nodes: [
        { id: "02-08", title: "自动初审", description: "AI 检查可自动判断的问题" },
        { id: "02-09", title: "人工评审", description: "判断用户视角与使用意图" },
        { id: "02-10", title: "异常检测／Retry", description: "识别失败状态并触发重试" },
        { id: "02-11", title: "修订路由选择", description: "按问题类型分配处理路径" },
      ] },
    ],
    routes: [
      { id: "R-01", title: "无需修改", description: "质量达标，直接进入最终报告输出" },
      { id: "R-02", title: "本地修复", description: "生成 AI Agent 指导语并完成轻量修订" },
      { id: "R-03", title: "外部复杂修订", description: "封装资料包，进入工作流 03" },
    ],
    outputs: [
      { id: "A-01", type: "A", title: "标准化最终报告", description: "直接产出满足可靠性要求的治理后研究报告", items: ["证据可追溯", "结构化结论", "质量状态明确"] },
      { id: "B-01", type: "B", title: "AI Agent 指导语", description: "针对已识别问题生成清晰、可执行的优化指导", items: ["问题定位", "修改目标", "约束与验收条件"] },
      { id: "C-01", type: "C", title: "工作流 03 资料包", description: "为复杂修订提供完整、可交接的治理上下文", items: ["原始输出", "问题清单", "Evidence", "治理上下文"] },
    ],
    sidebar: {
      goal: "将 AI 竞品研究结果转化为经过证据治理和人工评审的研究状态，并根据问题类型选择自动发布、本地修复或进入外部复杂修订流程。",
      values: ["建立 AI 输出的可信度检查机制", "把人工评审与用户反馈纳入治理", "根据问题类型进行差异化修订路由"],
      boundaryTitle: "承接与输出",
      boundary: "承接 AI 研究结果，输出标准化最终报告、AI Agent 指导语；复杂问题同时封装工作流 03 资料包。",
    },
  },
  "workflow-03": {
    index: "03",
    theme: "amber",
    title: "工作流 03｜External AI 修订治理＋返修闭环＋最终发布",
    lead: "对 External AI 产生的修订结果进行二次审计，使修订过程保持在原始研究边界内，并通过返修循环实现最终发布。",
    input: {
      title: "修订任务与原始结果",
      items: [
        { id: "I-01", key: "AI_agent_output", value: "需跟踪的修订内容" },
        { id: "I-02", key: "W02_output", value: "治理后的原始研究结果" },
        { id: "I-03", key: "governance_context", value: "工作流 02 的修订需求与上下文" },
      ],
    },
    lanes: [
      { id: "L-01", title: "修订审计链路", description: "在进入修订前明确边界和质量门槛", nodes: [
        { id: "03-01", title: "解析与 Contract 治理", description: "解析修订内容并建立任务约束" },
        { id: "03-02", title: "确定性边界审计", description: "检查是否超出原始研究范围" },
        { id: "03-03", title: "语义质量审计", description: "评估内部一致性与逻辑完整性" },
        { id: "03-04", title: "修订裁决", description: "判断是否通过或继续返修" },
      ] },
      { id: "L-02", title: "通过路径", description: "修订结果满足治理要求时", nodes: [
        { id: "03-05", title: "修订政策整合", description: "合并规则、证据与修改记录" },
        { id: "03-06", title: "报告状态适配", description: "生成最终交付状态" },
      ] },
      { id: "L-03", title: "返修循环", description: "未通过时生成指导并再次修订", nodes: [
        { id: "03-07", title: "External AI 执行修订", description: "依据指导语完成复杂修改" },
        { id: "03-08", title: "问题响应检查", description: "核对问题是否被完整解决" },
        { id: "03-09", title: "返回修订结果", description: "重新进入审计链路" },
      ] },
    ],
    routes: [
      { id: "R-01", title: "通过", description: "封装最终报告并进入发布" },
      { id: "R-02", title: "需返修", description: "生成指导语并继续循环" },
    ],
    outputs: [
      { id: "A-01", type: "A", title: "标准化最终报告", description: "经过治理的最终修订结果，进入研究报告发布流程", items: ["整合原始研究边界", "保留修订记录", "完成发布门槛"] },
      { id: "B-01", type: "B", title: "AI Agent 指导语", description: "当结果未通过时，提供下一轮返修的具体指导", items: ["未解决问题", "修订目标", "边界与验收标准"] },
    ],
    sidebar: {
      goal: "治理 External AI 的修订过程，通过解析输出、审计边界与语义质量，并根据结果决定发布或进入返修循环。",
      values: ["控制 External AI 修改的不可预测风险", "通过多层审计保持研究边界", "建立可追溯的返修闭环机制"],
      boundaryTitle: "输出结果",
      boundary: "通过治理的修订结果进入最终报告；未通过的结果转换为 AI Agent 指导语并继续返修。",
    },
  },
} satisfies Record<string, WorkflowDetail>;

export type WorkflowId = keyof typeof workflowDetails;
export function isWorkflowId(value: string): value is WorkflowId { return value in workflowDetails; }

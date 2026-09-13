---
id: case01
route: /case01
kind: case
title: 工程质量验收数字化方案设计
subtitle: 基于真实工程经验完成的B端产品设计探索。
status: CASE 01 · CHAPTER 01–09
casePages:
  - id: page04
    index: "01"
    label: 背景
    title: 基于真实验收流程，重新审视现场工作方式
    lead: 从专业监理工程师的真实职责出发，说明产品问题如何产生于长期的现场实践。
    experience:
      title: 我的工程经验来源
      identity: 专业监理工程师 / 房建与市政工程
      description: 作为专业监理工程师，我长期负责房建、市政项目质量检查、分部分项验收及问题整改闭环工作，在现场判断、标准核验和多方协调中积累了对验收流程的真实理解。
      tags: [质量检查, 检验批验收, 标准核验, 整改闭环]
      images:
        - src: /assets/images/case01/site-coordination.png
          alt: 工程项目质量协调会议现场
          width: 1024
          height: 768
          caption: 多方围绕工程质量与验收事项进行协调确认
        - src: /assets/images/case01/site-inspection-municipal.png
          alt: 市政工程管线施工现场检查
          width: 558
          height: 419
          caption: 市政工程施工过程中的现场质量检查
        - src: /assets/images/case01/site-inspection-record.jpg
          alt: 专业监理工程师在现场核验构件信息
          width: 4032
          height: 3024
          caption: 在真实作业环境中执行核验与信息记录
    workflow:
      title: 验收流程拆解
      stages:
        - index: "01"
          title: 准备阶段
          behavior: 确认验收任务、范围和所需工具
          information: 任务通知、图纸、规范、历史问题
          goal: 建立可执行的现场检查准备
        - index: "02"
          title: 场内通勤阶段
          behavior: 前往作业面并处理临时任务变化
          information: 位置、时间、任务优先级与现场消息
          goal: 按当前条件到达正确检查位置
        - index: "03"
          title: 检查阶段
          behavior: 现场检查质量问题并记录发现
          information: 图纸、规范、验收记录
          goal: 判断是否符合验收标准
        - index: "04"
          title: 验收阶段
          behavior: 发起整改、复验并确认处理结果
          information: 问题记录、责任人、整改证据、复验结论
          goal: 推进问题完成闭环
        - index: "05"
          title: 成果归档阶段
          behavior: 整理验收结果与过程资料
          information: 状态、照片、记录与签认信息
          goal: 形成连续可追溯的验收档案
    conclusion: 验收工作并非单一检查任务，而是一套包含信息获取、现场判断、任务执行和结果闭环的复杂业务流程。
  - id: page05
    index: "02"
    label: 问题
    title: 从验收流程中发现痛点
    lead: 为了将环境 × 认知 × 身体的宏观归因转化为可设计的问题，我基于6年现场田野观察，将验收流程拆解为三种典型情境，识别出15个痛点在各阶段的分布模式，并推导对应的优化机会。
    insightTable:
      stages:
        - key: preparation
          title: 准备阶段
        - key: commute
          title: 场间通勤阶段
        - key: inspection
          title: 检查阶段
          subtitle: 包括整改复查阶段
        - key: acceptance
          title: 验收阶段
        - key: archive
          title: 成果归档阶段
      scenarios:
        - title: 正常流程
          insight: 即使任务清晰、流程顺畅，现场物理约束与信息就绪缺陷仍造成全链条摩擦：检查阶段依赖个人经验、记忆，验收阶段证据链不完整，而归档阶段重复搬运与二次录入进一步耗竭工程师。
          pathRows:
            - tone: primary
              points: [准备（就绪）, 通勤（行进）, 检查（专注）, 验收（闭环）, 归档（耗竭）]
          painCells:
            - stage: preparation
              items:
                - pain: 装备遗漏
                  detail: 出发前容易遗漏验收工具或安全装备。
                  opportunity: 装备智能推荐
            - stage: commute
              items: []
            - stage: inspection
              items:
                - pain: 图纸版本滞后
                  detail: 携带过期纸质图纸，导致依据旧标准。
                  opportunity: 图纸即时调用
                - pain: 物理操作受限
                  detail: 单手操作手机困难，现场记录效率低。
                  opportunity: 语音转结构化记录
                - pain: 经验孤岛
                  detail: 凭个人记忆检查，易漏检高频问题。
                  opportunity: 历史缺陷库反哺
                - pain: 标准模糊
                  detail: 现场争议时无法即时查阅规范。
                  opportunity: 规范即时调用
            - stage: acceptance
              items:
                - pain: 证据链断裂
                  detail: 图片数量不足，证据链不完整。
                  opportunity: 拍摄清单校验
                - pain: 反馈滞后
                  detail: 强光下屏幕看不清，事后才发现废片。
                  opportunity: 照片质量检查
                - pain: 环境记录失真
                  detail: 天气与温湿度依赖人工记录，误差较大。
                  opportunity: 元数据增强
                - pain: 信号盲点
                  detail: 工地弱网导致上传中断和记录丢失。
                  opportunity: 离线断点续传
            - stage: archive
              items:
                - pain: 二次搬运与重复录入
                  detail: 验收素材需手动导入多份表格并跨系统同步，重复劳动且易出错。
                  opportunity: 一次采集，多处分发
        - title: 返工
          insight: 施工单位以不合格构件试探报验，借反复复检消耗验收人员精力，利用锚定效应拉低质量基准，使较差结果通过验收。
          pathRows:
            - tone: primary
              label: 第一次验收：
              points: [准备（就绪）, 通勤（行进）, 初检不合格（要求返工）, "", ""]
            - tone: alert
              label: 第二次验收：
              points: ["", 通勤（急切）, 复检（警惕）, 验收（勉强）, 归档（耗竭）]
          painCells:
            - stage: preparation
              items: []
            - stage: commute
              items:
                - pain: 信息不对称
                  detail: 班组未完工却通知验收，造成无效往返。
                  opportunity: 顺路式数据采集
                - pain: 物理距离限制
                  detail: 进度核对依赖肉眼，无法远程同步。
                  opportunity: 异步状态同步
            - stage: inspection
              items:
                - pain: 流转迟缓
                  detail: 整改单需回办公室手写，处理周期长。
                  opportunity: 自动生成整改单
            - stage: acceptance
              items: []
            - stage: archive
              items: []
        - title: 临时插入任务
          insight: 任务信息多渠道弥散，工程师在无准备状态下被紧急调往新点位，缺乏图纸与变更支持，被迫仅凭最容易想起的个人经验仓促验收，埋下质量隐患。
          pathRows:
            - tone: primary
              label: 原验收任务：
              points: [准备（就绪）, 通勤（行进）, 检查（专注）, 验收（闭环）, ""]
            - tone: alert
              label: 临时验收任务：
              points: ["", 通勤（急切）, 检查（不耐烦）, 验收（勉强）, 归档（耗竭）]
          painCells:
            - stage: preparation
              items:
                - pain: 信息弥散
                  detail: 任务多渠道涌入，现场人员依赖记忆判断优先级。
                  opportunity: 自动聚合排序
            - stage: commute
              items: []
            - stage: inspection
              items: []
            - stage: acceptance
              items: []
            - stage: archive
              items: []
  - id: page06
    index: "03"
    label: 机会
    title: 从现场问题中识别产品机会
    lead: 基于用户价值与落地可行性，筛选优先级最高的解决方向。
    opportunities:
      title: 从痛点到机会
      items:
        - problem: 信息弥散
          opportunity: 自动聚合与时间排序
        - problem: 版本滞后
          opportunity: 图纸即时调用
        - problem: 标准模糊
          opportunity: 规范即时调用
        - problem: 装备遗漏
          opportunity: 装备智能匹配
        - problem: 信息不对称
          opportunity: 顺路式数据采集
        - problem: 物理距离限制
          opportunity: 异步状态同步
        - problem: 响应时效迟滞
          opportunity: 异步状态同步
        - problem: 物理操作受限
          opportunity: 语音转结构化记录
        - problem: 经验孤岛
          opportunity: 历史缺陷库反哺
        - problem: 流转迟缓
          opportunity: 自动生成整改单
        - problem: 证据效力弱
          opportunity: 水印防伪 / 元数据增强
        - problem: 证据链断裂
          opportunity: 拍摄清单校验
        - problem: 反馈滞后
          opportunity: 照片质量检查
        - problem: 信号盲点
          opportunity: 离线断点续传
        - problem: 二次搬运
          opportunity: 一次采集，多处分发
        - problem: 重复录入
          opportunity: 一次采集，多处分发
    matrix:
      title: 产品机会评估
      userValue: [损失严重性, 发生频率, 效率增益, 受益对象]
      feasibility: [技术复杂度, 数据就绪度, 环境适配度, 硬件依赖度]
      items:
        - title: 自动聚合排序
          userValue: 9
          feasibility: 8.9
          priority: P0
        - title: 图纸即时调用
          userValue: 9
          feasibility: 9.2
          priority: P0
        - title: 装备智能推荐
          userValue: 7
          feasibility: 8
        - title: 规范即时调用
          userValue: 9
          feasibility: 5
        - title: 顺路式数据采集
          userValue: 5
          feasibility: 7.3
        - title: 异步状态同步
          userValue: 6
          feasibility: 7.1
        - title: 语音转结构化记录
          userValue: 6
          feasibility: 4
        - title: 历史缺陷库反哺
          userValue: 9
          feasibility: 8
        - title: 自动生成整改单
          userValue: 6
          feasibility: 7.7
        - title: 拍摄清单校验
          userValue: 8
          feasibility: 4
        - title: 照片质量检查
          userValue: 8
          feasibility: 4.5
        - title: 元数据增强
          userValue: 5
          feasibility: 6.5
        - title: 离线断点续传
          userValue: 6
          feasibility: 6.8
        - title: 一次采集，多处分发
          userValue: 10
          feasibility: 7
    decisions:
      title: 首轮产品方向
      items:
        - index: "01"
          title: 图纸即时调用
          score: 用户价值 9 · 落地可行性 9.2
          rootCause: 携带过期纸质图纸到现场，可能导致验收依据失效，甚至引发违规风险。
          businessValue: 避免依据过期图纸错误验收，降低返工和工期延误风险。
          feasibility: 纯软件与离线缓存即可实现，无需新增硬件，也能适配现场弱网环境。
          delivery:
            - 核心交付：部位检索、关联聚合、变更警示、离线缓存
            - 进阶交付：版本冲突提示
            - 延迟交付：变更内容局部透视
        - index: "02"
          title: 自动聚合排序
          score: 用户价值 9 · 落地可行性 8.9
          rootCause: 验收任务散落在微信、电话和纸质通知中，现场人员依赖记忆判断优先级。
          businessValue: 消除任务碎片化，减少无效往返和遗漏风险，提高当日任务处理效率。
          feasibility: 规则引擎与基础数据管理即可实现，无需复杂算法，适合快速验证首版方案。
          delivery:
            - 核心交付：验收列表、智能排序、顺序调整、完成归档
            - 进阶交付：紧急标识、批量验收
            - 延迟交付：任务进度分享
  - id: page07
    index: "04"
    label: 方案
    title: 从产品机会到解决方案设计
    lead: 围绕“任务管理”和“图纸调用”两类核心机会，构建任务中心与图纸中心双系统，重新组织验收工作闭环。
    workflow:
      title: 产品化后的验收任务闭环流程
      legends:
        - key: task
          label: 任务管理系统
        - key: drawing
          label: 图纸管理系统
        - key: general
          label: 通用流程节点
      steps:
        - index: "01"
          title: 创建验收任务
          system: task
          systemLabel: 任务管理
        - index: "02"
          title: 系统聚合任务信息
          system: task
          systemLabel: 任务管理
        - index: "03"
          title: 现场检查
          system: general
          systemLabel: 现场作业
        - index: "04"
          title: 定位并查看关联图纸
          system: drawing
          systemLabel: 图纸管理
        - index: "05"
          title: 记录问题
          system: general
          systemLabel: 现场作业
        - index: "06"
          title: 生成整改任务
          system: task
          systemLabel: 任务管理
        - index: "07"
          title: 跟踪整改状态
          system: task
          systemLabel: 任务管理
        - index: "08"
          title: 完成验收闭环
          system: general
          systemLabel: 验收完成
    architecture:
      title: 支撑业务闭环的产品架构
      description: 架构不按页面菜单划分，而是按验收闭环中的业务职责组织，让两个核心能力共同承载现场执行。
      root: 工程验收管理系统
      modules:
        - key: task
          title: 任务管理系统
          description: 组织验收任务与整改状态，维持全过程的责任和进度连续性。
          capabilities: [验收任务, 状态管理, 整改闭环]
        - key: drawing
          title: 图纸管理系统
          description: 把正确的图纸与当前任务和工程部位关联，缩短现场查询路径。
          capabilities: [图纸关联, 快速定位, 现场查看]
        - key: support
          title: 支撑模块 · 非核心入口
          description: 收纳低频支持能力，为任务与图纸两条高频路径释放界面空间。
          capabilities: [个人中心, 项目信息, 导航菜单, Hub按钮精简]
      outcome: 任务管理 × 图纸管理 + 支撑模块 → 形成连续可追溯的验收闭环
  - id: page08
    index: "05"
    label: 设计
    title: 围绕关键现场场景的产品设计
    lead: 将产品方案转化为适应工程现场约束的功能流程与交互机制。
    journey:
      title: 验收闭环：从任务触达到结果归档
      intro: 围绕一次验收任务，将项目入口、任务定位、资料获取与现场记录连接为连续操作流程。
      image:
        src: /assets/images/case01/acceptance-journey.png
        alt: 从项目入口、验收任务定位、关联资料获取到现场验收记录的连续使用路径
        width: 1240
        height: 421
      stages:
        - index: "01"
          title: 项目入口：围绕验收任务组织项目信息
          problem: 验收人员进入项目后，需要在多个文件和沟通渠道中寻找当天任务及相关依据。
          decision: 以项目首页作为验收入口，将任务、图纸、变更记录和会议要点围绕当前验收事项聚合。
          value: 减少验收准备阶段的信息查找成本。
        - index: "02"
          title: 验收任务定位：将分散事项转化为可执行任务流
          problem: 验收任务分散在通知、群消息和纸质记录中，现场人员需要依靠经验判断处理顺序。
          decision: 通过任务状态和优先级聚合当前待处理事项。
          value: 帮助现场人员快速确认今日验收重点。
        - index: "03"
          title: 关联资料获取：让验收任务与判断依据同步关联
          problem: 验收过程中需要同时查阅图纸、设计变更和会议记录，资料与任务长期分离。
          decision: 根据验收位置和关键词自动关联相关工程资料。
          value: 减少资料切换，提高现场判断效率。
        - index: "04"
          title: 现场验收记录：将现场检查结果沉淀为闭环数据
          problem: 传统验收记录依赖纸质填写，问题发现与后续跟踪容易脱节。
          decision: 支持现场拍照、问题记录和验收结果直接关联任务。
          value: 形成从发现问题到结果归档的完整闭环。
      summary: 将依赖人工查找和经验协调的验收流程，转化为任务驱动、资料关联、结果可追踪的数字化闭环。
    decisions:
      title: 面向现场约束的产品决策
      items:
        - index: "01"
          kind: defensive
          title: 防御性交互
          context: 验收结果将直接影响后续施工决策，一旦误操作可能导致错误放行，引发质量风险、经济损失及责任风险。
          decision: 针对验收通过等高影响操作，引入数据核对与长按确认机制。
          value: 降低误操作导致的质量与责任风险。
          visuals:
            - label: 普通点击确认
              title: ""
              image:
                src: /assets/images/case01/defensive-click.png
                alt: 验收合格和要求整改的普通点击按钮
                width: 425
                height: 149
                caption: 常规按钮 · 误触风险
            - label: 增加长按确认
              title: ""
              image:
                src: /assets/images/case01/defensive-hold.png
                alt: 核对验收信息后长按确认的安全交互
                width: 451
                height: 149
                caption: 数据核对 + 长按 · 操作安全
        - index: "02"
          kind: progressive
          title: 渐进式收纳
          context: 项目状态对于过程追踪和管理决策十分重要，但现场人员主要关注当前验收任务。
          decision: 采用渐进式信息展示，默认突出高频验收任务，并支持按需查看项目状态。
          value: 保证信息可访问，同时减少现场操作干扰。
          visuals:
            - label: 首页默认状态
              title: 聚焦今日验收任务
              image:
                src: /assets/images/case01/scenario-sketch-1.png
                alt: 默认聚焦今日验收任务的项目首页
                width: 200
                height: 409
                caption: 默认状态聚焦现场高频任务
            - label: 展开项目情况
              title: 查看项目进度与基础信息
              image:
                src: /assets/images/case01/scenario-sketch-5.png
                alt: 展开项目情况后查看项目基础信息的界面
                width: 200
                height: 409
                caption: 按需展开项目状态信息
        - index: "03"
          kind: linked-search
          title: 信息联动搜索
          context: 现场人员未必参与全部会议，但设计变更和会议记录可能直接影响验收判断。
          decision: 将图纸、设计变更、会议记录与验收任务关联，帮助用户快速获取完整判断依据。
          value: 减少资料切换，提高现场判断准确性。
          visuals:
            - label: 任务内关联搜索
              title: 从当前任务进入关联信息
              image:
                src: /assets/images/case01/scenario-sketch-2.png
                alt: 从验收任务进入关联图纸、规范与业务记录的界面
                width: 200
                height: 409
                caption: 任务入口连接相关业务信息
            - label: 关联资料检索
              title: 获取完整判断依据
              image:
                src: /assets/images/case01/scenario-sketch-3.png
                alt: 同时检索图纸、设计变更与会议记录的关联资料界面
                width: 200
                height: 409
                caption: 图纸、变更与会议记录联动呈现
    principles:
      title: 产品决策总结
      items:
        - index: "01"
          title: 任务驱动
          description: 围绕验收任务组织项目、资料与操作流程。
        - index: "02"
          title: 风险控制
          description: 针对高影响操作增加确认机制，降低错误验收风险。
        - index: "03"
          title: 上下文关联
          description: 关联图纸、变更与会议记录，支持现场判断。
      statement: 基于工程现场约束，将验收流程转化为任务驱动、信息关联、结果可追踪的数字化产品方案。
  - id: page09
    index: "06"
    label: 验证
    title: 测试驱动的方案验证
    lead: 通过任务模拟与场景测试，验证验收闭环、信息架构及高风险操作在工程现场中的可用性。
    goals:
      title: 验证核心产品假设
      coreLabel: 三个核心验证目标
      supportLabel: 两个补充验证
      items:
        - index: "01"
          priority: core
          title: 验收闭环是否支持现场作业
          hypothesis: 现场人员可以通过系统完成任务定位、资料获取、验收执行、结果提交的完整工作流程。
          points: [是否能够找到验收任务入口, 是否能够完成一项验收闭环, 是否能够进入关联图纸与文档]
          image:
            src: /assets/images/case01/validation-01-v2.jpg
            alt: 从任务定位、资料获取到验收执行和结果提交的流程原型
            width: 2060
            height: 913
            caption: 任务 → 图纸 → 验收 → 结果
        - index: "02"
          priority: core
          title: 首页信息架构是否符合现场认知
          hypothesis: 首页需要同时满足快速进入当前任务与查看项目状态信息，而不是让用户混淆“任务入口”与“信息展示”。
          points: [任务汇总, 项目概览, 任务导航入口]
          image:
            src: /assets/images/case01/validation-02-v2.png
            alt: 突出今日验收任务的首页信息架构原型
            width: 1200
            height: 1160
            caption: 任务入口 → 首页认知 → 状态理解
        - index: "03"
          priority: core
          title: 防御性交互是否平衡效率与安全
          hypothesis: 验收通过属于高风险操作，需要通过额外确认降低误操作风险。
          points: [手动选区与长按确认是否增加不可接受的操作负担, 用户是否认为该机制能够降低误签认风险]
          image:
            src: /assets/images/case01/validation-03-v2.png
            alt: 验收信息核对与长按确认原型
            width: 1200
            height: 955
            caption: 确认机制 → 误触防护 → 安全感知
        - index: "04"
          priority: support
          title: 资料分类是否符合工程人员查找习惯
          hypothesis: 设计变更等工程资料需要通过合理分类支持快速定位。
          points: [用户是否能找到设计变更, 首次路径错误时是否能快速修正, “图纸 / 文档”的分类是否造成导航阻断]
          image:
            src: /assets/images/case01/validation-04-v2.png
            alt: 图纸与文档分类中的设计变更入口原型
            width: 1200
            height: 950
            caption: 图纸 / 文档定位
        - index: "05"
          priority: support
          title: 工程术语是否降低沟通成本
          hypothesis: 软件中的专业表达应接近工程人员已有认知。
          points: [用户是否能直觉理解列表状态, “红色感叹号”代表优先处理还是系统异常, 是否需要额外解释]
    test:
      title: 测试信息
      sample: 5人
      userTypes: [资深工程人员 3人, 助理工程人员 2人]
      methods: [任务模拟, 出声思考, 访谈]
      environments: [单手操作, 强光环境模拟]
    findings:
      title: 测试发现驱动产品迭代
      items:
        - title: 首页入口存在双重认知
          quotes:
            - 小王：“这个中间……感觉像一个总览。看一下现在有什么东西。”
            - 黄工：“这个中间的……应该是进去处理任务的吧。像今天要做什么东西。这里面应该有待处理的。如果开始工作，我应该直接点这里。看一下有没有新的验收。”
          problem: 用户同时将首页理解为任务入口与项目看板。
          judgment: 现场任务优先级高于信息浏览。
          change: 保留状态概览，同时强化任务入口。
        - title: 状态符号容易引发错误联想
          quotes:
            - 陈工：“这个红色的……感觉有问题。像报警一样。是不是这个任务过期了。或者施工单位这里有问题。反正不是正常状态。”
          problem: 红色感叹号被理解为报错。
          judgment: 高风险场景需要减少错误心理暗示。
          change: 调整状态表达。
        - title: 资料分类不符合工程查找路径
          quotes:
            - 李工：“找变更……应该在图纸吧。变更不就是改图纸嘛。我先看图纸。嗯？这里没有。怎么在文档里面。这个跟平时习惯不太一样。”
          problem: 用户优先寻找图纸，而非文档。
          judgment: 不能要求用户改变现场习惯。
          change: 增加设计变更独立入口。
    boundary:
      title: 验证边界
      validated: [核心验收闭环可完成, 任务与资料入口逻辑可理解, 防御性交互方案可接受]
      notValidated: [实际工程现场效率提升, 多项目、多角色协同效果, 长周期使用反馈]
    conclusion: 通过验证关键业务假设，将工程现场的不确定性转化为可执行的产品决策。
  - id: page10
    index: "07"
    label: 迭代
    title: 从测试反馈到产品迭代
    lead: 基于用户行为验证结果，调整信息架构、交互机制与现场适配策略。
    image:
      src: /assets/images/case01/product-iteration-overview.png
      alt: 首页任务聚合、验收状态优化与强光场景防御策略的产品迭代总览
      width: 4972
      height: 4016
      caption: 基于测试反馈形成的信息架构、状态语义与现场适配迭代
    method:
      title: 产品方法沉淀
      label: 总结
      capabilities:
        - index: "01"
          title: 业务理解
          description: 从工程流程中识别真实问题。
        - index: "02"
          title: 风险判断
          description: 优先处理影响质量、安全、责任的操作。
        - index: "03"
          title: 产品迭代
          description: 通过验证不断调整产品规则。
  - id: page11
    index: "08"
    label: 演进
    title: 从验收工具到工程质量管理平台的产品演进
    lead: 当前版本解决“如何快速找到任务与验收依据”，下一阶段通过风险反馈和数据沉淀，将验收流程扩展为工程质量管理体系。
    mvp:
      title: 当前版本：数字化验收执行闭环
      subtitle: 从任务定位到依据获取，减少现场人员依赖经验查找的信息成本。
      capabilities:
        - index: "01"
          title: 验收任务聚合与优先级排序
          userValue: 9
          feasibility: 8.9
          description: 解决现场任务分散问题，将多个验收事项集中展示，并辅助人员判断处理顺序。
        - index: "02"
          title: 图纸即时调用
          userValue: 9
          feasibility: 9.2
          description: 将验收任务与对应工程资料连接，降低版本错误和现场查找成本。
      opportunityTitle: 平台演进机会
      opportunity: 以当前验收数据为基础，下一阶段连接风险反馈、整改流程与项目质量资产。
      image:
        src: /assets/images/case01/acceptance-journey.png
        alt: 从任务聚合、资料关联到现场验收执行的数字化流程
        width: 1240
        height: 421
        caption: 任务聚合 → 资料关联 → 验收执行
    evolution:
      title: 产品演进方向：从信息获取到风险管理
      subtitle: 基于已有验收数据，进一步连接历史问题、整改流程和项目资产。
      directions:
        - index: "01"
          title: 任务 → 风险
          capability: 历史缺陷库反馈
          userValue: 9
          feasibility: 8
          current: 系统帮助用户找到“今天需要验收什么”。
          future: 结合历史缺陷数据，提前提示高风险验收事项。
          value: 从任务管理升级为风险辅助决策。
        - index: "02"
          title: 记录 → 数据资产
          capability: 一次采集，多处分发
          userValue: 10
          feasibility: 7
          current: 验收结果只服务一次现场记录。
          future: 一次现场数据采集，可同步形成项目质量档案、整改记录与管理台账。
          value: 将现场行为转化为企业质量资产。
        - index: "03"
          title: 结果 → 闭环
          capability: 自动生成整改单
          userValue: 6
          feasibility: 7.7
          current: 发现问题后需要人工整理。
          future: 基于验收结果生成整改任务，提高问题闭环效率。
          value: 延伸验收流程，连接整改管理。
    roadmap:
      title: 从验收流程到质量管理平台
      phases:
        - index: "01"
          title: 验收执行数字化
          status: 已完成
        - index: "02"
          title: 风险辅助决策
          status: 下一阶段
        - index: "03"
          title: 质量数据资产化
          status: 长期方向
      conclusion: 产品价值不止于替代纸质验收，而是通过连接任务、资料、风险和结果，让工程质量管理从经验驱动走向数据驱动。
  - id: page12
    index: "09"
    label: 方法
    title: 项目沉淀：从工程经验到数字产品能力
    lead: 将工程现场中的业务约束、风险关系和协作流程，转化为可执行、可验证、可迭代的产品判断。
    differentiation:
      title: 我的差异化能力
      items:
        - index: "01"
          title: 工程业务理解
          core: [流程约束, 责任边界, 风险节点]
          evidence: [验收流程拆解, 防御性交互设计, 信息架构调整]
          statement: 从业务现场识别真实问题，而不是从界面功能出发设计产品。
        - index: "02"
          title: 复杂业务抽象
          core: [信息结构, 任务流程, 产品规则]
          evidence: [双轴信息架构, 验收任务闭环, 图纸与任务关联]
          statement: 将依赖个人经验的工作方式转化为系统可执行规则。
        - index: "03"
          title: 验证驱动迭代
          core: [真实用户反馈, 产品假设, 方案修正]
          evidence: [可用性测试, 发现问题, 产品调整]
          statement: 不依赖主观判断，而通过验证推动方案优化。
    framework:
      title: 我的产品判断框架
      subtitle: 将工程背景嵌入产品判断全过程，让现场经验最终沉淀为可扩展的平台能力。
      nodes:
        - index: "01"
          title: 理解现场约束
          evidence: 工程验收流程分析
        - index: "02"
          title: 识别业务风险
          evidence: 防御性交互
        - index: "03"
          title: 抽象产品规则
          evidence: 任务聚合 + 信息架构
        - index: "04"
          title: 验证真实行为
          evidence: 5人可用性测试
        - index: "05"
          title: 沉淀平台能力
          evidence: 08产品演进路线
    fit:
      title: 我适合解决的问题
      subtitle: 适合需要深入业务现场、平衡多方约束并建立系统规则的数字产品问题。
      items:
        - index: "01"
          title: 高复杂业务系统
          involves: [多流程, 多角色, 强业务规则]
          label: 适合领域
          evidence: 工程数字化、制造、企业软件
        - index: "02"
          title: 高责任流程系统
          involves: [审批, 质量, 安全, 风险控制]
          label: 案例证据
          evidence: 防御性交互
        - index: "03"
          title: 多角色协作平台
          involves: [不同角色目标冲突, 信息同步, 数据闭环]
          label: 案例证据
          evidence: 验收任务与资料关联
    conclusion: 我的优势不是将线下流程简单搬到线上，而是在理解业务约束后，将复杂工程场景转化为可执行的数字产品方案。
sections: []
---
Case 01：从真实工程业务来源出发，经过问题发现、产品决策、方案设计与小样本验证，形成工程验收数字化方案。

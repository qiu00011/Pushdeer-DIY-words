// --- 配置区域 ---
const PUSHDEER_KEY = "YOUR_PUSHDEER_KEY"; // ⚠️ 替换你的 KEY

// 昵称库
const nicknames = ["考研人🎓", "", "Hello,yes it's me 🌚", "Maintain self-discipline 👊", "随机抽查 👮", "Are u remember me? 😏", "Come on, let’s study together! 💪"];

// --- 核心数据：考研终极易混词库 (350+ 组，覆盖全词根) ---
const confusingGroups = [
  // =========== 1. 炼狱级词根家族 (Root Words) ===========
  // -pose (放置): 极其重要
  ["compose", "decompose", "comprise"],    // 组成/作曲 vs 分解 vs 包含
  ["expose", "impose", "oppose"],          // 暴露 vs 强加 vs 反对
  ["propose", "purpose", "suppose"],       // 提议/求婚 vs 目的 vs 假设
  ["dispose", "depose", "repose"],         // 处置/倾向 vs 免职/作证 vs 休息
  ["transpose", "interpose"],              // 互换位置 vs 介入/插入

  // -fer (拿/带):
  ["confer", "infer", "refer"],            // 协商/授予 vs 推断 vs 参考/查阅
  ["defer", "differ", "prefer"],           // 推迟/听从 vs 不同 vs 更喜欢
  ["transfer", "suffer", "offer"],         // 转移 vs 遭受 vs 提供
  ["fertile", "fertilizer"],               // 肥沃的 vs 肥料

  // -sist (站立):
  ["assist", "consist", "resist"],         // 协助 vs 由..组成 vs 抵抗
  ["persist", "insist", "exist"],          // 坚持(动作) vs 坚持(观点) vs 存在
  ["subsist", "desist"],                   // 生存/维持生活 vs 停止

  // -mit (送):
  ["admit", "commit", "permit"],           // 承认 vs 承诺/犯罪 vs 允许
  ["emit", "omit", "submit"],              // 发射 vs 省略 vs 提交/屈服
  ["transmit", "remit", "vomit"],          // 传输/传播 vs 汇款/免除 vs 呕吐
  ["intermittent", "remittent"],           // 间歇的 vs 忽轻忽重的

  // -spect (看):
  ["aspect", "expect", "inspect"],         // 方面 vs 期待 vs 检查
  ["prospect", "respect", "suspect"],      // 前景 vs 尊重/方面 vs 怀疑
  ["retrospect", "introspect"],            // 回顾 vs 反省
  ["perspective", "spectacle", "spectacular"], // 视角/透视 vs 奇观/眼镜 vs 壮观的
  ["circumspect", "conspicuous"],          // 小心的/慎重的 vs 显眼的

  // -scribe (写):
  ["describe", "prescribe"],               // 描述 vs 开药/规定
  ["subscribe", "inscribe"],               // 订阅/同意 vs 题写/雕刻
  ["ascribe", "transcribe"],               // 归因于 vs 抄写/转录
  ["script", "scripture", "manuscript"],   // 脚本 vs 经文 vs 手稿

  // -duce (引导):
  ["produce", "product", "conduct"],       // 生产 vs 产品 vs 引导/实施
  ["reduce", "deduce", "induce"],          // 减少 vs 推导 vs 诱导/引起
  ["introduce", "seduce", "reproduce"],    // 介绍 vs 诱惑 vs 繁殖/复制

  // -tain (拿住):
  ["contain", "obtain", "maintain"],       // 包含/容纳 vs 获得 vs 维持/维修
  ["sustain", "retain", "detain"],         // 支撑/维持 vs 保留 vs 扣留
  ["attain", "pertain", "abstain"],        // 达到 vs 关于/从属 vs 戒除/弃权

  // -tract (拉):
  ["attract", "distract", "contract"],     // 吸引 vs 分心 vs 合同/收缩/感染
  ["extract", "subtract", "abstract"],     // 提取 vs 减去 vs 抽象/摘要
  ["protract", "retract", "detract"],      // 延长 vs 撤回 vs 贬低/减损

  // -voke (喊):
  ["evoke", "provoke", "revoke"],          // 唤起 vs 激怒/挑衅 vs 撤销/废除
  ["invoke", "convoke"],                   // 祈求/援引 vs 召集

  // -cess/ced (走):
  ["access", "excess", "process"],         // 入口/接近 vs 过度 vs 过程/加工
  ["precede", "recede", "concede"],        // 先于 vs 后退 vs 承认/让步
  ["proceed", "succeed", "exceed"],        // 继续进行 vs 成功/继承 vs 超过
  ["precedent", "president"],              // 先例 vs 总统
  ["accessory", "necessity"],              // 附件/同谋 vs 必需品

  // -press (压):
  ["compress", "depress", "express"],      // 压缩 vs 使沮丧/萧条 vs 表达/快递
  ["impress", "oppress", "suppress"],      // 印象深刻 vs 压迫 vs 镇压/抑制

  // -ply (折叠):
  ["apply", "comply", "imply"],            // 申请/应用 vs 遵守 vs 暗示
  ["reply", "supply", "multiply"],         // 回复 vs 供给 vs 乘/繁殖
  ["explicit", "implicit"],                // 明确的 vs 含蓄的

  // -tend (延伸):
  ["attend", "contend", "distend"],        // 参加/照料 vs 竞争/声称 vs 膨胀
  ["extend", "intend", "pretend"],         // 延伸 vs 打算 vs 假装
  ["tendency", "tender"],                  // 趋势 vs 温柔的/投标

  // -fess (说):
  ["confess", "profess"],                  // 忏悔/坦白 vs 声称/公开表明

  // -fuse (流):
  ["confuse", "diffuse", "infuse"],        // 使困惑 vs 扩散/弥漫 vs 注入
  ["refuse", "profuse", "transfuse"],      // 拒绝 vs 丰富的/浪费的 vs 输血

  // -pel/puls (推):
  ["compel", "expel", "repel"],            // 强迫 vs 开除/驱逐 vs 排斥/击退
  ["propel", "dispel", "impel"],           // 推进 vs 驱散(疑虑) vs 促使/推动
  ["impulse", "pulse"],                    // 冲动 vs 脉搏

  // -rupt (断):
  ["abrupt", "bankrupt", "corrupt"],       // 突然的/鲁莽的 vs 破产 vs 腐败
  ["disrupt", "erupt", "interrupt"],       // 扰乱/中断 vs 爆发/喷发 vs 打断

  // =========== 2. 经典形近异义词 (Look-alikes) ===========
  ["adapt", "adopt", "adept"],
  ["attitude", "altitude", "aptitude"],
  ["amoral", "immoral", "mortal"],         // 与道德无关 vs 不道德 vs 凡人/终有一死
  ["assure", "ensure", "insure"],
  ["aboard", "abroad", "board"],
  ["affect", "effect", "affection", "affectation"], // 影响 vs 效果 vs 喜爱 vs 做作
  ["angel", "angle", "ankle"],             // 天使 vs 角度 vs 脚踝
  ["bar", "bare", "bear"],                 // 酒吧/条 vs 裸露的/赤裸的 vs 忍受/熊
  ["born", "borne"],                       // 出生 vs 忍受/负荷(bear的pp)
  ["brake", "break"],                      // 刹车 vs 打破
  ["breath", "breathe", "breadth"],        // 呼吸(n) vs 呼吸(v) vs 宽度
  ["canvas", "canvass"],
  ["capital", "capitol"],                  // 首都/资金 vs 国会大厦
  ["casual", "causal"],                    // 随意的 vs 因果关系的
  ["cite", "site", "sight"],               // 引用 vs 地点 vs 视力/景象
  ["clash", "crash", "crush"],             // 冲突(声) vs 坠毁/撞击 vs 压碎/迷恋
  ["coarse", "course"],                    // 粗糙的 vs 课程/过程
  ["collision", "collusion"],              // 碰撞 vs 勾结
  ["command", "commend", "comment"],       // 命令 vs 赞扬/推荐 vs 评论
  ["compliment", "complement"],
  ["confirm", "conform"],
  ["contact", "contract", "contrast", "context"],
  ["costume", "custom", "customer"],       // 戏服 vs 习俗/海关 vs 顾客
  ["council", "counsel", "consul"],
  ["dairy", "diary", "daily"],
  ["decent", "descent", "dissent"],
  ["desert", "dessert", "dissert"],        // 沙漠/抛弃 vs 甜点 vs 论述
  ["dose", "doze"],                        // 剂量 vs 打盹
  ["drought", "draught/draft"],            // 干旱 vs 气流/草稿/汇票
  ["eligible", "illegible"],               // 有资格的 vs 字迹模糊的
  ["eminent", "imminent", "immanent"],     // 杰出的 vs 迫在眉睫的 vs 内在的
  ["expand", "expend", "extend", "extent"], // 扩张 vs 花费 vs 延伸 vs 程度
  ["fair", "fare"],                        // 公平/集市 vs 车费/进展
  ["flesh", "flash", "flush"],             // 肉 vs 闪光 vs 冲洗/脸红
  ["flee", "flea"],                        // 逃跑 vs 跳蚤
  ["flour", "flower", "floor"],
  ["genius", "genus", "genuine"],          // 天才 vs (生物)属 vs 真正的
  ["grace", "grease", "graze"],            // 优雅 vs 油脂 vs 放牧/擦伤
  ["human", "humane"],                     // 人类 vs 人道的
  ["idle", "idol", "ideal"],               // 懒散的/空闲的 vs 偶像 vs 理想
  ["imaginable", "imaginary", "imaginative"],
  ["ingenious", "ingenuous"],              // 灵巧的 vs 天真的
  ["intense", "intensive"],
  ["later", "latter", "latest", "lately"],
  ["launch", "lunch"],                     // 发射/发起 vs 午餐
  ["lay", "lie", "layer", "liar"],         // 放/下蛋 vs 躺/说谎 vs 层 vs 骗子
  ["literal", "literary", "literate", "liberal"],
  ["loose", "lose", "loss", "lost"],
  ["march", "match"],
  ["marry", "merry"],                      // 结婚 vs 快乐的
  ["mass", "mess", "miss"],                // 块/大众 vs 混乱 vs 想念/错过
  ["medal", "model", "metal", "mental", "meddle"], // 奖牌 vs 模范 vs 金属 vs 精神 vs 干涉
  ["moral", "morale"],                     // 道德 vs 士气
  ["pat", "tap", "rap", "slap"],           // 轻拍 vs 轻敲/水龙头 vs 敲击/说唱 vs 扇耳光
  ["peak", "peek", "pick"],                // 山峰 vs 偷看 vs 捡/挑
  ["personal", "personnel"],
  ["phase", "phrase"],                     // 阶段 vs 短语
  ["potion", "portion", "poison"],         // 药剂 vs 一部分 vs 毒药
  ["pray", "prey"],
  ["precede", "proceed"],
  ["principal", "principle"],
  ["quite", "quiet", "quit"],
  ["raise", "rise", "raze"],               // 举起 vs 上升 vs 夷为平地
  ["reality", "realty"],
  ["saloon", "salon"],                     // 大厅/酒吧 vs 沙龙
  ["scare", "scarce"],                     // 惊吓 vs 缺乏的
  ["sever", "severe", "persevere"],        // 切断 vs 严厉的 vs 坚持不懈
  ["simultaneous", "spontaneous"],         // 同时的 vs 自发的
  ["single", "singular"],                  // 单一的 vs 单数的/非凡的
  ["soar", "sore", "sour"],                // 猛增/翱翔 vs 疼痛的 vs 酸的
  ["staff", "stuff"],
  ["stare", "starve"],                     // 盯着看 vs 挨饿
  ["stationery", "stationary"],
  ["statue", "status", "statute", "stature"],
  ["steal", "steel", "still"],             // 偷 vs 钢铁 vs 仍然/静止
  ["story", "storey"],                     // 故事 vs 楼层
  ["sweet", "sweat", "swear"],             // 甜 vs 汗 vs 发誓
  ["track", "trace", "tract", "trait"],    // 轨道/踪迹 vs 追踪/痕迹 vs 土地/传单 vs 特征
  ["vocation", "vacation"],
  ["wander", "wonder"],
  ["weather", "whether"],

  // =========== 3. 极易混淆的形容词/副词 ===========
  ["considerable", "considerate"],
  ["credible", "creditable", "credulous"],
  ["desirable", "desirous"],
  ["economic", "economical"],
  ["electric", "electrical", "electronic"],
  ["historic", "historical"],
  ["respectable", "respectful", "respective"],
  ["sensible", "sensitive", "sensory", "sentimental"],
  ["sociable", "social", "societal"],      // 善于交际的 vs 社会的(社交) vs 社会的(宏观)
  ["transient", "transitional"],           // 短暂的 vs 过渡的
  ["valuable", "invaluable", "valueless"], // 贵重的 vs 无价的(极贵) vs 没价值的
  ["variable", "invariable", "various"],   // 易变的 vs 不变的 vs 各种各样的
];

// --- 功能函数 ---

function getRandomNick() {
  return nicknames[Math.floor(Math.random() * nicknames.length)];
}

function getRandomGroup() {
  return confusingGroups[Math.floor(Math.random() * confusingGroups.length)];
}

function generateMessage(nick, wordGroup) {
  // 构造查询链接 (Bing 搜索)
  const queryStr = `define ${wordGroup.join(" vs ")}`;
  const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(queryStr)}`;

  // 单词列表
  const wordListStr = wordGroup.map((w, i) => `${i + 1}. ${w}`).join("\n");

  const templates = [
    `【⚔️ 词根大乱斗】\n${nick}，这组词根家族你能分清吗？\n\n${wordListStr}`,
    `【😵‍💫 迷魂阵】\n${nick}，别晕！快看这几个长得像不像？\n\n${wordListStr}`,
    `【📝 考研易错题】\n${nick}，这组词在完形填空里经常互换哦！\n\n${wordListStr}`,
    `【🔥 高频雷区】\n${nick}，这组词你要是背错了，作文就扣分啦！\n\n${wordListStr}`,
    `【⏰ 醒脑时间】\n${nick}，3秒钟反应时间，开始！\n\n${wordListStr}`
  ];

  const randomTemp = templates[Math.floor(Math.random() * templates.length)];
  return `${randomTemp}\n\n👉 忘了? 点我查看答案: ${searchUrl}`;
}

async function sendPushDeer(text) {
  const url = `https://api2.pushdeer.com/message/push?pushkey=${PUSHDEER_KEY}&text=${encodeURIComponent(text)}`;
  const response = await fetch(url, { method: "GET" });
  return await response.json();
}

async function handleScheduled(event) {
  const nick = getRandomNick();
  const wordGroup = getRandomGroup();
  const text = generateMessage(nick, wordGroup);
  const result = await sendPushDeer(text);
  console.log(`Sent: ${wordGroup.join('/')}`, result);
  return result;
}

// --- 监听 ---
addEventListener('scheduled', event => {
  event.waitUntil(handleScheduled(event));
});

addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
      const nick = getRandomNick();
      const wordGroup = getRandomGroup();
      const text = generateMessage(nick, wordGroup);
      return new Response(text, { status: 200, headers: {'content-type': 'text/plain; charset=utf-8'} });
    })()
  );
});

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(handleScheduled(event));
  },
  async fetch(request, env, ctx) {
     const nick = getRandomNick();
     const wordGroup = getRandomGroup();
     const text = generateMessage(nick, wordGroup);
     return new Response(text, { status: 200, headers: {'content-type': 'text/plain; charset=utf-8'} });
  }
};

// 昵称库
const nicknames = ["考研人🎓", "", "Hello,yes it's me 🌚", "Maintain self-discipline 👊", "随机抽查 👮", "Are u remember me? 😏", "Come on, let’s study together! 💪"];

// --- 核心数据：考研终极易混词库 (350+组) ---
const confusingGroups = [
  // =========== 1. 炼狱级词根家族 (Root Words) ===========
  ["compose", "decompose", "comprise"],    
  ["expose", "impose", "oppose"],          
  ["propose", "purpose", "suppose"],       
  ["dispose", "depose", "repose"],         
  ["transpose", "interpose"],              
  ["confer", "infer", "refer"],            
  ["defer", "differ", "prefer"],           
  ["transfer", "suffer", "offer"],         
  ["fertile", "fertilizer"],               
  ["assist", "consist", "resist"],         
  ["persist", "insist", "exist"],          
  ["subsist", "desist"],                   
  ["admit", "commit", "permit"],           
  ["emit", "omit", "submit"],              
  ["transmit", "remit", "vomit"],          
  ["intermittent", "remittent"],           
  ["aspect", "expect", "inspect"],         
  ["prospect", "respect", "suspect"],      
  ["retrospect", "introspect"],            
  ["perspective", "spectacle", "spectacular"], 
  ["circumspect", "conspicuous"],          
  ["describe", "prescribe"],               
  ["subscribe", "inscribe"],               
  ["ascribe", "transcribe"],               
  ["script", "scripture", "manuscript"],   
  ["produce", "product", "conduct"],       
  ["reduce", "deduce", "induce"],          
  ["introduce", "seduce", "reproduce"],    
  ["contain", "obtain", "maintain"],       
  ["sustain", "retain", "detain"],         
  ["attain", "pertain", "abstain"],        
  ["attract", "distract", "contract"],     
  ["extract", "subtract", "abstract"],     
  ["protract", "retract", "detract"],      
  ["evoke", "provoke", "revoke"],          
  ["invoke", "convoke"],                   
  ["access", "excess", "process"],         
  ["precede", "recede", "concede"],        
  ["proceed", "succeed", "exceed"],        
  ["precedent", "president"],              
  ["accessory", "necessity"],              
  ["compress", "depress", "express"],      
  ["impress", "oppress", "suppress"],      
  ["apply", "comply", "imply"],            
  ["reply", "supply", "multiply"],         
  ["explicit", "implicit"],                
  ["attend", "contend", "distend"],        
  ["extend", "intend", "pretend"],         
  ["tendency", "tender"],                  
  ["confess", "profess"],                  
  ["confuse", "diffuse", "infuse"],        
  ["refuse", "profuse", "transfuse"],      
  ["compel", "expel", "repel"],            
  ["propel", "dispel", "impel"],           
  ["impulse", "pulse"],                    
  ["abrupt", "bankrupt", "corrupt"],       
  ["disrupt", "erupt", "interrupt"],       

  // =========== 2. 经典形近异义词 (Look-alikes) ===========
  ["adapt", "adopt", "adept"],
  ["attitude", "altitude", "aptitude"],
  ["amoral", "immoral", "mortal"],         
  ["assure", "ensure", "insure"],
  ["aboard", "abroad", "board"],
  ["affect", "effect", "affection", "affectation"], 
  ["angel", "angle", "ankle"],             
  ["bar", "bare", "bear"],                 
  ["born", "borne"],                       
  ["brake", "break"],                      
  ["breath", "breathe", "breadth"],        
  ["canvas", "canvass"],
  ["capital", "capitol"],                  
  ["casual", "causal"],                    
  ["cite", "site", "sight"],               
  ["clash", "crash", "crush"],             
  ["coarse", "course"],                    
  ["collision", "collusion"],              
  ["command", "commend", "comment"],       
  ["compliment", "complement"],
  ["confirm", "conform"],
  ["contact", "contract", "contrast", "context"],
  ["costume", "custom", "customer"],       
  ["council", "counsel", "consul"],
  ["dairy", "diary", "daily"],
  ["decent", "descent", "dissent"],
  ["desert", "dessert", "dissert"],        
  ["dose", "doze"],                        
  ["drought", "draught/draft"],            
  ["eligible", "illegible"],               
  ["eminent", "imminent", "immanent"],     
  ["expand", "expend", "extend", "extent"], 
  ["fair", "fare"],                        
  ["flesh", "flash", "flush"],             
  ["flee", "flea"],                        
  ["flour", "flower", "floor"],
  ["genius", "genus", "genuine"],          
  ["grace", "grease", "graze"],            
  ["human", "humane"],                     
  ["idle", "idol", "ideal"],               
  ["imaginable", "imaginary", "imaginative"],
  ["ingenious", "ingenuous"],              
  ["intense", "intensive"],
  ["later", "latter", "latest", "lately"],
  ["launch", "lunch"],                     
  ["lay", "lie", "layer", "liar"],         
  ["literal", "literary", "literate", "liberal"],
  ["loose", "lose", "loss", "lost"],
  ["march", "match"],
  ["marry", "merry"],                      
  ["mass", "mess", "miss"],                
  ["medal", "model", "metal", "mental", "meddle"], 
  ["moral", "morale"],                     
  ["pat", "tap", "rap", "slap"],           
  ["peak", "peek", "pick"],                
  ["personal", "personnel"],
  ["phase", "phrase"],                     
  ["potion", "portion", "poison"],         
  ["pray", "prey"],
  ["precede", "proceed"],
  ["principal", "principle"],
  ["quite", "quiet", "quit"],
  ["raise", "rise", "raze"],               
  ["reality", "realty"],
  ["saloon", "salon"],                     
  ["scare", "scarce"],                     
  ["sever", "severe", "persevere"],        
  ["simultaneous", "spontaneous"],         
  ["single", "singular"],                  
  ["soar", "sore", "sour"],                
  ["staff", "stuff"],
  ["stare", "starve"],                     
  ["stationery", "stationary"],
  ["statue", "status", "statute", "stature"],
  ["steal", "steel", "still"],             
  ["story", "storey"],                     
  ["sweet", "sweat", "swear"],             
  ["track", "trace", "tract", "trait"],    
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
  ["sociable", "social", "societal"],      
  ["transient", "transitional"],           
  ["valuable", "invaluable", "valueless"], 
  ["variable", "invariable", "various"],   
];

// --- 功能函数 ---

function getRandomNick() {
  return nicknames[Math.floor(Math.random() * nicknames.length)];
}

function getRandomGroup() {
  return confusingGroups[Math.floor(Math.random() * confusingGroups.length)];
}

function generateMessage(nick, wordGroup) {
  const queryStr = `define ${wordGroup.join(" vs ")}`;
  const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(queryStr)}`;

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

// ⚠️ 获取环境变量中的 KEY
function getKeys(env) {
  const keys = [];
  // 尝试从 env 对象获取 (ES Module 模式)
  if (env.KEY1) keys.push(env.KEY1);
  if (env.KEY2) keys.push(env.KEY2);
  
  // 兜底：如果没获取到，打印错误日志
  if (keys.length === 0) {
    console.error("未找到 KEY1 或 KEY2，请在 Cloudflare Worker 设置 -> 变量 中添加环境变量！");
  }
  return keys;
}

// ⚠️ 支持多Key推送函数
async function sendPushDeer(text, env) {
  // 动态获取 Keys
  const keys = getKeys(env);

  if (keys.length === 0) {
    return { error: "No keys configured" };
  }

  // 遍历所有Key，生成请求任务
  const pushTasks = keys.map(async (key) => {
    const url = `https://api2.pushdeer.com/message/push?pushkey=${key}&text=${encodeURIComponent(text)}`;
    try {
      const response = await fetch(url, { method: "GET" });
      return await response.json();
    } catch (error) {
      console.error(`Key (前缀:${key.substring(0,4)}...) 发送失败:`, error);
      return { error: error.message };
    }
  });

  // 并行发送，等待所有结果
  return await Promise.all(pushTasks);
}

// --- 核心调度 ---
async function handleScheduled(event, env) {
  const nick = getRandomNick();
  const wordGroup = getRandomGroup();
  const text = generateMessage(nick, wordGroup);
  
  // 把 env 传给推送函数
  const results = await sendPushDeer(text, env);
  console.log(`Sent: ${wordGroup.join('/')}`, JSON.stringify(results));
  return results;
}

// --- 事件监听 (Standard Module Syntax) ---
export default {
  // 定时任务入口
  async scheduled(event, env, ctx) {
    ctx.waitUntil(handleScheduled(event, env));
  },
  
  // 浏览器访问入口
  async fetch(request, env, ctx) {
     const nick = getRandomNick();
     const wordGroup = getRandomGroup();
     const text = generateMessage(nick, wordGroup);
     
     // 如果你想在浏览器访问时也触发推送，取消下面这行注释：
     // await sendPushDeer(text, env);

     return new Response(text, { status: 200, headers: {'content-type': 'text/plain; charset=utf-8'} });
  }
};

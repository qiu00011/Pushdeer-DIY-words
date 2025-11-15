// 随机文字库
const randomTexts = [
  "今天也要元气满满哦！",
  "记得多喝水，照顾好自己",
  "每一天都是新的开始",
  "你比你想象的更强大",
  "慢慢来，比较快",
  "保持微笑，好运会来",
  "今天的努力，是明天的惊喜",
  "相信自己，你可以的！",
  "别忘了给自己一个拥抱",
  "做自己喜欢的事情，其他的顺其自然"
];

// PushDeer 推送函数
async function sendPushDeer(text) {
  const PUSHDEER_KEY = "YOUR_PUSHDEER_KEY"; // 替换为你的 PushDeer Key
  const url = `https://api2.pushdeer.com/message/push?pushkey=${PUSHDEER_KEY}&text=${encodeURIComponent(text)}`;
  
  const response = await fetch(url, {
    method: "GET"
  });
  
  return await response.json();
}

// 获取随机文字
function getRandomText() {
  const randomIndex = Math.floor(Math.random() * randomTexts.length);
  return randomTexts[randomIndex];
}

// 定时任务处理函数
async function handleScheduled(event) {
  const text = getRandomText();
  const result = await sendPushDeer(text);
  console.log(`Sent message: ${text}`, result);
  return result;
}

// 监听 scheduled 事件
addEventListener('scheduled', event => {
  event.waitUntil(handleScheduled(event));
});

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(handleScheduled(event));
  }
};

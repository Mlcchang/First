const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 解析 application/json
app.use(bodyParser.json());

// 提供靜態文件（HTML, CSS 等）
app.use(express.static('public'));

// 處理表單提交的路由
app.post('/action_page.php', (req, res) => {
  const { stname, stid, stmail, '信件分類': mailtype, mailtitle, mailcontent, mailappendix, feedback } = req.body;
  console.log('姓名:', stname);
  console.log('學號:', stid);
  console.log('電子信箱:', stmail);
  console.log('信件分類:', mailtype);
  console.log('信件主旨:', mailtitle);
  console.log('信件內容:', mailcontent);
  console.log('附件:', mailappendix);
  console.log('是否需要回覆:', feedback);

  res.send('表單已成功提交！');
});

app.post('/submit-feedback', (req, res) => {
    const { stname, stid, stmail, 信件分類, mailtitle, mailcontent, mailappendix, feedback } = req.body;
    // 根據需要處理表單數據，這裡示例是將收到的數據打印到控制台
    console.log(`收到來自 ${stname} (${stid}) 的意見反饋，信箱為 ${stmail}，主題為 ${mailtitle}`);
    // 回應客戶端，可以是一個成功消息或者重定向到其他頁面
    res.send('已收到意見反饋！');

app.listen(port, () => {
  console.log(`伺服器正在 http://localhost:${port} 運行`);
});

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// 連接到MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const formData = req.body;
  // 處理表單數據，例如儲存到資料庫
  res.send('表單已接收');
});

app.listen(port, () => {
  console.log(`伺服器運行於 http://localhost:${port}`);
});


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
    const { stname, stid, stmail, mailtype, mailtitle, mailcontent, mailappendix, feedback } = req.body;
    
    // 創建新的資料庫模型實例
    const newUser = new User({
        name: stname,
        studentId: stid,
        email: stmail,
        mailType: mailtype,
        mailTitle: mailtitle,
        mailContent: mailcontent,
        mailAppendix: mailappendix,
        feedback: feedback
    });

    // 將新使用者儲存到資料庫
    newUser.save().then(user => {
        console.log('User saved:', user);
        res.send('已收到意見反饋！');
    }).catch(error => {
        console.error('Error saving user:', error);
        res.status(500).send('儲存使用者時發生錯誤！');
    });
});

app.listen(port, () => {
  console.log(`伺服器正在 http://localhost:${port} 運行`);
});

const mongoose = require('mongoose');

// 連接到MongoDB資料庫
mongoose.connect('mongodb://localhost:27017/yourDBName', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const User = require('./path/to/userSchema');

// 您可以開始使用User model進行資料庫操作了
const newUser = new User({
  name: 'LCChang',
  email: 'a8578155@gmail.com',
  password: 'mike0978'
});

newUser.save().then(user => {
  console.log('User saved:', user);
}).catch(error => {
  console.error('Error saving user:', error);
});
}

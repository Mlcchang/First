const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// 連接到MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// 定義資料模型
const userSchema = new mongoose.Schema({
  name: String,
  studentId: String,
  email: String,
  mailType: String,
  mailTitle: String,
  mailContent: String,
  mailAppendix: String,
  feedback: String
});

const User = mongoose.model('User', userSchema);

app.use(express.urlencoded({ extended: true }));

// 處理表單提交的路由
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
  newUser.save()
    .then(user => {
      console.log('User saved:', user);
      res.send('已收到意見反饋！');
    })
    .catch(error => {
      console.error('Error saving user:', error);
      res.status(500).send('儲存使用者時發生錯誤！');
    });
});

app.listen(port, () => {
  console.log(`伺服器運行於 http://localhost:${port}`);
});

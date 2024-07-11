<script>
document.getElementById('mail').addEventListener('input', function() {
  const mail = this.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailError = document.getElementById('emailError');

  if (!emailPattern.test(mail)) {
    emailError.style.display = 'inline';
  } else {
    emailError.style.display = 'none';
  }
});
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 防止表單實際提交

  // 獲取表單數據
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const mail = document.getElementById('mail').value;
  const type = document.getElementById('type').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const appendix = document.getElementById('appendix').value;
  const feedback = document.getElementById('feedback').value;


  // 模擬表單數據處理
  console.log('姓名:', name);
  console.log('學號:', id);
  console.log('電子信箱:', mail);
  console.log('信件分類:', type);
  console.log('信件主旨:', title);
  console.log('信件內容:', content);
  console.log('附件:', appendix);
  console.log('是否需要回覆:', feedback);

  alert('表單已提交，請檢查控制台查看提交的數據。');
});
</script>
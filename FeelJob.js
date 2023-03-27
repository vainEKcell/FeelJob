// 获取导航栏元素和按钮元素
var sidebar = document.getElementById('nav');
var toggleBtn = document.getElementById('li');

// 添加点击事件
toggleBtn.addEventListener('click', function() {
  // 切换导航栏的类名
  sidebar.classList.toggle('collapsed');
});

//链接跳转
function goToPage(url) {
    window.location.href = url;
}

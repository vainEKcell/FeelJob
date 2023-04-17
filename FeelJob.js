/*
// 获取导航栏元素和按钮元素
let sidebar = document.getElementById('nav');
let toggleBtn = document.getElementById('li');

// 添加点击事件
toggleBtn.addEventListener('click', function() {
  // 切换导航栏的类名
  sidebar.classList.toggle('collapsed');
});

//手动切换轮播图
const img = document.querySelector(".div img");
let last = document.getElementById("btnLast");
let next = document.getElementById("btnNext");
let currentSlide = 0;

*/

let currentSlide = 0;
const slides = document.querySelectorAll('.img img');
let intervalId;

function showSlide(slideIndex) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[slideIndex].style.display = 'block';
  currentSlide = slideIndex;
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    showSlide(0);
  } else {
    showSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide === 0) {
    showSlide(slides.length - 1);
  } else {
    showSlide(currentSlide - 1);
  }
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    nextSlide();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

document.getElementById('btnNext').addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

document.getElementById('btnLast').addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

startAutoSlide();
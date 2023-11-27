// Map
const stars = [
  { star: document.getElementById('star-1'), tooltip: document.getElementById('tooltip-1') },
  { star: document.getElementById('star-2'), tooltip: document.getElementById('tooltip-2') },
  { star: document.getElementById('star-3'), tooltip: document.getElementById('tooltip-3') },
  { star: document.getElementById('star-4'), tooltip: document.getElementById('tooltip-4') },
  { star: document.getElementById('star-5'), tooltip: document.getElementById('tooltip-5') },
  { star: document.getElementById('star-6'), tooltip: document.getElementById('tooltip-6') },
  { star: document.getElementById('star-7'), tooltip: document.getElementById('tooltip-7') }
];

stars.forEach(({ star, tooltip }) => {
  // const screenWidth = window.innerWidth;
  const screenWidth = document.documentElement.clientWidth;

  if (screenWidth <= 750) {
      star.addEventListener('click', (event) => {
          event.stopPropagation();
          if (tooltip.style.display === 'block') {
              tooltip.style.display = 'none';
          } else {
              tooltip.style.display = 'block';
          }
      });

      document.addEventListener('click', () => {
          tooltip.style.display = 'none';
      });
  } else {
      star.addEventListener('mouseenter', () => {
          tooltip.style.display = 'block';
      });
      star.addEventListener('mouseleave', () => {
          tooltip.style.display = 'none';
      });
  }
});     

// PopUp
const openPopUp = document.querySelectorAll('.open-pop-up');
const closePopUp = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');
const body = document.querySelector('body');

openPopUp.forEach(b => b.addEventListener('click', function(e) {
  e.preventDefault();
  popUp.classList.add('active-pop-up');
  body.classList.add('scroll-lock'); // Добавление класса для блокировки прокрутки

  closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active-pop-up');
    body.classList.remove('scroll-lock'); // Удаление класса для разблокировки прокрутки
  });
}));

document.querySelector('.scroll-top-button').addEventListener('click', function() {
  // Функция для плавной прокрутки страницы
  function scrollToTop() {
    if (window.scrollY !== 0) {
      // Прокручиваем страницу на 10% от текущего положения
      window.scrollBy(0, -window.scrollY * 0.1);
      requestAnimationFrame(scrollToTop);
    }
  }

  scrollToTop();
});

// Функция для изменения пути изображений при достижении определенной ширины экрана
function changeImagePaths() {
  // Получаем текущую ширину экрана
  const screenWidth = window.innerWidth;

  // Проверяем, соответствует ли ширина экрана условию
  if (screenWidth <= 800) {
    // Получаем все элементы <img> с классом "tooltip"
    const tooltips = document.getElementsByClassName("tooltip");

    // Перебираем все элементы и изменяем пути изображений
    for (let i = 0; i < tooltips.length; i++) {
      const img = tooltips[i].querySelector("img");
      const src = img.getAttribute("src");
      const newSrc = src.replace("/map/", "/map/mobile/");
      img.setAttribute("src", newSrc);
    }
  } else {
    // Если ширина экрана больше 800, возвращаем пути изображений к исходному состоянию
    const tooltips = document.getElementsByClassName("tooltip");

    for (let i = 0; i < tooltips.length; i++) {
      const img = tooltips[i].querySelector("img");
      const src = img.getAttribute("src");
      const newSrc = src.replace("/map/mobile/", "/map/");
      img.setAttribute("src", newSrc);
    }
  }
}

// Вызываем функцию для первоначальной установки путей изображений
changeImagePaths();

// Слушаем изменения ширины окна и вызываем функцию при необходимости
window.addEventListener("resize", changeImagePaths);


window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 0) {
    header.classList.add('header-race');
  } else {
    header.classList.remove('header-race');
  }
});

const callBottomButton = document.querySelector('.call-bottom-button');
const buttonGroupList = document.querySelector('.button-group-list');

callBottomButton.addEventListener('mouseenter', function() {
  buttonGroupList.style.opacity = '1';
});

buttonGroupList.addEventListener('mouseleave', function() {
  buttonGroupList.style.opacity = '0';
});

document.addEventListener('DOMContentLoaded', function () {
  var callBottomButton = document.querySelector('.call-bottom-button');
  var buttonGroupList = document.querySelector('.button-group-list');
  var isButtonGroupListOpen = false;

  callBottomButton.addEventListener('click', function () {
    if (isButtonGroupListOpen) {
      buttonGroupList.style.opacity = '0';
      isButtonGroupListOpen = false;
    } else {
      buttonGroupList.style.opacity = '1';
      isButtonGroupListOpen = true;
    }
  });

  buttonGroupList.addEventListener('transitionend', function () {
    if (!isButtonGroupListOpen) {
      buttonGroupList.style.pointerEvents = 'none';
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 800) {
      buttonGroupList.style.opacity = '0';
      isButtonGroupListOpen = false;
    }
  });
});
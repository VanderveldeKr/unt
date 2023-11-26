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
    star.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
    });
    star.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
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
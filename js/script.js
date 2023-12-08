//////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // Функция для изменения пути изображений при достижении определенной ширины экрана
  function changeImagePaths() {
    // Получаем текущую ширину экрана
    const screenWidth = window.innerWidth;

    // Получаем все элементы <img> с классом "tooltip"
    const tooltips = document.getElementsByClassName("tooltip");

    // Перебираем все элементы и изменяем пути изображений
    for (let i = 0; i < tooltips.length; i++) {
      const img = tooltips[i].querySelector("img");
      const src = img.getAttribute("src");

      // Проверяем, соответствует ли ширина экрана условию
      if (screenWidth <= 800) {
        const newSrc = src.replace("/map/", "/map/mobile/");
        img.setAttribute("src", newSrc);
      } else {
        const newSrc = src.replace("/map/mobile/", "/map/");
        img.setAttribute("src", newSrc);
      }
    }
  }

  // Вызываем функцию для первоначальной установки путей изображений
  changeImagePaths();
});
//////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
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
      const screenWidth = document.documentElement.clientWidth;

      if (screenWidth <= 750) {
          let isTooltipVisible = false;

          const toggleTooltip = () => {
              isTooltipVisible = !isTooltipVisible;
              tooltip.style.display = isTooltipVisible ? 'block' : 'none';
              tooltip.style.pointerEvents = isTooltipVisible ? 'auto' : 'none';
          };

          star.addEventListener('click', (event) => {
              event.stopPropagation();
              toggleTooltip();
          });

          document.addEventListener('click', () => {
              if (isTooltipVisible) {
                  toggleTooltip();
              }
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
});

//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// Сжатие Хедера при прокрутке страницы вниз
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
  buttonGroupList.style.pointerEvents = 'auto';
});

buttonGroupList.addEventListener('mouseleave', function() {
  buttonGroupList.style.opacity = '0';
});

buttonGroupList.addEventListener('transitionend', function() {
  if (buttonGroupList.style.opacity === '0') {
    buttonGroupList.style.pointerEvents = 'none';
  }
});
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
const openPopUp = document.querySelectorAll('.open-pop-up');
const closePopUp = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');

const body = document.querySelector('body');
const popUpTha = document.querySelector('.popup-thanks');
const popUpErr = document.querySelector('.popup-error');
// PopUp Звонка
openPopUp.forEach(b => b.addEventListener('click', function(e) {
  e.preventDefault();
  popUp.classList.add('active-pop-up');
  body.classList.add('scroll-lock'); // Добавление класса для блокировки прокрутки

  closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active-pop-up');
    body.classList.remove('scroll-lock'); // Удаление класса для разблокировки прокрутки
  });
}));

const openPopUpTwo = document.querySelectorAll('.open-pop-up-two');
const popUpTwo = document.querySelector('.pop-up-two');
const closePopUpTw = document.querySelector('.pop-up__close-two');

// PopUp Расчета
openPopUpTwo.forEach(b => b.addEventListener('click', function(e) {
  e.preventDefault();
  popUpTwo.classList.add('active-pop-up');
  body.classList.add('scroll-lock'); // Добавление класса для блокировки прокрутки

  closePopUpTw.addEventListener('click', () => {
    popUpTwo.classList.remove('active-pop-up');
    body.classList.remove('scroll-lock'); // Удаление класса для разблокировки прокрутки
  });
}));
//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////
// mask number
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

$('.phone').mask('+7 (999) 999-99-99');

$.fn.setCursorPosition = function(pos) {
if ($(this).get(0).setSelectionRange) {
$(this).get(0).setSelectionRange(pos, pos);
} else if ($(this).get(0).createTextRange) {
var range = $(this).get(0).createTextRange();
range.collapse(true);
range.moveEnd('character', pos);
range.moveStart('character', pos);
range.select();
}
};
$('input[type="tel"]').click(function(){
$(this).setCursorPosition(4);  // set position number
});
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// Сбор, валидация и отправка данных
jQuery(document).ready(function () {
   
  jQuery('.send-form').click( function() {
    var form = jQuery(this).closest('form');
    
    if ( form.valid() ) {
      form.css('opacity','.5');
      var actUrl = form.attr('action');

      jQuery.ajax({
        url: actUrl,
        type: 'post',
        dataType: 'html',
        data: form.serialize(),
        success: function(data) {
          popUp.classList.remove('active-pop-up');
          popUpTwo.classList.remove('active-pop-up');
          body.classList.remove('scroll-lock'); // Удаление класса для разблокировки прокрутки
          popUpTha.classList.add('is-active');
        },
        error:	 function() {
          popUp.classList.remove('active-pop-up');
          popUpTwo.classList.remove('active-pop-up');
          body.classList.remove('scroll-lock'); // Удаление класса для разблокировки прокрутки
          popUpErr.classList.add('is-active');
        }
      });
    }
  });
});
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Закрытие формы благодарности или ошибки
const closePopUpTwo = document.querySelector('.btn-close-thanks');
const closePopUpThee = document.querySelector('.btn-close-error');

closePopUpTwo.addEventListener('click', () => {
  popUpTha.classList.remove('is-active');
});

closePopUpThee.addEventListener('click', () => {
  popUpErr.classList.remove('is-active');
});
//////////////////////////////////////////////////////////////

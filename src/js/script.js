'use strict';

const menu = document.querySelector('.promo__menu-wrapper');

document.querySelector('.promo__hamburger').addEventListener('click', () => {
  if (!document.querySelector('.promo__menu-wrapper_active')) {
    menu.classList.add('promo__menu-wrapper_active');
  } else {
    menu.classList.remove('promo__menu-wrapper_active');
  }
});

document.querySelector('.promo__menu-close').addEventListener('click', () => {
  if (document.querySelector('.promo__menu-wrapper_active')) {
    menu.classList.remove('promo__menu-wrapper_active');
  }
});


var cleave = new Cleave('.input-phone', {
  phone: true,
  phoneRegionCode: 'RU'
});

$(document).ready(function () {
  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });
});

function validateForms(form) {
  $(form).validate({
    rules: {
      text: 'required',
      name: {
        required: true,
        minlength: "2"
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Пожалуйста, введите имя",
      text: "Пожалуйста, введите текст",
      phone: "Пожалуйста, номер ",
      policy: "",
      email: {
        required: "Пожалуйста, введите почту",
        email: "Пример name@domain.com"
      }
    }
  });

}
validateForms('.prices__wrapper-form');
validateForms('.last-questions__wrapper-form');

const arrow = document.querySelector('.arrow-up');
let opacity = 0;

document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 1000 && opacity < 1) { // здесь нужно опасити, потому что без него при каждом скроле, 
                                                    // будет заново запускаться сетИнтервал(без этого можно сказать что клеарИнтервал не работает)
    arrow.style.display = 'flex';                  // if внизу защищает, только от бесконечно плюсования, при ПЕРВОМ скроле, НО не защищает, от повторного запуска сетинтервал
    let show = setInterval(function () {           
      arrow.style.opacity = opacity;
      opacity += 0.01;
      if (opacity >= 1) {
        clearInterval(show);
      }
    }, 80);

} else if (window.pageYOffset < 1000 && opacity > 0) {
    let hide = setInterval(function afc() {
      arrow.style.opacity = opacity;
      opacity -= 0.01;
      if (opacity < 0) {
        clearInterval(hide);
        arrow.style.display = 'none';
      }
    }, 80);
}
arrow.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
});

const prices = document.querySelector('.prices'),
  pricesItems = prices.querySelectorAll('.prices__item'),
  btnsMore = prices.querySelectorAll('[data-more]'),
  btnsBack = prices.querySelectorAll('[data-back]');

prices.addEventListener('click', (e) => {
  btnsMore.forEach((btn, index) => {
    if (e.target === btn) {
      pricesItems[index].classList.add('prices__item_active');
    }
  });
  btnsBack.forEach((btn, index) => {
    if (e.target === btn) {
      pricesItems[index].classList.remove('prices__item_active');
    }
  });
});
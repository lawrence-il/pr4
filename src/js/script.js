'use strict';

import menu from './modules/menu';
import arrow from './modules/arrow';
import slider from './modules/slider';
import details from './modules/details';
import validate from './modules/validate';




document.addEventListener('DOMContentLoaded', () => {

    menu({
        selectorMenu:'.promo__menu-wrapper',
        classMenuActive:'.promo__menu-wrapper_active',
        menuOpen: '.promo__hamburger',
        menuClose: '.promo__menu-close',
    });
    arrow('.arrow-up');
    details({
        selector: '.prices',
        selectorsItem: '.prices__item',
        classActive: 'prices__item_active',
        selectorBtnsMore: '[data-more]',
        selectorBtnsBack: '[data-back]',
    });
    slider('.reviews__slider');
    validate('.prices__wrapper-form');
    validate('.last-questions__wrapper-form');

});
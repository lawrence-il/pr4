'use strict';

import menu from './modules/menu';
import arrow from './modules/arrow';
import validate from './modules/validate';
import details from './modules/details';
import slider from './modules/slider';

menu();
arrow();
validate('.prices__wrapper-form');
validate('.last-questions__wrapper-form');
details();
slider();
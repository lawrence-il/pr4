import $ from 'jquery';
import 'slick-carousel';

function slider(selector) {

    $(document).ready(function () {
        $(selector).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        });
    });
}

export default slider;
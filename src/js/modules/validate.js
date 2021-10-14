import $ from 'jquery';
import "cleave.js";
import cleavePhoneRu from '../cleave-phone.ru.js';
import jqueryValidateMin from '../jquery.validate.min.js';

function validate(form) {

    var cleave = new Cleave('.input-phone', {
        phone: true,
        phoneRegionCode: 'RU'
    });
    var cleave1 = new Cleave('.input-phone__one', {
        phone: true,
        phoneRegionCode: 'RU'
    });
    
    
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

export default validate;
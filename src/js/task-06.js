// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

const input = document.querySelector('input');

input.addEventListener('input', textInput);

function textInput(evt) {

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
    if (String(evt.currentTarget.value.length) === input.dataset.length) {

    //  Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
        input.classList.remove('invalid');
        input.classList.add('valid');

    // якщо неправильна кількість - червоним.
    } else {
        input.classList.add('invalid');
    }
    
};



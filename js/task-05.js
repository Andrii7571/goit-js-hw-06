// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', typing);

function typing(evt) {

    // Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
    if (evt.currentTarget.value === '') {
        output.textContent = 'Anonymous';
    
     // підставляє його поточне значення в span#name - output. 
    } else {
        output.textContent = evt.currentTarget.value;
    };
};


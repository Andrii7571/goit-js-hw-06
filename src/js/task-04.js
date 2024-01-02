// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
let counsterValue = 0;

const counster = document.querySelector('#value');
const buttonAdd = document.querySelector('[data-action="increment"]');
const buttonSubtract = document.querySelector('[data-action="decrement"]');

// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
buttonAdd.addEventListener('click', add);
buttonSubtract.addEventListener('click', subtract);

function add() {
    
     counster.textContent = counsterValue += 1;
};

function subtract() {
    
     counster.textContent = counsterValue -= 1;
};

// Оновлюй інтерфейс новим значенням змінної counterValue.


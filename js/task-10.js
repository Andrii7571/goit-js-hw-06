// Напиши скрипт створення і очищення колекції елементів.

const elManagement = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const input = elManagement.firstElementChild;

// Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
buttonCreate.addEventListener('click', createBoxes);

//  Натисненням на кнопку Очистити, 
buttonDestroy.addEventListener('click', destroyBoxes);

// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
//  скільки вказано в amount і додає їх у div#boxes.
function createBoxes(amount) {
  amount = input.value;
  
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
  for (let i = 0,  a =30; i < amount; i += 1, a += 10){
    const item = `<div style="background-color:${getRandomHexColor()}; width:${a}px; height:${a}px"></div>`
    boxes.insertAdjacentHTML('beforeend', item)

  };
};

// колекція елементів очищається.
function destroyBoxes() {
   boxes.innerHTML = ''
};





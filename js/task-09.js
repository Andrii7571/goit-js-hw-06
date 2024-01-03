// Напиши скрипт, 

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const nameColor = document.querySelector('.color');

//  по кліку на button.change - color
button.addEventListener('click', changeColor);

function changeColor() {

  // який змінює кольори фону елемента < body > через інлайн - стиль
  body.style.backgroundColor = getRandomHexColor();

  //    і виводить значення кольору в span.color.
  nameColor.textContent = body.style.backgroundColor;

};

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

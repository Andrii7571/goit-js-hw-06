
// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categories = document.querySelector('#categories');
console.log('Number of categories:', categories.children.length);

// 2. Для кожного елемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
// і кількість елементів в категорії(усіх < li >, вкладених в него).

const category = document.querySelectorAll('.item')
category.forEach((element) => console.log(
    'Category:', element.firstElementChild.innerHTML,
    '\n',
    'Elements:', element.lastElementChild.childElementCount)
);




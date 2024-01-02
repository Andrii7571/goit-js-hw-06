const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

const listIngredients = document.querySelector('#ingredients');

const createList = ingredients.forEach(element => {

  //1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
  const item = document.createElement("li");

//2. Додасть назву інгредієнта як його текстовий вміст.
  item.textContent = `${element}`;

//3. Додасть елементу клас item.
  item.classList.add('item');

//4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
  listIngredients.append(item);
 })


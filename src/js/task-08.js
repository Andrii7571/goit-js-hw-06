// Напиши скрипт управління формою логіна.
const loginForm = document.querySelector('.login-form');

//  Для доступу до елементів форми використовуй властивість elements.
const ref = {
    formEmail: loginForm.elements.email,
    formPassword: loginForm.elements.password,
   
};

// 1.Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
loginForm.addEventListener('submit', submitForm);

function submitForm(evt) {

// 2.Під час відправлення форми сторінка не повинна перезавантажуватися.
    evt.preventDefault()

    // Якщо користувач заповнив усі поля і відправив форму,
    if (ref.formEmail.value && ref.formPassword.value) {

//  збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
//  а значення поля - значенням властивості.
        let infoForm = {
            email: ref.formEmail.value,
            password: ref.formPassword.value,
        };

        // і очисти значення полів форми методом reset.
        loginForm.reset();

        // Виведи об'єкт із введеними даними в консоль 
         console.log(infoForm);
        
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.        
    } else {
        alert('Всі поля повинні бути заповнені!');
    };
};
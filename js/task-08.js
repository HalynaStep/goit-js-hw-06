// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.

// Если в форме есть незаполненные поля,
// выводи alert с предупреждением о том, что все поля должны быть заполнены.

// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.

// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginForm = document.querySelector(".login-form");
const loginBtnSabmit = document.querySelector("button");


let user = {
    email: '',
    password: '',
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
     const {
    elements: { email, password }
  } = event.currentTarget;         

    if (email.value === "" || password.value === "") {
       return alert("Please fill in all the fields!");
    }

    else {
        user.email = email.value;
        user.password = password.value;

        console.log(user);
        event.currentTarget.reset();
    }
    
});
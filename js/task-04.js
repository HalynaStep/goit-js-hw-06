// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки,
// внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


const incrementBtnEl = document.querySelector("[data-action='increment']");
const decrementBtnEl = document.querySelector("[data-action='decrement']");
const valueEl = document.querySelector("#value");
let counterValue = 0;

incrementBtnEl.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
    
    
}); 

decrementBtnEl.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
    
    
}); 

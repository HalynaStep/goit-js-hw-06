// Напиши скрипт, который изменяет цвета фона элемента < body >
// через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.


const btnColorEl = document.querySelector('button');
const colorEl = document.querySelector(".color");
const bodyColorEl = document.querySelector('body');


btnColorEl.addEventListener('click', (event) => {
  let randomColor = getRandomHexColor();
  bodyColorEl.style.backgroundColor = randomColor;
  colorEl.textContent = randomColor;
   
  
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

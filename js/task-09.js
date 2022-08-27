function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16) .padStart(6, 0)}`;
}

// const refs = {
//   bodyEl: document.querySelector('body'),
//   magicBtn: document.querySelector('.change-color'),
//   spanOutput: document.querySelector('.color'),
// };

// refs.magicBtn.addEventListener('click', bodyColorHandler);

// function bodyColorHandler() {
//   const randomColor = getRandomHexColor();

//   refs.bodyEl.style.backgroundColor = randomColor;
//   refs.spanOutput.textContent = randomColor;
// };


// // Логика выполнения задания
// // 1. Находим body, button.change-color & span.color
// // 2. Напишем функцию генерации рандомного цвета (из задания)
// // 3. На button.change-color вешаем обработчик события по клику,
// // который вызовет ф-цию bodyColorHandler
// // 4. Эта ф-ция присваивает в свойство bodyEl.style.backgroundColor
// // и spanOutput.textContent результат ф-ции getRandomHexColor()

// console.log(
//   getRandomHexColor(),
//   getRandomHexColor(),
//   getRandomHexColor(),
// )

const buttonRef = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
buttonRef.addEventListener('click', () => {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    'style',
    'background-color: ' + spanEl.textContent
  );
});
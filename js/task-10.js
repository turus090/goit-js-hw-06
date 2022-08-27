function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.getElementById('boxes');
const controls = document.getElementById('controls');
const inputField = controls.children[0];
const createBtn = controls.children[1];
const destroyBtn = controls.children[2];

inputField.addEventListener('input', (event) => {
  createBtn.dataset.create = event.target.value;
});


createBtn.addEventListener(
  'click', () => createElements(+createBtn.dataset.create),
  )

destroyBtn.addEventListener('click', () => destroyElements())

function createElements(number) {
  if (boxes.children.length && createBtn.dataset.create) {
    destroyElements();
  }

  for (let i = 0; i < number; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxes.append(newDiv);
    resetInputField();
  }
};

function destroyElements() {
  console.dir(boxes.children);
  while (boxes.children.length) boxes.children[0].remove();
}

function resetInputField() {
  inputField.value = '';
  createBtn.dataset.create = '';
}

console.dir(
  //createBtn,
  destroyBtn,
);
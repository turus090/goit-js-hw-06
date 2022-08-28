const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingredient;

  return element;
});
console.log(elements);
ingredientsEl.append(...elements);

// const ingredientsList = document.getElementById('ingredients');

// listElement.classList.add('item')

// console.log(listElement);
/* 
ingredients.forEach(item => {
  const listElement = document.createElement('li');
  listElement.className = 'item';
  listElement.innerText = item;
  ingredientsList.append(listElement);
})
*/

// function createIngredientsList(input) {
//   const list = document.getElementById('ingredients');

//   let items = '';
  
//   input.forEach(el => {
//     const item = document.createElement('li');
//     item.className = 'item';
//     item.innerText = el;

//     items += item.outerHTML;
//   });

//   list.innerHTML = items;
// }





// createIngredientsList(ingredients);



// квери селектор для ЮЛ ! forEch дял каждого єл. сделать документ креат элемент ....
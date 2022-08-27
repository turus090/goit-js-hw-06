const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

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


const ulEl = document.querySelector('ul');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ing = ingredients[i];

  const liEl = document.createElement('li');
  liEl.textContent = ing;

  liEl.classList.add('item');
  elements.push(liEl);
  elements.push(liEl);

}

ulEl.append(...elements);
// квери селектор для ЮЛ ! forEch дял каждого єл. сделать документ креат элемент ....
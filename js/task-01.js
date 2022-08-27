
const catEl = document.querySelectorAll('ul#categories li.item');
console.log('Number of categories', catEl.length);
catEl.forEach(elem => {
    console.log('Category:', elem.firstElementChild.textContent);    
    console.log('Elements:', elem.lastElementChild.children.length);
});
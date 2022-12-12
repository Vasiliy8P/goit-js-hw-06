
// const categoriesEl = document.querySelector('#categories');
// console.log(`Number of categories: `, categoriesEl.children.length);

const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: `, itemsEl.length);

const titleAndElementsOfCategories = itemsEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});

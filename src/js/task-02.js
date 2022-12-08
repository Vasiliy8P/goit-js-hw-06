const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

// const makeAllIngredients = ingredients.map(ingredient => {
//   const positionIngredient = document.createElement("li");
//   positionIngredient.textContent = ingredient;
//   positionIngredient.classList.add("item");
//   return positionIngredient;
// })
// ingredientsEl.append(...makeAllIngredients);

const makeAllIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const positionIngredient = document.createElement("li");
    positionIngredient.textContent = ingredient;
    positionIngredient.classList.add("item");
    return positionIngredient;
  })
}
const elements = makeAllIngredients(ingredients);

ingredientsEl.append(...elements);

console.log(ingredientsEl);


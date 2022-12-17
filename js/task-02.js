(() => {
  const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  const ingredientsListEl = document.querySelector("#ingredients");
  const ingredientsLiElArray = ingredients.map((ingredient) => {
    const newLi = document.createElement("li");
    newLi.classList.add("item");
    newLi.textContent = ingredient;
    return newLi;
  });

  ingredientsListEl.append(...ingredientsLiElArray);
})();

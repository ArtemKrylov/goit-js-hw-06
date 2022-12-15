(() => {
  const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];
  const ingredientsHtmlString = ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join("");
  const ingredientsListEl = document.querySelector("#ingredients");

  ingredientsListEl.insertAdjacentHTML("afterbegin", ingredientsHtmlString);
})();

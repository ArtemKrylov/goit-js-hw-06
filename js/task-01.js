(() => {
  const categoriesItemsEl = document.querySelectorAll("#categories .item");
  console.log("Number of categories:", categoriesItemsEl.length);

  categoriesItemsEl.forEach((item) => {
    const itemTitleEl = item.querySelector("h2");
    const itemInnerListItemsEl = item.querySelectorAll("li");
    console.log("Category:", itemTitleEl.textContent);
    console.log("Elements:", itemInnerListItemsEl.length);
  });
})();

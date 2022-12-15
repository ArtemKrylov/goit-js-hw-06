(() => {
  const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  const ITEMS_IN_GALLERY_ROW = images.length;
  const GALLERY_ITEMS_GAP = "10px";
  const galleryEl = document.querySelector(".gallery");
  galleryEl.style.gap = GALLERY_ITEMS_GAP;
  galleryEl.style.gridTemplateColumns = `repeat(${ITEMS_IN_GALLERY_ROW}, 1fr)`;

  const galleryHtmlString = images
    .map(
      (image) =>
        `<li class='gallery__item'><img class='gallery__image' src=${image.url} alt=${image.alt}></li>`
    )
    .join("");
  galleryEl.insertAdjacentHTML("afterbegin", galleryHtmlString);
})();

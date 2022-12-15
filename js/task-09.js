(() => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const colorEl = document.querySelector(".color");
  const changeColorBtnEl = document.querySelector(".change-color");
  const bodyEl = document.querySelector("body");

  const changeBgColor = (element, color) => {
    element.style.backgroundColor = color;
  };

  const onChangeColorBtnElClick = () => {
    const randomColor = getRandomHexColor();
    colorEl.textContent = randomColor;
    changeBgColor(bodyEl, randomColor);
  };

  changeColorBtnEl.addEventListener("click", onChangeColorBtnElClick);
})();

(() => {
  //function returns random hex color
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  let numberInput = null;
  let elementNumber = 1;
  let divWidth = 30;
  let divHeight = 30;

  //choosing DOM elements to work with
  const boxesEl = document.querySelector("#boxes");
  const createBtnEl = document.querySelector("[data-create]");
  const destroyBtnEl = document.querySelector("[data-destroy]");
  const numberInputEl = document.querySelector(
    '#controls input[type="number"]'
  );

  //function creates amount number of div elements in #boxes element
  const createBoxes = (amount) => {
    let addedHTMLArray = [];
    for (let i = 0; i < amount; ++i) {
      addedHTMLArray.push(
        `<div style="background-color:${getRandomHexColor()}; width:${divWidth}px; height:${divHeight}px;" >${elementNumber}
        </div>`
      );
      divWidth += 10;
      divHeight += 10;
      ++elementNumber;
    }
    boxesEl.insertAdjacentHTML("beforeend", addedHTMLArray.join(""));
  };

  //callback function for change events on input[type='number']
  const onNumberInputElChange = (event) => {
    numberInput = event.currentTarget.value;
  };

  //callback function for click events on button[data-create]
  const oncreateBtnElClick = () => {
    //checking for no input
    if (!numberInput) {
      return alert("You must enter a value first!");
    }
    //activating button[data-destroy] only if elements are created
    destroyBtnEl.removeAttribute("disabled");
    createBoxes(numberInput);
  };

  //callback function for click events on button[data-destroy]
  const onDestroyBtnElClick = () => {
    boxesEl.innerHTML = "";
    divWidth = 30;
    divHeight = 30;
    //deactivating button[data-destroy] after destoying all added elements
    destroyBtnEl.setAttribute("disabled", "");
    numberInputEl.value = "";
    numberInput = null;
    elementNumber = 1;
  };

  //adding event listeners on chosen DOM elements
  numberInputEl.addEventListener("change", onNumberInputElChange);
  createBtnEl.addEventListener("click", oncreateBtnElClick);
  destroyBtnEl.addEventListener("click", onDestroyBtnElClick);
})();

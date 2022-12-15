class Counter {
  #counterValue;
  #valueWindow;
  #decrementButton;
  #incrementButton;
  #resetButton;

  #changeValueWindow = function () {
    this.#valueWindow.textContent = this.#counterValue;
  }.bind(this);

  #onDecrementButtonClick = function () {
    this.#counterValue -= 1;
    this.#changeValueWindow();
  }.bind(this);

  #onIncrementButtonClick = function () {
    this.#counterValue += 1;
    this.#changeValueWindow();
  }.bind(this);

  #onResetButtonClick = function () {
    this.#counterValue = 0;
    this.#changeValueWindow();
  }.bind(this);

  constructor(value = 0) {
    this.#counterValue = value;
    this.#valueWindow = document.querySelector("#value");
    this.#decrementButton = document.querySelector(
      '[data-action = "decrement"]'
    );
    this.#incrementButton = document.querySelector(
      '[data-action = "increment"]'
    );
    this.#resetButton = document.querySelector('[data-action = "reset"]');
  }

  get value() {
    return this.#counterValue;
  }

  set value(newValue) {
    this.#counterValue = newValue;
    this.#changeValueWindow();
  }

  startCounter() {
    this.#changeValueWindow();
    this.#decrementButton.addEventListener(
      "click",
      this.#onDecrementButtonClick
    );
    this.#incrementButton.addEventListener(
      "click",
      this.#onIncrementButtonClick
    );
    this.#resetButton.addEventListener("click", this.#onResetButtonClick);
  }

  stopCounter() {
    this.#decrementButton.removeEventListener(
      "click",
      this.#onDecrementButtonClick
    );
    this.#incrementButton.removeEventListener(
      "click",
      this.#onIncrementButtonClick
    );
    this.#resetButton.removeEventListener("click", this.#onResetButtonClick);
  }
}

const counter = new Counter();
counter.startCounter();

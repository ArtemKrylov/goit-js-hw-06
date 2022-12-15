(() => {
  const fontSizeControlEl = document.querySelector("#font-size-control");
  const changedTextEl = document.querySelector("#text");

  const onFontSizeControlElInput = () => {
    changedTextEl.style.fontSize = `${fontSizeControlEl.value}px`;
  };

  fontSizeControlEl.addEventListener("input", onFontSizeControlElInput);
})();

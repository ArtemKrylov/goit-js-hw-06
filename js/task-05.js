(() => {
  const nameInputEl = document.querySelector("#name-input");
  const nameOutputEl = document.querySelector("#name-output");
  const onNameInputInput = () => {
    nameOutputEl.textContent = nameInputEl.value;
  };

  nameInputEl.addEventListener("input", onNameInputInput);
})();

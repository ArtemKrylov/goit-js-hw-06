(() => {
  const notEmptyInputRegEx = /\S+/;
  const nameInputEl = document.querySelector("#name-input");
  const nameOutputEl = document.querySelector("#name-output");

  const onNameInputInput = () => {
    nameOutputEl.textContent = notEmptyInputRegEx.test(nameInputEl.value)
      ? nameInputEl.value
      : "Anonymous";
  };

  nameInputEl.addEventListener("input", onNameInputInput);
})();

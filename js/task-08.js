(() => {
  const formEl = document.querySelector(".login-form");
  const checkEmailRegEx = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
  const checkPasswordRegEx =
    /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9]).{8,}/;
  let userData = {};

  const onFormElSubmit = (event) => {
    event.preventDefault();
    const {
      elements: {
        email: { value: emailValue },
        password: { value: passwordValue },
      },
    } = event.currentTarget;

    if (emailValue === "" || passwordValue === "") {
      return alert("You must enter email and password!");
    }
    if (!checkEmailRegEx.test(emailValue)) {
      return alert("You must enter valid email");
    }
    if (!checkPasswordRegEx.test(passwordValue)) {
      return alert(
        "Invalid password! You must enter valid password: minimum 8 characters - uppercase alphabet, at least 1 lowercase alphabet, 2 digits and 1 special character"
      );
    }

    console.log((userData = { email: emailValue, password: passwordValue }));
    event.currentTarget.reset();
  };

  formEl.addEventListener("submit", onFormElSubmit);
})();

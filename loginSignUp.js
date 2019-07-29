const log = console.log;

const [
  signUpNameInput,
  signUpEmailInput,
  signUpPasswordInput,
  signUpConfirmPasswordInput
] = [
  document.getElementById("signUpName"),
  document.getElementById("signUpEmail"),
  document.getElementById("signUpPassword"),
  document.getElementById("signUpConfirmPassword")
];

const showInvalidOrValidInput = (input, bool) => {
  if (bool) {
    input.classList.remove("invalidInputSignUp");
    input.classList.add("validInputSignUp");
  } else {
    input.classList.remove("validInputSignUp");
    input.classList.add("invalidInputSignUp");
  }
};

signUpNameInput.addEventListener("input", () => {
  var input = signUpNameInput;
  var is_not_blank = input.value;
  showInvalidOrValidInput(input, is_not_blank);
});

signUpEmailInput.addEventListener("input", () => {
  const input = signUpEmailInput;
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const is_email = regex.test(input.value);
  showInvalidOrValidInput(input, is_email);
});

signUpPasswordInput.addEventListener("input", () => {
  const input = signUpPasswordInput;
  const regex = /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
  const is_password = regex.test(input.value);
  showInvalidOrValidInput(input, is_password);
});

signUpConfirmPasswordInput.addEventListener("input", () => {
  input = signUpConfirmPasswordInput;
  if (signUpConfirmPasswordInput.value != signUpPasswordInput.value) {
    showInvalidOrValidInput(input, false);
  } else {
    showInvalidOrValidInput(input, true);
  }
});

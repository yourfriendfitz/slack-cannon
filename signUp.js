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

const signUpButton = document.getElementById("signUpButton");

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

const addUserDisplayName = async name => {
  const user = await firebase.auth().currentUser;
  await user
    .updateProfile({
      displayName: name
    })
    .then(function() {
      // Update successful.
    })
    .catch(function(error) {
      // An error happened.
    });
};

const createUserEmailPassword = async (name, email, password) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      log(errorMessage, errorCode);
      // ...
    });
  await addUserDisplayName(name);
};

signUpButton.addEventListener("click", async () => {
  const [name, email, password] = [
    signUpNameInput.value,
    signUpEmailInput.value,
    signUpPasswordInput.value
  ];
  await createUserEmailPassword(name, email, password);
});

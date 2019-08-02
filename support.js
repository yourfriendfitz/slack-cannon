const nameInput = document.querySelector("#fullName");

const emailInput = document.querySelector("#email");

const autoFillInputs = () => {
  nameInput.value = firebase.auth().currentUser.displayName || "";
  emailInput.value = firebase.auth().currentUser.email || "";
};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    autoFillInputs();
    return;
  } else {
    return;
  }
});

const nameInput = document.querySelector("#fullName");

const emailInput = document.querySelector("#email");

document.addEventListener("DOMContentLoaded", () => {
  nameInput.value = firebase.auth().currentUser
    ? firebase.auth().currentUser.displayName
    : "";
  emailInput.value = firebase.auth().currentUser
    ? firebase.auth().currentUser.email
    : "";
});

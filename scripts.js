const log = console.log;

let userIsAdmin = false;

const eventInputDiv =
  document.querySelector("#events-message-input-container") || null;

const newsInputDiv =
  document.querySelector("#news-message-input-container") || null;

const cannonIcon = document.querySelector(".icon");

const sidenav = document.querySelector(".sidenav");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if (user.photoURL === null) {
      addUserPhoto("https://i.imgur.com/JeMMr0v.png");
    }
    if (
      (user.email === "fitzgerald913@gmail.com") |
      (user.email === "nickfuentes24@gmail.com") |
      (user.email === "antonio.tobar.dev@gmail.com") |
      (user.email === "jacob.bankston.smile@gmail.com")
    ) {
      if (eventInputDiv) {
        eventInputDiv.style.display = "block";
      }
      if (newsInputDiv) {
        newsInputDiv.style.display = "block";
      }
    }
    return;
  } else {
    window.location.href = "login.html";
  }
});

cannonIcon.addEventListener("click", () => {
  if ((sidenav.style.display === "") | (sidenav.style.display === "none")) {
    sidenav.style.display = "flex";
  } else {
    sidenav.style.display = "none";
  }
});

const log = console.log;

const cannonIcon = document.querySelector(".icon");

const sidenav = document.querySelector(".sidenav");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if (user.photoURL === null) {
      addUserPhoto("https://i.imgur.com/JeMMr0v.png");
    }
    return;
  } else {
    window.location.href = "login.html";
  }
});

cannonIcon.addEventListener("click", () => {
  if (sidenav.style.display === "flex") {
    sidenav.style.display = "none";
  } else {
    sidenav.style.display === "flex";
  }
});

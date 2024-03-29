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

const darkMode = () => {
  const divs = document.querySelectorAll("div");
  divs.forEach(div => {
    div.style.backgroundColor = "black";
  });
  document.querySelector(".sidenav").style.backgroundColor = "#696969";
  document.querySelector(".cannon-logo").style.backgroundColor = "#696969";
  if (document.querySelector(".event-container")) {
    document.querySelectorAll(".event-container").forEach(eventElement => {
      eventElement.style.backgroundColor = "#696969";
    });
  }
  if (document.querySelector(".message-container")) {
    document.querySelector(".message-container").style.backgroundColor =
      "#696969";
  }
  if (document.querySelector(".cannon-floor-img")) {
    document.querySelectorAll(".cannon-floor-img").forEach(img => {
      img.style.opacity = "0.5";
    });
  }
  if (document.querySelector(".headerTitle")) {
    document.querySelector(".headerTitle").style.color = "#696969";
    document.querySelectorAll("input").forEach(input => {
      input.style.backgroundColor = "#696969";
    });
    document.querySelector("textarea").style.backgroundColor = "#696969";
  }
};

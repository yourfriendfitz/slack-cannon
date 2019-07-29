const log = console.log;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    return;
  } else {
    window.location.href = "login.html";
  }
});

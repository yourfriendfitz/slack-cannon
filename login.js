const loader = document.getElementById("loginLoader");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    loader.style.display = "block";
    window.location.href = "index.html";
  } else {
    return;
  }
});

const googleSignIn = async () => {
  loader.style.display = "block";
  let provider = await new firebase.auth.GoogleAuthProvider();
  await firebase.auth().signInWithRedirect(provider);
  await firebase
    .auth()
    .getRedirectResult()
    .then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        log(token);
        // ...
      }
      // The signed-in user info.
      return result.user;
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      log(errorMessage, errorCode, email, credential);
    });
};

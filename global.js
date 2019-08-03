let userDetailsDiv = document.getElementById("global-message-container");

const globalMessageInput = document.getElementById("global-message-input");

const submitButton = document.querySelector(".submit");

function writeNewPost(message) {
  // A post entry.
  var postData = {
    timestamp: Date.now(),
    message: message,
    userObj: JSON.stringify(firebase.auth().currentUser)
  };

  // Get a key for a new Post.
  var newPostKey = firebase
    .database()
    .ref()
    .child("global")
    .push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/global/" + newPostKey] = postData;

  return firebase
    .database()
    .ref()
    .update(updates);
}


var globalData = firebase.database().ref("global");
globalData.on("value", function(snapshot) {
  userDetailsDiv.innerHTML = "";
  var dataObj = snapshot.val();
  var dataArray = Object.values(dataObj);
  var keysArray = Object.keys(dataObj);
  dataArray.forEach((obj, index) => {
    var userObj = JSON.parse(obj.userObj);
    // put finished HTML here for template literal
    var message = `<div class="message-container">
      <img src="${userObj.photoURL}">
      <div class="message-information">
        <div class="message-username-header">
          <span class="display-name">${userObj.displayName} </span>
          <span class="time-posted-message">${new Date(
            obj.timestamp
          ).toLocaleTimeString("en-US", {
            hour12: true,
            hour: "numeric",
            minute: "numeric"
          })}</span>
          <span class="filler"> </span>
          <button class="remove-message-button" onclick="deleteMessage('${
            keysArray[index]
          }')">X</button>
        </div>
        <span class="message-text">${obj.message}</span>
      </div>`;
    userDetailsDiv.insertAdjacentHTML("beforeend", message);
  });
});

const addUserPhoto = async url => {
  const user = await firebase.auth().currentUser;
  await user
    .updateProfile({
      photoURL: url
    })
    .then(function() {
      // Update successful.
    })
    .catch(function(error) {
      // An error happened.
    });
};

const deleteMessage = key => {
  firebase
    .database()
    .ref(`global/${key}`)
    .remove();
};

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

globalMessageInput.addEventListener("keypress", eventObj => {
  if (eventObj.keyCode === 13) {
    writeNewPost(globalMessageInput.value);
    globalMessageInput.value = "";
  }
});

submitButton.addEventListener("click", () => {
  if (globalMessageInput.value != "") {
    writeNewPost(globalMessageInput.value);
    globalMessageInput.value = "";
  }
});

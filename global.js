let userDetailsDiv = document.getElementById("userDetails");

// function displayProfileObject() {
//   firebase.auth().onAuthStateChanged(() => {
//     let grabTheDetails = `<div class="userDetails">
//                 <img src="${auth.currentUser.photoURL}">
//                 <p>${auth.currentUser.displayName}</p>
//                 <span>Lorem ipsum dolor sit ametconsecteturadipisicingelit.Neque quos voluptatum, unde obcaecati iste liberosuscipittempore reprehenderit accusantium minus minima nondoloribusquam dignissimos asperiores magnamHic molestias quos.Lorem ipsum dolor sit ametconsecteturadipisicingelit.Neque quos voluptatum, unde obcaecati iste liberosuscipittempore reprehenderit accusantium minus minima nondoloribusquam dignissimos asperiores magnamHic molestias quos</span>
//             </div> `;

//     userDetailsDiv.innerHTML = grabTheDetails;
//   });
// }

// displayProfileObject();

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

var dataObj = {};
var globalData = firebase.database().ref("global");
globalData.on("value", function(snapshot) {
  userDetailsDiv.innerHTML = "";
  var dataObj = snapshot.val();
  var dataArray = Object.values(dataObj);
  var keysArray = Object.keys(dataObj);
  dataArray.forEach((obj, index) => {
    var userObj = JSON.parse(obj.userObj);
    // put finished HTML here for template literal
    var message = `<div class="userDetails">
      <img src="${userObj.photoURL}">
      <p>${userObj.displayName} - ${new Date(obj.timestamp).toLocaleTimeString(
      "en-US",
      {
        hour12: true,
        hour: "numeric",
        minute: "numeric"
      }
    )}</p>
      <button onclick="deleteMessage('${keysArray[index]}')">Remove</button>
      <span>${obj.message}</span>
  </div> `;
    userDetailsDiv.insertAdjacentHTML("beforeend", message);
    console.log(obj.message);
    console.log(obj.timestamp);
    console.log(JSON.parse(obj.userObj));
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
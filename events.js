const mainDiv = document.querySelector(".main");

function writeNewEvent(title, body) {
  // A post entry.
  var postData = {
    timestamp: Date.now(),
    title: title,
    body: body
  };

  // Get a key for a new Post.
  var newPostKey = firebase
    .database()
    .ref()
    .child("events")
    .push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/events/" + newPostKey] = postData;

  return firebase
    .database()
    .ref()
    .update(updates);
}

var dataObj = {};
var globalData = firebase.database().ref("events");
globalData.on("value", function(snapshot) {
  mainDiv.innerHTML = "";
  var dataObj = snapshot.val();
  var dataArray = Object.values(dataObj);
  var keysArray = Object.keys(dataObj);
  dataArray.forEach((obj, index) => {
    // put finished HTML here for template literal
    var message = `<div class="event-container">
      <div class="event-information">
        <div class="event-header">
          <span class="event-title">${obj.title} </span>
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
        <span class="message-text">${obj.body}</span>
      </div>`;
    mainDiv.insertAdjacentHTML("beforeend", message);
  });
});

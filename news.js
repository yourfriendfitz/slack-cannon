let newsDetailsDiv = document.getElementById("news-messages-container");

const newsMessageInput = document.getElementById("news-message-input");

function writeNewNews(body) {
  // A post entry.
  var postData = {
    timestamp: Date.now(),
    body: body
  };

  // Get a key for a new Post.
  var newPostKey = firebase
    .database()
    .ref()
    .child("news")
    .push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/news/" + newPostKey] = postData;

  return firebase
    .database()
    .ref()
    .update(updates);
}

var dataObj = {};
var globalData = firebase.database().ref("news");
globalData.on("value", function(snapshot) {
  newsDetailsDiv.innerHTML = "";
  var dataObj = snapshot.val();
  var dataArray = Object.values(dataObj);
  var keysArray = Object.keys(dataObj);
  dataArray.forEach((obj, index) => {
    // put finished HTML here for template literal
    var message = `<div class="news-container">

      <div class="bullet-point-img">
        <img src="bullet-point-icon.png">
      </div>

      <div class="news-message-text-container">
        <span class="news-message-text">${obj.body}</span>
      </div>

      <span class="filler-news"> </span>

      <span class="time-posted-news">${new Date(
        obj.timestamp
      ).toLocaleTimeString("en-US", {
        hour12: true,
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      })}</span>

      <button class="remove-message-button" onclick="deleteMessage('${keysArray[index]}')">X</button>

      </div>`;
    newsDetailsDiv.insertAdjacentHTML("afterbegin", message);
  });
});

const deleteMessage = key => {
  firebase
    .database()
    .ref(`news/${key}`)
    .remove();
};

newsMessageInput.addEventListener("keypress", eventObj => {
  if (eventObj.keyCode === 13) {
    writeNewPost(newsMessageInput.value);
  }
});
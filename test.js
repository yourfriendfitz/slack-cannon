function writeNewPost() {
    // A post entry.
    var postData = {
        author: "Nick",
        uid: “32j42k3j4n3kj4n”,
        message: “Lets play some ping pon at 5:00!“,
    };
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child(‘adminlist’).push().key;
    // Write the new post’s data simultaneously in the posts list and the user’s post list.
    var updates = {};
    updates[‘/adminlist/’ + newPostKey] = postData;
    return firebase.database().ref().update(updates);
 }
 writeNewPost()

 
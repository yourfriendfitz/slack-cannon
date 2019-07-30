let userDetailsDiv = document.getElementById("userDetails")


function displayProfileObject() {

    firebase.auth().onAuthStateChanged(() => {

        let grabTheDetails =
            `<div class="userDetails">
                <img src="${auth.currentUser.photoURL}">
                <p>${auth.currentUser.displayName}</p>
                <span>Lorem ipsum dolor sit ametconsecteturadipisicingelit.Neque quos voluptatum, unde obcaecati iste liberosuscipittempore reprehenderit accusantium minus minima nondoloribusquam dignissimos asperiores magnamHic molestias quos.Lorem ipsum dolor sit ametconsecteturadipisicingelit.Neque quos voluptatum, unde obcaecati iste liberosuscipittempore reprehenderit accusantium minus minima nondoloribusquam dignissimos asperiores magnamHic molestias quos</span>
            </div> `

        userDetailsDiv.innerHTML = grabTheDetails
    })

}

displayProfileObject()


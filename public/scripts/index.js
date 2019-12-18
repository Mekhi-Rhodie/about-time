var firebaseConfig = {
    apiKey: "AIzaSyB4S-faxpqmTp6ZQesvZK_dHiON0NfmMeY",
    authDomain: "about-time-a5be6.firebaseapp.com",
    databaseURL: "https://about-time-a5be6.firebaseio.com",
    projectId: "about-time-a5be6",
    storageBucket: "about-time-a5be6.appspot.com",
    messagingSenderId: "476425103317",
    appId: "1:476425103317:web:c11bbe158d69c326317f5c",
    measurementId: "G-9VXQTSBBQ6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
function loginValidation() {
    const username = $("#login-username").val().trim();
    const password = $("#login-password").val().trim();

    if (username === "") {
        event.preventDefault()
        console.log("Please enter a your username")
    };

    if (password === "") {
        event.preventDefault()
        console.log("Please enter a password!")
    };

    console.log(username + " " + password)
};

function signupValidation() {
    const signupUsername = $("#username").val().trim();
    const signupPassword = $("#password").val().trim();
    const email = $("#email").val().trim();

    if (signupUsername === "") {
        event.preventDefault();
        console.log("Please enter a Username")
    };

    if (signupPassword === "") {
        event.preventDefault();
        console.log("Please enter a Password")
    };

    if (email === "") {
        event.preventDefault();
        console.log("Please enter a E-mail")
    };

    console.log(signupUsername + " " + signupPassword + " " + email)
};

$(document).ready(function () {
    $("#log-in").on("click", function (event) {
        $("#login-modal").slideDown(580).css("display", "block")
    });
    $("#sign-up").on("click", function (event) {
        $("#signup-modal").slideDown(580).css("display", "block")
    });
    $("#signup").on("click", function(event){
        //const signupUsername = $("#username").val().trim();
        const pass = $("#password").val().trim();
        const email = $("#email").val().trim();
        firebase.auth().createUserWithEmailAndPassword(email, pass);
    });
    $(".close").on("click", function (event) {
        $("#signup-modal, #login-modal").slideUp(700)
    });
    $("#login").on("click", function (event) {
        loginValidation();
    });
    $("#signup").on("click", function (event) {
        signupValidation();
    });
}); 
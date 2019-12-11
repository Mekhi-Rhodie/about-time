function loginValidation(){
    const username = $("#login-username").val().trim();
    const password = $("#login-password").val().trim();

    if(username === ""){
        event.preventDefault()
        console.log("Please enter a your username")
    };

    if(password === ""){
        event.preventDefault()
        console.log("Please enter a password!")
    };

    console.log(username +" "+ password)
};

function signupValidation(){
    const signupUsername = $("#username").val().trim();
    const signupPassword = $("#password").val().trim();
    const email = $("#email").val().trim();

    if(signupUsername === ""){
        event.preventDefault();
        console.log("Please enter a Username")
    };

    if(signupPassword === ""){
        event.preventDefault();
        console.log("Please enter a Password")
    };

    if(email === ""){
        event.preventDefault();
        console.log("Please enter a E-mail")
    };

    console.log(signupUsername + " " + signupPassword + " " + email)
};

$(document).ready(function(){
    $("#log-in").on("click", function(event){
        $("#login-modal").slideDown(580).css("display","block")
    });
    $("#sign-up").on("click", function(event){
        $("#signup-modal").slideDown(580).css("display","block")
    });
    $(".close").on("click", function(event){
        $("#signup-modal, #login-modal").slideUp(700)
    });
    $("#login").on("click",function(event){
        loginValidation();
    });
    $("#signup").on("click", function(event){
        signupValidation();
    });
}); 
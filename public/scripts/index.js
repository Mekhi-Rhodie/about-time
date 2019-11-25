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
}); 
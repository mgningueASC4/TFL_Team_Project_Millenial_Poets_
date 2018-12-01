$(document).ready(function(){
    $("container").click(function(){
        $("p").fadeOut()
    });
    $("container").click(function(){
        $("p").fadeIn();
    });
    
    $(function() {
    $('body').removeClass('fade-out');
});


function thankyou()
{
     msg = document.getElementById("thanks-msg")
     var love = "Thank you"
     msg.innerHTML = love;
}
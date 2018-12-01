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
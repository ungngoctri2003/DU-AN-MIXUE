// Scroll Top
var offset = 300;
var duration = 300;
$(function (){
$(window).scroll(function () {
if ($(this).scrollTop() > offset)
$('#top-up').fadeIn(duration);else
$('#top-up').fadeOut(duration);
});
$('#top-up').click(function () {
$('body,html').animate({scrollTop: 0}, duration);
});
});
//Loading
$(window).load(function() {
    $("#status").delay(1500).fadeOut();
    $("#preloader").delay(1500).fadeOut("slow");
       })
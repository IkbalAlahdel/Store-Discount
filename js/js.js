function changecss(attr){
    var css;
    if(attr =="en")
    css = "css/langstyle.css";
    else
    css = "css/style.css";
    document.getElementById('style').href = css;
} 






// Sticky navbar
// =========================
$(document).ready(function () {
// Custom function which toggles between sticky class (is-sticky)
var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
   var stickyHeight = sticky.outerHeight();
   var stickyTop = stickyWrapper.offset().top;
   if (scrollElement.scrollTop() >= stickyTop) {
       stickyWrapper.height(stickyHeight);
       sticky.addClass("is-sticky");
   }
   else {
       sticky.removeClass("is-sticky");
       stickyWrapper.height('auto');
   }
};
function changecss(attr){
    var css;
    if(attr =="en")
    css = "css/langstyle.css";
    else
    css = "css/style.css";
    document.getElementById('style').href = css;
} 

// Find all data-toggle="sticky-onscroll" elements
$('[data-toggle="sticky-onscroll"]').each(function () {
   var sticky = $(this);
   var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
   sticky.before(stickyWrapper);
   sticky.addClass('sticky');

   // Scroll & resize events
   $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
       stickyToggle(sticky, stickyWrapper, $(this));
   });

   // On page load
   stickyToggle(sticky, stickyWrapper, $(window));
});
});

$(document).on('ready', function () {


$(".center").slick({
dots: true,
infinite: true,
centerMode: true,
slidesToShow: 5,
slidesToScroll: 3
});



var stickyOffset = $('#nav_bar').offset().top;

$(window).scroll(function () {
//if you hard code, then use console
//.log to determine when you want the 
//nav bar to stick.  
console.log($(window).scrollTop())
if ($(window).scrollTop() > 280) {
$('#nav_bar').addClass('navbar-fixed');
}
if ($(window).scrollTop() < 281) {
$('#nav_bar').removeClass('navbar-fixed');
}
});

$(".center").slick({
dots: true,
infinite: true,
centerMode: true,
slidesToShow: 5,
slidesToScroll: 3
});


});
$("#country_selector").countrySelect({
preferredCountries: ['ca', 'gb', 'us']
});

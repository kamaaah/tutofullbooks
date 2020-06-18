/*  sticky Navigation */

let navbar = $(".navbar");

$(window).scroll(function() {
    // console.log(window.innerHeight);
    // console.log($(".section-2").offset().top);
    // pour faire apparaitre les positions dans la console of the browser
    let oTop = $(".section-2").offset().top - window.innerHeight;
    // console.log(oTop);
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});
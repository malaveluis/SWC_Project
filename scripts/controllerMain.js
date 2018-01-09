$(document).ready(function () {
    // navBar
    $("#navBar").load("partials/navBar_partial.html");
    $("#commercialSection").load("partials/commercialSection_partial.html");
    $("#plans").load("partials/plans_partial.html");
    $("#testimonials").load("partials/testimonials_partial.html");
    $("#contact").load("partials/contactSection_partial.html");
    $("#contactChat").load("partials/contactChat_partial.html");
    $("#footer").load("partials/footer_partial.html");

    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });

    // owlCarousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        autoHeight: true
    });

    $('#live-chat .chat-header').click(function () {
        $('.chat').slideToggle();
    });

    //$(".chat").delay(5000).slideToggle();
    setTimeout(function () {
        $('.chat').css({
            display: "block",
            opacity: "1"
        });
    }, 6000);
});

jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
});
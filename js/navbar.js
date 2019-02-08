AOS.init();

/* NAVBAR */

/* CHECK SCROLL */

function checkScroll() {
    var startY = $('navbar').height() * 1; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('navbar').addClass("scrolled");
    } else {
        $('navbar').removeClass("scrolled");
    }

    if ($(window).scrollTop() > startY) {
        $('nav').addClass("scrolled");
    } else {
        $('nav').removeClass("scrolled");
    }

    if ($(window).scrollTop() > startY) {
        $('a').addClass("scrolled");
    } else {
        $('a').removeClass("scrolled");
    }

    if ($(window).scrollTop() > startY) {
        $('i').addClass("scrolled");
    } else {
        $('i').removeClass("scrolled");
    }
}

if ($('navbar' && 'nav' && 'a' && 'i').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}

$('#togglerKopche').on('click', function (e) {
    $('#navbar').toggleClass("bg-dark show");
    e.preventDefault();
});

$(document).ready(function () {

    $(".iksot").hide();
    $(".menito").hide();
    $(".hamburger").click(function () {
        $(".menito").slideToggle("fast", function () {
            $(".hamburger").hide();
            $(".iksot").show();
        });
    });

    $(".iksot").click(function () {
        $(".menito").slideToggle("fast", function () {
            $(".iksot").hide();
            $(".hamburger").show();
        });
    });
});

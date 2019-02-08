AOS.init();
// // Horizontal scroll

// // Get scrollable object.
// var hs = document.querySelector('.wrapper');

// function horizontalScroll(event) {
//     hs.scrollLeft += (event.deltaY);
// }

// // Invoke horizontalScroll.
// window.addEventListener('wheel', horizontalScroll);


/* CLICK EVENT LISTENER */

$("#wrapper").click(function () {
    $("#wrapper").addClass("collapse") && $(".content-container").removeClass("collapse");
});

$("#goback").click(function () {
    $(".collapsableContent").removeClass("show") && $("#wrapper").removeClass("collapse") && $(".content-container").addClass("collapse");
})

$("#goback2").click(function () {
    $(".collapsableContent").removeClass("show") && $("#wrapper").removeClass("collapse") && $(".content-container").addClass("collapse");
})

$("#goback3").click(function () {
    $(".collapsableContent").removeClass("show") && $("#wrapper").removeClass("collapse") && $(".content-container").addClass("collapse");
})



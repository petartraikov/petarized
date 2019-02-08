AOS.init();

/* ANIMATE ARROW BUTTON TO THE MANAGEMENT DIV */

$(".arrow").click(function () {
    $('html,body').animate({
        scrollTop: $("#management-section").offset().top
    },
        'slow');
});

/* ACCORDION */

$(document).ready(function () {
    $(".disclose").click(function () {
        var img = $(this).find('img');
        img.attr('src', function (_, value) {
            if (value == "../media/plus.png") {
                return '../media/minus.png';
            } else {
                return '../media/plus.png';
            }
        });

        $(".disclose img").not(img).attr('src', '../media/plus.png');
    });
});


/* ACCORDION BACKUP */

// jQuery(document).ready(function () {
//     jQuery(".collapse").hide();
//     jQuery(".disclose").click(function () {
//         jQuery(this)
//             .nextAll(".collapse:first").slideToggle(200)
//             .siblings(".collapse").slideUp(200);

//         var img = $(this).find('img');
//         img.attr('src', function (_, value) {
//             if (value == "/media/plus.png") {
//                 return '/media/minus.png';
//             } else {
//                 return '/media/plus.png';
//             }
//         });

//         jQuery(".disclose img").not(img).attr('src', '/media/plus.png');
//     });
// });
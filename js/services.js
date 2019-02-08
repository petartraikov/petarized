$(document).ready(function () {
    AOS.init();
    $('#codingContent').removeClass('collapse')
    $('#marketingContent').addClass('collapse')
    $('#brandingContent').addClass('collapse')

    /* CHANGE ACTIVE ELEMENT */

    $(".holder li a").click(function () {
        $(this).parent().addClass('activ').siblings().removeClass('activ');
    });

    /* SHOW UL CONTENT */

    $(function () {
        $('#coding').click(function () {
            $('#codingContent').removeClass('collapse')
            $('#marketingContent').addClass('collapse')
            $('#brandingContent').addClass('collapse')
        })
        $('#marketing').click(function () {
            $('#marketingContent').removeClass('collapse')
            $('#brandingContent').addClass('collapse')
            $('#codingContent').addClass('collapse')
        })
        $('#branding').click(function () {
            $('#brandingContent').removeClass('collapse')
            $('#marketingContent').addClass('collapse')
            $('#codingContent').addClass('collapse')
        })
    })

    // // $("ul li:first").addClass("activ");
    // $("body").mousewheel(function (_event, delta) {
    //     var i = $(".activ").index();
    //     var l = $(".holder li a").size() - 1;
    //     $(".holder li a").removeClass("activ");
    //     if (delta == 1) {
    //         $(".holder li a")
    //             .eq(i - 1)
    //             .addClass("activ");
    //     } else {
    //         if (i == l) {
    //             $(".holder li a").addClass("activ");
    //         } else {
    //             $(".holder li a")
    //                 .eq(i + 1)
    //                 .addClass("activ");
    //         }
    //     }
    // });
});


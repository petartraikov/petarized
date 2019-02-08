AOS.init();

// ZA KOPCHINJATA UP AND DOWN


$('.arrow-up').click(function () {
    if ($('#mover').css("margin-top") === '0px') {
        $('#slider').animate({ 'margin-top': '0px' });
    }
    else {
        $("#mover").animate({ 'margin-top': '+=50px' }, { duration: 0.5 });
    }
});

$('.arrow-down').click(function () {
    if ($('#mover').css("margin-top") === '-850px') {
        $('#slider').animate({ 'margin-top': '0px' });
    }
    else {
        $("#mover").animate({ 'margin-top': '-=50px' }, { duration: 0.5 });
    }
});


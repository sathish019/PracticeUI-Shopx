$(document).ready(function () {
    $('.close-menu').hide();
    $('.File').hide();
    $('.Edit').hide();
    $('.View').hide();
    $('.Help').hide();
    $('.menu-bar').click(function () {
        $('.close-menu').show();
        $('.File').show();
        $('.Edit').show();
        $('.View').show();
        $('.Help').show();
    })

    $('.close-menu').click(function () {
        $('.close-menu').hide();
        $('.File').hide();
        $('.Edit').hide();
        $('.View').hide();
        $('.Help').hide();
    })

    $('#hp-btn').click(function () {
        $('.custom-label1').hide();
    })

    $('#dell-btn').click(function () {
        $('.custom-label2').hide();
    })

    var computer = ["HP", "Dell", "Lenovo"];
    var close = "x";
    $.each(computer, function (index, value) {
        $(".arraylist").append('<span class="label pd-10 mg-10">' + value +
            '<span class="pd-10">' + "|" + '</span>' +
            '<span class="closebtn">' + close + '</span>' + '</span>');
    });

    $('.closebtn').click(function () {
        console.log($(this).closest( ".closebtn" ));
       /* $(this).parent().hide(); */
    });


})














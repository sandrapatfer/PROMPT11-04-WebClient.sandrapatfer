/// <reference path="../Scripts/jquery-1.6.4.js" />


$(function () {

    $("span.helpSample").hide();

    $("p").hover(function () {
        $(this).find("span.helpSample").fadeIn();
    }, function () {
        $(this).find("span.helpSample").fadeOut();
    });

    //    $("input~span.helpSample").css("color","red");

    $("p > input").focus(function () {
        $("span.helpSample").hide();
        $(this).parent("p").find("span.helpSample").fadeIn();
    });

    $("p :checkbox[name $= .IsRequired]").change(function() {
        //if ($(this).is(":checked"))
        });
});
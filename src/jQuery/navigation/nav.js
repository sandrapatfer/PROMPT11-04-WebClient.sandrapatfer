
/// <reference path="../Scripts/jquery-1.6.4.js" />

$(function () {

    //    $("<p class='t1'>xxx</p>").appendTo(document.body);

    //    $(".t1").text("ttt").click(function () { $(this).wrap("<div>txt div</div>"); });

    //$("link").attr("rel");


        var links = function () {
            var links = [];
            $("link").each(function () {
                var $this = $(this);
                links.push({ "rel": $this.attr("rel"), "href": $this.attr("href") });
            })
            return links;
        } ();

        alert(links[0]);


//    $("link").each(function (i) {
//        var $this = $(this);
//        $("<a>").attr("href", $this.attr("href"))
//                .text($this.attr("rel"))
//                .appendTo(document.body);
//    });

});
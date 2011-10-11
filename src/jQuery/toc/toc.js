$(function () {

    var $ul = $("<ul>");
    $("h4").each(function (i) {
        var $this = $(this);
        var $a = $("<a>").attr("href", "#" + $this.attr("id")).text($this.text());
        var $li = $("<li class='li_toc'>");
        $a.appendTo($li);
        $li.appendTo($ul);
    });

    var $toc = $("<div class='toc'>");
    $ul.appendTo($toc);
    $toc.insertBefore(document.body.firstChild);

});
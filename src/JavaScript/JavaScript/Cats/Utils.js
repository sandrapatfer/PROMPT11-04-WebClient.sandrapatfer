
(function (w) {
    var _log = document.getElementById("log");

    w.log = function (data) {
        _log.firstChild.nodeValue = "[" + new Date().toLocaleTimeString() + "]" +
        data + "\n" + _log.firstChild.nodeValue;
    }

})(window);

function starts_with(text, subtext) {
    var t = text.slice(0, subtext.length);
    return t == subtext;
}

function trim_left(text) {
    var space = 0;
    while (text.charAt(space) === " ") {
        space++;
    }
    return names[i].slice(space, names[i].length);
}
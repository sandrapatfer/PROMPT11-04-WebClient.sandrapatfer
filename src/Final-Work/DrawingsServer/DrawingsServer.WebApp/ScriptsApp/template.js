var template = function (templateName, arg2) {

    var templateText = $("script[type='html/template']#" + templateName).text();
    var regex = /\$\( [^\$]+ \)/g;
    var templateParts = templateText.match(regex) || [];

    var f = function (templateObject) {
        var text = templateText;
        for (var i = 0; i < templateParts.length; i++) {
            var replaceText = templateParts[i];
            var prop = replaceText.substring(3, replaceText.length - 2);
            var propValue = eval("templateObject." + prop);
            if (propValue != null) {
                text = text.replace(replaceText, propValue);
            }
        }
        return text;
    }

    if (arg2 == null) {
        return f;
    }
    else if (arg2.constructor == Array) {
        var arr = [];
        for (var i = 0; i < arg2.length; i++) {
            arr.push(f(arg2[i]));
        }
        return arr;
    }
    else {
        return f(arg2);
    }
}
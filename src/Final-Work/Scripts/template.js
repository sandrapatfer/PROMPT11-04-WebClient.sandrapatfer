(function (window) {
    var document = window.document;
    function template(templateName, templateObject) {
        var templateText = $("script[type='html/template']#" + templateName).text();
        var regex = /\$\([^\)]+\)/g;
        var templateParts = templateText.match(regex);
        for (var i = 0; i < templateParts.length; i++) {
            var replaceText = templateParts[i];
            var prop = replaceText.substring(2, replaceText.length - 1);
            templateText = templateText.replace(replaceText, templateObject[prop]);
        }
        return templateText;
    }
    /*
    1- o 2º param pode ser um array - como ver o tipo do param?
    2- a função apenas tem um param e deve devolver uma função, estranho...
    3- as marcas serem objectos dentro de objectos - como é q se identificam?
    */

    window.template = template;
})(window);


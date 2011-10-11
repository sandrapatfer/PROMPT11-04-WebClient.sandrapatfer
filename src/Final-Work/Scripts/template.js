(function (window) {
    var document = window.document;
    function template(templateName, templateObject) {
        var templateText = $("script[type='html/template']#" + templateName).text();
        var regex = /\$\([^\$]*\)/m;
        var templateParts = regex.exec(templateText);
    }

    window.template = template;
})(window);
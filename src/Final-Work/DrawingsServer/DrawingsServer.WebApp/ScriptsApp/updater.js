(function (window, document, undefined) {

    function Updater() {
    }

    Updater.prototype.add = function (config) {
        var templateId = config["templateId"];
        var url = config["url"];
        var outputContainer = config["outputContainer"];

        if (templateId != undefined && url != undefined && outputContainer != undefined) {
            $.getJSON(url, function (dataArray) {
                processData(dataArray, config);
            });
        }
    }

    function processData(dataArray, config) {
        var outputElem = $("#" + config["outputContainer"]);
        outputElem.empty();
        $.each(dataArray, function (index, data) {
            var templateElem = $(template(config["templateId"], data));
            templateElem.appendTo(outputElem);
        });

        setTimeout(function () {
            $.getJSON(config["url"], function (dataArray) {
                processData(dataArray, config);
            });
        }, 2000);
    }

    window.updater = new Updater;

})(window, document);
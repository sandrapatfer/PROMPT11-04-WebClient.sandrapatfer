(function (window, document, undefined) {

    function Updater() {
    }

    Updater.prototype.add = function (config) {
        var templateId = config["templateId"];
        var url = config["url"];
        var outputContainer = config["outputContainer"];
        var dataIdFunc = config["dataIdFunc"];

        if (templateId != undefined && url != undefined && outputContainer != undefined && dataIdFunc != undefined) {
            $.getJSON(url, { lastId: -1 }, function (dataArray) {
                processData(dataArray, config, -1);
            });
        }
    }

    function processData(dataArray, config, vLastId) {
        if (dataArray.length > 0) {
            var outputElem = $("#" + config["outputContainer"]);
            outputElem.empty();
            $.each(dataArray, function (index, data) {
                var templateElem = $(template(config["templateId"], data));
                var dataId = config["dataIdFunc"](data);
                templateElem.attr("data-id", dataId);
                templateElem.appendTo(outputElem);
                vLastId = vLastId < dataId ? dataId : vLastId;
            });
        }

        setTimeout(function () {
            $.getJSON(config["url"], { lastId: vLastId }, function (dataArray) {
                processData(dataArray, config, vLastId);
            });
        }, 2000);
    }

    window.updater = new Updater;

})(window, document);
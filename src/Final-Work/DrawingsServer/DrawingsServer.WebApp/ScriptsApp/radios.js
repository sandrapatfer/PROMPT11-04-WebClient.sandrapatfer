(function (window, document, undefined) {

    var self;

    function RadioButtonsManager() {
        this.configs = [];
        self = this;
    }

    RadioButtonsManager.prototype.add = function (config) {
        var radioId = config["radio"];
        this.configs.push(config);
        var radioElem = $("#" + radioId);
        radioElem.click(function () { activate(radioId); });
        if (radioElem.attr("checked")) {
            activate(radioId);
        }
    }

    var activate = function (radioId) {
        $.each(self.configs, function (index, config) {
            var elem = $("#" + config["control"]);
            if (config["radio"] != radioId) {
                elem.hide(600);
            }
            else {
                elem.show(600);
            }
        });
    }

    window.radioButtonsManager = new RadioButtonsManager;

})(window, document);


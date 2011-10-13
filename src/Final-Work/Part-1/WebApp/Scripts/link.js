(function (window, document, undefined) {

    function LinqSet() {
        this.list = [];
    }

    var from = function (list) {
        this.list = list;
        return this;
    }

    LinqSet.prototype.foreach = function (actionFunction) {
        $.each(this.list, function (i, elem) {
            actionFunction(elem);
        });
        return this;
    }

    LinqSet.prototype.where = function (predicateFunction) {
        var ret = [];
        $.each(this.list, function (i, elem) {
            if (predicateFunction(elem)) {
                ret.push(elem);
            }
        });
        this.list = ret;
        return this;
    }

    LinqSet.prototype.order = function (columnSelectorFunction) {
        this.list = Array.prototype.sort.call(this.list, function (item1, item2) {
            return (columnSelectorFunction.call(item1) < columnSelectorFunction.call(item2) ? -1 :
            (columnSelectorFunction.call(item1) == columnSelectorFunction.call(item2) ? 0 : 1));
        });
        return this;
    }

    window.linq = new LinqSet;
    window.linq.from = from;

})(window, document);
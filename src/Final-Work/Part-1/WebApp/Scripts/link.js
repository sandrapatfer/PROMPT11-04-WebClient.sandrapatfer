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
            actionFunction.call(elem);
        });
        return this;
    }

    LinqSet.prototype.where = function (predicateFunction) {
        var ret = [];
        $.each(this.list, function (i, elem) {
            if (predicateFunction.call(elem)) {
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

    LinqSet.prototype.select = function (selectorFunction) {
        var arr = [];
        $.each(this.list, function (i, elem) {
            arr.push(selectorFunction(elem));
        });
        this.list = arr;
        return this;
    }

    LinqSet.prototype.any = function (predicateFunction) {
        for (var i = 0; i < this.list.length; i++) {
            if (predicateFunction.call(this.list[i])) {
                return true;
            }
        }
        return false;
    }

    LinqSet.prototype.all = function (predicateFunction) {
        for (var i = 0; i < this.list.length; i++) {
            if (!predicateFunction.call(this.list[i])) {
                return false;
            }
        }
        return true;
    }

    LinqSet.prototype.count = function () {
        return this.list.length;
    }

    window.linq = new LinqSet;
    window.linq.from = from;

})(window, document);
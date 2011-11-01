(function (window, document, undefined) {

    function LinqSet() {
        this.list = [];
    }

    var from = function (list) {
        this.list = list;
        return this;
    }

    LinqSet.prototype.error = function (errH) {
        this.errorHandler = errH;
    }

    LinqSet.prototype.foreach = function (actionFunction) {
        try {
            $.each(this.list, function (i, elem) {
                actionFunction.call(elem);
            });
        }
        catch (err) {
            this.errorHandler("Error in foreach: " + err.description);
        }
    }

    LinqSet.prototype.where = function (predicateFunction) {
        try {
            var ret = [];
            $.each(this.list, function (i, elem) {
                if (predicateFunction.call(elem)) {
                    ret.push(elem);
                }
            });
            this.list = ret;
        }
        catch (err) {
            this.errorHandler("Error in where: " + err.description);
        }
        return this;
    }

    LinqSet.prototype.order = function (columnSelectorFunction) {
        try {
            this.list = Array.prototype.sort.call(this.list, function (item1, item2) {
                return (columnSelectorFunction.call(item1) < columnSelectorFunction.call(item2) ? -1 :
            (columnSelectorFunction.call(item1) == columnSelectorFunction.call(item2) ? 0 : 1));
            });
        }
        catch (err) {
            this.errorHandler("Error in order: " + err.description);
        }
        return this;
    }

    LinqSet.prototype.select = function (selectorFunction) {
        try {
            if (typeof selectorFunction == "function") {
                var arr = [];
                $.each(this.list, function (i, elem) {
                    arr.push(selectorFunction.call(elem));
                });
                this.list = arr;
            }
            else if (typeof selectorFunction == "string") {
                var arr = [];
                if (arguments.length > 1) {
                    for (var i = 0; i < this.list.length; i++) {
                        var obj = {};
                        for (var j = 0; j < arguments.length; j++) {
                            obj[arguments[j]] = this.list[i][arguments[j]];
                        }
                        arr.push(obj);
                    }
                }
                else {
                    for (var i = 0; i < this.list.length; i++) {
                        arr.push(this.list[i][selectorFunction]);
                    }
                }
                this.list = arr;
            }
        }
        catch (err) {
            this.errorHandler("Error in select: " + err.description);
        }
        return this;
    }

    LinqSet.prototype.any = function (predicateFunction) {
        if (this.list.length == 0) {
            this.errorHandler("The array is emtpy");
        }
        try {
            for (var i = 0; i < this.list.length; i++) {
                if (predicateFunction.call(this.list[i])) {
                    return true;
                }
            }
        }
        catch (err) {
            this.errorHandler("Error in any: " + err.description);
        }
        return false;
    }

    LinqSet.prototype.all = function (predicateFunction) {
        try {
            for (var i = 0; i < this.list.length; i++) {
                if (!predicateFunction.call(this.list[i])) {
                    return false;
                }
            }
        }
        catch (err) {
            this.errorHandler("Error in all: " + err.description);
        }
        return true;
    }

    LinqSet.prototype.count = function () {
        return this.list.length;
    }

    window.linq = new LinqSet;
    window.linq.from = from;

})(window, document);
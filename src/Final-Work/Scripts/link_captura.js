Array.prototype.where = function (predicate) {
    var ret = [];
    $.each(this, function (i, elem) {
        if (predicate(elem)) {
            ret.push(elem);
        }
    });
    return ret;
}

linq = {
    from: function (list) {
        function LinqSet() { }

        LinqSet.prototype.foreach = function (action) {
            $.each(list, function (i, elem) {
                action(elem);
            }
            );
            return this;
        }

        LinqSet.prototype.where = function (predicate) {
            var ret = [];
            $.each(list, function (i, elem) {
                if (predicate(elem)) {
                    ret.push(elem);
                }
            });
            list = ret;
            return this;
        }


        return new LinqSet();
    }
}


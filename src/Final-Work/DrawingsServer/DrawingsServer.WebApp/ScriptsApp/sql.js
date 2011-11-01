(function (window, document, undefined) {

    function prepareDatabase() {
        var db = openDatabase("drawingDB", "1.0", "drawings database", 2 * 1024 * 1024);
        db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS drawings (id unique, title)');
        });

        /* tests - create proper functions*/

        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO drawings (id, title) VALUES (1, "teste1")');
            tx.executeSql('INSERT INTO drawings (id, title) VALUES (?, ?)', [2, "teste2"]);
        });

        db.transaction(function (tx) {
            tx.executeSql("SELECT * FROM drawings", [], function (tx, values) {
                for (var i = 0; i < values.rows.length; i++) {
                    alert(values.rows.item(i).title);
                }
            });
        });

        return db;
    };

    window.db = prepareDatabase();

})(window, document);

$(function () {
});

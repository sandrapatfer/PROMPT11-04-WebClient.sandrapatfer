$(function () {
    var drawing = false;
    var canvasContext = $("#drawingCanvas")[0].getContext("2d");

    $("#drawingCanvas").mousedown(function (ev) {
        drawing = true;
        canvasContext.beginPath();
        canvasContext.moveTo(ev.offsetX, ev.offsetY);
    });

    $("#drawingCanvas").mouseup(function () {
        drawing = false;
    });

    $("#drawingCanvas").mousemove(function (ev) {
        if (drawing) {
            canvasContext.lineTo(ev.offsetX, ev.offsetY);
            canvasContext.stroke();
        }
    });
});

$(function () {
    var drawing = false;

    $("#drawingCanvas").mousedown(function (ev) {
        drawing = true;
        var canvasContext = $("#drawingCanvas")[0].getContext("2d");
        canvasContext.beginPath();
        canvasContext.moveTo(ev.offsetX, ev.offsetY);
    });

    $("#drawingCanvas").mouseup(function () {
        drawing = false;
    });

    $("#drawingCanvas").mouseleave(function () {
        drawing = false;
    });

    $("#drawingCanvas").mousemove(function (ev) {
        if (drawing) {
            var canvasContext = $("#drawingCanvas")[0].getContext("2d");
            canvasContext.lineTo(ev.offsetX, ev.offsetY);
            canvasContext.stroke();
        }
    });
});

$(function () {
    // fill the canvas with the image, if present
    var imgToEdit = $("img#drawingImage");
    var canvas = $("#drawingCanvas")[0];
    if (imgToEdit != undefined && canvas != undefined) {
        var img = new Image();
        img.src = imgToEdit.attr("src");
        var canvasContext = canvas.getContext("2d");
        canvasContext.drawImage(img, 0, 0);
    }
});
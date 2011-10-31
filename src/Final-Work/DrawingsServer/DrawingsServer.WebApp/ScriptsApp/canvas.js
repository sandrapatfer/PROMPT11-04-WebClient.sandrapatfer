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

    $("#drawingCanvas").mouseleave(function () {
        drawing = false;
    });

    $("#drawingCanvas").mousemove(function (ev) {
        if (drawing) {
            canvasContext.lineTo(ev.offsetX, ev.offsetY);
            canvasContext.stroke();
        }
    });
});

$(function () {
    // fill the canvas with the image, if present
    var imgToEdit = $("img#drawingImage");
    if (imgToEdit != undefined) {
        var img = new Image();
        img.src = imgToEdit.attr("src");
        var canvasContext = $("#drawingCanvas")[0].getContext("2d");
        canvasContext.drawImage(img, 0, 0);
    }
});
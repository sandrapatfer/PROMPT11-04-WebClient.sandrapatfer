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

    //$("#drawingCanvas").bind("dragenter", function (ev) {
    function dragenter(ev) {
        ev.preventDefault();
        //});
    }

    //$("#drawingCanvas").bind("dragover", function (ev) {
    function dragover(ev) {
        ev.preventDefault();
        //});
    }

    //$("#drawingCanvas").bind("drop", function (ev, ui) {
    function drop(ev, ui) {
        var files = ev.dataTransfer.files;
        if (files.length > 0) {
            var file = files[0];
            if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -1) {
                var reader = new FileReader();
                reader.onload = function (evt) {
                    var img = new Image();
                    img.src = evt.target.result;
                    var canvas = $("#drawingCanvas")[0];
                    var canvasContext = canvas.getContext("2d");
                    canvasContext.drawImage(img, 0, 0, 400, 300);
                };
                reader.readAsDataURL(file);
            }
        }
        ev.preventDefault();
        //});
    }

    // setting the events in old way, the jquery bind does not work, the event object does not include the needed information
    var canvas2 = document.getElementById("drawingCanvas");
    if (canvas2) {
        canvas2.addEventListener("dragenter", dragenter, false);
        canvas2.addEventListener("dragover", dragover, false);
        canvas2.addEventListener("drop", drop, false);
    }
});

$(function () {
    // fill the canvas with the image sent from server, if present (edit mode)
    var imgToEdit = $("img#drawingImage");
    var canvas = $("#drawingCanvas")[0];
    if (imgToEdit != undefined && canvas != undefined) {
        var img = new Image();
        img.src = imgToEdit.attr("src");
        var canvasContext = canvas.getContext("2d");
        canvasContext.drawImage(img, 0, 0);
    }
});
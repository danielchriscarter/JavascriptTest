window.onload = function() {
    var canvas = document.getElementById("mandelbrot");
    var context = canvas.getContext("2d");
    context.fillRect(0,0,200,200);

    var x0 = -2.0;
    var y0 = -1.0;
    var width = 3.0;
    var height = 2.0;
    for (var i = 0; i < canvas.width; i++) {
        for (var j = 0; j < canvas.height; j++) {
            var x = x0 + i * width / canvas.width;
            var y = y0 + j * height / canvas.height;
        }
    }
}

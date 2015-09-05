function mandelbrotSet(c_real, c_img, iter)
{
	var x_real = c_real;
	var x_img = c_img;
	for(var i = 0; i<iter; i++)
	{
		var re = (x_real*x_real)-(x_img*x_img) + c_real;
		var im = (2 * x_real * x_img) + c_img;
		x_real = re;
		x_img = im;
	}
	return ((x_real*x_real)+(x_img*x_img))<1;
};

window.onload = function() {
    var canvas = document.getElementById("mandelbrot");
    var context = canvas.getContext("2d");

    var x0 = -2.0;
    var y0 = -1.0;
    var width = 3.0;
    var height = 2.0;
    for (var i = 0; i < canvas.width; i++) {
        for (var j = 0; j < canvas.height; j++) {
            var x = x0 + i * width / canvas.width;
            var y = y0 + j * height / canvas.height;
			if(mandelbrotSet(x,y,100)) {
				context.fillRect(i,j,1,1);
			}
        }
    }
};
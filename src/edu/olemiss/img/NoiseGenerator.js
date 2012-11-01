/**
 * @author Clay McLeod
 */

function addNoise(canvas) {
   var ctx = canvas.getContext('2d');

   var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
   var pixels = imageData.data;
   for (var i = 0, il = pixels.length; i < il; i += 4) {
		var color = Math.round(Math.random() * 255);
      	pixels[i] = pixels[i + 1] = pixels[i + 2] = color;
      	pixels[i + 3] = 255;
   }

   ctx.putImageData(imageData, 0, 0);
}
// Set up canvas

var canvas = document.createElement('canvas');
canvas.width = canvas.height = 200;
document.body.appendChild(canvas);
addNoise(canvas);
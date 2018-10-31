

window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0, 0, 0,1.0)';
  // get the context
  animate(); // Call to your animate function
}

// To do::
//  1. Declare and init variables x, y, dx, dy, radius;

function animate(){
  //loops animate function
  requestAnimationFrame(animate);
}

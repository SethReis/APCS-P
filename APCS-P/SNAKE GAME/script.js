window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var w = 20;
var cols, rows;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = 800;
  canvas.height = 800;
  rows = canvas.height/w;
  cols = canvas.width/w;
  canvas.style.backgroundColor = 'rgb(0, 0, 0)';
  ctx = canvas.getContext('2d'); // This is the context
  animate(); // Call to your animate function
}

function animate(){
  //loops animate function
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

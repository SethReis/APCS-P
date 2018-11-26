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
  snake = new Snake(new JSVector(20, 20), new JSVector(0, -1));
  food = new Food(new JSVector(Math.floor(Math.random*rows), Math.floor(Math.random*cols)));
  window.addEventListener('keypress', function(event){
    keyName = event.key;
    if (keyName === "w"){
      snake.vel = new JSVector(0, -1);
    } else if (keyName === "a"){
      snake.vel = new JSVector(-1, 0);
    } else if (keyName === "s"){
      snake.vel = new JSVector(0, 1);
    } else if (keyName === "d"){
      snake.vel = new JSVector(1, 0);
    }
  }, false);
  animate(); // Call to your animate function
}

function animate(){
  //loops animate function
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  food.update();
  food.render();
  snake.update();
  snake.render();
  var distance = food.loc.distance(snake.segs[0]);
  if (distance === 0){
    food.move();
    snake.grow();
  }
}

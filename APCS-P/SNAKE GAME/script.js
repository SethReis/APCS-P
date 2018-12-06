window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var w = 20;
var cols, rows;
var score = 0;
var buttonW, buttonH, buttonX, buttonY;
var splash = new Image();
var endGame = new Image();
splash.src = 'splash.png';
endGame.src = 'endScreen.png';

function init(){
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = 800;
  canvas.height = 800;
  rows = canvas.height/w;
  cols = canvas.width/w;
  canvas.style.backgroundColor = 'rgb(0, 0, 0)';
  ctx = canvas.getContext('2d'); // This is the context
  // Button position and dimensions
  buttonW = 120;
  buttonH = 40;
  buttonX = canvas.width/2 + 175;
  buttonY = canvas.height/2 + 250;

  ctx.drawImage(splash, 0, 0, canvas.width, canvas.height);

  ctx.font = "45px Comic Sans MS, cursive, sans-serif";
  ctx.fillStyle = 'white';
  ctx.fillText("Start", buttonX, buttonY + buttonH-3);

  canvas.addEventListener('click', function(event) {
    if (event.offsetX > buttonX
      && event.offsetX < buttonX + buttonW
      && event.offsetY > buttonY
      && event.offsetY < buttonY + buttonH) {
        if (typeof snake === 'undefined'){
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          run();
        } else if(snake.gameOver === true) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          location.reload(true);
        }
      }
    });
  }

  function run(){
    snake = new Snake(new JSVector(20, 20), new JSVector(0, 1));
    food = new Food(new JSVector(Math.floor(Math.random()*rows), Math.floor(Math.random()*cols)));
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
    document.getElementById('score').innerHTML=score;
    animate(); // Call to your animate function
  }

  function animate(){
    //loops animate function
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.render();
    snake.update();
    snake.render();
    snake.checkCollisions();
    if (snake.gameOver === true){
      ctx.drawImage(endGame, 0, 0, canvas.width, canvas.height);

      ctx.font = "45px Comic Sans MS, cursive, sans-serif";
      ctx.fillStyle = 'white';
      ctx.fillText("Retry", buttonX, buttonY + buttonH-3);
    }
    var distance = food.loc.distance(snake.segs[0][0]);
    if (distance === 0){
      food.move();
      snake.grow();
      score = score + 20;
      document.getElementById('score').innerHTML=score;
    }
  }

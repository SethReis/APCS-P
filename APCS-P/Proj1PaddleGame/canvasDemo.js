

window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var balls = new Array();
var paddle = new Paddle();

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0, 0, 0,1.0)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  for(var i = 0; i < 2; i++){
    balls.push(new Ball());
  }

  canvas.addEventListener('mousemove', function(){
    mouseX = event.offsetX;
  }, false);


  animate(); // Call to your animate function
}

// To do::
//  1. Declare and init variables x, y, dx, dy, radius;

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < balls.length; i++){
    //render and update a single ball
    var ball = balls[i];
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.rad, 0, Math.PI*2);
    ctx.fillStyle = ball.c;
    ctx.fill();
    ctx.strokeStyle = ball.c;
    ctx.stroke();
    if(ball.x + ball.rad >= innerWidth || ball.x -ball.rad <= 0){
      ball.dx = -(ball.dx);
    }
    if(ball.y + ball.rad >= innerHeight || ball.y - ball.rad <= 0){
      ball.dy = - (ball.dy / 1.1);
    }
    ball.x += ball.dx
    ball.y += ball.dy;
    ball.dy += 0.5;

    if((ball.y + ball.rad) - (paddle.y - paddle.h) >= 0
    && (ball.y - ball.rad) - (paddle.y + paddle.h) >= 0
    && (ball.x + ball.rad) - (paddle.x - paddle.w) >= 0
    && (ball.x - ball.rad) - (paddle.x + paddle.w) >= 0){
      balls.splice(i, 1);
    }
  }
  ctx.beginPath();
  ctx.rect(paddle.x-paddle.w, paddle.y-paddle.h, paddle.w*2, paddle.h*2);
  ctx.fillStyle = paddle.c;
  ctx.fill();
  ctx.strokeStyle = paddle.c;
  ctx.stroke();
  paddle.x = mouseX;
}

function Ball(){
  this.x = Math.random()*innerWidth + 100;
  // this.y = Math.random()*innerHeight + 100;
  // this.x = 1000;
  this.y = 100;
  this.dx = Math.random()*10-5;
  this.dy = Math.random()*10-5;
  this.rad = Math.random()*10+10;
  this.c = 'rgba(' + Math.floor(Math.random()*225) + ',' + Math.floor(Math.random()*225) + ',' + Math.floor(Math.random()*225) + ',' + 1 + ')';
}

function Paddle(){
  this.x = innerWidth/2;
  this.y = innerHeight/2 + innerHeight/4;
  this.w = 200;
  this.h = 50;
  this.c = 'rgba(' + 255 + ',' + 255 + ',' + 255 + ',' + 1 + ')';
}
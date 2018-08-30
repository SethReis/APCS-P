var angle = 0.7;
var shapes = [];
var loc;
var vel;
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800, WEBGL);
  loc = createVector(0, 0);
  vel = createVector(random(-3, 3), random(-3, 3));
  // for (var i = 0; i < 1; i++){
  //   shapes.push(new Shape());
  // }
}

//  The draw function is called @ 30 fps
function draw() {
  var dx = mouseX - width/2;
  var dy = mouseY - height/2;
  var v = createVector(dx, dy, 0);
  v.normalize();

  //ambientLight(0, 0, 255);
  directionalLight(255, 255, 0, v);

  background(175);

  rotateX(angle);
  rotateY(angle * 0.1);
  rotateZ(angle * 0.2);

  loc.add(vel);
  translate(loc.x, loc.y);
  if(loc.x >= 400 || loc.x <= -409){
    vel.x = -vel.x;
  }
  if(loc.y >= 400 || loc.y <= -400){
    vel.y = -vel.y;
  }

  noStroke();
  specularMaterial(255);
  sphere(100);
  // for (var i = 0; i < shapes.length; i++){
  //   shapes[i].turn();
  //   shapes[i].display();
  // }
  angle += 0.01;
}

// function Shape() {
//   torus(100, 20);
//
//   this.turn = function() {
//     rotateX(angle);
//     rotateY(angle * 0.1);
//     rotateZ(angle * 0.2);
//   }
//
//   this.display = function() {
//     specularMaterial(255);
//     noStroke();
//     torus(100,20);
//   }
// }

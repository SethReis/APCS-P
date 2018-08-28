var angle = 0.7;
var shapes = [];
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800, WEBGL);
  var loc = createVector(0, 0);
  var vel = createVector(random(-3, 3), random(-3, 3));
  // for (var i = 0; i < 1; i++){
  //   shapes.push(new Shape());
  // }
}

//  The draw function is called @ 30 fps
function draw() {
  let dx = mouseX - width/2;
  let dy = mouseY - height/2;
  let v = createVector(dx, dy, 0);
  v.normalize();

  //ambientLight(0, 0, 255);
  directionalLight(255, 255, 0, v);

  background(175);

  rotateX(angle);
  rotateY(angle * 0.1);
  rotateZ(angle * 0.2);

  console.log(loc.x);
  console.log(vel.y);

  loc.add(vel);
  translate(loc.x, loc.y);

  noStroke();
  specularMaterial(255);
  torus(100, 20);
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

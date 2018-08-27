var angle = 0.07;
var shapes = [];
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800, WEBGL);
  for (var i = 0; i < 5; i++){
    shapes.push(new Shape());
  }
}

//  The draw function is called @ 30 fps
function draw() {
  background(175);
  let dx = mouseX - width/2;
  let dy = mouseY - height/2;
  let v = createVector(dx, dy, 0);
  v.normalize();
  directionalLight(255, 255, 0, v);
  for (var i = 0; i < shapes.length; i++){
    shapes[i].turn();
    shapes[i].display();
  }
  angle += 0.07;
}

function Shape() {
  torus(100, 10);

  this.turn = function() {
    rotateX(angle);
    rotateY(angle * 0.1);
    rotateZ(angle * 0.2);
  }

  this.display = function() {
    specularMaterial(255);
    noStroke();
    torus(200, 20);
  }
}

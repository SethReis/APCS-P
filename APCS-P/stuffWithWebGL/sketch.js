var shapes = [];
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800, WEBGL);
  for (var i = 0; i < 2; i++){
    let loc = createVector(0, 0);
    let vel = createVector(random(-5, 5), random(-5, 5));
    let acc = createVector(0, random(0.1, 0.9))
    shapes.push(new Shape(loc, vel, acc));
  }
}

//  The draw function is called @ 30 fps
function draw() {
  // var dx = mouseX - width/2;
  // var dy = mouseY - height/2;
  // var v = createVector(dx, dy, 0);
  // v.normalize();
  //
  pointLight(0, 0, 255, 0, 0, 250);

  // directionalLight(255, 255, 0, v);

  background(175);
  for (var i = 0; i < shapes.length; i++){
    shapes[i].move();
    shapes[i].display();
  }
}

function Shape(loc, vel, acc) {
  ambientMaterial(255);
  sphere(50);
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;

  this.move = function() {
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    translate(this.loc.x, this.loc.y);
    if(this.loc.x >= 350 || this.loc.x <= -350){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y >= 350 || this.loc.y <= -350){
      this.vel.y = -(this.vel.y-this.acc.y);
    }
  }

  this.display = function() {
    noStroke();
    ambientMaterial(255);
    sphere(50);
  }
}

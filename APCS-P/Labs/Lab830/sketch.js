var shapes = [];
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(1920, 1080, WEBGL);
  for (var i = 0; i < 2; i++){
    shapes.push(new Shape());
  }
}

//  The draw function is called @ 30 fps
function draw() {
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, 0, 250, 250);

  background(175);
  for (var i = 0; i < shapes.length; i++){
    shapes[i].checkEdges();
    shapes[i].update();
    shapes[i].render();
  }
}

function Shape() {
  this.rad = random(15, 30);
  this.loc = createVector(random(-(width/2)+this.rad, (width/2)-this.rad), random(-(height/2)+this.rad, (height/2)-this.rad));
  this.vel = createVector(random(-10, 10), random(-5, 5));
  this.acc = createVector(0, random(0.1, 0.9));
  this.color = [random(0, 255), random(0, 255), random(0, 255)];

  this.checkEdges = function() {
    if(this.loc.x >= (width/2)-this.rad || this.loc.x <= this.rad-(width/2)){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y >= (height/2)-this.rad || this.loc.y <= this.rad-(height/2)){
      this.vel.y = -(this.vel.y-this.acc.y);
    }
  }

  this.update = function() {
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    translate(this.loc.x, this.loc.y);
  }

  this.render = function() {
    noStroke();
    specularMaterial(this.color);
    sphere(this.rad);
  }
}

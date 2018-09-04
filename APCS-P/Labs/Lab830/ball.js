function Shape() {
  this.loc = createVector(random(-(width/2), (width/2)), random(-(height/2), (height/2)));
  this.vel = createVector(random(-10, 10), random(-5, 5));
  this.acc = createVector(0, random(0.1, 0.9))
  this.rad = random(15, 30);
  this.color = [random(0, 255), random(0, 255), random(0, 255)];

  this.run = function() {
    checkEdges();
    update();
    render();
  }
}

checkEdges = function() {
  if(this.loc.x >= (width/2)-this.rad || this.loc.x <= this.rad-(width/2)){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y >= (height/2)-this.rad || this.loc.y <= this.rad-(height/2)){
    this.vel.y = -(this.vel.y-this.acc.y);
  }
}

update = function() {
  this.loc.add(this.vel);
  this.vel.add(this.acc);
  translate(this.loc.x, this.loc.y);
}

render = function() {
  noStroke();
  specularMaterial(this.color);
  sphere(this.rad);
}

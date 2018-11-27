function Snake(loc, vel){
  this.c = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255)  +  ')';
  this.segs = [];
  this.vel = vel;
  this.count = 0;
  this.loc = loc;
  for (var i = 0; i < 1; i++){
    this.segs[i] = new Array(2);
    this.segs[i][0] = this.loc
    this.segs[i][1] = new JSVector(0, 0);
  }
  for (var i = 1; i < 5; i++){
    this.segs[i] = new Array(2);
    this.segs[i][0] = JSVector.subGetNew(this.segs[i-1][0], this.vel);
    this.segs[i][1] = new JSVector(0, 0);
  }
}

Snake.prototype.update = function(){
  this.count++;
  if (this.count === 10){
    this.segs[0][1] = this.segs[0][0];
    this.segs[0][0].add(this.vel);
    for (var i = 1; i < this.segs.length; i++){
      this.segs[i][1] = this.segs[i][0];
      this.segs[i][0] = this.segs[i-1][1];
    }
    this.count = 0;
    console.log(this.segs[0][1]);
  }
}

Snake.prototype.render = function(){
  for (var i = 0; i < this.segs.length; i++){
    ctx.beginPath();
    ctx.rect(this.segs[i][0].x*w, this.segs[i][0].y*w, w, w);
    ctx.fillStyle = this.c;
    ctx.fill();
    ctx.strokeStyle = this.c;
    ctx.stroke();
  }
}

Snake.prototype.grow = function(){
  this.segs.push(new JSVector(0, 0));
}

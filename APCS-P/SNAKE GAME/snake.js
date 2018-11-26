function Snake(loc, vel){
  this.c = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255)  +  ')';
  this.segs = [];
  this.vel = vel;
  this.count = 0;
  for (var i = 0; i < 1; i++){
    this.segs[i] = loc;
  }
  for (var i = 1; i < 5; i++){
    this.segs[i] = JSVector.subGetNew(this.segs[i-1], this.vel);
  }
}

Snake.prototype.update = function(){
  this.count++;
  if (this.count === 10){
    this.segs[0].add(this.vel);
    for (var i = 1; i < this.segs.length; i++){
      var temp = JSVector.subGetNew(this.segs[i], this.segs[i-1]);
      this.segs[i].sub(this.vel);
      this.segs[i].sub(temp);
      //this.segs[i] = JSVector.subGetNew(this.segs[i], this.segs[i-1]);
      //this.segs[i].setMag(1);
      //this.segs[i].add(this.segs[i-1]);
    }
    this.count = 0;
    console.log(this.segs[3]);
  }
}

Snake.prototype.render = function(){
  for (var i = 0; i < this.segs.length; i++){
    ctx.beginPath();
    ctx.rect(this.segs[i].x*w, this.segs[i].y*w, w, w)
    ctx.fillStyle = this.c;
    ctx.fill();
    ctx.strokeStyle = this.c;
    ctx.stroke();
  }
}

Snake.prototype.grow = function(){
  this.segs.push(new JSVector(0, 0));
}

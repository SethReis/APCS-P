function Snake(loc, vel){
  this.c = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255)  +  ')';
  this.segs = [];
  this.vel = vel;
  this.count = 0;
  this.loc = loc;
  this.segsStart = 3;
  for (var i = 0; i < 1; i++){
    this.segs[i] = new Array(2);
    this.segs[i][0] = this.loc
    this.segs[i][1] = new JSVector(0, 0);
  }
  for (var i = 1; i < this.segsStart; i++){
    this.segs[i] = new Array(2);
    this.segs[i][0] = JSVector.subGetNew(this.segs[i-1][0], this.vel);
    this.segs[i][1] = new JSVector(0, 0);
  }
}

Snake.prototype.update = function(){
  this.count++;
  if (this.count === 10){
    this.segs[0][1] = this.segs[0][0];
    this.segs[0][0] = JSVector.addGetNew(this.segs[0][0], this.vel);
    for (var i = 1; i < this.segs.length; i++){
      this.segs[i][1] = this.segs[i][0];
      this.segs[i][0] = this.segs[i-1][1];
    }
    this.count = 0;
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

Snake.prototype.checkCollisions = function(){
  for (var i = this.segs.length-1; i > 0; i--){
    for (var j = 0; j < i; j++){
      if (this.segs[i][0] === this.segs[j][0]
      || this.segs[0][0].x > cols-1
      || this.segs[0][0].y > rows-1
      || this.segs[0][0].x < 0
      || this.segs[0][0].y < 0){
        //score = 0;
        this.segs.splice(0, this.segs.length);
        for (var p = 0; p < 1; p++){
          this.segs[p] = new Array(2);
          this.segs[p][0] = this.loc
          this.segs[p][1] = new JSVector(0, 0);
        }
        for (var p = 1; p < this.segsStart; p++){
          this.segs[p] = new Array(2);
          this.segs[p][0] = JSVector.subGetNew(this.segs[p-1][0], this.vel);
          this.segs[p][1] = new JSVector(0, 0);
        }
      }
    }
  }
}

Snake.prototype.grow = function(){
  this.segs.push(new Array(2));
  this.segs[this.segs.length-1][0] = this.segs[this.segs.length-2][1];
  this.segs[this.segs.length-1][1] = new JSVector(0, 0);
  score = score + 20;
}

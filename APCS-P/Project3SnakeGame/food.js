function Food(loc){
  this.c = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255)  +  ')';
  this.loc = loc;
}

Food.prototype.render = function(){
  ctx.beginPath();
  ctx.rect(this.loc.x*w, this.loc.y*w, w, w)
  ctx.strokeStyle = this.c;
  ctx.lineWidth = 10;
  ctx.stroke();
}

Food.prototype.move = function(){
  this.loc = new JSVector(Math.floor(Math.random()*rows), Math.floor(Math.random()*cols));
  for (var i = 0; i < snake.segs.length; i++){
    if (this.loc === snake.segs[i][0]){
      move();
    }
  }
}


//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(55, 55, 55);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  for(var i = -200; i < 400; i += 200){
    strokeWeight(7);
    line(350 + i, 300 + i, 400 + i, 350 + i);
    line(450 + i, 300 + i, 400 + i, 350 + i);
    strokeWeight(2);
    fill(150, 100, 50);
    triangle(400 + i, 400 + i, 400 + i, 500 + i, 600 + i, 450 + i);
    triangle(400 + i, 400 + i, 400 + i, 500 + i, 200 + i, 450 + i);
    fill(0, 255, 100);
    ellipse(400 + i, 400 + i, 100, 200);
    fill(255, 255, 255);
    ellipse(350 + i, 300 + i, 25, 25);
    ellipse(450 + i, 300 + i, 25, 25);
    fill(1);
    ellipse(350 + i, 300 + i, 10, 10);
    ellipse(450 + i, 300 + i, 10, 10);
    strokeWeight(15);
    line(380 + i, 360 + i, 420 + i, 360 + i);
    line(420 + i, 360 + i, 442 + i, 400 + i);
    line(442 + i, 400 + i, 420 + i, 440 + i);
    line(420 + i, 440 + i, 380 + i, 440 + i);
    line(380 + i, 440 + i, 358 + i, 400 + i);
    line(358 + i, 400 + i, 380 + i, 360 + i);
    strokeWeight(2);
  }
}

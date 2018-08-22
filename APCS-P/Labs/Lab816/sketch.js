
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  background(200, 200, 200);
  rSlide = createSlider(0, 255, 255);
  rSlide.position(20, 20);
  gSlide = createSlider(0, 255, 5);
  gSlide.position(40, 40);
  bSlide = createSlider(0, 255, 81);
  bSlide.position(60, 60);
  i = 0;
  A = 50;
  B = 50;
}

//  The draw function is called @ 30 fps
function draw() {
  this.i++;
  if (i === 6){
    A++;
    B--;
    if (A === 100 || B === 0){
      B = 50;
      A = 50;
    }
  }
  var x = rSlide.value();
  var y = gSlide.value();
  var z = bSlide.value();
  fill(x, y, z);
  rect(100, 300, A, B);
}

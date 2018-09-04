var shapes = [];
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(1920, 1080, WEBGL);
  for (var i = 0; i < 1; i++){
    shapes.push(new Shape());
  }
}

//  The draw function is called @ 30 fps
function draw() {
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, 0, 250, 250);

  background(175);
  for (var i = 0; i < shapes.length; i++){
    shapes[i].run;
  }
}

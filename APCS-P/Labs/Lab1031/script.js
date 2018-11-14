window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight*3.5;
  canvas.style.backgroundColor = 'rgb(0, 0, 0)';
  ctx = canvas.getContext('2d'); // This is the context
  getJSON();
}

function getJSON() {
  var array = [];
  $.getJSON("pokedex.json", function(json) {
    for (var i = 0; i < json.pokemon.length; i++){
      array[i] = json.pokemon[i];
    }

    for (var j = array.length-1; j > 0; j--){
      for(var k = 0; k < j; k++){
        if (array[k].weight > array[k+1].weight){
          var temp = array[k];
          array[k] = array[k+1];
          array[k+1] = temp;
        }
      }
    }
    console.log(array);
    display(array);
  });
}

function display(array){
  for (var m = 0; m < array.length; m++){
    ctx.beginPath();
    ctx.rect(100, (m*20)+100, array[m].weight*3, 10);
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fill();
    ctx.strokeStyle = 'rgb(0, 255, 0)';
    ctx.stroke();
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText(array[m].name + ": " + array[m].weight + " kg", 100, (m*20)+100);
  }
}

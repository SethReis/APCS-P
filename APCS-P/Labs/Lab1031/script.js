

window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0, 0, 0,1.0)';

  var array = [];

  $.getJSON("pokedex.json", function(json) {
    for (var i = 0; i < json.pokemon.length; i++){
      array[i] = json.pokemon[i];
    }

    for (var j = json.pokemon.length-1; j > 0; j--){
      for(var k = 0; k < j; k++){
        if (array[k].name > array[k+1].name){
          var temp = array[k];
          array[k] = array[k+1];
          array[k+1] = temp;
        }
      }
    }
    console.log(array);
  });

  // get the context
  animate(); // Call to your animate function
}

// To do::
//  1. Declare and init variables x, y, dx, dy, radius;

function animate(){
  //loops animate function
  requestAnimationFrame(animate);
}

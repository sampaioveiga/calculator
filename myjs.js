// startup events: zero vars
var key_pressed = null;
var display = [];

//display char after validation
function displayChar(key_pressed) {
  display.push(key_pressed);
  $('#calculator_display').html(display);
}


$(document).ready(function(){

  // startup events: clear displays
  $('#calculator_history').html("&nbsp;");
  $('#calculator_display').html("0");

  //number keys click
  $('.number_key').click(function( event ) {
    //set calculation var
    key_pressed = event.target;
    displayChar(key_pressed);
  });

});
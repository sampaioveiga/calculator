// startup events: zero vars
//var current_number = null;
//var previous_number = null;
var display = [];
//var tmp = null;
//var last_operation = null;
var key_pressed = null;
var last_key_pressed = null;
var decimal = 1;

function proccess_input(pressed_key) {
  // check if key isn't number
  if (!Number.isInteger(pressed_key) && last_key_pressed === null && decimal !== 1) {
    //if (current_number === null) {
      //current_number = pressed_key * decimal;
    //} else {
      //current_number = (current_number*10) + (pressed_key * decimal);
    //}
    decimal *= 0.1;
  } else {
    display.push(pressed_key);
    last_key_pressed = pressed_key;
    $('#calculator_display').html(display);
  }
}

$(document).ready(function(){

  // startup events: clear displays
  $('#calculator_history').html("&nbsp;");
  $('#calculator_display').html("0");

  // AC button
  //$('#button_ac').click(function(){
    //clean dirt and restart
    //$('#calculator_history').html();
    //previous_number = null;
    //current_number = null;
    //display = [];
    //$('#calculator_display').html(0);
  //});

  // number buttons trigger
  $('#number_0').click(function() {
    //set calculation var
    key_pressed = 0;
    proccess_input(key_pressed);
  });
  $('#number_1').click(function() {
    //set calculation var
    key_pressed = 1;
    proccess_input(key_pressed);
  });
  
  $('#number_2').click(function() {
    //set calculation var
    key_pressed = 2;
    proccess_input(key_pressed);
  });
  $('#number_3').click(function() {
    //set calculation var
    key_pressed = 3;
    proccess_input(key_pressed);
  });
  $('#number_4').click(function() {
    //set calculation var
    key_pressed = 4;
    proccess_input(key_pressed);
  });
  $('#number_5').click(function() {
    //set calculation var
    key_pressed = 5;
    proccess_input(key_pressed);
  });
  $('#number_6').click(function() {
    //set calculation var
    key_pressed = 6;
    proccess_input(key_pressed);
  });
  $('#number_7').click(function() {
    //set calculation var
    key_pressed = 7;
    proccess_input(key_pressed);
  });
  $('#number_8').click(function() {
    //set calculation var
    key_pressed = 8;
    proccess_input(key_pressed);
  });
  $('#number_9').click(function() {
    //set calculation var
    key_pressed = 9;
    proccess_input(key_pressed);
  });
  $('#dot').click(function() {
    //set calculation var
    key_pressed = '.';
    proccess_input(key_pressed);
  });
  
  // operations buttons trigger
  // todo more
  /*
  $('#operation_add').click(function() {
    last_operation = '+';
    // check if operation is after number and not after other operation
    if (display.length !== 0 ) {
      if (display[display.length-1] !== '+' && display[display.length-1] !== '-' && display[display.length-1] !== '*' && display[display.length-1] !== '/' ) {
        previous_number = previous_number + current_number;
        current_number = null;
        display.push('+');
        $('#calculator_display').html(display);
      }
    }
  });
  $('#operation_subtract').click(function() {
    tmp = '-';
    // check if operation is after number and not after other operation
    if (display.length !== 0 ) {
      if (display[display.length-1] !== '+' && display[display.length-1] !== '-' && display[display.length-1] !== '*' && display[display.length-1] !== '/' ) {
        previous_number = previous_number - current_number;
        current_number = null;
        display.push('-');
        $('#calculator_display').html(display);
      }
    }
  });
  $('#operation_multiply').click(function() {
    tmp = 'x';
    // check if operation is after number and not after other operation
    if (display.length !== 0 ) {
      if (display[display.length-1] !== '+' && display[display.length-1] !== '-' && display[display.length-1] !== '*' && display[display.length-1] !== '/' ) {
        previous_number = previous_number * current_number;
        current_number = null;
        display.push('x');
        $('#calculator_display').html(display);
      }
    }
  });
  $('#operation_divide').click(function() {
    tmp = '/';
    // check if operation is after number and not after other operation
    if (display.length !== 0 ) {
      if (display[display.length-1] !== '+' && display[display.length-1] !== '-' && display[display.length-1] !== '*' && display[display.length-1] !== '/' ) {
        previous_number = previous_number / current_number;
        current_number = null;
        display.push('÷');
        $('#calculator_display').html(display);
      }
    }
  });

  // equal button
  $('#button_equal').click(function() {
    $('#calculator_history').append('<br />' + display + ' = ' + previous_number);
    current_number = null;
    previous_number = null;
    display = [];
  });
*/

});


// startup events: zero vars
var key_pressed = null;
var display = [];
var current_number = null;

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
    $('.number_key').click(function() {
	// if current_number === 0, return
	// else calculate current_number
	
	key_pressed = $(this).text();
	alert(Number.isInteger(key_pressed) + ' ' + key_pressed);
	/*if (key_pressed === '0') {
	    alert("no write" + current_number);
	    return;
	} else {
	    current_number = key_pressed;
	    displayChar(key_pressed);
	    alert("write " + current_number);
	}*/
    });

    // operation keys
    $('.operation').click(function() {
	// if previous operation, do it
	// save
	alert('operation');
    });

});

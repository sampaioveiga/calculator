// startup events: zero vars
var key_pressed = null;
var display = [];
var current_number = null;
var current_operation = null;
var previous_operation = null;
var numbers = [];

//display char after validation
function displayChar(key_pressed) {
    display.push(key_pressed);
    $('#calculator_display').html(display);
}


$(document).ready(function(){

    // startup events: clear displays
    $('#calculator_history').html("&nbsp;");
    $('#calculator_display').html("0");

    $('#button_ac').click(function() {
	current_number = null;
	numbers = [];
	current_operation = null;
	previous_operation = null;
	display = [];
	$('#calculator_display').html('0');
    });

    //$('#button_equal').click(function() {
	
    //});
		
    //number keys click
    $('.number_key').click(function() {
	// if current_number === 0, return
	// else calculate current_number
	
	key_pressed = Number.parseInt( $(this).text()) ;
	if (key_pressed === 0 && current_number === null ) {
	    return;
	}
	if (current_number === null) {
	    current_number = key_pressed;
	} else {
	    current_number = (current_number*10) + key_pressed;
	}
	displayChar(key_pressed);
    });

    // operation keys
    $('.operation').click(function() {
	// if previous operation, do it
	// save
	if (current_number === null) {
	    return;
	}
	current_operation = $(this).text();
	displayChar(current_operation);
	numbers.push(current_number);
	current_number = 0;
	if (numbers.length === 2) {
	    switch (previous_operation) {
	    case '+':
		console.log('operation plus');
		numbers[0] = numbers[0] + numbers[1];
		break;
	    case '-':
		console.log('operation minus');
		numbers[0] = numbers[0] - numbers[1];
		break;
	    case 'x':
		console.log('operation times');
		numbers[0] = numbers[0] * numbers[1];
		break;
	    case '÷':
		console.log('operation divide');
		numbers[0] = numbers[0] / numbers[1];
		break;
	    }
	    numbers.pop();
	}
	previous_operation = current_operation;
	console.log('numbers[0]: ' + numbers);
	if (current_operation === '=') {
	    console.log('=');
	}
    });

});

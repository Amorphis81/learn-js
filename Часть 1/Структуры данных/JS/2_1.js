"use strict";

var number1=+prompt('Введите число:','');
var number2=+prompt('Введите число:','');

alert (sum(number1, number2));

function sum(number1, number2){
	if (isNumeric(number1)&&isNumeric(number2)){
		var result = number1 + number2;
		return +result.toFixed(10);
	} else {
		return ('Введены не числа');		
	}
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
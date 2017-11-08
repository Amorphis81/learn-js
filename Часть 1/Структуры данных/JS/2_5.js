"use strict";

var number=+prompt('Введите дробное число:','');

alert (getDecimal(number));

function getDecimal(number){
	if (number>0){		
		var result = number- Math.floor(number);
	} else {
		result = Math.ceil(number) - number;
	}
	
	
	return +result.toFixed(10);
}
"use strict";

var number=+prompt('Введите число:','');

alert (getRandom(number));

function getRandom(number){
	var result = Math.random() * number;
	return result;
}


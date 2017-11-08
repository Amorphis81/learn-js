"use strict";

var numberMax=+prompt('Введите максимальное число:','');
var numberMin=+prompt('Введите минимальное число:','');

alert (getRandom(numberMax, numberMin));

function getRandom(numberMax, numberMin){
	var result = Math.random() * (numberMax - numberMin) + numberMin;
	return result;
}


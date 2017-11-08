"use strict";

var number=+prompt('Введите число:','');

alert (fibBinet(number));

function fibBinet (number){
	var goldenSection = (1+Math.sqrt(5))/2;
	var result = (Math.pow(goldenSection, number))/Math.sqrt(5);
	return result;
}
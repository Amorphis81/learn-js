"use strict";

var n=+prompt('Введите число:','');

function sumTo(n){
	var result = n*(n+1)/2;
	return result;
}

alert(sumTo(n));
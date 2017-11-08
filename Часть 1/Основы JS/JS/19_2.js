"use strict";

var n=+prompt('Введите число:','');

function factorial(n){
	if (n>1){
		return n*factorial(n-1);
	}
	else {
		return n;
	}
}

alert( factorial(n));
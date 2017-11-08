"use strict";

var n=+prompt('Введите число:','');

function sumTo(n){
	if (n>1){
		return n + sumTo(n-1);
	} else {
		return n;
	}
}

alert(sumTo(n));
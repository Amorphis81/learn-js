"use strict";

var x = prompt('Введите число:','');
var n = prompt('В какую степень возвести?','');

function pow(x,n){
	var a = x;
	for (var i=1; i<n; i++){
		a = x * a;
	}
	return a;
}

alert (pow(x,n));


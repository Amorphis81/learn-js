"use strict";

var n=+prompt('Введите число:','');

function sumTo(n){
	var result = n; 
	for(var i=(n-1); i>0; i--){
		result+=i;		
		}
	return result;
}


alert(sumTo(n));


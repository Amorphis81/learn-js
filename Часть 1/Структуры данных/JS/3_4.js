"use strict";

var str = prompt('Введите цену:','$120');

alert (extractCurrencyValue(str));

function extractCurrencyValue(str){
	return +str.substring(1);
}
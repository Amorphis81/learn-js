"use strict";

var str = prompt('Введите слово с маленькой буквы:','');

alert (ucFirst(str));

function ucFirst(str){
	var strResult = str[0].toUpperCase() + str.substr(1);
	return strResult;
}
"use strict";

var str = prompt ('Введите строку:', '');
var maxlength = +prompt ('Максимальная длина строки:', '');

alert(truncate(str, maxlength));

function truncate(str, maxlength){
	if (str.length > maxlength){
		var strChange = str.substring(0, (maxlength - 3)) + '...';
		return strChange;
	}
	else return str;
}

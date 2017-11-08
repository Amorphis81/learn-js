"use strict";

var str = prompt('Введите слово:','');

alert (checkSpam(str));

function checkSpam(str){
	var strMod = str.toLowerCase();
	if (~strMod.indexOf('xxx') || ~strMod.indexOf('viagra')){
		return true;
	}
	else return false;
};
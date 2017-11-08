"use strict";

// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
testMultiplyNumeric(menu);

function multiplyNumeric(menu){
	var newCount;
	for (var key in menu){
		if (isNumeric(menu[key])){
			menu[key] = menu[key]*2;			
		}		
	}
}

function testMultiplyNumeric(menu){
	for (var key in menu){
		alert ('Ключ: ' + key + ' значение: ' + menu[key]);
	}
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
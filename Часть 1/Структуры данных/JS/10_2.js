"use strict";

function sum(){
	var sum = 0;
	for (var i=0; i < arguments.length; i++){
		sum += arguments[i];
	}
	return alert(sum);
}

sum(); //0
sum(1); //1
sum(1, 2); //3

"use strict";


alert (calc());

function calc(){
	var num = 0;
	var arr = [];
	var sum = 0;
	while (num != null){
		num = prompt('Введите число:', '0');
		if (num != null){
			arr.push(+num);
		}	
	}
	for (var i=0; i < arr.length; i++){
			sum += arr[i];
		}
	
	return 'Сумма: ' + sum;

}

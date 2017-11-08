"use strict";

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'
//alert (date);

function getWeekDay(date){
	var options = {  
		weekday: 'short'  
	};
	return date.toLocaleString("ru", options);
}
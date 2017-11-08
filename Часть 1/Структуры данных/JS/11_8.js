"use strict";

var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'

function formatDate (d){
	var options = {
	  day: '2-digit',
	  month: '2-digit',
	  year: '2-digit'	  
	};
	return d.toLocaleString("ru", options);
}
"use strict";

alert(getSecondsToTomorrow());

function getSecondsToTomorrow(){
	var now = new Date();
	var tomorrow = new Date (now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0, 0);
	var result = Math.round((tomorrow - now)/1000);
	return result;
}
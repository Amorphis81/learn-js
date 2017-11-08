"use strict";

alert(getLastDayOfMonth(2012, 1));

function getLastDayOfMonth(year, month){
	var nextFirstDayMonth = new Date(year, month + 1, 0);
	return nextFirstDayMonth;
}
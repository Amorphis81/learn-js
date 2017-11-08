"use strict";

alert (getSecondsToday());

function getSecondsToday(){
	var now = new Date();
	var msNow = Date.parse(now);
	var beginToday = new Date (now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
	var msBeginToday = Date.parse (beginToday);
	var result = (msNow - msBeginToday)/1000;
	return result;
	//return now.getFullYear() + now.getMonth() + ;
}
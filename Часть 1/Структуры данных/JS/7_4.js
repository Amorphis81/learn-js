"use strict";

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

alert (getRandom(arr));

function getRandom(arr){
	var rand = Math.floor(Math.random() * arr.length);
	return arr[rand];
}
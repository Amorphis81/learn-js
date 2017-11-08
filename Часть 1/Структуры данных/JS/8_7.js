"use strict";

var arr = [1, 2, 3, 4, 5];

arr.sort(comparePandomNumbers);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]

function comparePandomNumbers (a, b){
	return Math.random()*(2 - (-1)) + (-1); 
}
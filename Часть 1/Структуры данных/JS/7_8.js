"use strict";

var arr = [5, 4, 3, 8, 0];
var filtered = filterRange(arr, 3, 5);

//showArray(arr);
showArray(filtered);

function filterRange(arr, a, b){
	var result = [];
	for (var i=0; i<arr.length; i++){
		if (arr[i]>=a && arr[i]<=b){
			//alert(arr[i])
			result.push(arr[i]);
		}
	}
	return result;
}

function showArray(filtered){
	for (var i=0; i<filtered.length; i++){
		alert (filtered[i]);
	}
}
1
"use strict";

var arr = ["test", 2, 1.5, false];

find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2

find(arr, 0); // -1

function find (arr, value){
	var result = -1;
	for (var i=0; i<arr.length; i++){
		if (arr[i] === value){
			result = i;
		}		
	}
	alert (result);
}

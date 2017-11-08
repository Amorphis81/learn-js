"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

alert (countSalaries(salaries));

function countSalaries(obj){
	var sumSalaries = 0;
	for (var key in obj){
	  sumSalaries += obj[key];
	}
	return sumSalaries;
}
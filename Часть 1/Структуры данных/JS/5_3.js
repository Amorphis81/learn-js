"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

maxSalaries(salaries);

function maxSalaries(obj){
	var maxNumber = 0;
	var number;
	var maxName;
	for (var key in obj){
	  number = obj[key];
	  if (number > maxNumber){
		  maxNumber = number;
		  maxName = key;
		  
	  }
	}
	if (maxName){
		return alert(maxName);
	} else alert ('нет сотрудников');		
}
"use strict";

var arr = [1,2,3,4,5];
var result = [];

var getSum = arr.reduce(function(sum, current) {
  alert(sum);
  return sum + current;

  //sum = sum + current; 
  //result.push(sum);
  //return result;
  
  //return sum + current
},0);

alert (getSum);
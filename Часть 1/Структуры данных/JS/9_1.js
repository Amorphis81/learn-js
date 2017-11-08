"use strict";

var arr = ["Есть", "жизнь", "на", "Марсе"];

/*var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}*/

var arrLength = arr.map(function(name) {
  return name.length;
});

alert( arrLength ); // 4,5,2,5
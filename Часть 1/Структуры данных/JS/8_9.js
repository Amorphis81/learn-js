"use strict";

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

//alert (printList(list));
var arrPrintList = [];
alert(printList(list));
//rintList(list);

function printList(list){	
	for (var key in list){
		if (key != 'next'){
			arrPrintList.push(list[key]);
			//alert( "Ключ: " + key + " значение: " + list[key] );
			//alert(list[key]);
		}
		else printList(list.next);
	}
	return arrPrintList.sort(reverseCompare);
}

function reverseCompare(a, b){
	return b - a;
}
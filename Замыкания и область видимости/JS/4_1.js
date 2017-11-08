"use strict";

//alert(sum(1)(2));


/*function sum (a){
	return function(b) {
		return a + b;		
	}
}*/

function sum (){
	var result = 0;
    return function() {
        return result++;
    };
}

var counter = sum();
alert (counter());
alert (counter());
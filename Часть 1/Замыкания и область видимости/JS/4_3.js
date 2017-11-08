"use strict";

function makeBuffer() { 
	var arrWords = [];
	var phrase = '';
	function superBuffer() {
		if (arguments.length == 0){			
			for (var i=0; i < arrWords.length; i++){
				phrase += arrWords[i];
			}
			return phrase;
		} else return arrWords.push(arguments[0])
		};
		superBuffer.clear = function(){
			arrWords = [];
			phrase = '';
		}
	return superBuffer;
}


var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""
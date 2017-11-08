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
	return superBuffer;
}


var buffer = makeBuffer();

// добавить значения к буферу
//buffer('Замыкания');
//buffer(' Использовать');
//buffer(' Нужно!');

buffer(0);
buffer(1);
buffer(0);

// получить текущее значение
//alert (makeBuffer(2));
alert( buffer() ); // Замыкания Использовать Нужно!
"use strict";

var obj = {
  className: 'open menu'
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"

//alert(addClass(obj, 'new'));

function addClass(obj, cls){
	for (var key in obj){
		var wordArray = obj[key].split(' ');
	}
	if (wordArray.indexOf(cls) == -1){
		wordArray.push(cls);
		wordArray = wordArray.join(' ');
		obj.className = wordArray;
	}
	//return wordArray;
}
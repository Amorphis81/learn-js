"use strict";

//camelize("background-color"); //'backgroundColor'
//camelize("list-style-image"); //'listStyleImage'
camelize("-webkit-transition"); //'WebkitTransition'

function camelize(str){
	var strSplit = str.split('-');
	var strResult = [strSplit[0]];
	for (var i=1; i<strSplit.length; i++){
		//strSplit[i].charAt(0));
		strResult.push(strSplit[i][0].toUpperCase() + strSplit[i].substring(1));
	}
	alert(strResult.join(''));
}
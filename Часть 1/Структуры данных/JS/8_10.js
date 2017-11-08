"use strict";

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
//aclean(arr);
//alert(reverseWord('киборг'));

//alert(isAnagram('корсет','костер'));

function isAnagram(wordSourse, wordAdding){	
	return wordSourse.split('').sort().join('') == wordAdding.split('').sort().join('');
}

function aclean(arr){
	var arrAnagramWords = [];
	var FirstWord;
	for (var i = 0; i<arr.length; i++){
		for (var s = 0; s<arrAnagramWords.length; s++){
			if (arr[i] == arrAnagramWords[s]){
					alert (arr[i] + ' есть  в ' + arrAnagramWords[s]);
					break;
			} 
		}		
		/*for (var j = i + 1; j<arr.length; j++){
			alert ('Сравниваю: '+ arr[i] + ' и ' + arr[j]);
			if (isAnagram(arr[i].toLowerCase(),arr[j].toLowerCase())){				
				alert (arr[i] + ' анаграмма ' + arr[j]);
				arrAnagramWords.push(arr[i]);
			}
				
				//alert (arr[i] + ' анаграмма ' + arr[j]);
				//arrAnagramWords.push(arr[i]);
				//alert('Добавил: ' + arr[j]);
			}*/
		
		return arrAnagramWords;
	}
}
	//return arrAnagramWords;


/*function aclean(arr){
	var arrReverseWord = arr.slice(0);
	for (var i = 0; i<arr.length; i++){
		alert('сравниваю: ' + arr[i]);
		for (var j = 0; j<arrReverseWord.length; j++){
			if(arr[i] === reverseWord(arrReverseWord[j])){
				arrReverseWord.splice(j,1);
				alert (arrReverseWord);
				}
		}		
	}
	return arrReverseWord;
}

function reverseWord(word){
	var wordArr = [];
	var reverseArr = [];
	wordArr = word.split('');
	for (var i=wordArr.length-1; i>-1; i--){
		reverseArr.push(wordArr[i]);
	}
	return reverseArr.join('');
}

function reverseCompare(a, b){
	return b - a;
}*/
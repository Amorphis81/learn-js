"use strict";

var obj = {
  className: 'open menu'
};

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

removeClass(obj, str){
	var classes = obj.className.split(' ');
	
	for (var i = 0; i < classes.length; i++) {
    if (classes[i] == str) {
      classes.splice(i, 1); // удалить класс
      i--; // (*)
    }
	obj.className = classes.join(' ');
}
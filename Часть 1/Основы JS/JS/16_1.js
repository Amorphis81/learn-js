"use strict";

var browser = prompt('Какой у васбраузер?','');

if(browser == 'IE'){
	alert('О, да у вас IE!');
}
else if(browser=='Chrome' 
	|| browser=='Firefox' 
	|| browser == 'Safari' 
	|| browser == 'Opera'){
	alert('Да, эти браузеры мы поддерживаем');
}
else alert('Мы надеемся, что и в вашембраузере все ок');

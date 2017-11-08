"use strict";

var login = prompt ('Кто пришел?',''),
	pass;

if (login == null){
	alert('Вход отменён');
}else if(login == 'Админ'){
	pass = prompt ('Пароль?','');
	if (pass == 'Чёрный Властелин'){
		alert('Добро пожаловать!');
	}else alert('Пароль неверен');
}else alert('Я вас не знаю!');


result=(a + b < 4)?'Мало':'Много';

var message = (login == 'Вася')?'Привет':
				(login == 'Директор')?'Здравствуйте':
				(login == '')?'Нет логина':
				'';
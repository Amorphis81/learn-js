"use strict";

var n=+prompt('Введите число:','');

function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert(fib(n));
//fib(n);

/*
1
1
1+1=2
1+2=3
2+3=5
5+3=8
*/
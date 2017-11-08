(function () {
"use strict";
    var calculator = {
        read: function () {
            this.a = +prompt('Введите первое число:', '0');
            this.b = +prompt('Введите второе число:', '0');
            //alert(this.a+this.b);
        },
        sum: function () {
            return this.a + this.b;
        },
        mul: function () {
            return this.a * this.b;
        }
    };


    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
}());

(function () {
    "use strict";

    function Calculator() {
        this.read = function(){
            this.a = +prompt ('Введите первое число:', '');
            this.b = +prompt ('Введите второе число:', '');
            //alert (a + b);
        },
        this.sum = function () {
            return this.a + this.b;
        },
        this.mul = function () {
            return this.a * this.b;
        }
    }

    var calculator = new Calculator();
    calculator.read();

    alert( "Сумма=" + calculator.sum() );
    alert( "Произведение=" + calculator.mul() );
}());

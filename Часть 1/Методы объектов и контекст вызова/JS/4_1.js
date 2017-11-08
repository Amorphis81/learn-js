(function () {
    "use strict";

    function User(fullName) {
        this.fullName = fullName;
    }

    var vasya = new User("Василий Попкин");

    // чтение firstName/lastName
    alert( vasya.firstName ); // Василий
    alert( vasya.lastName ); // Попкин

// запись в lastName
    vasya.lastName = 'Сидоров';

    alert( vasya.fullName ); // Василий Сидоров
}());

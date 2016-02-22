/*
Нужно реализовать последовательность Фибоначчи

Конструктор принимает основание последовательности
Функция next возвращает следущее число
*/

function Fibonacci(a, b) {

}

Fibonacci.prototype.next = function() {

};

var instance = new Fibonacci(1, 1);
for (var i = 0; i < 100; i++) { console.log(instance.next()); }

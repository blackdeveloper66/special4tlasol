/*
Нужно реализовать последовательность Фибоначчи

Конструктор принимает основание последовательности
Функция next возвращает следущее число
*/

function Fibonacci(a, b) {
  this.osn1 = a;
  this.osn2 = b;
}

Fibonacci.prototype.next = function() {
  var newborn = this.osn1 + this.osn2
  this.osn1 = this.osn2
  this.osn2 = newborn
  return newborn
};

var instance = new Fibonacci(1, 1);
for (var i = 0; i < 100; i++) { console.log(instance.next()); }

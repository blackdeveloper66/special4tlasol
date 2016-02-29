/*
Необходимо реализовать решето Эратосфена
https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%88%D0%B5%D1%82%D0%BE_%D0%AD%D1%80%D0%B0%D1%82%D0%BE%D1%81%D1%84%D0%B5%D0%BD%D0%B0

Конструктор принимает максимальное число
fill    - сам алгоритм
console - вывод результата на экран
*/

function Eratosthenes(max) {
  this.rice = [];
  for (i = 2; i <= max; i++) { this.rice[i] = true; }
}

Eratosthenes.prototype.fill = function() {
  for (i = 2; i <= this.rice.length; i++) {
    if (!this.rice[i]) { continue; }
    for (j = 2 * i; j <= this.rice.length; j += i) { this.rice[j] = false; }
  }
};

Eratosthenes.prototype.console = function() {
  this.rice.forEach(function(item, index){
    if (!item) { return; }
    console.log(index);
  })
};

var instance = new Eratosthenes(100);

instance.fill();
instance.console();

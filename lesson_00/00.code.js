//0 Ветвление

//if (условие)
if (2*2 == 4) {

} else { // if (2*2 != 4)

}

//else
if (a) { //a = 0;null;undefined;false;

} else {
    console.log('YES!!!');
}

//for, while
for (var i = 0; i < 10; i++) { } //i = 0;1;2;3;4;5;6;7;8;9
for (var i = 0; i < 10; i += 2) { } //i = 0;2;4;6;8
var i = 0;
for (;i<10;) { i++; }
//while(условие) {}

//1 Оператор
var a;          //
var b = a = 10; // 10
a = 10;
a = true;
//+ - * /

//2 Логические операторы
// & and &&
// | or  ||
// ! - отрицание
// !true  - false
// !false - true

// a     ± b     ± & ± |
// ±±±±±±±±±±±±±±±±±±±±±
// true  ± true  ± t ± t
// true  ± false ± f ± t
// false ± true  ± f ± t
// false ± false ± f ± f

// && ||
if (false & console.log('q')) { console.log('w'); }  //q \n w
if (false && console.log('q')) { console.log('w'); } //w

// == === - (boolean)true/false
// != !== - (boolean)true/false
// === !== - сравнение с типом переменной

// (условие) ? если true : если false
var q = (2 * 2 == 4) ? 5 : 7; // if (2 * 2 == 4) { q = 5; } else { q = 7; }

// ||
var a = 222 || 'asdad';

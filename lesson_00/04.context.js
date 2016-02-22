function Human(name) {
  this.name = name;
}

var adam = {};

//apply
Human.apply(adam, [ 'adam' ]);

//call
Human.call(adam, 'adam');

//bind
var NewHuman = Human.bind(adam); //NewHuman != Human
NewHuman('adam');

//constructor
var adam = new Human('adam');

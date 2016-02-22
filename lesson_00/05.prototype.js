function Human() {
  this.steps = 0;
}

Human.prototype.doStep = function() {
  this.steps++;
};

var adam = new Human();
adam.doStep(); // this -> adam

function createNDSFunction(k) {
  return function nds(sum) { return sum * k; };
}

var nds_0  = createNDSFunction(0);
var nds_10 = createNDSFunction(0.1);
var nds_18 = createNDSFunction(0.18);
var nds_20 = createNDSFunction(0.2);

console.log(nds_0(100));
console.log(nds_20(100));

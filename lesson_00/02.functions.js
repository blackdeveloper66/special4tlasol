func();

func['sadjhbas wjherb23jh 22'] = 12;
func.DEFAULT_VALUE = 12;

function func() {
    return func.DEFAULT_VALUE;
}

/*
func();

func['sadjhbas wjherb23jh 22'] = 12;
func.DEFAULT_VALUE = 12;

var func = function() {
    return func.DEFAULT_VALUE;
}
*/
// ===
/*
var func;
function __JHGF_JWDGDWVG_21736() { return func.DEFAULT_VALUE; }

func();

func['sadjhbas wjherb23jh 22'] = 12;
func.DEFAULT_VALUE = 12;

func = __JHGF_JWDGDWVG_21736;
*/

//Right
function func() {
    return {
      a : 1
    };
}

//Wrong
function func() {
    return
    {
      a : 1
    };
}
//===
/*
function func() {
    return;
    {
      a : 1
    };
}
*/

function nds(sum, k) {
    if (k == undefined) {
        return sum * 0.18;
    } else {
        return sum * k;
    }
}

function nds(sum, k) {
    return k && k != 0 ? sum * 0.18 : sum * k;
}

//Wrong nds(100, 0)=18
function nds(sum, k) {
    return sum * (k || 0.18);
}

//arguments
//arguments.length
//arguments is not array
function nds() {
    return arguments[1] == undefined ? arguments[0] * 0.18 : arguments[0] * arguments[1];
}

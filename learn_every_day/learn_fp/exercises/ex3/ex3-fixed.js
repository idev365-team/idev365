function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

function compose(...fns) {
	return function composed(result) {
		for (var i = fns.length-1; i>=0; i--) {
			result = fns[i](result);
		}
		return result;
	};
}

function pipe(...fns) {
	return function piped(result) {
		for (var i = 0; i < fns.length; i++) {
			result = fns[i](result);
		}
		return result;
	};
}

var f = compose(decrement,double,increment,half);
var p = pipe(half,increment,double,decrement);

f(3) === 4;
// true

f(3) === p(3);
// true

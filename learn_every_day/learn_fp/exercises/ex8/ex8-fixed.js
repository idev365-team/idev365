var nums = {
	first: [3,5,2,4,9,1,12,3],
	second: [5,7,7,9,10,4,2],
	third: [1,1,3,2]
};

// pipe(
// 	curry(filterObj)(compose(isOdd,listSum)),
// 	curry(mapObj)(listProduct),
// 	curry(reduceObj)(sum)(0)
// )(nums);

[
	curry(filterObj)(compose(isOdd,listSum)),
	curry(mapObj)(listProduct),
	curry(reduceObj)(sum)(0)
]
.reduce(binary(pipe))
(nums);
// 38886


// ************************************

function mapObj(mapperFn,o) {
	var newObj = {};
	var keys = Object.keys(o);
	for (let key of keys) {
		newObj[key] = mapperFn( o[key] );
	}
	return newObj;
}

function filterObj(predicateFn,o) {
	var newObj = {};
	var keys = Object.keys(o);
	for (let key of keys) {
		if (predicateFn(o[key])) newObj[o[key]] = o[key];
	}
	return newObj;
}

function reduceObj(reducerFn,initialValue,o) {
	var result = initialValue;
	var keys = Object.keys(o);
	for (let key of keys) {
		result = reducerFn(result,o[key]);
	}
	return result;
}


// ************************************

function curry(fn,arity = fn.length) {
	return (function nextCurried(prevArgs){
		return function curried(nextArg){
			var args = prevArgs.concat([nextArg]);
			if (args.length >= arity) {
				return fn(...args);
			}
			else {
				return nextCurried(args);
			}
		};
	})([]);
}
function compose(...fns) {
	return function composed(arg) {
		return fns.reduceRight((result,fn) => fn(result),arg);
	};
}
function pipe(...fns) {
	return compose(...fns.reverse());
}
function binary(fn) {
	return function two(arg1,arg2){
		return fn(arg1,arg2);
	};
}


// ************************************

function isOdd(v) { return v % 2 == 1; }
function sum(x,y) { return x + y; }
function mult(x,y) { return x * y; }
function listSum(list) { return list.reduce(sum,0); }
function listProduct(list) { return list.reduce(mult,1); }

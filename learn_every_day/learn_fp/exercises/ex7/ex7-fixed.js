// function foo() {
//     return 42;
// }

// function bar() {
//     return 100;
// }

function valFn(v) {
	return function(){
		return v;
	};
}

function add(x,y) {
	return x + y;
}

function add2(fn1,fn2) {
	return add( fn1(), fn2() );
}

function addn(fns) {
	// reduce:
	return fns.reduce(function reducer(composedFn,fn){
		return function(){
			return add2(composedFn,fn);
		};
	})();

	// recursive:
	// if (fns.length > 2) {
	// 	return addn(
	// 		[
	// 			function(){
	// 				return add2(fns[0],fns[1]);
	// 			}
	// 		]
	// 		.concat(fns.slice(2))
	// 	);
	// }
	// return add2(fns[0],fns[1]);

	// iterative:
	// fns = fns.slice(0);
	// while (fns.length > 2) {
	// 	let fn0 = fns[0],
	// 		fn1 = fns[1];
	// 	fns = [
	// 		function(){
	// 			return add2(fn0,fn1);
	// 		}
	// 	]
	// 	.concat(fns.slice(2));
	// }
	// return add2(fns[0],fns[1]);
}


var vals = [10,100,30,100,42,10,15];

vals = vals
.reduce(function reducer(a,v){
	if (!~a.indexOf(v)) return a.concat(v);
	return a;
},[])
//.filter(function(v,i,arr){
//    return i == arr.indexOf(v);
//})
.filter(function filterer(v){
	return v % 2 == 0;
})
.map(valFn);



console.log( addn(vals) );		// 182


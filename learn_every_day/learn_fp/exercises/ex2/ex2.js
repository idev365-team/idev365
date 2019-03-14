// util.js
var when = function(fn){
	return function (predicate) {
		return function(...args) {

			if (predicate(...args)) {
				return fn(...args);
			}


		};
	}
}


function not ( fn ){
	return function navgate(...arg){
		return !fn(...arg)
	}
}

function lessThen(num){
	return function(str){
		return str.length <= num;
	}
}
//----------------------------------------
//biz.js

var output = console.log.bind(console)
var printIf = when(output);
var isShortEnough= lessThen(5);
var isLongEnough = not(isShortEnough);




var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World

function foo(x,y) {
	return function() {
		return x + y;
	};
}

var x = foo(3,4);

x();	// 7
x();	// 7

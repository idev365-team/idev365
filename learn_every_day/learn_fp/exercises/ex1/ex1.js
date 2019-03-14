

function Foo(x,y){
	var z;
	foo(x)
	return [y,z];

	function foo(x) {
		y++;
		z = x * y;
	}
}

var y = 5, z;

var [a,b] = Foo(20,5)
console.log( a,b );
console.log( Foo(a,b) );
console.log( Foo(20,5) );


console.log( Foo(25,6) );


function foo(x) {
	y++;
	z = x * y;
}

function bar(curX,curY) {
	var [origY,origZ] = [y,z];
	y = curY;
	foo(curX);
	var [newY,newZ] = [y,z];
	[y,z] = [origY,origZ];
	return [newY,newZ];
}

var y, z;

bar(20,5);		// [6,120]

bar(25,6);		// [7,175]

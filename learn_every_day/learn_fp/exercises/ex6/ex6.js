function mult_old(x,y,z) {
	return x * y * z;
}

function mult_v2(x,...rest){
	if(rest.length==0) return x;
	else return x*mult(...rest);
}

//PTC 
function mult(result,num,...rest){
	if(num===void 0)return result;
	return mult(result*num,...rest);
}


console.log(mult(3,4,5));	// 60

console.log(mult(3,4,5,6));	// Oops!

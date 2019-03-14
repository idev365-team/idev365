function mult(product,num,...nums) {
	// base case
	if (nums.length == 0) {
		return product * num;
	}
	// recursive (reductive) call
	return product * mult(num,...nums);
}

mult(3,4,5);	// 60

mult(3,4,5,6);	// 360

function mult(x, y) {
    return x * y;
}
function add(x, y) {
    return x + y;
}

function combine(arr, fn, initial) {
    var total = initial;
    for (let i = 0; i < arr.length; i++) {
        total = fn(total,arr[i]);
    }
    return total;
}


console.log( 
    combine([1, 2, 3, 4, 5], mult, 1) 
);

console.log( 
    combine([1, 2, 3, 4, 5], add, 1) 
);

console.log(
    combine(["你好","山地人"], add, "") 
);


console.log(
    combine(["你好","山地人"], add, "") 
);


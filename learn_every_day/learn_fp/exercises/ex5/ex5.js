function foo(num1, num2) {
    return function() {
        //这里是lazy calc
        return num1 + num2;
    };
}

function foo2(num1, num2) {
    //事先计算可能会浪费
    const sum = num1 + num2;
    return function() {
        return sum;
    };
}



function memorize(num1, num2) {
    let sum;
    return function() {
        if(sum === void 0){
            console.log("calc only once");
            sum = num1 + num2;
        }
        return sum;
    };
}

var x = foo3(3, 4);

console.log(x()); // 7
console.log(x()); // 7

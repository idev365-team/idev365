function increment(x) {
    return x + 1;
}
function decrement(x) {
    return x - 1;
}
function double(x) {
    return x * 2;
}
function half(x) {
    return x / 2;
}

//--------------------
function pipeByOrder(orderFlag=true){
    return function pipeOrderFn(...fns) {
        fns = orderFlag?fns:fns.reverse()
        return function(result) {
            for (let i = 0; i < fns.length; i++) {
                result = fns[i](result);
            }
            return result;
        };
    }    
}
//--------------------

// function compose(...fns) {
//     return pipe(...fns.reverse())
// }

// function pipe(...fns) {
//     return function(result) {
//         for (let i = 0; i < fns.length; i++) {
//             result = fns[i](result);
//         }
//         return result;
//     };
// }

var pipe = pipeByOrder()
var compose = pipeByOrder(false)

var f = compose(
    decrement,
    double,
    increment,
    half
);
var p = pipe(
    half,
    increment,
    double,
    decrement
);

console.log(f(3) === 4);
// true

console.log(f(3) === p(3));
// true

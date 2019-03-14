/**
 * 实现 curry 柯里化
 */
// function curry(fn,...args){
//     //1.参数长度满足后，执行最后的fn
//     if( args.length >= fn.length ){
//         return fn(...args);
//     }
//     //2.每一次调用参数累计一次
//     return function(...args2){
//         return curry(fn,...args,...args2);
//     }
// }

//思路-复习
function curry(fn,...args){
    //触发条件.args产生长度是否达到调用fn？
    if(fn.length===args.length){
        return fn(...args);
    }
    //囤积每一次的调用参数
    return function(...newArgs){
        return curry(fn,...args,...newArgs);
    }
}


function test(){
    var abc = function(a, b, c) {
        return [a, b, c];
    };
    
    var curried = curry(abc);
    
    console.log( curried(1)(2)(3) );
        
}

test();
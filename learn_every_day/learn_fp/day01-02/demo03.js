function curry2(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}


function curry(fn){
    const totalFnArgs = fn.length;
    let curryFn;
    let argList = [];
    for(let i=totalFnArgs-1;i>=0;i--){
        if(i===totalFnArgs-1){
            curryFn = function(...args){
                console.log("argList",argList);
                return fn(...args)
            }
        }else{
            let orgCurryFn = curryFn;
            let newCurryFn = function(...args){
                argList.push(args);
                return function(...args2){
                    return orgCurryFn(...args2);
                }
            }
            curryFn = newCurryFn;
        }
    }
    return curryFn;
}




var add3 = curry(function add3(x,y,z){
    return x + y + z;
});

var fn1 = add3(1);
var fn2 = fn1(2);
var fn3 = fn2(3);
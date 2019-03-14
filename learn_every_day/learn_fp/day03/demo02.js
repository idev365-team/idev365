/**
 * compose函数实现
 */
function flatFns(fns){
    if(fns.length==1 && fns[0] instanceof Array){
        return fns[0];
    }
    return fns;
}

function compose(...fns){
    return function(...args){
        fns = flatFns(fns);
        let result = fns[fns.length-1](...args);
        for(let i=fns.length-2;i>=0;i--){
            let fn = fns[i];
            result = fn(result);
        }
        return result;
    }
}

var flowRight = compose;

function flow(...fns){
    return function(...args){
        fns = flatFns(fns);
        let result = fns[0](...args);
        for(let i=1;i<fns.length;i++){
            let fn = fns[i];
            result = fn(result);
        }
        return result;
    }
}


function test(){
    var greeting = (firstName, lastName) => 'hello, ' + firstName + ' ' + lastName
    var toUpper = str => str.toUpperCase()
    var fn = compose(toUpper, greeting)
    console.log(fn('jack', 'smith'))
}


function test2(){
    var greeting = (firstName, lastName) => 'hello, ' + firstName + ' ' + lastName
    var toUpper = str => str.toUpperCase()
    var fn = flow( greeting,toUpper)
    console.log(fn('jack', 'smith'))
}

function test3(){
    function square(n) {
        return n * n;
    }

    function add(n){
        return n + 1;
    }
       
    var addSquare = flow([add, square]);
    var result = addSquare(1, 2);
    console.log(result)

    

    var addSquare = flowRight([square,add]);
    var result = addSquare(1, 2);
    console.log(result)
}



test3();


function a(){
    return 5;
}

function b(){
    return 10;
}


function genValue(value){
    return function(){
        return value;
    }
}

function add(num1,num2){
    return num1 + num2;
}

function add2(fn1,fn2){
    return add( fn1(),fn2() )
}

console.log(
    add2( a, b )
);

console.log(
    add2( genValue(1), genValue(2) )
);

function addn_2(fns){
    fns = fns.slice()

    while(fns.length>2){
        let [fn0,fn1,...rest] = fns;
        fns = [
            function(){
                return add2(fn0,fn1);
            },
            ...rest
        ]
    }

    return add2( fns[0],fns[1] );
}


function addn(fns){
    return fns.reduce(function(composedFn,fn){
        return function(){
            return add2(composedFn,fn);
        }
    })();
}

console.log(
    addn( [genValue(1), genValue(2)] )
);



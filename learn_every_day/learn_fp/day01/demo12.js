function add1(v){ 
    console.log("add1->",v)
    return v+2; 
}
function mul2(v){ 
    console.log("mul2->",v)
    return v*2; 
}
function div3(v){ 
    console.log("div3->",v)
    return v/4; 
}

var list = [ 2,3,4]

console.log(
    list
    .map(add1)
    .map(mul2)
    .map(div3)    
)

function composeRight(fn2,fn1){
    return function(...args){
        return fn1(fn2(...args));
    }
}



console.log(
    list
    .map(
        [add1,mul2,div3].reduce(composeRight)
    )
)



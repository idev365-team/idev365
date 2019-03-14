
function pipe(fns,inital){
    let result = inital;
    for(let i=0;i<fns.length;i++){
        let fn = fns[i]
        result = fn(result);
    }
}

function a(x){
    console.log("in a->",x);
    return x+1;
}

function b(x){
    console.log("in b->",x);
    return x*10;
}

pipe([a,b,a,b],1)
// code here! :)

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

function addn(fn1,fn2,...fns){
    if(fn2==void 0) return fn1
    return addn(
        add2(fn1,fn2),
        ...fns
    )
}

function addn_loop(...fns){
    let total = fns[0]()
    for(let i=1;i<fns.length;i++){
        total = add2(function(){
            return total;
        },fns[i])
    }
    return total;
}



console.log(
    addn( genValue(1), genValue(2) )
);


console.log(
    addn_loop( genValue(1), genValue(2) )
)

function unique(arr){
    let result = []
    arr.map(item=>{
        if(result.indexOf(item)==-1){
            result.push(item)
        }
    })
    return result
}

const data = [1,2,3,3,4,5,8,10,4,5,6,7,8];
const uniqueData = unique(data);
console.log( uniqueData );


const evenData = uniqueData.filter(item=>item % 2 == 0)
console.log(evenData);

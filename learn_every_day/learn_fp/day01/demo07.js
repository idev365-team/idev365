function isOdd(v){ return v % 2 === 1; }
function not(fn){
    return function(...args){
        return !fn(...args);
    }
}

function exclude(arr,fn){
    var list = [];
    for(let i=0;i<arr.length;i++){
        let curr = arr[i];
        if(fn(curr)){
            list.push(curr);
        }
    }
    return list;
}

console.log(exclude([1,2,3,4,5,6],not(isOdd)));

console.log([1,2,3,4,5].filter(function(val){ 
    return val % 2== 1; 
}))

function reduce(arr,fn,start){
    let total = start;
    for(let i=0;i<arr.length;i++){
        total = fn(total,arr[i]);
    }
    return total
}

console.log(
    reduce([1,2,3,4,5],function(total,item){
        return total + item;
    },0)
);




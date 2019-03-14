function trampoline(fn){
    return function(...args){
        let result = fn(...args);
        while(typeof(result)==="function"){
            result = result();
        }
        return result;
    }
}

var sumTrampolined =trampoline(function f( sum,num,...nums){
    if(num != void 0){
        sum += num;
    }
    if(nums.length==0) return sum;
    return function(){
        return f(sum,...nums);
    }
});

console.log( sumTrampolined(1,2,3,4,5) );

function log(item){
    console.log(item)
}

[1,2,3,4].map(log)

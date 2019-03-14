function add(x,y){
    return x + y;
}

//部分类函数
function partial(fn,...firstArgs){
    return function applied(...lastArgs){
        return fn(...firstArgs,...lastArgs);
    }
}

var addTo10 = partial(add,10);
console.log( addTo10(20) );






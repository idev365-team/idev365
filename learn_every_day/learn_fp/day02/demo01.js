/**
 * Util 工具函数
 */
//逻辑取反 函子
function not(fn){
    return function(...args){
        return !fn(...args);
    }
}
//列表合并 函子
function listCombinator(list,v){
    list.push(v);
    return list;
}

//计数加1 函子
function add1(x){
    return x + 1;
}

//判断奇数 函子
function isOdd( x ){
    return x % 2 !== 0;
}

//map映射Reducer
function mapReducer( fn ){
    return function( list, cur ){
        return listCombinator( list, fn(cur) );
    }
}
//filter过滤Reducer
function filterReducer(fn){
    return function(list,cur){
        if(fn(cur)){
            return listCombinator( list, cur );
        }
        return list;
    }
}

function sum(total,cur){
    return total + cur;
}

var list = [1,2,3,4,5,6,7,8];
console.log("原始数据list:",list);

var listAdd1 = list.reduce(mapReducer(add1),[]);
console.log("mapReducer-->处理add1:",listAdd1);

var listOdd = list.reduce(filterReducer(isOdd),[]);
console.log("filterReducer-->处理isOdd:",listOdd);

var listEven = list.reduce(filterReducer(not(isOdd)),[]);
console.log("filterReducer-->处理Even偶数:",listEven);

var total = list.reduce(sum);
console.log("filterReducer-->处理Sum计算:",total);

var compositResult = list
    .reduce(mapReducer(add1),[])
    .reduce(filterReducer(isOdd),[])
    .reduce(sum);
    
console.log("compositResult:",compositResult);






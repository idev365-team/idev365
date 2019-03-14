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

function sum(total,cur){
    return total + cur;
}

function curry(fn,...args){
    //触发条件.args产生长度是否达到调用fn？
    if(fn.length===args.length){
        return fn(...args);
    }
    //囤积每一次的调用参数
    return function(...newArgs){
        return curry(fn,...args,...newArgs);
    }
}


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

var mapReducer = curry(function mapReducer(mappingFn,combineFn){
    return function reducer(list,v){
        return combineFn( list,mappingFn(v) );
    }
});

var filterReducer = curry(function filterReducer(predicateFn,combineFn){
    return function reducer(list,v){
        if(predicateFn(v)) return combineFn(list,v);
        return list;
    }
});

var list = [1,2,3,4,5,6];
console.log("原始数据list:",list);
var transducer = compose( mapReducer(add1), filterReducer(isOdd) );
console.log(
    list.reduce( transducer(listCombinator),[] )
    .reduce( sum )
)

// console.log(
//     list.reduce( mapReducer(add1)(listCombinator) ,[])
//     .reduce( filterReducer(isOdd)(listCombinator) ,[])
//     .reduce(sum)    
// )


function transduce(transducer,combineFn,initialValue,list){
    //1.用curry改变函数的单次->根据函数参数数量，多次调用
    //2.用compose组合函数
    var reducer = transducer(combineFn);
    //3.用reduce开启马达
    return list.reduce(reducer,initialValue);
}

var transducer = compose( mapReducer(add1), filterReducer(isOdd));
console.log(transduce(transducer,sum,0,[1,2,3]));


/**
 理解FP的核心概念
 1.curry
    把一个fun(a,b,c)  =>  fun(a)(b)(c) 的形式
 2.compose(fn1,fn2,fn3...)
    根据参数中 fn的数量依次进行调用，
    最有的执行结果留给回调
 3.reduce
    动力的来源-马达
 4.FP的运行过程
    1.数据list 通过 reduce 马达 ，一个个传入到处理函数 驱动数据运行。
    2.curry把扁平的多个参数，变成 多次调用形式 ，实现多次调用的支持。
    3.compose根据fn的数量完成 进行多次调用 。
 */
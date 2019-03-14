function mapObj(mapperFn,o){
    var newObj = {}
    var keys = Object.keys(o);
    for(let key of keys){
        newObj[key] = mapperFn( o[key] );
    }
    return newObj;
}

var obj = {
    a: "hello",
    b: "world"
}

console.log(
    mapObj(function upper(val){
        return val.toUpperCase();
    },obj)
)


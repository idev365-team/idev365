
function closure(){
    var inSelf = "山地人";
    return function findColin(){
        return inSelf;
    }
}

console.log( 
    closure()()
);
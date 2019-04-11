function defineReactive(obj,key,val){
    var dep = new Dep();
    Object.defineProperty(obj,key,{
        get:function(){
            if(Dep.target){
                dep.addSub(Dep.target);
            }
            return val;
        },
        set:function(newVal){
            if(newVal === val) return;
            val = newVal;
            console.log(val);
            dep.notify();
        }
    })
}

function observe(obj,vm){
    Object.keys(obj).forEach(function(key){
        defineReactive(vm,key,obj[key]);
    })
}
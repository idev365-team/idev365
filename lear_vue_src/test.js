//macro-task  miro-task
setTimeout(function(){
    console.log(5)
},0);

console.log(4)
new Promise(function(resolve){
    console.log(1);
    resolve();
    console.log(2)
}).then(function(){
    console.log(3);
})
console.log(6)



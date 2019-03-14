function joinFirstChar(str,word){
    return str + word.charAt(0);
}

console.log(
    ["Functional","Light","JavaScript","Stuff"]
    .reduce(joinFirstChar,"")    
);





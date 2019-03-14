function sumIter_v2(sum,...nums){
    for(var i=0;i<nums.length;i++){
        sum = sum + nums[i];
    }
    return sum;
}

//递归
function sumIter(sum,...nums){
    if(nums.length==0)return sum;
    return sum+sumIter(...nums);
}

console.log(sumIter(0,1,2));
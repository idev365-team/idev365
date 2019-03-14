"use strict";

var sumRecur = (function(...nums) {
    return function(...nums) {
        return recur(nums, v => v);
    };

    function recur([sum, ...nums], cont) {
        if (nums.length == 0) return cont(sum);
        return recur(nums, function(v) {
            return cont(sum + v);
        });
    }
})();


sumRecur(3,4,5,6,7)

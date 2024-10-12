let arr = [7,9,8,9,10,78]
let sum=0;

var val = arr.reduce(function(acc, ele, index, fullArray){
    return acc+ele;
}, 0);
console.log(val)
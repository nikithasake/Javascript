let marks=[67,89,87,88,54,64]

var passorfail = marks.every(function(ele,index,array){
    return ele>55;//false
})

console.log(passorfail);
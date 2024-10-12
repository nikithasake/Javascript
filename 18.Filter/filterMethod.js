let arr = [300, 400, 59, 89]
var newArray = arr.filter((element, index, array) =>{
    return element%2 ==0
})
console.log(newArray)//[ 300, 400 ]
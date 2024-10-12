// let x=[10,20,30]
// function pure(arr,num){
//     arr.push(num)
// }
// console.log(x)
// pure(x,5)
// console.log(x)

let x=[10,20,30]
function pure(arr,num){
    let newArr=[...arr,num]
    return newArr;
}
console.log(x)
console.log(pure(x,5))
console.log(x)

// [ 10, 20, 30 ]
// [ 10, 20, 30, 5 ]
// [ 10, 20, 30 ]


// var a= 2

// function test(num){
//     num += 1
//     console.log("In the test funtion: ", num)
// }

// console.log("Before calling the funtion call: ", a);//Before calling the funtion call:  2
// test(a)//In the test funtion:  3
// console.log("After calling the funtion call: ", a);//After calling the funtion call:  2


var a= [2, 45, 7]

function test(num){
    num[0] = 4
    console.log("In the test funtion: ", num[0])
}

console.log("Before calling the funtion call: ", a);//Before calling the funtion call:  [ 2, 45, 7 ]
test(a)//In the test funtion:  4
console.log("After calling the funtion call: ", a);//After calling the funtion call:  [ 4, 45, 7 ]
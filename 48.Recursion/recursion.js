function test(num){

    if(num > 0){
        console.log("Number: ", num)
        num = num-1
        test(num)
    }
}

test(10)

// output:-
// Number:  10
// Number:  9
// Number:  8
// Number:  7
// Number:  6
// Number:  5
// Number:  4
// Number:  3
// Number:  2
// Number:  1
let n=0
for(i=n; i<10; i++){
    console.log(i)
}
// output:-
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
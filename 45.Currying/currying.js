// function add(a, b, c, d){
//     return a+b+c+d;
// }

// function addCurrying(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d;
//             }
//         }
//     }
// }

// console.log(add(2, 3, 4, 5))//14

// console.log(addCurrying(2)(3)(4)(5))//14


function multiply(a, b, c){
    return a*b*c;
}

function multiplyCurrying(a){
    return function(b){
        return function(c){
                return a*b*c;

        }
    }
}

console.log(multiply(2, 3, 5))//30

let mul=multiplyCurrying(2)
let mul1=mul(3)
console.log(mul1(5))//30


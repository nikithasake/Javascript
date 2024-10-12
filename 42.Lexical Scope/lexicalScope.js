//Lexical scope is the ability for a function scope to access variables from the parent scope.

var x =1
var z =90
 function outer(){
    console.log("X: ", x)
    console.log("Y: ", y)
    
    // let z = 3;
    function inner(){
        // let z =4
        console.log("Z: ", z)
    }
    inner()
}

let y =2

outer();
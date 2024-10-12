previousData={}

function sum(n){
    console.log(previousData);
    
    if(n in previousData){
        return previousData[n];
    }
    else{
        let res=0;
        for(let x=0;x<=n;x++){
            res += x;
        }
        previousData[n]=res;
        return res;
    }
    
}


console.log(sum(3))

console.log("First Time")
console.time()
console.log(sum(5))
console.timeEnd()

console.log("Second Time")
console.time()
console.log(sum(5))
console.timeEnd()

// o/p:
// {}
// 6
// First Time
// { '3': 6 }
// 15
// default: 1.998ms
// Second Time
// { '3': 6, '5': 15 }
// 15
// default: 1.225ms

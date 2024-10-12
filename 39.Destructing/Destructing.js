
let arr=[10,20,30]

let a=arr[0]
let b=arr[1]
let c= arr[2]

console.log(a,b,c);

//Destructing using Arrays
let [d,e,f]=arr 
console.log(d,e,f) 


//want to get particular index value 
let [g,,h]=arr
console.log(g,h)


//spread operator
 let [i,...fullarray]=arr
console.log(i,fullarray)

//Destructing using objects 
let person={
    name:"prashuu",
    place:"vizag",
    address:{
        pincode:621871,
        phn:87642987298473
    }
}


// let {name}=person 
// console.log(name); 

// let {name,address:{pincode}}=person 
// console.log(name,pincode);

// let {nam="default value here"}=person 
// console.log(nam)


let {name:team}=person
console.log(team)
//console.log(name)// name is not defined
 
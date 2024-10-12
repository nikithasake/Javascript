var names = ["bhagya", "puvvada", "nikitha", "sake"];

// console.log("Elements in the array: ", names);

// names.push("sai")
// console.log("After using push method: ", names);

// console.log("Poped element: ", names.pop());
// console.log("After pop: ", names);

// names.unshift("prasanth");
// console.log("After using unshift method:",names);

// console.log("shifted element from the array: ",names.shift());
// console.log("After using shift method",names);

console.log("After performing slice method: ",names.slice(2, 4));
names.splice(1, 2)
//In the first argument we need to pass the index of the array from where we want to remove
//In the secound argument we need to specify how many elements need to be splice from that 
//first argument index location 
//In the third argument if we want to print any value in that particular spliced location we can specify the value 
//console.log("After performing splice method: ", names);
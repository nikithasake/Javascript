
let person = [{
    id: 1,
    name: "nikki",
    details: "good ",
    marks:100
},
{
    id: 2,
    name: "prashuu",
    details: "......",
    marks:40
},
{
    id: 3,
    name: "bhagya",
    details: "......",
    marks:90
},

{
    id: 4,
    name: "ramaraj",
    details: "......",
    marks:70
}
]


person.sort( (p1, p2) =>{
  if(p1.marks>p2.marks){
    return 1
  }else{
    return -1
  }
})

console.log(person)


// o/p:
// [
//     { id: 2, name: 'prashuu', details: '......', marks: 40 },
//     { id: 4, name: 'ramaraj', details: '......', marks: 70 },
//     { id: 3, name: 'bhagya', details: '......', marks: 90 },
//     { id: 1, name: 'nikki', details: 'good ', marks: 100 }
//   ]

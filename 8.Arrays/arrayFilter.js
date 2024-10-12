var person = [{
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

let newArray = []

newArray = person.filter((person) =>{
    return person.marks>70 && person.marks <=100
})

console.log(newArray)

// outPut:-

// [
//     { id: 1, name: 'nikki', details: 'good ', marks: 100 },
//     { id: 3, name: 'bhagya', details: '......', marks: 90 }
// ]
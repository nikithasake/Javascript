let places=["Hyderabad","Goa","Dharamavaram","Delhi"]

var place = places.find(function(element, index, array){
    return element.startsWith("D");//Dharamavaram
})

// var place = places.filter(function(element, index, array){
//     return element.startsWith("D")//[ 'Dharamavaram', 'Delhi' ]
// })

console.log(place)
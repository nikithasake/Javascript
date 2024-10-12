let places=["Hyderabad","Goa","Dharamavaram","Delhi"]

var place = places.some(function(element, index, array){
    return element.startsWith("H");//True
})

console.log(place)


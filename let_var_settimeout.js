for(var x=1;x<=5;x++){
    setTimeout(function(){
        console.log("...."+x)
        // ....6
        // ....6
        // ....6
        // ....6
        // ....6
    },x*1000) 
}


for(let y=1; y<=5; y++){
    setTimeout(function(){
        console.log(y)
    },y*1000)
}

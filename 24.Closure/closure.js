function outer(){
    var x=10;
    function inner(){
        var y=20;
        console.log(x);
    }
    inner()
}
var result=outer
result()
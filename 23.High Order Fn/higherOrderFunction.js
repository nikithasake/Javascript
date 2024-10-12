function test(a, b, next){
    return next(a, b);
}

function addition(a, b){
    console.log(a+b)
}
let x =2;
let y =3;
test(x, y, addition);

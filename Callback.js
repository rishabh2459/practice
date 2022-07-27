function funOne(a) {
    a() //or return a
}

const a = funOne(function () {
    return "function A"
})

 // a()


function test(x)
{
    return x
}

let z = test( function () {
    console.log("callback");
})

z()


function funOne(a1) {
    return function () {
        console.log(a1);
    }
}

const b = funOne(12)
b()

function funOne(a) {
    return a
}

const fun = funOne(function () {
    console.log("Hello callback");
})
fun()



function funOne(a) {
    return a
}

const fun2 = funOne(function (){
    return "Hello callback"
})
const fun1 = fun2()
console.log(fun1);


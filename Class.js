let ab = "Rishabh"
class A {
    ab = "12"

    // default constructor
    // constructor() {
    //     console.log("Constructor Called");
    // }

    //parameterised constructor
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    methodOne() {
        console.log(this);
    }

    methodTwo() {
        console.log("method 2", this.ab);
    }
}

const obj = new A(1, "Rishabh")
const obj1 = new A(2, "Ritesh")
obj.methodOne()
obj1.methodTwo()

console.log(obj.a);

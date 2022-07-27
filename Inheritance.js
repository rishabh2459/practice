class Parent {
    ab = 12

    m1() {
        console.log("In parent class");
    }
}


class Child extends Parent {

    m3(){
        let a= 2
        let b = 2 * this.ab
        console.log(b)
        this.m1()
    }
}

let obj1 = new Child()
obj1.m3()
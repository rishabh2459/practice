import ChildComponent from "../Props/ChildComponent"

function ParentComponent () {
    let arr = [
        { name: "ABCD", rollno: "10", sub: "java" },
        { name: "zxcv", rollno: "20", sub: "React" },
        { name: "asdf", rollno: "30", sub: "js" },
        { name: "qwer", rollno: "40", sub: "Node" },
    ];
    return (
        <>
            <h2>Parent Component</h2>
            <ChildComponent name = "Rishabh" college = "DU" data={arr}/>
            {/* <Buttons>Increment</Buttons>
            <Buttons>Decrement</Buttons>
            <Buttons>Reset</Buttons> */}
        </>
    )
}

export default ParentComponent;
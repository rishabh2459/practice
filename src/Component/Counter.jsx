 import {useState} from "react";
 function Counter() {
     const [count,setCount] = useState(0);
     const [name,setName] = useState("Rishabh");
     const [arr,setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

     const decrement = () => {
        setCount(count - 1)
     };

     const reset = () => {
        setCount(0)
     };
    return(
        <>
            <h3>{count}</h3>
            <button onClick={()=>{
                setCount(count + 1);
            }}>
                Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
 }
 export default Counter;
import React, { useContext } from 'react';
import ComponentD from "./ComponentD";
import { userobj } from "./HooksUseContext";

const ComponentC = () => {
    const user=useContext(userobj);
    
    if(user) {
        var { address } = user;
    }
    console.log(user,"at 6 c Component");
  return (
    <div>ComponentC
        <ComponentD />
        {
            user
                ? address?.map((ad, i)=>{
                 return <h3 key={i}>{ad}</h3>
            })
         : null}
    </div>
  )
}

export default ComponentC
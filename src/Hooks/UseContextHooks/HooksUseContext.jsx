import React from 'react'
import ComponentA from './ComponentA';
import ComponentE from './ComponentE';
import ComponentC from './ComponentC';

export const userName = React.createContext();
export const userobj = React.createContext();
function HooksUseContext() {
    let obj={
        name: "Rishabh",
        city:"Noida",
    };

    let obj1={
        name: "Rahul",
        address: ["Noida", "Mumbai", "Pune"],
    }
  return (
    <>
        <ComponentA />
        <userName.Provider value={obj}>
            <ComponentE />
        </userName.Provider>

        <userobj.Provider value={obj1}>
            <ComponentC />
        </userobj.Provider>
    </>
  );
}

export default HooksUseContext;
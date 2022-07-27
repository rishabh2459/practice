import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const Routings = () => {
    const isLogin =() => {
    //     const storage = localStorage.getItem("user");
    //     console.log(storage);
    //     const obj1 = JSON.parse(storage);
    //     console.log(obj1);

    //     let obj = {
    //         email: "rishabh@gmail.com",
    //         password: "rishabh@123",
    //     };

    //     if (obj.email === obj1.email && obj.password === obj1.password) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    };
        // let obj = {
        //     email: "rishabh@gmail.com",
        //     password: "rishabh@123"
        // }


    return (
    
    <BrowserRouter>
        <Login />
        <Routes>
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
    
    );
}

export default Routings;
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contactus from "./Contactus";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Post from "./Post";
import "./routing.css";

const Routing = () => {
  const isLogin = () => {
    const storage = localStorage.getItem("user");
    console.log(storage);
    const obj1 = JSON.parse(storage);
    console.log(obj1);

    let obj = {
        email: "rishabh@gmail.com",
        password: "rishabh",
    };
    
    if (obj.email === obj1.email && obj.password === obj1.password) {
      return true;
    } else {
    //   if (obj.email !== obj1.email) {
    //     alert("Please check your email id");
    //   }
    //   if (obj.password !== obj1.password) {
    //     alert("Please check your Password");
    //   }
      return false;
    }
};
    let obj = {
        email: "rishabh@gmail.com",
        city: "Delhi",
        msg: "login first"
      };
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        {/* {Conditional Routing} */}
        <Route
          path="/dashboard"
          element={isLogin() ? <Dashboard /> : <Navigate to="/" state={obj} />}
        />
        <Route path="*" element={<h2>Page Not Found</h2>} />
        <Route path="/post/:key" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

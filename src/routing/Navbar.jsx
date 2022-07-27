import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./routing.css";

const Navbar = () => {

  return (
    <div>
      <ul>
        <li>
          {" "}
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "green" : null,
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/aboutus"
            style={({ isActive }) => {
              return {
                color: isActive ? "green" : null,
              };
            }}
          >
            About us
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/contactus"
            style={({ isActive }) => {
              return {
                color: isActive ? "green" : null,
              };
            }}
          >
            Contact us
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/dashboard"
            style={({ isActive }) => {
              return {
                color: isActive ? "green" : null,
              };
            }}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
// import { useLocation } from 'react-router-dom'
import "./Log.css";

const SignUp = () => {
  // const location = useLocation();
  // console.log(location);

  
  const formik = useFormik({
    initialValues: {
      fname: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (initialValues) => {
      console.log("submitted", initialValues);
    },
    validate: (values) => {
      console.log("validating");
      let errors = {};
      let isfnameValid = /^[a-zA-Z]{3,15}$/;
      let isemailValid = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}.[a-zA-Z]{2,3}$/;
      let ispasswordValid =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,16}$/;
      let isphoneValid = /^[0-9]{10}$/;

      if (values.fname === "") {
        errors.fname = "Required";
      } else if (values.fname.length < 4) {
        errors.fname = "value should be greater than 4";
      } else if (!isfnameValid.test(values.fname)) {
        errors.fname = "Invalid Fname";
      }
      if (values.email === "") {
        errors.email = "Required";
      } else if (!isemailValid.test(values.email)) {
        errors.email = "Invalid Format";
      }
      if (values.password === "") {
        errors.password = "Required";
      } else if (!ispasswordValid.test(values.password)) {
        errors.password = "Invalid Password";
      }
      if (values.phone === "") {
        errors.phone = "Required";
      } else if (!isphoneValid.test(values.phone)) {
        errors.phone = "Invalid Mobile No.";
      }
      return errors;
    },
  });
  console.log(formik.touched, "64");
  const [isbool, setisbool] = useState(false);
  
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          
          <form action="" onSubmit={formik.handleSubmit}>
          <h2>SignUp Form</h2><br/>
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
              <label>Full Name : </label>
            <input
            className="login_input"
              type="text"
              placeholder="Enter your full name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="fname"
              name="fname"
              value={formik.values.fname}
            />{" "}
            {formik.errors.fname && formik.touched.fname ? (
              <span style={{ color: "red" }}>{formik.errors.fname}</span>
            ) : null}
            </div>
            
            
            <div className="login__field">
            <i className="login__icon fas fa-user"></i>
              <label>Email Id : </label>
            <input
              className="login_input"
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="email"
              name="email"
              value={formik.values.email}
            />{" "}
            {formik.errors.email && formik.touched.email ? (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            ) : null}
            </div>
            
            
            <div className="login__field">
            <i className="login__icon fas fa-user"></i>
              <label>Password : </label>
            <input
            className="login_input"
              type="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="password"
              name="password"
              value={formik.values.password}
            />{" "}
            {formik.errors.password && formik.touched.password ? (
              <span style={{ color: "red" }}>{formik.errors.password}</span>
            ) : null}
            </div>
            
            
            <div className="login__field">
            <i className="login__icon fas fa-user"></i>
              <label>Phone No. : </label>
            <input
            className="login_input"
              type="phone"
              placeholder="Enter your phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="phone"
              name="phone"
              value={formik.values.phone}
            />{" "}
            {formik.errors.phone && formik.touched.phone ? (
              <span style={{ color: "red" }}>{formik.errors.phone}</span>
            ) : null}
            </div>
            <br/>
            <div className="input_field radio_option">
              <input type="radio" name="radiogroup1" id="rd1 " />
              <label for="rd1">Male</label>

              <input type="radio" name="radiogroup1" id="rd2" />
              <label for="rd2">Female</label>
            </div>

            <br/>
            <div className="input_field checkbox_option">
            
            	<input type="checkbox" id="cb1" />
    			<label for="cb1">I agree with terms and conditions</label>
            </div>
            
            <div className="input_field checkbox_option">
            	<input type="checkbox" id="cb2" />
    			<label for="cb2">I hereby declare that all the information is true</label>
            </div>
            
            <button className="button login__submit">
              <span className="button__text">Register</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          
          

          {isbool ? (
            <div>
              <p>Name---{formik.values.fname}</p>
              <p>Email---{formik.values.email}</p>
              <p>Password---{formik.values.password}</p>
              <p>Phone = {formik.values.phone}</p>
            </div>
          ) : null}
        </div>

        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

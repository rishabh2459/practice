import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { Link, NavLink } from "react-router-dom"
import "./Log.css";
import { useNavigate } from "react-router-dom";

const Login= () =>{
  const navigate = useNavigate();
  let obj = {
    key: "REdirected",
  }
  const redirectFunc=() => {
    navigate("/signup");
  }; 

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (initialValues) => {
      console.log("submitted", initialValues);
    },
    validate: (values) => {
      console.log("validating");
      let errors = {};

      let isemailValid = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}.[a-zA-Z]{2,3}$/;
      let ispasswordValid =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,16}$/;

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
  
      return errors;

    },
  });  
   
  console.log(formik.touched, "64");
  const [isbool, setisbool] = useState(false);

 
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          

          {/* <img src={log} className="img-fluid" alt="Responsive image" /> */}
          <form class="login" action="" onSubmit={formik.handleSubmit} className="sticky-top">
          <h3>Login Form</h3>
            <div className="login__field">
            <i className="login__icon fas fa-user"></i>
              <label>Email Id : </label>
              <input
              className="login_input"
                type="text"
                name="email"
                placeholder="Enter your Email"
                id="email"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
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
                name="password"
                placeholder="Enter your password"
                id="password"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password ? (
                <span style={{ color: "red" }}>{formik.errors.password}</span>
              ) : null}
            </div>
            <br />
            <button className="button login__submit">
              <span className="button__text">Log In</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          
            <div >
            <button onClick={redirectFunc} className="button login__submit" type="button" >
             
              <span className="button__text" >Sign Up</span>
              <i className="button__icon fas fa-chevron-right"></i>
              {/* <a href="/SignUp" class="signup"></a> */}
              {/* <NavLink to="/signup" className="signup"></NavLink> */}
            </button>
            </div>
        
 
          </form>
          <div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="/" class="social-login__icon fab fa-instagram">I</a>
					<a href="/" class="social-login__icon fab fa-facebook">F</a>
					<a href="/" class="social-login__icon fab fa-">T</a>
				</div>
			</div>
          
          {isbool ? (
            <div>
              <p>Email---{formik.values.email}</p>
              <p>Password---{formik.values.password}</p>
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

export default Login;

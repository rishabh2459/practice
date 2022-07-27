import "./Form.css";
import { useState } from "react";
import { useFormik } from "formik";
function FormComponent() {
  // const [fname,setFname] = useState(" ");
  // const [email,setemail] = useState(" ");
  // const [password,setpassword] = useState(" ");
  // const [phone,setphone] = useState(" ");
  // const [user, setUser] = useState({
  //   fname: "",
  //   email: "",
  //   password: "",
  //   phone: "",
  // });
  const formik =useFormik({
    initialValues: {
      fname: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit:(values) => {
      console.log("submitted",values);
    },
    validate:(values) => {
      // console.log("validating");
      let errors = {};
      let isfnameValid = /^[a-zA-Z]{3,15}$/;
      let isemailValid = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}.[a-zA-Z]{2,3}$/;
      let ispasswordValid = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,16}$/;
      let isphoneValid = /^[0-9]{10}$/;
      if (values.fname === "" ) {
        errors.fname = "Required";
      }
      else if(values.fname.length<4){
        errors.fname = "value should be greater than 4"
      }
      else if (!isfnameValid.test(values.fname)){
        errors.fname="Invalid Fname"
      }
      if (values.email === "" ) {
        errors.email = "Required";
      }
      else if (!isemailValid.test(values.email)){
        errors.email="Invalid Format"
      }
      if (values.password === "" ) {
        errors.password = "Required";
      }
      else if (!ispasswordValid.test(values.password)){
        errors.password="Invalid Password"
      }
      if (values.phone === "" ) {
        errors.phone = "Required";
      }
      else if (!isphoneValid.test(values.phone)){
        errors.phone="Invalid Mobile No."
      }
      return errors;
    },
  });
  console.log(formik.touched, "64");
  const [isbool, setisbool] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   // const {email,value} = e.target;
  //   setUser({ ...user, [name]: value });
  // };
  //   const handleNameChange = (e) => {
  //       console.log(e.target.value);
  //       setFname(e.target.value);
  //   };

  //   const handleemailChange = (e) => {
  //     console.log(e.target.value);
  //     setemail(e.target.value);
  // };

  // const handlepasswordChange = (e) => {
  //     console.log(e.target.value);
  //     setpassword(e.target.value);
  // };

  // const handlephoneChange = (e) => {
  //     console.log(e.target.value);
  //     setphone(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   localStorage.setItem("user",JSON.stringify(user));
  //   e.preventDefault();
  //   user.fname !== "" &&
  //   user.email !== "" &&
  //   user.password !== "" &&
  //   user.phone !== ""
  //     ? setisbool(true)
  //     : alert("user can not be blank");
  //     // setUser({ fname: "", email: "", password: "", phone: ""})
  // };
  // console.log(user);
  return (
    <>
      <h2>Form</h2>
      <form action="" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Enter your fname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="fname"
          value={formik.values.fname}

        />{" "}
        {formik.errors.fname && formik.touched.fname? (<span style={{ color: "red"}}>{formik.errors.fname}</span>) : null}
        <br />
        <br />
        <input
          className="imp"
          type="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          value={formik.values.email}
        />{" "}
        {formik.errors.email && formik.touched.email ? <span style={{ color: "red"}}>{formik.errors.email}</span> : null}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
          value={formik.values.password}
        />{" "}
        {formik.errors.password && formik.touched.password ? <span style={{ color: "red"}}>{formik.errors.password}</span> : null}
        <br />
        <br />
        <input
          type="phone"
          placeholder="Enter your phone number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="phone"
          value={formik.values.phone}
        />{" "}
        {formik.errors.phone && formik.touched.phone ? <span style={{ color: "red"}}>{formik.errors.phone}</span> : null}
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
      <br />
      <br />

      {isbool ? (
        <div>
          <p>Name---{formik.values.fname}</p>
          <p>Email---{formik.values.email}</p>
          <p>Password---{formik.values.password}</p>
          <p>Phone = {formik.values.phone}</p>
        </div>
      ) : null}
    </>
  );
}

export default FormComponent;

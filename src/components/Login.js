import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialValues = {
  username:"",
  password: "",
}

const Login = () => {
  const { push } = useHistory()
  const [values, setValues] = useState(initialValues)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = (evt) => {
    setValues({...values,
    [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
    .post("http://localhost:5000/api/login", values)
    .then(res => {
      localStorage.setItem("token",res.data.payload)
      push("/bubblespage")
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <h1>
        Welcome to the Bubble App!
        <p>login here</p>
      </h1>
        <label htmlFor="username">Username
          <input type="text" name="username" value={values.username} onChange={handleChange}/>
        </label>
        <label htmlFor="password">Password
          <input type="password" name="password" value={values.password} onChange={handleChange}/>
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
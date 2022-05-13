import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

export const Register = () => {

  const [formValues, handleInputChange ] = useForm({
    name:'ivan',
    email: 'ivanflo06@gmail.com',
    password:'123123',
    password2: '3312213'
  })
  const {name, email, password, password2} = formValues

  const handleRegisterSubmit = (e)=>{
    e.preventDefault()
    if(isFormValid()){

      console.log(formValues)
    }
  }

  const isFormValid = ()=>{
    if(name.trim().length === 0){
      console.log('name is required');
      return false
    } else if (!validator.isEmail(email)){
      console.log('email is not valid');
      return false
    } else if(password!==password2 || password.length<5){
      console.log('error in passwords')
      return false
    }


    return true
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegisterSubmit}>
        <div className="auth__alert-error">
          hola mundo
        </div>
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn mb-5 btn-primary btn-block">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already register?
        </Link>
      </form>
    </>
  );
};

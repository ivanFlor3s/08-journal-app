import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

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
    console.log(formValues)
  }

  const isFormValid = ()=>{
    //Valido formulario TODO
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegisterSubmit}>
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

import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
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

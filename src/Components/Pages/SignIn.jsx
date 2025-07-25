import React, {use, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router";

import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "../../firebase/firebase.init";
// import { Helmet } from "react-helmet-async";
import {AuthContext} from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const [error, setError] = useState("");
  const {signIn} = use(AuthContext);
  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email, password});
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire("success", "Login Successfully");
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };

  const handleLoginWithGoogle = () => {
    // console.log('google sing in clicked');

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {/* <Helmet><title>Login Page</title></Helmet> */}
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Login your account
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* passowrd  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <Link to="/auth/forget" className="link link-hover">
                  Forgot password?
                </Link>
              </div>

              {error && <p className="text-red-400 text-xs">{error}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <button
                onClick={handleLoginWithGoogle}
                className="btn btn-neutral mt-4"
              >
                Login With Google
              </button>
              <p className="font-semibold text-center pt-5">
                Dont’t Have An Account ?{" "}
                <Link className="text-secondary" to="/register">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;

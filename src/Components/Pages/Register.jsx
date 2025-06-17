// import { createUserWithEmailAndPassword } from 'firebase/auth';

import {Link, useNavigate} from "react-router";

import {use, useState} from "react";

import {FaEye, FaEyeSlash} from "react-icons/fa";
import {AuthContext} from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const {createUser, setUser, updateUser} = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 6) {
      // setNameError("Name should be more then 5 character");
      // alert("Please set 5 character Name");
      Swal.fire(
        "error", "Please set 5 character Name",
        
        
      )
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({name, photo, email, password});
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire(
            "success", "User created Successfully",
           
          )
        // console.log(user);
        updateUser({displayName: name, photoURL: photo})
          .then(() => {
            setUser({...user, displayName: name, photoURL: photo});

            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
        // ..
      });
  };
  return (
    <>
      {/* <Helmet><title>Register Page</title></Helmet> */}
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {nameError && <p className="text-xs text-error">{nameError}</p>}

              {/* Photo URl  */}
              <label className="label">Photo URl </label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URl"
                required
              />

              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password  */}
              {/* <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            /> */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                />
                <button
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="btn btn-xs absolute top-2 right-6"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-center pt-5">
                Allready Have An Account ?{" "}
                <Link className="text-secondary" to="/signIn">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

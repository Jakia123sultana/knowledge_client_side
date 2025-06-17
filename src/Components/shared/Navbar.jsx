import {Link, NavLink} from "react-router";
import owner from "../../assets/react.svg";
import {use} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from '../../assets/knowledgeSharing.jpg'
export default function Navbar() {
   const {user, logOut} = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/knowledges"> All Articles</NavLink>
      </li>
      { user && (
        <>
      <li>
        <NavLink to="/addpost">Add Posts </NavLink>
      </li>
       <li>
        <NavLink to="/mypost">MY Posts </NavLink>
      </li>
      </>
      )}
</>
);
 

  // const userInfo = use(AuthContext);
  // console.log('nav', userInfo)

  const handleLogOut = () => {
    console.log("user trying to LogOut");
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={logo}alt="" className="rounded-full w-12 h-12"/>
          <a className="btn btn-ghost text-xl">Knowledge Sharing</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="login-btn flex gap-5">

            <div className="navbar-end gap-5">
              {user ? (
              <>
                     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL}
            />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
        <NavLink to="/knowledges"> All Articles</NavLink>
      </li>
      <li>
        <NavLink to="/addpost">Add Posts </NavLink>
      </li>
       <li>
        <NavLink to="/mypost">MY Posts </NavLink>
      </li>
        <button onClick={handleLogOut} className='btn'>Sign Out</button> 
      </ul>
    </div>
    </>

              ) : (
                <>
                <Link className="btn mr-4" to="/signIn">Login</Link>
              
              <Link className="btn" to="/register">Register</Link>
              </>
              )}
            </div>
          </div>
          <input type="checkbox" value="black" className="toggle theme-controller" />
        </div>
      </div>
    </>
  );
}
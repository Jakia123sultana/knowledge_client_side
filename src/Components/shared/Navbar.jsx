// import {Link, NavLink} from "react-router";
// import owner from "../../assets/react.svg";
// import {use} from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import logo from '../../assets/knowledgeSharing.jpg'
// export default function Navbar() {
//    const {user, logOut} = use(AuthContext);
//   const links = (
//     <>
//       <li className="group relative">
//         <NavLink to="/" className={({ isActive }) =>
//                 `text-white  transition duration-300 
//                  before:content-[''] before:absolute before:-bottom-1 before:left-0 
//                  before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
//                  before:origin-left before:transition-transform before:duration-300 
//                  group-hover:before:scale-x-100 ${isActive ? 'before:scale-x-100' : ''}`
//             }
// >Home</NavLink>
//       </li>
//       <li className="group relative">
//         <NavLink to="/knowledges" className={({ isActive }) =>
//                 `text-white  transition duration-300 
//                  before:content-[''] before:absolute before:-bottom-1 before:left-0 
//                  before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
//                  before:origin-left before:transition-transform before:duration-300 
//                  group-hover:before:scale-x-100 ${isActive ? 'before:scale-x-100' : ''}`
//             }> All Articles</NavLink>
//       </li>
       
//       <li className="group relative">
//         <NavLink to="/aboutus" className={({ isActive }) =>
//                 `text-white  transition duration-300 
//                  before:content-[''] before:absolute before:-bottom-1 before:left-0 
//                  before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
//                  before:origin-left before:transition-transform before:duration-300 
//                  group-hover:before:scale-x-100 ${isActive ? 'before:scale-x-100' : ''}`
//             }> About Us</NavLink>
//       </li>
//       { user && (
//         <>
//       <li className="group relative">
//         <NavLink to="/addpost" className={({ isActive }) =>
//                 `text-white  transition duration-300 
//                  before:content-[''] before:absolute before:-bottom-1 before:left-0 
//                  before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
//                  before:origin-left before:transition-transform before:duration-300 
//                  group-hover:before:scale-x-100 ${isActive ? 'before:scale-x-100' : ''}`
//             }>Add Posts </NavLink>
//       </li>
//        <li className="group relative">
//         <NavLink to="/mypost" className={({ isActive }) =>
//                 `text-white  transition duration-300 
//                  before:content-[''] before:absolute before:-bottom-1 before:left-0 
//                  before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
//                  before:origin-left before:transition-transform before:duration-300 
//                  group-hover:before:scale-x-100 ${isActive ? 'before:scale-x-100' : ''}`
//             }>MY Posts </NavLink>
//       </li>
//       </>
//       )}
// </>
// );
 

//   // const userInfo = use(AuthContext);
//   // console.log('nav', userInfo)

//   const handleLogOut = () => {
//     console.log("user trying to LogOut");
//     logOut()
//       .then(() => {
//         alert("You Logged Out successfully");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//        <div className="navbar lg:px-8 sticky top-0 z-50 bg-black text-white px-4 py-2 shadow-[0_2px_6px_rgba(0,205,225,0.4)]">
//         <div className="navbar-start">
//           <div className="dropdown lg:hidden">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />{" "}
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {links}
//               {user ? (
//                 <li><button onClick={handleLogOut} className='btn btn-sm'>Sign Out</button></li>
//               ) : (
//                 <>
//                   <li><Link to="/signIn">Login</Link></li>
//                   <li><Link to="/register">Register</Link></li>
//                 </>
//               )}
//             </ul>
//           </div>
//           <img src="https://i.ibb.co.com/yFpT4ffT/logo-knowledge.jpg"alt="" className="rounded-full w-12 h-12 "/>
//          <div className="grid grid-cols-row ml-6">
//           <a className=" text-base lg:text-xl"><span className="text-[#00CED1]">Know</span>ledge </a>
//                   <p className=" text-base lg:text-xl">Sharing </p>
//                   </div>
//       </div>
//         <div className="navbar-center hidden lg:flex">
//          <ul className="menu menu-horizontal px-1 font-semibold text-lg hidden lg:flex">{links}</ul>

//         </div>
//         <div className="navbar-end">
//           <div className="login-btn flex gap-5">

//             <div className="navbar-end gap-5">
//               {user ? (
//               <>
//                      <div className="dropdown dropdown-end  hidden lg:block">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS Navbar component"
//             src={user.photoURL}
//             />
//         </div>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
//          <li>
//         <NavLink to="/knowledges" className="text-black"> All Articles</NavLink>
//       </li>
//       <li>
//         <NavLink to="/addpost" className="text-black">Add Posts </NavLink>
//       </li>
//        <li>
//         <NavLink to="/mypost" className="text-black">My Posts </NavLink>
//       </li>
//         <button onClick={handleLogOut} className='btn'>Sign Out</button> 
//       </ul>
//     </div>
//     </>

//               ) : (
//                 <>
//                 <Link className=" text-[#00CED1] border border-[#00CED1] mr-4 rounded-2xl  hidden lg:inline px-8 py-2 " to="/signIn">Login</Link>
              
//               <Link className="  text-white bg-[#00CED1] mr-4 rounded-2xl  hidden lg:inline px-8 py-2 " to="/register">Register</Link>
//               </>
//               )}
//             </div>
//           </div>
//           {/* <input type="checkbox" value="black" className="toggle theme-controller" /> */}
//         </div>
//       </div>
//     </>
//   );
// }
import { Link, NavLink } from "react-router";
import { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = use(AuthContext);

  // Desktop links with white text and underline animation
  const links = (
    <>
      <li className="group relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white transition duration-300 
             before:content-[''] before:absolute before:-bottom-1 before:left-0 
             before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
             before:origin-left before:transition-transform before:duration-300 
             group-hover:before:scale-x-100 ${isActive ? "before:scale-x-100" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li className="group relative">
        <NavLink
          to="/knowledges"
          className={({ isActive }) =>
            `text-white transition duration-300 
             before:content-[''] before:absolute before:-bottom-1 before:left-0 
             before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
             before:origin-left before:transition-transform before:duration-300 
             group-hover:before:scale-x-100 ${isActive ? "before:scale-x-100" : ""}`
          }
        >
          All Articles
        </NavLink>
      </li>
      <li className="group relative">
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            `text-white transition duration-300 
             before:content-[''] before:absolute before:-bottom-1 before:left-0 
             before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
             before:origin-left before:transition-transform before:duration-300 
             group-hover:before:scale-x-100 ${isActive ? "before:scale-x-100" : ""}`
          }
        >
          About Us
        </NavLink>
      </li>
      {user && (
        <>
          <li className="group relative">
            <NavLink
              to="/addpost"
              className={({ isActive }) =>
                `text-white transition duration-300 
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 
                 before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
                 before:origin-left before:transition-transform before:duration-300 
                 group-hover:before:scale-x-100 ${isActive ? "before:scale-x-100" : ""}`
              }
            >
              Add Posts
            </NavLink>
          </li>
          <li className="group relative">
            <NavLink
              to="/mypost"
              className={({ isActive }) =>
                `text-white transition duration-300 
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 
                 before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
                 before:origin-left before:transition-transform before:duration-300 
                 group-hover:before:scale-x-100 ${isActive ? "before:scale-x-100" : ""}`
              }
            >
              MY Posts
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  // Mobile dropdown links - black text for light dropdown bg and underline effect
  const mobileDropdownLinks = (
    <>
      <li className="group relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-black block px-4 py-2 relative transition duration-300
             before:content-[''] before:absolute before:-bottom-1 before:left-0 
             before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
             before:origin-left before:transition-transform before:duration-300 
             group-hover:before:scale-x-100 ${isActive ? "before:scale-x-100" : ""}`
          }
        >
          Home
        </NavLink>
      </li>

      <li className="group relative">
        <NavLink
          to="/knowledges"
          className={({ isActive }) =>
            `text-black block px-4 py-2 relative transition duration-300
             before:content-[''] before:absolute before:-bottom-1 before:left-0 
             before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
             before:origin-left before:transition-transform before:duration-300 
             group-hover:before:scale-x-100 ${isActive ? "before:scale-x-100" : ""}`
          }
        >
          All Articles
        </NavLink>
      </li>

      <li className="group relative">
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            `text-black block px-4 py-2 relative transition duration-300
             before:content-[''] before:absolute before:-bottom-1 before:left-0 
             before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
             before:origin-left before:transition-transform before:duration-300 
             group-hover:before:scale-x-100 ${isActive ? "before:scale-x-100" : ""}`
          }
        >
          About Us
        </NavLink>
      </li>

      {user && (
        <>
          <li className="group relative">
            <NavLink
              to="/addpost"
              className={({ isActive }) =>
                `text-black block px-4 py-2 relative transition duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 
                 before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
                 before:origin-left before:transition-transform before:duration-300 
                 group-hover:before:scale-x-100 ${isActive ? "before:scale-x-100" : ""}`
              }
            >
              Add Posts
            </NavLink>
          </li>
          <li className="group relative">
            <NavLink
              to="/mypost"
              className={({ isActive }) =>
                `text-black block px-4 py-2 relative transition duration-300
                 before:content-[''] before:absolute before:-bottom-1 before:left-0 
                 before:h-[2px] before:w-full before:bg-sky-400 before:scale-x-0 
                 before:origin-left before:transition-transform before:duration-300 
                 group-hover:before:scale-x-100 ${isActive ? "before:scale-x-100" : ""}`
              }
            >
              My Posts
            </NavLink>
          </li>
        </>
      )}
    </>
  );

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
      <div
        className="navbar lg:px-8 sticky top-0 z-50 bg-black text-white px-4 py-2 shadow-[0_2px_6px_rgba(0,205,225,0.4)]"
      >
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {mobileDropdownLinks}
              {user ? (
                <li>
                  <button onClick={handleLogOut} className="btn btn-sm">
                    Sign Out
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signIn">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <img
            src="https://i.ibb.co.com/yFpT4ffT/logo-knowledge.jpg"
            alt=""
            className="rounded-full w-12 h-12"
          />
          <div className="grid grid-cols-row ml-6">
            <a className="text-base lg:text-xl">
              <span className="text-[#00CED1]">Know</span>ledge{" "}
            </a>
            <p className="text-base lg:text-xl">Sharing </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg hidden lg:flex">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="login-btn flex gap-5">
            <div className="navbar-end gap-5">
              {user ? (
                <>
                  <div className="dropdown dropdown-end hidden lg:block">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={user.photoURL}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <NavLink to="/knowledges" className="text-black">
                          {" "}
                          All Articles
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/addpost" className="text-black">
                          Add Posts{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/mypost" className="text-black">
                          My Posts{" "}
                        </NavLink>
                      </li>
                      <button onClick={handleLogOut} className="btn">
                        Sign Out
                      </button>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    className="text-[#00CED1] border border-[#00CED1] mr-4 rounded-2xl  hidden lg:inline px-8 py-2 "
                    to="/signIn"
                  >
                    Login
                  </Link>

                  <Link
                    className="text-white bg-[#00CED1] mr-4 rounded-2xl  hidden lg:inline px-8 py-2 "
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* <input type="checkbox" value="black" className="toggle theme-controller" /> */}
        </div>
      </div>
    </>
  );
}

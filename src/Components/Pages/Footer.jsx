import { NavLink } from 'react-router';
import logo from '../../assets/knowledgeSharing.jpg'
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { GiTBrick } from 'react-icons/gi';
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
    const links = (
     <>
      <li>
        <NavLink to="/">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/addroommate">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/browselisting">Terms & Conditions </NavLink>
      </li>
      
    </>
      );
  return (
    <div className='bg-[#0F0F0F] text-white py-10 px-12'>
     <div >
      
      <div>
        <div className='flex gap-5 justify-center'>
          <img src={logo}alt="" className="rounded-full w-12 h-12"/>
               <a className="btn btn-ghost text-xl">Knowledge Sharing</a>
        </div>
        <ul className='flex gap-14 justify-center items-center pt-4 pb-4'>
            {links}
        </ul>
        <div className='border-t-1 border-dashed pt-3'></div>
      </div>
     </div>
     <div className='flex justify-center items-center gap-8 mt-4'>
      <NavLink to="https://www.facebook.com/share/18jN1Xxdn5/">
      <FaFacebook size={36}/>
      </NavLink>
      <NavLink to="https://github.com/Jakia123sultana">
      <BsGithub  size={36}/>
      </NavLink>
      <NavLink to="https://www.linkedin.com/in/jakia-sultana-2b04102b0/">
      <FaLinkedin size={36}/>
      </NavLink>
     </div>
    <p className='text-center mt-4 opacity-70'> @2025 Your Company Name. All rights reserved.</p>
    </div>
  );
}
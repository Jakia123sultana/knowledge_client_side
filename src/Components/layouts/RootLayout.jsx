import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../shared/Navbar';
import LeftAside from '../shared/LeftAside';
import RightAside from '../shared/RightAside';
import Banner from '../shared/Banner';
import Footer from '../Pages/Footer';


const RootLayout = () => {
    return (
        <>
         <div className='mx-auto '>
  
          <NavBar/>
       <div className="bg-black max-full">
  <Outlet />
</div>

    
    </div>
    <Footer/>
</>
    );
};

export default RootLayout;
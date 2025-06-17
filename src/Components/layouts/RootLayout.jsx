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
         <div className='mx-auto max-w-7xl'>
  
          <NavBar/>
         <Outlet/>

    
    </div>
    <Footer/>
</>
    );
};

export default RootLayout;
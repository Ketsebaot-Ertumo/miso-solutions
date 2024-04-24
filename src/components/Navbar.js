import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';
import logo from '../images/miso.jpg';


const Navbar = () => {
    <div script={{display: 'flex'}}>
        <img src={logo} className="App-logo" alt="Miso Software Solution Logo" sx={{ width: { sm:'118px'}, flexShrink: '0', height: { sm:'40' } ,spacing:{xs: 2, md: 3} }}/>
        <nav script={{pl:40}}>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#careers'>Careers</a>
            <a href='#contact'>Contact Us</a>
        </nav>
    </div>
}
export default Navbar;

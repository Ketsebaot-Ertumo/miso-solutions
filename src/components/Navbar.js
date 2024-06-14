import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/miso-new.png';
import { Close, Menu } from '@mui/icons-material';
import MenuNav from './Menu';
import { IconButton } from '@mui/material';


function Navbar() {

  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <header className="font-roboto flex items-center justify-between px-5 sm:px-10 text-black fixed z-40 bg-gray-300 w-full h-[44px] md:h-[60px]">
    {/* <header className="flex items-center justify-between px-5 sm:px-10 text-black fixed z-40 bg-home bg-no-repeat bg-cover w-full h-[44px] md:h-[60px]"> */}
        {/* <div className="absolute left-0 top-0 bg-black bg-opacity-40 w-full flex items-center justify-between px-5 sm:px-10 h-[44px] md:h-[60px]"> */}
        <Link to='/'>
          <div className='flex items-center gap-5'>
            <img src={logo} className="w-10 h-10 hover:text-gray-500" alt="logo" />
            <p className='hidden sm:flex'>Miso Solutions</p>
          </div>
        </Link>

        <MenuNav />

        <div className="lg:hidden">

          <div
              className="pr-8"
              onClick={handleNavMenu}
            >
              <Menu className='lg:mb-3' />

          {(isMenuOpen) && (
            <div
              className="absolute bg-white shadow text-left rounded-lg p-3 h-screen ml-[-90px] w-full top-0"
             >
              <div className='mb-3 ml-[100px]'>
                  <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleNavMenu}
                        aria-label="close"
                      >
                        <Close className='black' />
                  </IconButton>
              </div>

                    <div
                        onMouseEnter={() => handleMenuHover('aboutNav')}
                        onMouseLeave={() => handleMenuHover(null)}
                      >
                        <p className={`${activeMenu === 'aboutNav' ? 'text-gray-500' : 'text-black'} pb-3`}>About</p>
                        {activeMenu === 'aboutNav' && (
                          <div className="absolute bg-white shadow text-left p-4 rounded-lg ml-[-180px]">
                            <ul>
                              <Link to="/about-us/#about">
                                <li className="hover:text-blue">
                                  <p>About Us</p>
                                </li>
                              </Link>
                              <Link to="/about-us/#approach">
                                <li className="hover:text-blue py-5">
                                  <p>Our Approach</p>
                                </li>
                              </Link>
                              <Link to="/about-us/#team">
                                <li className="hover:text-blue">
                                    <p>Our Team</p>
                                </li>
                              </Link>
                            </ul>
                          </div>
                        )}
                      </div>

                      <div
                          onMouseEnter={() => handleMenuHover('servicesNav')}
                          onMouseLeave={() => handleMenuHover(null)}
                        >
                          <p className={`${activeMenu === 'servicesNav' ? 'text-gray-500' : 'text-black'} pb-3`}>Services</p>
                          {activeMenu === 'servicesNav' && (
                            <div className="absolute bg-white shadow text-left p-4 rounded-lg ml-[-160px]">
                              <ul>
                              <li className="hover:text-blue">
                                <Link to="/services#architectural">
                                  <p>Architectural Design</p>
                                </Link>
                              </li>
                              <li className="hover:text-blue pt-5">
                                <Link to="/services/#interior">
                                  <p>Interior Design</p>
                                </Link>
                              </li>
                              <li className="hover:text-blue pt-5">
                                <Link to="/services/#construction">
                                  <p>Construction Works</p>
                                </Link>
                              </li>
                              <li className="hover:text-blue pt-5">
                                <Link to="/services/#finishing">
                                  <p>Finishing Works</p>
                                </Link>
                              </li>
                              <li className="hover:text-blue pt-5">
                                <Link to="/services/#supervission">
                                  <p>Construction Supervission</p>
                                </Link>
                              </li>
                              </ul>
                            </div>
                          )}
                  </div>

                  <div 
                    onMouseEnter={() => handleMenuHover('portfolioNav')}
                    onMouseLeave={() => handleMenuHover(null)}
                  >
                      <Link to="/portfolio"><p className={`${activeMenu === 'portfolioNav' ? 'text-gray-500' : 'text-black'} pb-3`}>Portfolio</p></Link>
                  </div>

                  <div 
                    onMouseEnter={() => handleMenuHover('contactNav')}
                    onMouseLeave={() => handleMenuHover(null)}
                  >
                      <Link to="/contact-us"><p className={`${activeMenu === 'contactNav' ? 'text-gray-500' : 'text-black'}`}>Contact Us</p></Link>
                  </div>

            </div>
            )}

        </div>
        </div>
        {/* </div> */}
        
      </header>
  );
}

export default Navbar;


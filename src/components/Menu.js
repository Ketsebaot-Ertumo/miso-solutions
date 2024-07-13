import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Update active menu based on the current page
    const path = location.pathname;
    if (path.startsWith('/about')) {
      setActiveMenu('about');
    } else if (path.startsWith('/services')) {
      setActiveMenu('service');
    } else if (path.startsWith('/team')) {
      setActiveMenu('team');
    } else if (path.startsWith('/contact-us')) {
      setActiveMenu('contact');
    } else {
      setActiveMenu(null);
    }
  }, [location]);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };


  return (
   
        <div className="font-roboto mt-3 cursor-pointer text-black">
            <nav className="space-x-8 hidden lg:flex items-center text-center text-base text-md">
               
                <div 
                    onMouseEnter={() => handleMenuHover('aboutNav')}
                    onMouseLeave={() => handleMenuHover(null)}
                >
                    <Link to="/#about">
                        <p className={`${(activeMenu === 'aboutNav' || activeMenu === 'about') ? 'opacity-60' : 'text-black'} pb-3`}>About</p>
                    </Link>
                </div>

                <div
                    onMouseEnter={() => handleMenuHover('servicesNav')}
                    onMouseLeave={() => handleMenuHover(null)}
                >
                    <p className={`${(activeMenu === 'servicesNav' || activeMenu === 'service') ? 'opacity-60' : 'text-black'} pb-3`}>Services</p>
                    {activeMenu === 'servicesNav' && (
                    <div className="absolute bg-white shadow text-left p-4 rounded-lg">
                        <ul>
                            <li className="hover:text-gray-500">
                                <Link to="/#services">
                                <p>Hardware Maintenance</p>
                                </Link>
                            </li>
                            <li className="hover:text-gray-500 pt-5">
                                <Link to="/#services">
                                <p>Software Maintenance</p>
                                </Link>
                            </li>
                            <li className="hover:text-gray-500 pt-5">
                                <Link to="#services">
                                <p>Device Sells</p>
                                </Link>
                            </li>
                            <li className="hover:text-gray-500 pt-5">
                                <Link to="/#services">
                                <p>Consulting</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    )}
                </div>

                <div 
                    onMouseEnter={() => handleMenuHover('teamNav')}
                    onMouseLeave={() => handleMenuHover(null)}
                >
                    <Link to="/#team">
                        <p className={`${(activeMenu === 'teamNav' || activeMenu === 'team') ? 'opacity-60' : 'text-black'} pb-3`}>Our Hive</p>
                    </Link>
                </div>

                <div 
                    onMouseEnter={() => handleMenuHover('contactNav')}
                    onMouseLeave={() => handleMenuHover(null)}
                >
                    <Link to="/contact-us">
                        <p className={`${(activeMenu === 'contactNav' || activeMenu === 'contact') ? 'opacity-60' : 'text-black'} pb-3`}>Contact Us</p>
                    </Link>
                </div>

                <Link to='/contact-us'><button className='bg-blue-500 text-white px-5 py-2 rounded-[20px] mb-3'>Book a Repair</button></Link>

            </nav>

        </div>
  
  );
};

export default Menu;




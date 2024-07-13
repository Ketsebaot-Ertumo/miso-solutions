import React, { useState } from 'react';
import logo from '../images/miso-new.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuNav from '../components/Menu';


export default function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [serviceMenu, setServiceMenuOpen] = useState(null);
  
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setServiceMenuOpen(null);
  };

  const handleOpenServiceMenu = (event) => {
    setServiceMenuOpen(event.currentTarget);
  };

  const handleCloseServiceMenu = () => {
    setServiceMenuOpen(null);
  };
 

  
return (
        <>

          <header className="font-roboto flex items-center justify-between px-5 sm:px-10 text-black fixed z-40 bg-gray-300 w-full h-[44px] md:h-[60px]">
        
              <Link to='/'>
                <div className='flex items-center gap-5'>
                  <img src={logo} className="w-8 sm:w-10 sm:h-10 hover:text-gray-500" alt="logo" />
                  <p className='hidden sm:flex'>Miso Solutions</p>
                </div>
              </Link>
          
              <MenuNav />

              <div className="lg:hidden">
                  <div className="mr-2 p-5 pr-0" onClick={handleOpenMenu}>
                    <MenuIcon />
                  </div> 
        
                  <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleCloseMenu}
                      PaperProps={{
                        style: {
                          maxHeight: '100%',
                          height: '100%',
                          marginTop: '15px',
                          marginLeft: '15px'
                        },
                      }}
                  >

                      <MenuItem>
                          <div className='mb-2 ml-[100px]'>
                            <IconButton edge="start" color="inherit" onClick={handleCloseMenu} aria-label="close">
                                  <CloseIcon />
                            </IconButton>
                          </div>
                      </MenuItem>
                      

                      <Link to="/#about">
                          <MenuItem>
                              <Typography textAlign="center">
                                  <div className={`hover:text-blue`}>About Us</div>
                              </Typography>
                          </MenuItem>
                      </Link>

                        
                      <MenuItem onClick={handleOpenServiceMenu}>
                          <Typography textAlign="center">
                            <div className={`${serviceMenu ? 'text-blue' : ''} hover:text-blue`}>Services</div>
                          </Typography>
                      </MenuItem>

                            <Menu
                              anchorEl={serviceMenu}
                              open={Boolean(serviceMenu)}
                              onClose={handleCloseServiceMenu}
                              PaperProps={{
                                style: {
                                  marginLeft: '-135px'
                                },
                              }}
                            >

                              <Link to="/#services">
                                <MenuItem onClick={handleCloseServiceMenu}>
                                  <Typography textAlign="center">
                                    <div className='hover:text-blue'>Hardware Maintenance</div>
                                  </Typography>
                                </MenuItem>
                              </Link>

                              <Link to="/#services">
                                <MenuItem onClick={handleCloseServiceMenu}>
                                  <Typography textAlign="center">
                                    <div className='hover:text-blue'>Software Maintenance</div>
                                  </Typography>
                                </MenuItem>
                              </Link>

                              <Link to="/#services">
                                <MenuItem onClick={handleCloseServiceMenu}>
                                  <Typography textAlign="center">
                                    <div className='hover:text-blue'>Device Sells</div>
                                  </Typography>
                                </MenuItem>
                              </Link>

                              <Link to="/#services">
                                <MenuItem onClick={handleCloseServiceMenu}>
                                  <Typography textAlign="center">
                                    <div className='hover:text-blue'>Consulting</div>
                                  </Typography>
                                </MenuItem>
                              </Link>

                            </Menu>

                      <Link to="/#team">
                        <MenuItem>
                          <Typography textAlign="center">
                            <div className={`hover:text-blue`}>Our Hive</div>
                          </Typography>
                        </MenuItem>
                      </Link>

                      <Link to="/contact-us">
                        <MenuItem>
                          <Typography textAlign="center">
                            <div className='hover:text-blue'>Contact Us</div>
                          </Typography>
                        </MenuItem>
                      </Link>

                  </Menu>
    
              </div>

          </header>
      </>
    )
}
// export default Navbar;












// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../images/miso-new.png';
// import { Close, Menu } from '@mui/icons-material';
// import MenuNav from './Menu';
// import { IconButton } from '@mui/material';


// function Navbar() {

//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuHover = (menu) => {
//     setActiveMenu(menu);
//   };

//   const handleNavMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
    
//     // <div className={`flex justify-between items-center font-roboto px-5 sm:px-10 py-5 text-black fixed z-40 w-full h-[44px] md:h-[60px] ${scrolled ? 'bg-gray-300' : 'bg-transparent'}`}>
//     <div className="font-roboto flex items-center justify-between px-5 sm:px-10 text-black fixed z-40 bg-gray-300 w-full h-[44px] md:h-[60px]">
        
//         <Link to='/'>
//           <div className='flex items-center gap-5'>
//             <img src={logo} className="w-10 h-10 hover:text-gray-500" alt="logo" />
//             <p className='hidden sm:flex'>Miso Solutions</p>
//           </div>
//         </Link>

//         <MenuNav />

//         <div className="lg:hidden">

//           <div
//               className="pr-5"
//               onClick={handleNavMenu}
//             >
//               <Menu className='lg:mb-3' />

//           {(isMenuOpen) && (
//             <div
//               className="absolute bg-white shadow text-left rounded-lg p-3 h-screen ml-[-90px] w-full top-0"
//              >
//               <div className='mb-3 ml-[100px]'>
//                   <IconButton
//                         edge="start"
//                         color="inherit"
//                         onClick={handleNavMenu}
//                         aria-label="close"
//                       >
//                         <Close className='black' />
//                   </IconButton>
//               </div>

//                     <div
//                         onMouseEnter={() => handleMenuHover('aboutNav')}
//                         onMouseLeave={() => handleMenuHover(null)}
//                       >
//                         <p className={`${activeMenu === 'aboutNav' ? 'text-gray-500' : 'text-black'} pb-3`}>About</p>
//                       </div>

//                       <div
//                           onMouseEnter={() => handleMenuHover('servicesNav')}
//                           onMouseLeave={() => handleMenuHover(null)}
//                         >
//                           <p className={`${activeMenu === 'servicesNav' ? 'text-gray-500' : 'text-black'} pb-3`}>Services</p>
//                           {activeMenu === 'servicesNav' && (
//                             <div className="absolute bg-white shadow text-left p-4 rounded-lg ml-[-160px]">
//                               <ul>
//                                 <li className="hover:text-gray-500">
//                                     <Link to="#services">
//                                       <p>Hardware Maintenance</p>
//                                     </Link>
//                                 </li>
//                                 <li className="hover:text-gray-500 pt-5">
//                                     <Link to="/#services">
//                                       <p>Software Maintenance</p>
//                                     </Link>
//                                 </li>
//                                 <li className="hover:text-gray-500 pt-5">
//                                     <Link to="/#services">
//                                       <p>Sells</p>
//                                     </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           )}
//                   </div>

//                   <div 
//                     onMouseEnter={() => handleMenuHover('portfolioNav')}
//                     onMouseLeave={() => handleMenuHover(null)}
//                   >
//                       <Link to="/portfolio"><p className={`${activeMenu === 'portfolioNav' ? 'text-gray-500' : 'text-black'} pb-3`}>Portfolio</p></Link>
//                   </div>

//                   <div 
//                     onMouseEnter={() => handleMenuHover('contactNav')}
//                     onMouseLeave={() => handleMenuHover(null)}
//                   >
//                       <Link to="/contact-us"><p className={`${activeMenu === 'contactNav' ? 'text-gray-500' : 'text-black'}`}>Contact Us</p></Link>
//                   </div>

//             </div>
//             )}

//         </div>
//         </div>
//         {/* </div> */}
        
//       </div>
//   );
// }

// export default Navbar;


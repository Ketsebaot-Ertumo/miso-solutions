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
                  <p className='hidden sm:flex'>MISO Solutions</p>
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
                                    <div className='hover:text-blue'>Iphone Unlock</div>
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

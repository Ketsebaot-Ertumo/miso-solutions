import React from 'react';
import logo from '../images/miso-new.png';
import { Email, Facebook, Instagram, Telegram, YouTube } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <>
            <div className='bg-gray-300 font-roboto'>

                <div className='hidden md:flex justify-between p-10 lg:px-20 text-lg'>
                    <div className='justify-center items-center w-[30%]'>
                        <img className='ml-[75px] w-10 lg:w-[50px] pt-10' src={logo} alt='Logo' />
                        <div className='text-lg font-inter mt-5'>                             
                            <p>“Reviving Your Tech Life”</p>
                        </div>
                        
                            <div className='flex items-center justify-between text-lg font-inter mt-5 '>
                                <div className='flex items-center justify-center gap-5 '>                                 <a href="mailto:misoabe1221@gmail.com"><Email /></a>
                                <a href='https://www.youtube.com/watch?v=Zor6RzBbrdg&ab_channel=MisoInfo'><YouTube /></a>
                                <a href='https://www.facebook.com/profile.php?id=100084174267768'><Facebook /></a>
                                <a href='https://www.instagram.com/miso1solution/'><Instagram /></a>
                                <a href='https://t.me/dndjdd/'><Telegram /></a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='font-bold text-2xl pb-5 pt-10'>Services</p>
                        <div className='opacity-60'>
                            <Link to='/#services'><p className='hover:text-gray-500'>Hard Maintenance</p></Link>
                            <Link to='/#services'><p className='py-1 hover:text-gray-500'>Software Maintenance</p></Link>
                            <Link to='/#services'><p className='py-1 hover:text-gray-500'>Consulting</p></Link>
                            <Link to='/#services'><p className='hover:text-gray-500'>Sells</p></Link>
                        </div>
                    </div>

                    <div className='pr-10'>
                        <p className='font-bold text-2xl pb-5 pt-10'>Company</p>
                        <div className='opacity-60'>
                            <Link to='/#about-us'><p className='hover:opacity-60'>About Us</p></Link>
                            <Link to='/#services'><p className='py-1 hover:opacity-60'>Services</p></Link>
                            <Link to='/#our-team'><p className='py-1 hover:opacity-60'>Our Hives</p></Link>
                            <Link to='/contact-us'><p className='hover:opacity-60'>Contact Us</p></Link>
                        </div>
                    </div>

                    <div>
                        <p className='font-bold text-2xl pb-5 pt-10'>Social</p>
                        <div className='opacity-60'>
                            <a className='hover:opacity-60' href='mailto:misoabe1221@gmail.com'><p>Email</p></a>
                            <a className='hover:opacity-60 py-1' href='https://www.youtube.com/watch?v=Zor6RzBbrdg&ab_channel=MisoInfo'><p>YouTube</p></a>
                            <a href='https://t.me/dndjdd/' className='pt-3 pb-1 hover:opacity-60'><p>Telegram</p></a>
                            <a className='hover:opacity-60 pt-1' href='https://www.facebook.com/profile.php?id=100084174267768'><p>Facebook</p></a>
                            <a className='hover:opacity-60' href='https://www.instagram.com/miso1solution'><p>Instagram</p></a>
                        </div>
                    </div>

                </div>

                <div className="text-center sm:text-right opacity-60 md:text-lg font-normal font-['Inter'] sm:mr-20 pt-5 pb-8 sm:py-10">
                    <p>© <span>{new Date().getFullYear()}</span> Miso Solutions. All rights reserved.</p>
                </div>

            </div>
        </>
);
};

export default Footer;










// import React from 'react';
// import logo from '../images/miso-new.png';
// import { Link } from 'react-router-dom';
// import { Email, Facebook, Instagram, Telegram, YouTube } from '@mui/icons-material';


// export default function Footer () {

//     return (
//         <>
//             <div className='bg-gray-300'>

//             <div className='hidden lg:flex justify-between items-center p-10 pl-20 pr-20 xl:pl-40 xl:pr-40 text-lg'>
//                 <div className='justify-center items-center w-[30%]'>
//                         <img className='ml-[75px] w-10 lg:w-[50px]' src={logo} alt='Logo' />
//                         <div className='text-lg font-inter mt-5'>
//                             <p>“Reviving Your Tech Life”</p>
//                         </div>
                        
//                         <div className='flex items-center justify-between text-lg font-inter mt-5 '>
//                             <div className='flex items-center justify-center gap-5 '>
//                                 <a href="mailto:misoabe1221@gmail.com"><Email /></a>
//                                 <a href='https://www.youtube.com/watch?v=Zor6RzBbrdg&ab_channel=MisoInfo'><YouTube /></a>
//                                 <a href='https://www.facebook.com/profile.php?id=100084174267768'><Facebook /></a>
//                                 <a href='https://www.instagram.com/miso1solution/'><Instagram /></a>
//                                 <a href='https://t.me/dndjdd/'><Telegram /></a>
//                             </div>
//                         </div>
//                 </div>

//                 <div className='font-roboto items-end text-center mt-[5%] text-lg'>
//                     <div className="border-t border-black w-[100%]"></div>
//                     <div className='flex justify-center gap-5 pt-5'>
//                         <Link to='/#about' className='hover:opacity-60'><p>About Us</p></Link>
//                         <Link to='/#team' className='hover:opacity-60'><p>Our Hive</p></Link>
//                         <Link to='/services/#our' className='hover:opacity-60'><p>Services</p></Link>
//                         <Link to='/contact-us' className='hover:opacity-60'><p>Contact Us</p></Link>
//                     </div>
//                 </div>

//             </div>

//             <div className="bg-gray-300 text-center sm:text-right text-black text-opacity-40 md:text-md font-normal font-['Inter'] sm:pr-20 py-4 sm:py-5">
//                 <p>© <span>{new Date().getFullYear()}</span> Miso Solutions. All rights reserved.</p>
//             </div>

//             </div>
//         </>
// );
// };


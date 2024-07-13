import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
// import home from '../images/home.jpeg';
import miso from '../images/miso.png';
import { Devices, Email, PeopleSharp, Telegram } from '@mui/icons-material';
import about from '../images/about.jpeg';


const Home = () => {

    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
          const section = document.querySelector(hash);
          if (section) {
            const elementOffsetTop = section.offsetTop;
            // const windowHeight = window.innerHeight;
            const shiftAmount = 80;
            const scrollPosition = elementOffsetTop - shiftAmount;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
          }
        }
      }, [location]);

    
    return(
        <>

            <Navbar />
            
            <div className='pt-10 font-roboto'>

                <div className="bg-contact-us bg-no-repeat bg-cover py-14 text-center font-roboto text-white py-[210px] sm:py-[220px]">
                    <div className="absolute top-0 bg-black bg-opacity-50 w-full h-[460px] py-[120px] md:h-[480px] sm:py-40">
                        <div className='bg-white rounded-[20px] text-blue-500 sm:text-lg px-3 py-1 sm:px-4 inline-block'>Together We Can Fix Anything!</div>
                        <div className='font-semibold text-xl sm:text-4xl p-5'>We Provide Fast Computer & <br/> Phone Repair Service</div>
                        <p>Lorepsum Lorepsum Lorepsum LorepsumLorepsum Lorepsum Lore Lorepsum <br/>Lorepsum LorepsumLorepsum Lorepsum.</p>
                        <div className='flex justify-center gap-5 text-white sm:p-5 p-5'>
                            <Link to='/#services'><button className='bg-white text-blue-500 px-5 py-2 rounded-[20px]'>Our Services</button></Link>
                            <Link to='/contact-us'><button className='bg-blue-600 px-5 py-2 rounded-[20px]'>Repair Now</button></Link>
                        </div>
                    </div>
                </div>

                <div className='bg-white-gray '>
                    <div className='p-5 sm:p-10 pt-10'>
                        <div id='about' className='py-5 sm:pb-10 text-3xl sm:text-5xl font-bold'>About Us</div>
                        <div className='lg:flex lg:justify-between lg:gap-20'>
                            <div className='lg:w-[50%] text-justify'>
                                <div>
                                    At Miso Solution, we're dedicated to empowering our customers with seamless tech solutions. As your one-stop-shop for computer and mobile device care, we blend expert maintenance and reliable sales to keep you connected and productive.
                                </div>
                                <div className='py-5'>
                                    Our skilled technicians breathe new life into ailing devices, whether it's a stubborn laptop or a temperamental smartphone. From thorough diagnostics to meticulous repairs, we leave no circuit unturned in restoring your tech to peak performance.
                                </div>
                                <div>
                                    But we don't stop there. Miso Solution also offers a curated selection of the latest 
                                    computers, tablets, and smartphones - all carefully vetted to meet our standards of quality and value. Our knowledgeable sales team is here to guide you in finding the perfect device to 
                                    suit your needs and budget.
                                </div>
                                <div className='pt-5'>
                                    With Miso Solution, you can trust that your technology is in good hands. We are committed to being the reliable partner in your digital journey, empowering you to 
                                    stay connected, productive, and one step ahead. Experience the Miso difference today.
                                </div>
                            </div>
                            <div className='flex pt-5 lg:pt-0'>
                                <img className='lg:h-[400px]' src={about} alt='' />
                            </div>
                        </div>
                    </div>

            
                    <div className='bg-gray-200 p-5 py-10 text-center'>
                        <div id='services' className='md:pt-10 pb-5 text-3xl sm:text-5xl font-bold'>Our Services</div>
                        <div>Lorepsum lipsun Lorepsumlipsun lipsun Lorepsum lipsun Lorepsumlipsun</div>
                        <div>Lorepsum lipsun Lorepsumlipsun Lorepsum lipsun.</div>
                        <div>-------------------</div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-10 md:pt-20 gap-5 md:gap-10 mx-10'>
                            <div className='bg-gray-100 rounded-[20px] p-5 shadow-xl'>
                                <div className='inline-block p-3 rounded-full bg-gray-200 my-3'><Devices/></div>
                                <div className='font-bold text-lg py-2'>Hardware Maintenance</div>
                                <div className='md:w-60'>We have hardware maintenance for mobile and comupters for mobile and comupters.</div>
                            </div>

                            <div className='bg-gray-100 rounded-[20px] p-5 shadow-xl'>
                                <div className='inline-block p-3 rounded-full bg-gray-200 my-3'><Devices /></div>
                                <div className='font-bold text-lg py-2'>Software Maintenance</div>
                                <div className='md:w-60'>We have hardware maintenance for mobile and comupters for mobile and comupters.</div>
                            </div>

                            <div className='bg-gray-100 rounded-[20px] p-5 shadow-xl'>
                                <div className='inline-block p-3 rounded-full bg-gray-200 my-3'><Devices /></div>
                                <div className='font-bold text-lg py-2'>Device Sells</div>
                                <div className='md:w-60'>We have hardware maintenance for mobile and comupters for mobile and comupters.</div>
                            </div>

                            <div className='bg-gray-100 rounded-[20px] p-5 shadow-xl'>
                                <div className='inline-block p-3 rounded-full bg-gray-200 my-3'><PeopleSharp /></div>
                                <div className='font-bold text-lg py-2'>Consulting</div>
                                <div className='md:w-60'>We have hardware maintenance for mobile and comupters for mobile and comupters.</div>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 py-10'>
                        <div id='team' className='my-8 text-3xl sm:text-5xl text-center font-bold'>Meet Our Hive</div>
                        <div className='md:flex sm:px-5 lg:px-60 items-center'>
                            <div className='md:pt-10 md:ml-10'>
                                <div className='font-semibold text-xl sm:text-2xl pb-5 md:py-5'>Founder</div>
                                <div className='lg:w-[70%] text-justify md:text-left'>I have built a business that offers comprehensive maintenance and support services for both mobile devices and computer software, catering to the needs of individuals and organizations through a team of skilled technicians, transparent pricing, fast turnaround times, and personalized attention.</div>
                            
                                <div className='flex gap-2 py-5'>
                                    <a href="mailto:misoabe1221@gmail.com"><Email /></a>
                                    <a href='https://t.me/dndjdd/'><Telegram /></a>
                                </div>
                            </div>
                        
                            <img className='h-80' src={miso} alt='Founder'/>
                        </div>
                    </div>
                </div>

            </div>
            
            <Footer /> 

    </>
    )
}

export default Home;
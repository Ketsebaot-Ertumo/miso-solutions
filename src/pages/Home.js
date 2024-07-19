import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
// import home from '../images/home.jpeg';
import miso from '../images/miso.png';
import { Devices, Email, PeopleSharp, PhoneIphone, Telegram } from '@mui/icons-material';
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
                        <div className='inline-block md:w-[600px] px-5'>We offer all-inclusive tech support for phones & computers related hardware & software. Services cover device repair, maintenance, optimization, and specialized tasks like iPhone unlocking.</div>
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
                                    At MISO Solution, we're dedicated to empowering our customers with seamless tech solutions. As your one-stop-shop for computer and mobile device care, we blend expert maintenance and reliable sales to keep you connected and productive.
                                </div>
                                <div className='py-5'>
                                    Our skilled technicians breathe new life into ailing devices, whether it's a stubborn laptop or a temperamental smartphone. From thorough diagnostics to meticulous repairs, we leave no circuit unturned in restoring your tech to peak performance.
                                </div>
                                <div>
                                    But we don't stop there. MISO Solution also offers a curated selection of the latest 
                                    computers, tablets, and smartphones - all carefully vetted to meet our standards of quality and value. Our knowledgeable sales team is here to guide you in finding the perfect device to 
                                    suit your needs and budget.
                                </div>
                                <div className='pt-5'>
                                    With MISO Solution, you can trust that your technology is in good hands. We are committed to being the reliable partner in your digital journey, empowering you to 
                                    stay connected, productive, and one step ahead. Experience the MISO difference today.
                                </div>
                            </div>
                            <div className='flex pt-5 lg:pt-0'>
                                <img className='lg:h-[400px]' src={about} alt='' />
                            </div>
                        </div>
                    </div>

            
                    <div className='bg-gray-200 p-5 py-10 text-center'>
                        <div id='services' className='md:pt-10 pb-5 text-3xl sm:text-5xl font-bold'>Our Services</div>
                        <div className='inline-block md:w-[600px]'>We have the expertise to diagnose issues, upgrade components, configure systems, and deliver tailored solutions to keep your technology running smoothly.</div>
                        <div>---------------------</div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-10 md:pt-20 gap-5 md:gap-10 mx-10'>
                            <div className='bg-gray-100 rounded-[20px] p-5 shadow-xl'>
                                <div className='inline-block p-3 rounded-full bg-gray-200 my-3'><Devices/></div>
                                <div className='font-bold text-lg py-2'>Hardware Maintenance</div>
                                <div className='md:w-60'>We have hardware maintenance for mobile and comupters for mobile and comupters.</div>
                            </div>

                            <div className='bg-gray-100 rounded-[20px] p-5 shadow-xl'>
                                <div className='inline-block p-3 rounded-full bg-gray-200 my-3'><Devices /></div>
                                <div className='font-bold text-lg py-2'>Software Maintenance</div>
                                <div className='md:w-60'>We have software maintenance for mobile and comupters.</div>
                            </div>

                            <div className='bg-gray-100 rounded-[20px] p-5 shadow-xl'>
                                <div className='inline-block p-3 rounded-full bg-gray-200 my-3'><Devices /></div>
                                <div className='font-bold text-lg py-2'>Device Sells</div>
                                <div className='md:w-60'>We have selling of mobile and comupters with affordible price.</div>
                            </div>

                            <div className='bg-gray-100 rounded-[20px] p-5 shadow-xl'>
                                <div className='inline-block p-3 rounded-full bg-gray-200 my-3'><PhoneIphone /></div>
                                <div className='font-bold text-lg py-2'>Iphone Unlock</div>
                                <div className='md:w-60'>We have iphone unlock services at any time.</div>
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

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.003927382069!2d37.781475773051405!3d7.35345371296662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b227223eb89ed9%3A0x6de69dcbe5f558a!2z4Yqg4Ymj4YuuIOGKq-GNjA!5e0!3m2!1sen!2set!4v1720730905570!5m2!1sen!2set" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="MISO Solutions"></iframe>

            
            <Footer /> 

    </>
    )
}

export default Home;
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import home from '../images/home.jpeg';
import miso from '../images/miso.png';
import { Email, Telegram } from '@mui/icons-material';
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
            
                <div className="text-black items-center justify-center text-center">
                    <img className='w-full h-[500px]' src={home} alt='' />
                    <div className="absolute top-0 bg-black bg-opacity-40 text-white w-full pt-24 md:pt-44 text-center pb-5 md:pb-20">
                        <div className='bg-white rounded-[20px] text-blue-500 sm:text-lg sm:py-1 sm:px-4 inline-block'>Together We Can Fix Anything!</div>
                        <div className='font-semibold text-xl sm:text-4xl p-5'>We Provide Fast Computer & <br/> Phone Repair Service</div>
                        <p>Lorepsum Lorepsum Lorepsum LorepsumLorepsum Lorepsum Lore Lorepsum <br/>Lorepsum LorepsumLorepsum Lorepsum.</p>
                        <div className='flex justify-center gap-5 text-white sm:p-5 p-5'>
                            <Link to='/services'><button className='bg-white text-blue-500 px-5 py-2 rounded-[20px]'>Our Services</button></Link>
                            <Link to='/contact-us'><button className='bg-blue-600 px-5 py-2 rounded-[20px]'>Repair Now</button></Link>
                        </div>
                    </div>
                </div>

            <div className='bg-white-gray '>
                <div className='p-5'>
                    <div id='about' className='py-5 text-2xl sm:text-5xl font-semibold'>About Us</div>
                    <div className='flex justify-between gap-10 sm:gap-20'>
                        <div className='w-[50%] text-justify'>
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
                        <div className=''>
                            <img className='h-[400px]' src={about} alt='' />
                        </div>
                    </div>
                    
                    

                </div>

                <div className='p-5 pb-10 text-center'>
                    <div id='team' className='my-10 text-2xl sm:text-5xl font-semibold'>Meet Our Hive</div>

                    <div className='flex justify-center gap-10 items-center mb-10'>
                        <div className='rounded-[60px] p-5 bg-white' style={{boxShadow: '0px 6px 10px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                            <img className='w-40' src={miso} alt='Founder'/>
                            <div className='pt-4 pb-1'>Misgana Abera</div>
                            <div className='flex justify-center gap-2'>
                                <a href="mailto:misoabe1221@gmail.com"><Email /></a>
                                <a href='https://t.me/dndjdd/'><Telegram /></a>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <div className='font-semibold text-xl p-2'>Founder</div>
                            <div className='text-justify'>Lorepsum Lorepsum Lorepsum LorepsumLorepsum Lorepsum LorepsumLorepsum Lorepsum Lorepsum Lorepsum Lorepsum LorepsumLorepsum Lorepsum LorepsumLorepsum Lorepsum Lorepsum Lorepsum Lorepsum Lorepsum Lorepsum LorepsumLorepsum Lorepsum LorepsumLorepsum Lorepsum Lorepsum Lorepsum Lorepsum LorepsumLorepsum Lorepsum.</div>
                        </div>
                    </div>

                    <div className='flex justify-center gap-10 mt-20'>
                        <div className='rounded-[20px] p-5 bg-white' style={{boxShadow: '0px 6px 10px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                            <img className='w-40' src={miso} alt='Founder'/>
                            <div className='pt-4 pb-1'>Misgana Abera</div>
                            <div className='flex justify-center gap-2'>
                                <a href="mailto:misoabe1221@gmail.com"><Email /></a>
                                <a href='https://t.me/dndjdd/'><Telegram /></a>
                            </div>
                        </div>

                        <div className='rounded-[20px] p-5 bg-white' style={{boxShadow: '0px 6px 10px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                            <img className='w-40' src={miso} alt='Founder'/>
                            <div className='pt-4 pb-1'>Misgana Abera</div>
                            <div className='flex justify-center gap-2'>
                                <a href="mailto:misoabe1221@gmail.com"><Email /></a>
                                <a href='https://t.me/dndjdd/'><Telegram /></a>
                            </div>
                        </div>

                        <div className='rounded-[20px] p-5 bg-white' style={{boxShadow: '0px 6px 10px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                            <img className='w-40' src={miso} alt='Founder'/>
                            <div className='pt-4 pb-1'>Misgana Abera</div>
                            <div className='flex justify-center gap-2'>
                                <a href="mailto:misoabe1221@gmail.com"><Email /></a>
                                <a href='https://t.me/dndjdd/'><Telegram /></a>
                            </div>
                        </div>

                        <div className='rounded-[20px] p-5 bg-white' style={{boxShadow: '0px 6px 10px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
                            <img className='w-40' src={miso} alt='Founder'/>
                            <div className='pt-4 pb-1'>Misgana Abera</div>
                            <div className='flex justify-center gap-2'>
                                <a href="mailto:misoabe1221@gmail.com"><Email /></a>
                                <a href='https://t.me/dndjdd/'><Telegram /></a>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
            </div>
            
            <Footer /> 

        </>
    )
}

export default Home;
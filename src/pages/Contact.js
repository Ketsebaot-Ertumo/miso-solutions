// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// // import contact from "../images/contact.png";
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { Email, Facebook, Instagram, Phone, Smartphone, Telegram, YouTube } from '@mui/icons-material';




// const Contact= () => {

//     const url = process.env.REACT_APP_url;

//     // Create a global Axios instance with the desired default configuration
//     axios.defaults.withCredentials = true;

//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);
      

//     const [formData, setFormData] = useState({
//         nameInput: '',
//         emailInput: '',
//         phoneInput: '',
//         companyInput: '',
//         servicesInput: '',
//         scheduleInput: '',
//         projectInput: ''
//       });
    
//       const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevFormData) => ({
//           ...prevFormData,
//           [name]: value,
//         }));
//       };
    
//       const handleSubmit = async (event) => {
//         event.preventDefault();
//         console.log(formData)

//         //send form data with email
//         try {
//             const response = await axios.post(`${url}/send-email`, {formData});
//             if (response.status === 200) {
//               toast.success('Email sent successfully!');
//               console.log('Email sent successfully!')
//             } else {
//               toast.error(response.data.message || response.data.error);
//               console.log(response.data.message || response.data.error)
//             }
//           } catch (error) {
//             console.error(error);
//             toast.error('Error occurred while sending email');
//           }
        
    
//         // Clear the form inputs
//         setFormData({
//             nameInput: '',
//             emailInput: '',
//             phoneInput: '',
//             companyInput: '',
//             servicesInput: '',
//             scheduleInput: '',
//             projectInput: ''
//         });
//       };


//     return (
//         <>
        
//           <Navbar  />

//             <div className={`bg-frame1 bg-white bg-no-repeat bg-right-top pt-14`}>

//                 <img src='' alt='Contact-us' />
//                 <div className='pt-10 sm:pb-20 p-5 text-black-500 font-100 sm:text-6xl font-medium text-4xl'>
//                     <p className='sm:pb-8'>Let's Revive </p>
//                     <p>Your Devices!</p>
//                 </div>
//                 <p className='text-justify pl-5 mr-1 font-medium sm:text-lg font-roboto'>Let us help you get greater services.<br/>Fill out the following form and we will get back to you.</p>
        
//                 <div className="md:flex mt-5 sm:mt-10">

//                      <form onSubmit={handleSubmit}>
//                             <div className="sm:m-5 p-5 sm:mt-10 pt-10 w-full sm:w-[120%] bg-gray-600 rounded border border-blue-700 border-opacity-5">
//                                 <div className=" mb-10 flex relative">
//                                     <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">01</div>
//                                     <div className='ml-[18%] sm:ml-[10%] w-[120%]'>
//                                         <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">What is your name?</div>
//                                         <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
//                                             <input 
//                                                 type="text" 
//                                                 id="name-input" 
//                                                 placeholder="Type your full name" 
//                                                 className='bg-transparent border-b border-white pb-4 w-full'
//                                                 name="nameInput"
//                                                 value={formData.nameInput}
//                                                 onChange={handleInputChange} 
//                                                 required
//                                             />
//                                         </div>
//                                     </div>   
//                                 </div>
         
//                                 <div className=" mb-10 flex relative">
//                                     <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">02</div>
//                                     <div className='ml-[18%] sm:ml-[10%] w-[120%]'>
//                                         <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">What is your phone number?</div>
//                                         <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
//                                             <input 
//                                                 type="tel" 
//                                                 id="phone-input"
//                                                 placeholder="+251919765445" 
//                                                 className='bg-transparent border-b border-white pb-4 w-full'
//                                                 name="phoneInput"
//                                                 value={formData.phoneInput}
//                                                 onChange={handleInputChange} 
//                                                 required
//                                             />
//                                         </div>
//                                     </div>   
//                                 </div>

//                                 <div className=" mb-10 flex relative">
//                                     <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">03</div>
//                                     <div className='ml-[18%] sm:ml-[10%] w-[120%]'>
//                                         <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">What services are you looking for?</div>
//                                         <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
//                                             <select id="services-input" name="servicesInput" value={formData.servicesInput} onChange={handleInputChange}  required className='bg-gray-600 border-b border-white pb-4 w-full'>
//                                                 <option value="">choose from a list here</option>
//                                                 <option value="Hardware Maintenance">Hardware Maintenance</option>
//                                                 <option value="Software Maintenance">Software Maintenance</option>
//                                                 <option value="Sales">Sales</option>
//                                                 <option value="Other">Other</option>
//                                             </select>
//                                         </div>
//                                         {formData.servicesInput === 'Other' && ( // Conditionally render the input field for "Other"
//                                             <div>
//                                                 <input
//                                                     type="text"
//                                                     id="services-input-other"
//                                                     name="servicesInputOther"
//                                                     placeholder='Please enter your services looking for:'
//                                                     value={formData.servicesInputOther}
//                                                     onChange={handleInputChange}
//                                                     className="text-white text-opacity-60 font-normal font-['Inter'] pt-5 bg-transparent border-b border-white pb-4 pt-5 ml-10 w-full"
//                                                     required
//                                                 />
//                                             </div>
//                                         )}
//                                     </div>   
//                                 </div>
//                                 <div className=" mb-10 flex relative">
//                                     <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">04</div>
//                                     <div className='ml-[18%] sm:ml-[10%] w-[120%]'>
//                                         <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">What is your available schedule to come in-person?</div>
//                                         <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
//                                             <input 
//                                                 type="date" 
//                                                 id="schedule-input" 
//                                                 className="text-white text-opacity-60 font-normal font-['Inter'] bg-transparent border-b border-white w-full pb-4" 
//                                                 name="scheduleInput"
//                                                 value={formData.scheduleInput}
//                                                 onChange={handleInputChange}
//                                                 required
//                                             />
//                                         </div>
//                                     </div>   
//                                 </div>
//                                 <div className=" mb-10 flex relative">
//                                     <div className="absolute w-12 h-7 rounded-2xl border border-white text-white font-medium font-['Inter'] text-center justify-center">05</div>
//                                     <div className='ml-[18%] sm:ml-[10%] w-[120%]'>
//                                         <div className="text-white text-lg sm:text-2xl font-normal font-['Inter']">Tell us about the problem?</div>
//                                         <div className="text-white text-opacity-60 font-normal font-['Inter'] pt-5">
//                                             <input 
//                                                 type="text" 
//                                                 id="project-input" 
//                                                 placeholder="please type the detail(if you have a problem)" 
//                                                 className='bg-transparent border-b border-white pb-4 w-full'
//                                                 name="projectInput"
//                                                 value={formData.projectInput}
//                                                 onChange={handleInputChange}
//                                                 required
//                                             />
//                                         </div>
//                                     </div>   
//                                 </div>

//                                 <div className="flex justify-center items-center my-10 mt-20 xs:mb-2 sm:mb-2">
//                                     <button className="text-center bg-blue-500 text-white rounded-lg w-60 h-10 font-dm-serif-text text-2xl">Submit</button>
//                                 </div>
//                             </div>
//                         </form>

//                         <div className='p-5 mt-10 sm:ml-40 font-medium font-roboto'>
//                             <p className='text-blue-600 text-xl text-opacity-80'>CALL US</p>
//                             <div className='p-5'>
//                                 <div className='flex gap-2'><Phone />+251992228731</div>
//                                 <div className='flex gap-2'><Smartphone />+251992228731</div>
//                                 <div className='flex gap-2'><Email /><a href="mailto:misoabe1221@gmail.com">contact@miso.com</a></div>
//                             </div>

//                             <p className='text-blue-600 text-xl text-opacity-80'>ADDRESS </p>
//                             <div className='p-5'>
//                                 <p>Menariya, Main Road<br/>Doyogena, Ethiopia</p>
//                             </div>

//                             <div className='flex items-center justify-between text-lg font-inter mt-10 mb-20'>
//                                 <a href="mailto:misoabe1221@gmail.com"><Email /></a>
//                                 <a href='https://www.youtube.com/watch?v=Zor6RzBbrdg&ab_channel=MisoInfo'><YouTube /></a>
//                                 <a href='https://www.facebook.com/profile.php?id=100084174267768'><Facebook /></a>
//                                 <a href='https://www.instagram.com/miso1solution/'><Instagram /></a>
//                                 <a href='https://t.me/dndjdd/'><Telegram /></a>
//                             </div>
//                         </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Contact
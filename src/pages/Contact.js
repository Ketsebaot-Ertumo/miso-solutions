import { Call, Mail, Telegram } from "@mui/icons-material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <>
            <Navbar/>

            <div className="bg-contact bg-no-repeat bg-cover py-14 text-center font-roboto text-white py-[150px] md:py-[180px]">
                <div className="absolute top-0 bg-black bg-opacity-50 w-full h-[300px] py-24 md:h-[360px] sm:py-40">
                    <div className="text-5xl font-[inter] font-bold text-white pb-5">Get In Touch</div>
                    <div className="inline-block md:w-[600px]">Reach out to our team of tech experts for comprehensive support with any device or software issues you're experiencing.</div>
                </div>
            </div>

            <div className="flex overflow-x-auto scrollbar-hide gap-10 p-10 bg-gray-200 text-center px-10 sm:px-5 lg:px-60 font-roboto">
                <div className="rounded-[18px] p-5 items-center shadow-xl bg-white">
                    <Link to='tel:+251992228731' className="text-green-600"><Call /></Link>
                    <div className="pt-5 w-[200px] text-blue-500">+251992228731</div>
                    {/* <div>This is my number.</div> */}
                    <div>Call our support team.</div>
                </div>

                <div className="rounded-[18px] p-5 items-center shadow-xl bg-white">
                    <Link to='mailto:misoabe1221@gmail.com' className="text-blue-600"><Mail /></Link>
                    <div className="pt-5 w-[200px] text-blue-500">misoabe1221@gmail.com</div>
                    <div>Email our support team.</div>
                </div>

                <div className="rounded-[18px] p-5 items-center shadow-xl bg-white">
                    <Link to='https://t.me/dndjdd/' className="text-blue-500"><Telegram /></Link>
                    <div className="pt-5 w-[200px] text-blue-500">https://t.me/dndjdd</div>
                    <div>Contact us on Telegram</div>
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.003927382069!2d37.781475773051405!3d7.35345371296662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b227223eb89ed9%3A0x6de69dcbe5f558a!2z4Yqg4Ymj4YuuIOGKq-GNjA!5e0!3m2!1sen!2set!4v1720730905570!5m2!1sen!2set" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="MISO Solutions"></iframe>

            <Footer />
        </>
    )
}

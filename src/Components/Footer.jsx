
import "../../public/line-bg.svg"
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import Logo from "../assets/Images/Logo.png";

const Footer = () => {
    return (
        <section className=" pt-2 w-full bg-gray-4">
            <div className="px-4 mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2 text-left">
                        <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center text-gray-2">
                            {/* <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
                            <rect x="3" y="1" width="7" height="12"></rect>
                            <rect x="3" y="17" width="7" height="6"></rect>
                            <rect x="14" y="1" width="7" height="6"></rect>
                            <rect x="14" y="11" width="7" height="12"></rect>
                            </svg> */}
                            <img className="h-[80px] mt-[5px]" src={Logo} alt="logo"/>

                            {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">OctaForge</span> */}
                        </a>
                        <div className="mt-6 lg:max-w-sm text-gray-2 font-roboto">
                            <p className="text-sm text-gray-800 font-roboto">
                            At OctaForge, we specialize in turning visionary ideas into impactful software products
                            </p>
                            <p className="mt-4 text-sm text-gray-800 font-roboto">
                            We are committed to accelerating digital transformation and delivering innovative solutions that drive business success.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm text-left text-gray-2">
                        <p className="text-base font-bold tracking-wide   text-gray-2 font-roboto">Contacts</p>
                        <div className="flex">
                            <p className="mr-1 text-gray-2 font-roboto">Phone:</p>
                            <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+94 12 345 6789</a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-2 font-roboto">Email:</p>
                            <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">info@octaforge.mail</a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-2 font-roboto">Address:</p>
                            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className=" font-roboto transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                            312 Lovely Street, NY
                            </a>
                        </div>
                    </div>
                    <div className="text-left text-gray-2">
                    <span className="text-base font-bold tracking-wide text-gray-900 font-roboto">Social</span>
                    <div className="flex items-center mt-1 space-x-3">
                        <a className="flex text-gray-3 hover:text-gray-2 transition-colors duration-300" href="#">
                            <BsLinkedin />
                        </a>
                        <a className="flex text-gray-3 hover:text-gray-2 transition-colors duration-300" href="#">
                            <BsFacebook />
                        </a>
                        <a className="flex text-gray-3 hover:text-gray-2 transition-colors duration-300" href="#">
                            <BsTwitterX />
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-500 font-roboto">
                    Follow us on social media to stay updated with our latest projects and insights.
                    </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t-2 border-gray-3 lg:flex-row text-gray-3">
                    <p className="text-sm text-gray-600 font-lato">
                    © Copyright 2024 OctaForge Inc. All rights reserved.
                    </p>
                    <ul className=" justify-center flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <a href="/" className="text-sm font-light font-lato  text-gray-3 hover:text-gray-2 transition-colors duration-300 ">F.A.Q</a>
                        </li>
                        <li>
                            <a href="/" className="text-sm font-light font-lato  text-gray-3 hover:text-gray-2 transition-colors duration-300">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/" className="text-sm font-light font-lato  text-gray-3 hover:text-gray-2 transition-colors duration-300">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
                </div>
        </section>
    );
}

export default Footer;


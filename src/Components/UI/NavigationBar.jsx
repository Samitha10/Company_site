import React,{useState} from "react";
import { BsLinkedin } from "react-icons/bs";

import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import OctaForgeLogo from "../../../public/OctaForgeLogo.png";

const NavigationBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <section className="relative mx-0 w-full">
            <nav className="flex justify-between bg-gray-900 backdrop-blur-sm text-white w-screen flex-wrap items-center opacity-100 top-0 bg-gray-4">
                <div className="px-5 xl:px-12 py-2 flex w-full items-center justify-between">
                    <a className="text-lg font-bold font-heading text-gray-3 pl-0" href="#">
                        <img className="ml-0 pl-0 h-10" src={OctaForgeLogo} alt="logo" />
                    </a>
                    <ul className="sm:hidden hidden md:flex lg:flex xl:flex px-4 mx-auto font-medium font-heading space-x-12">
                        <li><a className=" text-gray-3 hover:text-gray-2 transition-colors duration-300 font-Poppins" href="#">Home</a></li>
                        <li><a className=" text-gray-3 hover:text-gray-2 transition-colors duration-300 font-Poppins" href="#">Category</a></li>
                        <li><a className=" text-gray-3 hover:text-gray-2 transition-colors duration-300 font-Poppins" href="#">Collections</a></li>
                        <li><a className=" text-gray-3 hover:text-gray-2 transition-colors duration-300 font-Poppins" href="#">Contact Us</a></li>
                    </ul>
                    <div className="hidden xl:flex lg:flex md:flex items-center space-x-5">
                        <a className="flex items-center  text-gray-3 hover:text-gray-2 transition-colors duration-300" href="#">
                            <BsLinkedin />
                        </a>
                        <a className="flex items-center  text-gray-3 hover:text-gray-2 transition-colors duration-300" href="#">
                            <BsFacebook />
                        </a>
                        <a className="flex items-center  text-gray-3 hover:text-gray-2 transition-colors duration-300" href="#">
                            <BsTwitterX />
                        </a>
                    </div>
                    <button id="Menu" className="xl:hidden lg:hidden md:hidden self-right ml-0" onClick={toggleMenu}  >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-2 text-gray-3 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>        
                </div>
                <div className={`w-full px-5 xl:px-12 py-0 bg-gray-900 transform transition-all duration-200 ease-in-out ${
                    isMenuOpen ? "max-h-screen opacity-100" : "max-h-0  opacity-0 overflow-hidden"
                }`}>
                    <ul className="flex flex-col space-y-4 font-medium font-heading">
                        <li><a className="text-gray-3 hover:text-gray-2 transition-colors duration-300  font-Poppins" href="#">Home</a></li>
                        <li><a className="text-gray-3 hover:text-gray-2 transition-colors duration-300 font-Poppins" href="#">Category</a></li>
                        <li><a className="text-gray-3 hover:text-gray-2 transition-colors duration-300 font-Poppins" href="#">Collections</a></li>
                        <li><a className="text-gray-3 hover:text-gray-2 transition-colors duration-300 font-Poppins" href="#">Contact Us</a></li>
                    </ul>
                    <div className="flex justify-center mt-5 pb-6 items-center space-x-5">
                        <a className="flex items-center text-gray-3 hover:text-gray-2 transition-colors duration-300" href="#">
                            <BsLinkedin />
                        </a>
                        <a className="flex items-center text-gray-3 hover:text-gray-2 transition-colors duration-300" href="#">
                            <BsFacebook />
                        </a>
                        <a className="flex items-center text-gray-3 hover:text-gray-2 transition-colors duration-300" href="#">
                            <BsTwitterX />
                        </a>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default NavigationBar;






import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import OctaForgeLogo from "../../../public/OctaForgeLogo.png"



const NavigationBar = () => {
    return (
            // <div id="navigationBar" className="z-999 flex flex-wrap place-items-center opacity-98 top-0 bg-gradient-to-r from-purple-bg to-blue-bg">

            <section class="relative mx-[0px] w-full ">
                <nav class="flex justify-between bg-gray-900 backdrop-blur-sm text-white w-screen flex-wrap place-items-center  opacity-100 top-0 bg-gray-4 ">
                <div class="px-5 xl:px-12 py-2 flex w-full items-center">
                    <a class="text-lg font-bold font-heading text-gray-3 pl-0" href="#">
                        <img class="ml-0 pl-0 h-10" src="../../../public/OctaForgeLogo.png" alt="logo"/>
                    </a>
                    <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                    <li><a class="hover:text-gray-1 text-gray-2 font-Poppins" href="#">Home</a></li>
                    <li><a class="hover:text-gray-1 text-gray-2 font-Poppins"  href="#">Catagory</a></li>
                    <li><a class="hover:text-gray-1 text-gray-2 font-Poppins"  href="#">Collections</a></li>
                    <li><a class="hover:text-gray-1 text-gray-2 font-Poppins"  href="#">Contact Us</a></li>
                    </ul>
                    <div className="hidden xl:flex items-center space-x-5 ">
                    <a className="hover:text-gray-200 hover:text-gray-1 text-gray-2" href="#">
                        <BsLinkedin />
                    </a>
                    <a className="flex items-center hover:text-gray-200 hover:text-gray-1 text-gray-2" href="#">
                        <BsFacebook />
                    </a>
                    <a className="flex items-center hover:text-gray-200 hover:text-gray-1 text-gray-2" href="#">
                        <BsTwitterX />
                    </a>
                    </div>
                </div>
                 {/* Responsive navbar  */}
                <a class="xl:hidden flex mr-6 items-center" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span class="flex absolute -mt-5 ml-4">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                    </span>
                    </span>
                </a>
                <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
                </nav>
                
            
            
        </section>
            
    );
}

export default NavigationBar;
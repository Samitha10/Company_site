import React,{useState} from "react";
import { BsLinkedin } from "react-icons/bs";

import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import OctaForgeLogo from "../../../public/OctaForgeLogo.png";

const NavigationMenu = () => {

    return (

            <div className="container mx-auto p-4 bg-gray-100">
                <ul className={`flex-col px-4 mx-auto font-semibold font-heading space-y-4 mt-4 xl:flex xl:flex-row xl:space-y-0 xl:space-x-12 ${isMenuOpen ? '' : 'hidden'}`}>
                    <li><a className="flex items-center hover:text-gray-200 hover:text-gray-1 text-gray-2 transition-colors duration-300 font-Poppins" href="#">Home</a></li>
                    <li><a className="flex items-center hover:text-gray-200 hover:text-gray-1 text-gray-2 transition-colors duration-300 font-Poppins" href="#">Category</a></li>
                    <li><a className="flex items-center hover:text-gray-200 hover:text-gray-1 text-gray-2 transition-colors duration-300 font-Poppins" href="#">Collections</a></li>
                    <li><a className="flex items-center hover:text-gray-200 hover:text-gray-1 text-gray-2 transition-colors duration-300 font-Poppins" href="#">Contact Us</a></li>
                </ul>
            </div>
    );
};

export default NavigationMenu;






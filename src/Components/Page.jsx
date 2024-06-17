import React from "react";
import NavigationBar from './UI/NavigationBar';
import HomePage from "./Home";
import Footer from "./Footer";

const Page = () => {
    return (
        <main className="flex justify-center 
        items-center flex-col w-full ">
          <div className="w-full">
            <NavigationBar/>
            <HomePage/>
            <Footer/>
          </div>
        </main>
     
    );
}

export default Page;

import Logo from "../assets/Images/Logo.png";

const HomePage = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        width="4096"
        height="2160"
        preserveAspectRatio="none"
        viewBox="0 0 4096 2160"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <mask id="SvgjsMask1001">
            <rect width="4096" height="2160" fill="#ffffff"></rect>
          </mask>
        </defs>
        <g mask="url(#SvgjsMask1001)" fill="none">
          <rect width="4096" height="2160" x="0" y="0" fill="rgba(242, 242, 245, 1)"></rect>
          <path
            d="M4395.97 1089.01C4073.29 1123.19 3962.75 1884.11 3325.78 1823.41 2688.81 1762.71 2745.03 28.67 2255.59-314.32"
            stroke="rgba(136, 136, 165, 1)"
            strokeWidth="2"
          ></path>
          <path
            d="M4509.24 387.39C4118.1 400.85 3810.95 1018.14 3074.54 1013.79 2338.13 1009.44 2114.05-188.25 1639.84-278.7"
            stroke="rgba(136, 136, 165, 1)"
            strokeWidth="2"
          ></path>
          <path
            d="M4305.85 904.69C3760.45 930.99 3361.85 1885.53 2349.93 1876.69 1338.01 1867.85 1075.1 32.58 394.01-135.77"
            stroke="rgba(136, 136, 165, 1)"
            strokeWidth="2"
          ></path>
          <path
            d="M4862.03 858.1C4563.46 856.34 4280.34 588.1 3698.65 588.1 3116.96 588.1 3145.24 866.77 2535.26 858.1 1925.29 849.43 1750.49-80.77 1371.88-147.08"
            stroke="rgba(136, 136, 165, 1)"
            strokeWidth="2"
          ></path>
          <path
            d="M4773.16 880.54C4233.28 911.43 3614.08 1906.35 2863.15 1895.74 2112.22 1885.13 2345.82 286.29 1908.15-22.7"
            stroke="rgba(136, 136, 165, 1)"
            strokeWidth="2"
          ></path>
        </g>
      </svg>
      <div id="herotopic" className="relative z-10 flex h-full w-full justify-center items-center dark:bg-slate-800">
        <div className="mx-auto pt-[17vh] pb-[27vh] flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-4 lg:px-8">
          <div className="text-center items-center justify-center lg:top-[10px] ">
            <div className="flex justify-center ">
              <img className="h-[150px] self-center" src={Logo} alt="logo" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight dark:text-slate-200 sm:text-5xl md:text-6xl">
              <span className="flex flex-col xl:flex-row">
                <span className="mb-1 font-medium font-poppins text-blue-bg block xl:inline">
                  Where IT meets&nbsp;
                </span>
                <span className="bg-clip-text font-medium text-transparent text-blue-1 block xl:inline">
                  Imagination
                </span>
              </span>
              <div className="mt-2"></div>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
              OctaForge is a pioneering software startup offering cutting-edge solutions in web and mobile app
              development, AI, UI/UX design, and data analysis. We transform your ideas into innovative and scalable
              digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;





//Background Animation Added.


// import React from 'react';
// import BackgroundAnimation from './UI/BackgroundAnimation';

// const HomePage = () => {
//     return (
//         <section className="w-full h-screen relative">
//             <BackgroundAnimation className="w-100 h-screen relative">
//                 <div className="flex h-screen justify-center items-center dark:bg-slate-800 z-2">
//                     <div className="mx-auto mt-7 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-15 lg:px-8">
//                         <div className="text-center">
//                             <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
//                                 <span className="block xl:inline">
//                                     <span className="mb-1 block font-poppins text-blue-bg">
//                                         Empowering Ideas through
//                                     </span>
//                                     <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent text-blue-1">
//                                         Technology...
//                                     </span>
//                                 </span>
//                                 <div className="mt-2">
//                                     <span className="relative mt-3 whitespace-nowrap text-blue-600">
//                                         <span className="relative">Some text here</span>
//                                     </span>
//                                 </div>
//                             </h1>
//                             <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
//                                 Example is the AI Content Generator that helps you and your team break through creative blocks to create amazing, original content 10X faster.
//                             </p>
//                             <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
//                                 <div className="rounded-md shadow">
//                                     <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg" href="#">
//                                         Get started for free 🚀
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </BackgroundAnimation>
//         </section>
//     );
// }

// export default HomePage;

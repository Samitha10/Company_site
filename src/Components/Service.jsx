import { webimg, mobimg, aiimg, uiuximg, analysisimg } from "../assets";

const Service = () => {
    const Services = [
        {
            id: 1,
            img: webimg,
            topic: "Web Development",
            description: "Our web development team creates responsive and high-performance websites tailored to your business needs. We use the latest technologies and best practices to ensure your website is fast, secure, and scalable."
        },
        {
            id: 2,
            img: mobimg,
            topic: "Mobile App Development",
            description: "We design and develop mobile apps that provide exceptional user experiences on both Android and iOS platforms. Our apps are feature-rich, user-friendly, and optimized for performance and reliability."
        },
        {
            id: 3,
            img: aiimg,
            topic: "Artificial Intelligence",
            description: "Our AI solutions leverage advanced machine learning algorithms to provide insights, automate processes, and enhance decision-making. We help businesses integrate AI to drive innovation and efficiency."
        },
        {
            id: 4,
            img: uiuximg,
            topic: "UI/UX Design",
            description: "Our UI/UX design team creates intuitive and engaging interfaces that enhance user satisfaction and drive engagement. We focus on user-centered design principles to ensure your digital products are both beautiful and functional."
        },
        {
            id: 5,
            img: analysisimg,
            topic: "Data Analysis",
            description: "We offer comprehensive data analysis services to help you make data-driven decisions. Our team analyzes your data to uncover insights, trends, and opportunities that can propel your business forward."
        }
    ];

    return (
        <>
        <div className = "my-20">
            <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl my-6">
                <h3 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                    Our Services
                </h3>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-gray-600">
                Transforming Ideas into Reality with Cutting-Edge Solutions
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {Services.map(service => (
                    <div key={service.id} className="bg-white  rounded-lg shadow-xl dark:bg-gray-700  m-4 sm:m-6 md:m-10 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                        <div className="flex justify-center my-6">
                            <img
                                className="rounded-t-lg"
                                src={service.img}
                                alt={`${service.topic} image`}
                                width={150}
                                height={150}
                            />
                        </div>

                        <div className="p-5">
                            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                {service.topic}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            </div>
        </>
    );
};

export default Service;

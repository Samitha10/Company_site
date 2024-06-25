import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "87281f8e-d744-4f46-a5e2-13b5adcf1095");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <form onSubmit={onSubmit}>
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Send us a <br /> message</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input 
                className="w-full bg-gray-6 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                type="text" 
                name="first_name" 
                placeholder="First Name*" 
                required 
              />
              <input 
                className="w-full bg-gray-6 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                type="text" 
                name="last_name" 
                placeholder="Last Name*" 
                required 
              />
              <input 
                className="w-full bg-gray-6 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                type="email" 
                name="email" 
                placeholder="Email*" 
                required 
              />
              <input 
                className="w-full bg-gray-6 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                type="number" 
                name="phone" 
                placeholder="Phone*" 
                required 
              />
            </div>
            <div className="my-4">
              <textarea 
                name="message" 
                placeholder="Message*" 
                className="w-full h-32 bg-gray-6 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
                required 
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button 
                type="submit" 
                className="uppercase text-sm font-bold tracking-wide bg-blue-1 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
            <span className="block mt-4 text-green-500 text-2xl font-bold">{result}</span>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;

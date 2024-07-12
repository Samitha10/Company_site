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

    <div className="w-full p-8 my-12 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl shadow-2xl mx-auto text-center border-4 border-gray-4 lg:pl-[100px] lg:pr-[100px]">
    <form onSubmit={onSubmit} className="justify-center w-full">
      <div className="flex justify-center">
        <h1 className="uppercase text-5xl flex font-bold text-blue-bg mb-10">Send us a message</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-1 w-full">
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
      <div className="my-2 w-1/2 lg:w-1/4 mx-auto mt-10">
        <button 
          type="submit" 
          className="uppercase text-gray-5 text-medium font-bold tracking-wide bg-blue-1 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline transform transition duration-200 hover:scale-100 hover active:bg-blue-500 active:text-white active:scale-95"
          >
          Send Message
        </button>
      </div>
      <span className="block mt-4 text-green-500 text-2xl font-bold">{result}</span>
    </form>
  </div>
  
  );
};

export default Contact;

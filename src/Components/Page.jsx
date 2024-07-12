
import NavigationBar from './UI/NavigationBar';
import HomePage from "./Home";
import Footer from "./Footer";
import Service from "./Service";
import TechStack from "./TechStack";
import { CustomerTestimonials } from "./CustomerTestimonials";
import Contact from './contactus';

const Page = () => {
  return (
    <main className="flex justify-center items-center flex-col w-full">
      <div className="w-full">
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavigationBar />
         </div>
        <section id="home">
          <HomePage />
        </section>
        <section id="services">
          <Service />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        {/* <section id="testimonials">
          <CustomerTestimonials />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}

export default Page;

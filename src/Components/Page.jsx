
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
        <NavigationBar />
        <section id="home">
          <HomePage />
        </section>
        <section id="services">
          <Service />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="testimonials">
          <CustomerTestimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}

export default Page;

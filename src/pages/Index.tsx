import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Locations } from "@/components/Locations";
import { Gallery } from "@/components/Gallery";
import { BookingForm } from "@/components/BookingForm";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Locations />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

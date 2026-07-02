import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Services } from "./components/portfolio/Services";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import { TechStack } from "./components/portfolio/TechStack";
import { Projects } from "./components/portfolio/Projects";
import { Process } from "./components/portfolio/Process";
import { Pricing } from "./components/portfolio/Pricing";
import { Testimonials } from "./components/portfolio/Testimonials";
import { WhyChooseUs } from "./components/portfolio/WhyChooseUs";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Process />
      <Pricing />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
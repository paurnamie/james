import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs/Programs";
import Team from "./components/Team";
import Gallery from "./pages/Gallery";
import ContactSection from "./pages/ContactSection";
import Footer from "./components/Footer";
 
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Team />
      <Gallery />
      <ContactSection />S
      <Footer/>
    </>
  );
}
 
export default App;
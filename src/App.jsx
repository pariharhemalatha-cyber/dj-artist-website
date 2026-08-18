import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Communities from "./components/Communities";
import About from "./components/About";
import NightThemes from "./components/NightThemes";
import Mixes from "./components/Mixes";
import Services from "./components/Services";
import PastEvents from "./components/PastEvents";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Communities />
        <About />
        <NightThemes />
        <Mixes />
        <Services />
        <PastEvents />
        <Testimonials />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

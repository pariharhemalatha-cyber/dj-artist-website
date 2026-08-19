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
import AdminEditor from "./components/AdminEditor";
import { siteData } from "./data/siteData";
import { useEffect, useState } from "react";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let active = true;

    async function loadLiveData() {
      try {
        const response = await fetch("/api/site-data");
        if (!response.ok) return;
        const payload = await response.json();
        if (!payload?.data || !active) return;
        Object.assign(siteData, payload.data);
        setVersion((v) => v + 1);
      } catch {
        // Fall back to bundled static siteData when API is unavailable.
      } finally {
        if (active) setDataLoaded(true);
      }
    }

    loadLiveData();
    return () => {
      active = false;
    };
  }, []);

  const showAdmin = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("admin");

  return (
    <>
      <Navbar />
      <main key={version} data-loaded={dataLoaded ? "true" : "false"}>
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
      {showAdmin && (
        <AdminEditor
          currentData={siteData}
          onSaved={(nextData) => {
            Object.assign(siteData, nextData);
            setVersion((v) => v + 1);
          }}
        />
      )}
    </>
  );
}

import About from "../components/About";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import Grow from "../components/Grow";
import MarqueeSlider from "../components/MarqueeSlider";
import PhotoSection from "../components/PhotoSection";
import Service from "../components/Service";

export default function Home() {
  return (
    <>
      <Banner />
      <Benefits />
      <About />
      <MarqueeSlider />
      <Service />
      <Grow />
      <PhotoSection />
    </>
  );
}

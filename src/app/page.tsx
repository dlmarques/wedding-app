import Confirmation from "./components/confirmation/Confirmation";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";

export default function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Confirmation />
      <Footer />
    </div>
  );
}

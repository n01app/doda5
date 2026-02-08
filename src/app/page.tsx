import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Space from "@/components/Space";
import Testimonials from "@/components/Testimonials";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Space />
      <Testimonials />
      <FindUs />
      <Footer />
    </main>
  );
}

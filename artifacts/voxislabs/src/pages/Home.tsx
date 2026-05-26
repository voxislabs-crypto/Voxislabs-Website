import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { Platforms } from "../components/sections/Platforms";
import { Vision } from "../components/sections/Vision";
import { Philosophy } from "../components/sections/Philosophy";
import { Founder } from "../components/sections/Founder";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Platforms />
        <Vision />
        <Philosophy />
        <Founder />
      </main>

      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-10" data-testid="nav-logo">
          <img src="/voxislabs-logo.png" alt="VoxisLabs" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>VoxisLabs</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#platforms" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Platforms</a>
          <a href="#vision" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Vision</a>
          <a href="#philosophy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Philosophy</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            data-testid="nav-cta"
          >
            Request Access
          </a>
        </div>
      </div>
    </motion.header>
  );
}

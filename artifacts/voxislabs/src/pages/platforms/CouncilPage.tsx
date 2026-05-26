import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CouncilPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 flex items-center">
        <section className="container mx-auto px-6 md:px-12 py-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              In active development
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Council of Echoes
            </h1>
            <p className="text-2xl text-primary font-medium mb-8">
              Many minds. One answer.
            </p>
            <p className="text-xl text-muted-foreground mb-12">
              Multi-LLM collaborative reasoning environment. Multiple AI models debate, negotiate, and synthesize superior solutions.
            </p>
            <Button size="lg" className="px-8 py-6 text-lg">Join Waitlist</Button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
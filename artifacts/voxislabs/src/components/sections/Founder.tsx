import { motion } from "framer-motion";

export function Founder() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-2xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">Founder</div>
                <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }} data-testid="founder-name">Kai</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="founder-bio">
                  Kai is the founder of VoxisLabs, an independent initiative focused on developing adaptive AI systems and human-centered interaction technologies. With a systems-oriented approach, his work centers on creating modular platforms that combine personality architecture, collaborative reasoning, and personalized intelligence to make technology feel more intuitive and relational.
                </p>
                <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors" data-testid="link-contact-founder">
                  Get in touch <span className="ml-2">→</span>
                </a>
              </motion.div>
            </div>
            
            <div className="relative h-64 md:h-auto bg-muted">
              {/* Abstract representation instead of a photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-background to-card overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_0%,transparent_70%)] mix-blend-screen"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-background border border-border rounded-full shadow-[0_0_50px_hsl(var(--primary)/0.2)] flex items-center justify-center z-10">
                  <span className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>K</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

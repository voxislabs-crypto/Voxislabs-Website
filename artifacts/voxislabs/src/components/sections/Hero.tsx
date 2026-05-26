import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8"
          data-testid="hero-badge"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Independent AI Systems Initiative
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground max-w-5xl mb-8"
          style={{ fontFamily: "var(--font-display)" }}
          data-testid="hero-title"
        >
          Building Adaptive Intelligence for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Human Connection</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          data-testid="hero-subtitle"
        >
          VoxisLabs creates modular AI systems focused on personality architecture, multi-model reasoning, predictive interaction, and personalized experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#platforms"
            className="inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-[0_0_40px_-10px_hsl(var(--primary))]"
            data-testid="button-explore-platforms"
          >
            Explore Platforms
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-lg bg-card border border-border text-foreground hover:bg-accent transition-colors"
            data-testid="button-request-access"
          >
            Request Early Access
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-lg bg-transparent text-foreground hover:text-primary transition-colors"
            data-testid="button-partnerships"
          >
            Partnerships
          </a>
        </motion.div>
      </div>
    </section>
  );
}

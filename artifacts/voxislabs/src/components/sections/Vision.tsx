import { motion } from "framer-motion";

export function Vision() {
  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[800px] h-[800px] border-[1px] border-primary/20 rounded-full flex items-center justify-center">
          <div className="w-[600px] h-[600px] border-[1px] border-secondary/20 rounded-full flex items-center justify-center">
            <div className="w-[400px] h-[400px] border-[1px] border-primary/30 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-6" data-testid="vision-label">
            The AIOS Concept
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-10" style={{ fontFamily: "var(--font-display)" }} data-testid="vision-statement">
            We are building toward a unified intelligence layer — one that doesn't just process requests, but understands context, adapts to people, and coordinates across specialized systems.
          </h3>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Not a product. A paradigm.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

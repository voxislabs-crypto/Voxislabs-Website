import { motion } from "framer-motion";

const principles = [
  {
    title: "Persistent Memory Systems",
    description: "Intelligence that compounds over time. Our systems remember preferences, context, and history, creating relationships rather than stateless transactions."
  },
  {
    title: "Multi-Agent Reasoning",
    description: "Truth through dialectic. Complex problems require diverse perspectives. We build environments where specialized models collaborate, debate, and synthesize."
  },
  {
    title: "Symbolic Intelligence",
    description: "Moving beyond pure statistics. We integrate structured, symbolic frameworks to enable deeper pattern recognition and behavioral forecasting."
  },
  {
    title: "Personalized Context",
    description: "Every interaction is unique. From synthesized voice to narrative structure, our systems adapt their output to the specific identity and context of the user."
  }
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 bg-card/50 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }} data-testid="philosophy-title">
                Why It Matters
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                The future of human-computer interaction is relational, not transactional. We design systems governed by these core principles.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-12">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="relative pl-8 border-l border-border/50"
                  data-testid={`philosophy-principle-${index}`}
                >
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                    {principle.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

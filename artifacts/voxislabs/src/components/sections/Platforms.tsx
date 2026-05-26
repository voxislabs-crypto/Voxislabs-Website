import { motion } from "framer-motion";

const platforms = [
  {
    title: "Voxis",
    tagline: "The intelligence layer that remembers.",
    description: "The adaptive personality engine and foundational AI operating layer. Advanced memory structures and dynamic interaction capabilities across all platforms.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Merlin",
    tagline: "Pattern recognition meets personal insight.",
    description: "Astrological and symbolic behavioral forecasting engine. Deep pattern analysis and personalized insights based on symbolic frameworks.",
    color: "from-purple-500 to-fuchsia-400",
  },
  {
    title: "Council of Echoes",
    tagline: "Many minds. One answer.",
    description: "Multi-LLM collaborative reasoning environment. Multiple AI models debate, negotiate, and synthesize superior solutions across coding, strategy, philosophy, and complex problem-solving.",
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "DreamTales & DreamCast",
    tagline: "Stories that know your name.",
    description: "LLM-powered interactive storytelling platforms. DreamTales: personalized choose-your-own-adventure for children. DreamCast: mature, narrative-driven interactive stories for adults.",
    color: "from-orange-500 to-rose-400",
  },
  {
    title: "TrustWave",
    tagline: "Your voice, at scale.",
    description: "Voice-enabled customer retention platform. Personalized, first-name voice messages at scale for businesses to strengthen relationships and drive action.",
    color: "from-indigo-500 to-blue-400",
  },
  {
    title: "Contract Secure",
    tagline: "Sign with certainty.",
    description: "Mobile-first digital contract creation and verification. Rapid, legally-binding agreements with identity verification, location data, and digital signatures.",
    color: "from-slate-400 to-slate-200",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Platforms() {
  return (
    <section id="platforms" className="py-32 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }} data-testid="platforms-title">
            Core Platforms
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Specialized intelligence engines built on a unified foundation of memory and personality.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              variants={itemVariants}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors overflow-hidden"
              data-testid={`card-platform-${index}`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${platform.color}`}></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                    {platform.title}
                  </h3>
                  <div className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${platform.color}`}>
                    {platform.tagline}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {platform.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

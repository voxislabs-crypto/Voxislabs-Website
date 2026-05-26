import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const features = [
  {
    title: "Identity Continuity",
    description: "Characters are more than system prompts. Structured behavioral specs, long-term memory, and continuous affective state that evolves in real time across every conversation turn."
  },
  {
    title: "VAD Mood Engine",
    description: "A Valence-Arousal-Dominance mood system models the character's affective state continuously. Every message nudges mood along three axes; mood decays back toward the character's baseline between turns."
  },
  {
    title: "Long-Term Memory",
    description: "Memory facts are extracted asynchronously after each reply and injected back into future prompts. Characters remember things users told them across sessions, using semantic recall for the most relevant facts."
  },
  {
    title: "Goal Engine",
    description: "Intent-guided turn steering keeps characters on track with their goals across long conversations, producing coherent multi-turn behavior rather than isolated replies."
  },
  {
    title: "Smart LLM Provider System",
    description: "Configure any OpenAI-compatible provider at runtime from the UI. Provider-first flow: provider → API key → models → active model. Supports multi-model orchestration."
  },
  {
    title: "Research Pipeline",
    description: "Pull research from Wikipedia, blogs, and YouTube URLs directly into character profiles. Sources are ranked, shown as editable cards, and prunable before saving."
  }
];

export default function VoxisPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        <section className="container mx-auto px-6 md:px-12 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Voxis: The intelligence layer that remembers.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Voxis is a stateful personality engine for LLMs, giving AI memory, mood, and evolving identity across conversations.
            </p>
            <p className="text-lg mb-12">
              Most AI chat products are stateless wrappers. Voxis explores a different paradigm: persistent, evolving AI identities with memory, mood, and intent continuity across sessions.
            </p>
          </motion.div>
        </section>

        <section className="bg-card/30 border-y border-border py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-16" style={{ fontFamily: "var(--font-display)" }}>Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: "var(--font-display)" }}>System Flow</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="p-4 bg-card border border-border rounded-lg">User Input</div>
            <div className="text-primary text-xl">→</div>
            <div className="p-4 bg-card border border-border rounded-lg max-w-[200px]">Mood Engine + Memory Retrieval + Intent Engine</div>
            <div className="text-primary text-xl">→</div>
            <div className="p-4 bg-card border border-border rounded-lg">Persona Prompt Builder</div>
            <div className="text-primary text-xl">→</div>
            <div className="p-4 bg-card border border-border rounded-lg">LLM Response</div>
            <div className="text-primary text-xl">→</div>
            <div className="p-4 bg-card border border-border rounded-lg">Async Memory Extraction + Memory Upsert</div>
          </div>
        </section>

        <section className="bg-primary/5 py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>Why Voxis?</h2>
              <ul className="text-left space-y-4 mb-12 text-lg">
                <li className="flex items-center gap-3"><span className="text-primary">✦</span> Identity continuity instead of one-shot prompt personas</li>
                <li className="flex items-center gap-3"><span className="text-primary">✦</span> Mood dynamics and behavioral drift control</li>
                <li className="flex items-center gap-3"><span className="text-primary">✦</span> Inspectable system internals instead of opaque outputs</li>
                <li className="flex items-center gap-3"><span className="text-primary">✦</span> Built for entertainment, training, coaching-adjacent tools, and autonomous agents</li>
              </ul>
              <Button size="lg" className="px-8 py-6 text-lg">Request Early Access</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
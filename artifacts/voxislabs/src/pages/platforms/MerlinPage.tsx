import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Swiss Ephemeris Calculations",
    description: "NASA-grade astronomical precision. Complete birth charts with planets, houses, aspects, and angles calculated with the same engine used by professional astrologers."
  },
  {
    title: "7-Day Predictive Transit Intelligence",
    description: "6-hour sampling intervals with intensity, confidence, and volatility scoring for each transit event. Actionable signals (DO NOW / DELAY NOW) for top predictive events."
  },
  {
    title: "Lunar Timing Engine",
    description: "Phase-aware action bias with void-of-course caution windows. Progressed Moon overlay integrates domain emphasis boosts into predictive scoring."
  },
  {
    title: "MBTI Integration",
    description: "Personality type overlays that contextualize astrological data through psychological frameworks, bridging symbolic and behavioral analysis."
  },
  {
    title: "Interactive Wheel Visualization",
    description: "D3.js rendered birth chart wheel with real-time transit tracking and personalized daily forecast overlays."
  },
  {
    title: "Persistent Resonance Learning",
    description: "User feedback shapes forecast intelligence over time. The system learns which transits resonate most for each individual, improving signal quality continuously."
  }
];

export default function MerlinPage() {
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
              Merlin: Pattern recognition meets personal insight.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Professional astrology and behavioral forecasting engine combining Swiss Ephemeris precision with MBTI personality insights.
            </p>
            <p className="text-lg mb-12">
              Merlin delivers professional-grade astrological analysis — not because it believes in magic, but because it believes in patterns. Celestial mechanics mapped to human behavior through data, precision, and personalized symbolic intelligence.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="px-8 py-6 text-lg">
                <a href="https://merlin.voxislabs.com" target="_blank" rel="noopener noreferrer">Visit Merlin</a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">Request Access</Button>
            </div>
          </motion.div>
        </section>

        <section className="bg-card/30 border-y border-border py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-16" style={{ fontFamily: "var(--font-display)" }}>Core Features</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>Business Model</h2>
              <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20">
                <div className="text-2xl font-bold mb-2">One-Time Payment</div>
                <div className="text-4xl font-black text-primary mb-6">Lifetime Access at $50</div>
                <p className="text-lg text-muted-foreground">
                  Professional tools typically charge $299+/year. Merlin is a one-time investment.
                </p>
                <div className="mt-8 pt-8 border-t border-border">
                  Live at: <a href="https://merlin.voxislabs.com" className="text-primary hover:underline">merlin.voxislabs.com</a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>Roadmap Highlights</h2>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-lg">AI Voice Readings (Q2 2026)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-lg">Synastry / Relationship Compatibility (Q2 2026)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-lg">Professional Tier (Q2 2026)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-lg">Mobile Native Apps (Q3 2026)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
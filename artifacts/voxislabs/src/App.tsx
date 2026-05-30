type Platform = {
  title: string;
  tagline: string;
  description: string;
  accent: string;
  status: string;
  href?: string;
};

export default function App() {
  const platforms: Platform[] = [
    {
      title: "Voxis",
      tagline: "The intelligence layer that remembers.",
      description:
        "The adaptive personality engine and foundational AI operating layer. Advanced memory structures and dynamic interaction capabilities across all platforms.",
      accent: "from-blue-500 to-cyan-400",
      href: "https://github.com/voxislabs-crypto/Voxis",
      status: "Core Engine",
    },
    {
      title: "Merlin",
      tagline: "Your Personal Life Weather Intelligence",
      description:
        "Translates transits, patterns, and personal context into intuitive weather metaphors — helping you navigate timing, pressure, and opportunity with clarity.",
      accent: "from-blue-400 to-cyan-400",
      href: "https://merlin.voxislabs.com",
      status: "Live",
    },
    {
      title: "Council of Echoes",
      tagline: "Many minds. One answer.",
      description:
        "Multi-LLM collaborative reasoning system. Models debate, negotiate, and synthesize superior solutions across complex problems.",
      accent: "from-emerald-400 to-teal-400",
      status: "In Development",
    },
    {
      title: "DreamTales",
      tagline: "Stories That Know You",
      description:
        "Dynamic, personalized interactive storytelling. DreamTales for children. DreamCast for mature, narrative-driven experiences.",
      accent: "from-orange-400 to-rose-400",
      status: "In Development",
    },
    {
      title: "TrustWave",
      tagline: "Your Voice, At Scale",
      description:
        "Personalized voice messaging platform for businesses to strengthen customer relationships and drive action.",
      accent: "from-indigo-400 to-blue-400",
      status: "In Development",
    },
    {
      title: "Contract Secure",
      tagline: "Sign With Certainty",
      description:
        "Mobile-first digital contract creation, verification, and secure signing platform.",
      accent: "from-amber-400 to-yellow-400",
      status: "In Development",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">Voxis Labs</div>
          <div className="flex gap-8 text-sm uppercase tracking-widest">
            <a href="#platforms" className="hover:text-blue-400 transition-colors">Platforms</a>
            <a href="#vision" className="hover:text-blue-400 transition-colors">Vision</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">About</a>
          </div>
          <a href="#contact" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
            Early Access
          </a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center pt-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
            Intelligence that<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Remembers You
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            We build adaptive AI systems that remember, adapt, and speak in the language of human experience.
          </p>

          <a href="#platforms" className="inline-block bg-white text-black px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition">
            Explore Our Platforms
          </a>
        </div>
      </section>

      <section id="platforms" className="py-24 bg-zinc-950 border-t border-white/10 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Core Platforms</h2>
          <p className="text-center text-gray-400 text-xl mb-16">Each built with memory, personality, and purpose</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((p) => (
              p.href ? (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title} in a new tab`}
                className="group relative bg-zinc-900 p-8 rounded-3xl border border-transparent hover:border-white/20 transition-all hover:-translate-y-1 overflow-hidden text-left block"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${p.accent}`} />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <span className="text-xs uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full text-gray-400">{p.status}</span>
                  </div>
                  <p className="text-lg font-medium text-gray-200 mb-3">{p.tagline}</p>
                  <p className="text-gray-400 leading-relaxed mb-8">{p.description}</p>
                  <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                    Visit →
                  </span>
                </div>
              </a>
              ) : (
              <div
                key={p.title}
                className="group relative bg-zinc-900 p-8 rounded-3xl border border-transparent hover:border-white/20 transition-all hover:-translate-y-1 overflow-hidden text-left"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${p.accent}`} />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <span className="text-xs uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full text-gray-400">{p.status}</span>
                  </div>
                  <p className="text-lg font-medium text-gray-200 mb-3">{p.tagline}</p>
                  <p className="text-gray-400 leading-relaxed mb-8">{p.description}</p>
                </div>
              </div>
              )
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="py-24 border-t border-white/10 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">One Coherent Vision</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Intelligence should not feel cold or forgetful. It should remember you, understand context,
            and grow with you. We build modular AI systems that feel continuous, personal, and deeply human.
          </p>
        </div>
      </section>

      <section id="contact" className="py-24 border-t border-white/10 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Early Access</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Interested in testing Merlin, collaborating, or exploring the ecosystem?
            Reach out and we’ll connect you to the right project.
          </p>
          <a href="mailto:hello@voxislabs.com" className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition">
            kai@voxislabs.com
          </a>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center text-gray-500">
        © 2026 Voxis Labs • Building the future of adaptive intelligence
      </footer>
    </div>
  );
}

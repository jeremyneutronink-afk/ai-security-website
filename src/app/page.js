export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 mb-6">
          AI Security Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Jeremy Neutron
        </h1>

        <h2 className="text-2xl md:text-3xl text-neutral-300 mb-8">
          AI Security • Agent Safety • Adversarial Evaluation
        </h2>

        <p className="text-lg text-neutral-400 max-w-3xl leading-8 mb-12">
          I build AI systems, test how they fail, and document the security
          controls that make them safer. This portfolio tracks my hands-on work
          in AI security, agent behavior, red teaming, evaluation, and system
          design.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="/labs"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            View Labs
          </a>

          <a
            href="https://github.com/jeremyneutronink-afk"
            target="_blank"
            className="border border-neutral-700 px-6 py-3 rounded-lg font-semibold"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
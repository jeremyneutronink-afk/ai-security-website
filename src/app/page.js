export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* HERO */}
        <section className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              AI Security Portfolio
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Jeremy Neutron
            </h1>

            <h2 className="mt-5 text-2xl font-medium text-zinc-300 sm:text-3xl">
              AI Security · Agent Safety · Adversarial Evaluation
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              I build AI systems, test how they fail, and design the security
              controls that make them safer. This portfolio documents my
              hands-on work in agent security, prompt injection, authorization,
              adversarial testing, secure memory, tool execution, and AI system
              design.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/labs"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
              >
                View AI Security Labs
              </a>

              <a
                href="https://github.com/jeremyneutronink-afk"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-500 hover:bg-zinc-900"
              >
                GitHub
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "AI Security",
                "Agent Security",
                "Prompt Injection",
                "Authorization",
                "Adversarial Testing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PORTRAIT */}
          <div className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-cyan-500/10 blur-3xl" />

              <img
                src="/jeremy-neutron.png"
                alt="Jeremy Neutron"
                className="relative aspect-square w-full rounded-full border border-zinc-800 object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <p className="text-sm text-zinc-400">Completed Labs</p>
            <p className="mt-2 text-4xl font-bold">11</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <p className="text-sm text-zinc-400">Primary Focus</p>
            <p className="mt-2 text-xl font-bold text-cyan-400">
              AI Security
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <p className="text-sm text-zinc-400">Approach</p>
            <p className="mt-2 text-xl font-bold">
              Build + Break + Harden
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <p className="text-sm text-zinc-400">Documentation</p>
            <p className="mt-2 text-xl font-bold">
              Code + Tests + Video
            </p>
          </div>
        </section>

        {/* WHAT I WORK ON */}
        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What I Work On
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Security for AI systems that can actually take action
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            My current work focuses on the security boundaries around AI agents:
            what they can access, what they can execute, how authority is
            granted, how untrusted data is handled, and how suspicious behavior
            is detected before it becomes a real side effect.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Agent Tool Security",
                description:
                  "Separating model intent from trusted execution with allowlists, schema validation, scoped capabilities, approval gates, and replay protection.",
              },
              {
                title: "Prompt Injection Defense",
                description:
                  "Testing how attacker-controlled documents, emails, and external content can influence model behavior and downstream actions.",
              },
              {
                title: "Identity & Authority",
                description:
                  "Building authenticated actor models, scoped delegation, re-delegation controls, and full authority-chain validation.",
              },
              {
                title: "Stateful Security",
                description:
                  "Using audit logs, risk scoring, event correlation, memory provenance, and session state to make security decisions over time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO CTA */}
        <section className="mt-20 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Hands-On Portfolio
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Follow the progression from basic API security to multi-agent
            authority chains.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-300">
            Each lab builds on the systems and security concepts from the one
            before it. The portfolio includes source code, adversarial tests,
            architecture diagrams, written findings, and short video recaps.
          </p>

          <a
            href="/labs"
            className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
          >
            Explore All Labs →
          </a>
        </section>
      </div>
    </main>
  );
}
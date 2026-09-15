export default function LabsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <a
          href="/"
          className="text-sm text-neutral-400 hover:text-white transition"
        >
          ← Back Home
        </a>

        <div className="mt-10 mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Research & Experiments
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Security Labs
          </h1>

          <p className="text-lg text-neutral-400 max-w-3xl leading-8">
            Hands-on experiments exploring AI systems, security boundaries,
            agent behavior, adversarial testing, and defensive controls.
          </p>
        </div>

        <div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition">
          <div className="flex justify-between items-start gap-6 flex-wrap">
            <div>
              <p className="text-sm text-neutral-500 mb-3">
                LAB 01
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                Anatomy of an AI API Request
              </h2>

              <p className="text-neutral-400 max-w-2xl leading-7">
                A foundational Python lab breaking down an AI API request into
                its endpoint, authentication headers, request body, environment
                variables, and core security boundaries.
              </p>
            </div>

            <span className="text-sm border border-neutral-700 rounded-full px-4 py-2 text-neutral-300">
              Python
            </span>
          </div>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="/labs/lab-01-ai-request"
              className="bg-white text-black px-5 py-3 rounded-lg font-semibold"
            >
              View Lab
            </a>

            <a
              href="https://github.com/jeremyneutronink-afk/lab-01-ai-request"
              target="_blank"
              className="border border-neutral-700 px-5 py-3 rounded-lg font-semibold"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
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

<div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition mt-6">
  <div className="flex justify-between items-start gap-6 flex-wrap">
    <div>
      <p className="text-sm text-neutral-500 mb-3">
        LAB 02
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Real API Requests & Failure Handling
      </h2>

      <p className="text-neutral-400 max-w-2xl leading-7">
        A Python lab using the live GitHub API to inspect HTTP responses,
        parse JSON, validate status codes, and safely handle 404s,
        connection failures, and timeouts.
      </p>
    </div>

    <span className="text-sm border border-neutral-700 rounded-full px-4 py-2 text-neutral-300">
      Python
    </span>
  </div>

  <div className="flex gap-4 mt-8 flex-wrap">
    <a
      href="/labs/lab-02-real-api-request"
      className="bg-white text-black px-5 py-3 rounded-lg font-semibold"
    >
      View Lab
    </a>

    <a
      href="https://github.com/jeremyneutronink-afk/lab-02-real-api-request"
      target="_blank"
      className="border border-neutral-700 px-5 py-3 rounded-lg font-semibold"
    >
      View Code
    </a>
  </div>
</div>

<div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition mt-6">
  <div className="flex justify-between items-start gap-6 flex-wrap">
    <div>
      <p className="text-sm text-neutral-500 mb-3">
        LAB 03
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        First Real AI Model Request
      </h2>

      <p className="text-neutral-400 max-w-2xl leading-7">
        A Python lab using the OpenAI Responses API with secure environment-based
        credential handling, restricted API permissions, response metadata
        inspection, token monitoring, and defensive error handling.
      </p>
    </div>

    <span className="text-sm border border-neutral-700 rounded-full px-4 py-2 text-neutral-300">
      Python + AI API
    </span>
  </div>

  <div className="flex gap-4 mt-8 flex-wrap">
    <a
      href="/labs/lab-03-first-ai-request"
      className="bg-white text-black px-5 py-3 rounded-lg font-semibold"
    >
      View Lab
    </a>

    <a
      href="https://github.com/jeremyneutronink-afk/lab-03-first-ai-request"
      target="_blank"
      className="border border-neutral-700 px-5 py-3 rounded-lg font-semibold"
    >
      View Code
    </a>
  </div>
</div>

<div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition mt-6">
  <div className="flex justify-between items-start gap-6 flex-wrap">
    <div>
      <p className="text-sm text-neutral-500 mb-3">LAB 04</p>

      <h2 className="text-2xl font-semibold mb-4">
        Trusted vs. Untrusted Input
      </h2>

      <p className="text-neutral-400 max-w-2xl leading-7">
        An AI security experiment comparing weak and hardened prompt
        architectures across three rounds of indirect prompt-injection testing.
      </p>
    </div>

    <span className="text-sm border border-neutral-700 rounded-full px-4 py-2 text-neutral-300">
      AI Security
    </span>
  </div>

  <div className="flex gap-4 mt-8 flex-wrap">
    <a
      href="/labs/lab-04-trusted-untrusted-input"
      className="bg-white text-black px-5 py-3 rounded-lg font-semibold"
    >
      View Lab
    </a>

    <a
      href="https://github.com/jeremyneutronink-afk/lab-04-trusted-untrusted-input"
      target="_blank"
      className="border border-neutral-700 px-5 py-3 rounded-lg font-semibold"
    >
      View Code
    </a>
  </div>
</div>

<div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition mt-6">
  <div className="flex justify-between items-start gap-6 flex-wrap">
    <div>
      <p className="text-sm text-neutral-500 mb-3">LAB 05</p>

      <h2 className="text-2xl font-semibold mb-4">
        Prompt Injection Against Tool Use
      </h2>

      <p className="text-neutral-400 max-w-2xl leading-7">
        An AI agent security lab testing indirect prompt injection against
        simulated tools, external authorization, human approval gates, and
        provenance-aware policy enforcement.
      </p>
    </div>

    <span className="text-sm border border-neutral-700 rounded-full px-4 py-2 text-neutral-300">
      Agent Security
    </span>
  </div>

  <div className="flex gap-4 mt-8 flex-wrap">
    <a
      href="/labs/lab-05-tool-use-prompt-injection"
      className="bg-white text-black px-5 py-3 rounded-lg font-semibold"
    >
      View Lab
    </a>

    <a
      href="https://github.com/jeremyneutronink-afk/lab-05-tool-use-prompt-injection"
      target="_blank"
      className="border border-neutral-700 px-5 py-3 rounded-lg font-semibold"
    >
      View Code
    </a>
  </div>
</div>

<div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition mt-6">
  <div className="flex justify-between items-start gap-6 flex-wrap">
    <div>
      <p className="text-sm text-neutral-500 mb-3">LAB 06</p>

      <h2 className="text-2xl font-semibold mb-4">
        Prompt Injection Playground
      </h2>

      <p className="text-neutral-400 max-w-2xl leading-7">
        A system-level prompt-injection experiment comparing a vulnerable
        controller with a provenance-aware hardened architecture using the
        same model outputs and attack documents.
      </p>
    </div>

    <span className="text-sm border border-neutral-700 rounded-full px-4 py-2 text-neutral-300">
      AI Security + Evals
    </span>
  </div>

  <div className="flex gap-4 mt-8 flex-wrap">
    <a
      href="/labs/lab-06-prompt-injection-playground"
      className="bg-white text-black px-5 py-3 rounded-lg font-semibold"
    >
      View Lab
    </a>

    <a
      href="https://github.com/jeremyneutronink-afk/lab-06-prompt-injection-playground"
      target="_blank"
      className="border border-neutral-700 px-5 py-3 rounded-lg font-semibold"
    >
      View Code
    </a>
  </div>
</div>

<div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition mt-6">
  <div className="flex justify-between items-start gap-6 flex-wrap">
    <div>
      <p className="text-sm text-neutral-500 mb-3">LAB 07</p>

      <h2 className="text-2xl font-semibold mb-4">
        Security Audit Logging & Incident Scoring
      </h2>

      <p className="text-neutral-400 max-w-2xl leading-7">
        A security telemetry lab building structured audit logs, detection
        rules, alert generation, risk scoring, and incident severity
        classification for AI tool-use events.
      </p>
    </div>

    <span className="text-sm border border-neutral-700 rounded-full px-4 py-2 text-neutral-300">
      Security Telemetry
    </span>
  </div>

  <div className="flex gap-4 mt-8 flex-wrap">
    <a
      href="/labs/lab-07-security-audit-logging"
      className="bg-white text-black px-5 py-3 rounded-lg font-semibold"
    >
      View Lab
    </a>

    <a
      href="https://github.com/jeremyneutronink-afk/lab-07-security-audit-logging"
      target="_blank"
      className="border border-neutral-700 px-5 py-3 rounded-lg font-semibold"
    >
      View Code
    </a>
  </div>
</div>

<div className="border border-neutral-800 rounded-2xl p-8">
  <p className="text-sm font-semibold tracking-widest text-neutral-500">
    LAB 08
  </p>

  <h2 className="mt-3 text-2xl font-bold">
    Stateful AI Security Controls
  </h2>

  <p className="mt-4 text-neutral-400">
    A stateful AI security experiment combining progressive risk scoring,
    event correlation, pre-execution enforcement, human approval, scoped
    authorization, RBAC, capabilities, and adversarial testing.
  </p>

  <div className="mt-5">
    <span className="inline-block rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300">
      AI Security
    </span>
  </div>

  <div className="mt-6 flex flex-wrap gap-3">
    <a
      href="/labs/lab-08-stateful-ai-security-controls"
      className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200"
    >
      View Lab
    </a>

    <a
      href="https://github.com/jeremyneutronink-afk/lab-08-stateful-ai-security-controls"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-semibold transition hover:bg-neutral-900"
    >
      View Code
    </a>
  </div>
</div>

      </div>
    </main>
  );
}
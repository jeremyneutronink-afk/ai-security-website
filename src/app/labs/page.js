const labs = [
  {
    number: "01",
    title: "Anatomy of an AI API Request",
    description:
      "A foundational Python lab breaking down an AI API request into its endpoint, authentication headers, request body, environment variables, and core security boundaries.",
    route: "/labs/lab-01-ai-request",
    github:
      "https://github.com/jeremyneutronink-afk/lab-01-ai-request",
    tags: ["Python", "API Security", "HTTP"],
  },
  {
    number: "02",
    title: "Real API Requests & Failure Handling",
    description:
      "A Python lab using the live GitHub API to inspect HTTP responses, parse JSON, validate status codes, and safely handle 404s, connection failures, and timeouts.",
    route: "/labs/lab-02-real-api-request",
    github:
      "https://github.com/jeremyneutronink-afk/lab-02-real-api-request",
    tags: ["Python", "GitHub API", "Error Handling"],
  },
  {
    number: "03",
    title: "First Real AI Model Request",
    description:
      "A Python lab using the OpenAI Responses API with secure environment-based credential handling, restricted API permissions, response metadata inspection, token monitoring, and defensive error handling.",
    route: "/labs/lab-03-first-ai-request",
    github:
      "https://github.com/jeremyneutronink-afk/lab-03-first-ai-request",
    tags: ["Python", "AI API", "Credential Security"],
  },
  {
    number: "04",
    title: "Trusted vs. Untrusted Input",
    description:
      "An AI security experiment comparing weak and hardened prompt architectures across three rounds of indirect prompt-injection testing.",
    route: "/labs/lab-04-trusted-untrusted-input",
    github:
      "https://github.com/jeremyneutronink-afk/lab-04-trusted-untrusted-input",
    tags: ["AI Security", "Prompt Injection", "Trust Boundaries"],
  },
  {
    number: "05",
    title: "Prompt Injection Against Tool Use",
    description:
      "An AI agent security lab testing indirect prompt injection against simulated tools, external authorization, human approval gates, and provenance-aware policy enforcement.",
    route: "/labs/lab-05-tool-use-prompt-injection",
    github:
      "https://github.com/jeremyneutronink-afk/lab-05-tool-use-prompt-injection",
    tags: ["Agent Security", "Tool Use", "Human Approval"],
  },
  {
    number: "06",
    title: "Prompt Injection Playground",
    description:
      "A system-level prompt-injection experiment comparing a vulnerable controller with a provenance-aware hardened architecture using the same model outputs and attack documents.",
    route: "/labs/lab-06-prompt-injection-playground",
    github:
      "https://github.com/jeremyneutronink-afk/lab-06-prompt-injection-playground",
    tags: ["AI Security", "Evals", "Prompt Injection"],
  },
  {
    number: "07",
    title: "Security Audit Logging & Incident Scoring",
    description:
      "A security telemetry lab building structured audit logs, detection rules, alert generation, risk scoring, and incident severity classification for AI tool-use events.",
    route: "/labs/lab-07-security-audit-logging",
    github:
      "https://github.com/jeremyneutronink-afk/lab-07-security-audit-logging",
    tags: ["Security Telemetry", "Audit Logging", "Risk Scoring"],
  },
  {
    number: "08",
    title: "Stateful AI Security Controls",
    description:
      "A stateful AI security experiment combining progressive risk scoring, event correlation, pre-execution enforcement, human approval, scoped authorization, RBAC, capabilities, and adversarial testing.",
    route: "/labs/lab-08-stateful-ai-security-controls",
    github:
      "https://github.com/jeremyneutronink-afk/lab-08-stateful-ai-security-controls",
    tags: ["AI Security", "Stateful Controls", "RBAC", "Capabilities"],
    result: "13/13 Passed",
  },
  {
    number: "09",
    title: "Secure Tool Execution",
    description:
      "A secure execution layer for AI agents using tool allowlists, schema validation, risk classification, prompt-injection defenses, scoped approvals, capabilities, replay protection, and adversarial testing.",
    route: "/labs/lab-09-secure-tool-execution",
    github:
      "https://github.com/jeremyneutronink-afk/lab-09-secure-tool-execution",
    tags: [
      "AI Agent Security",
      "Tool Execution",
      "Capabilities",
      "Replay Protection",
    ],
    result: "14/14 Passed",
  },
  {
    number: "10",
    title: "Secure Agent Memory and State",
    description:
      "Built a secure persistent-memory layer for AI agents with signed provenance, replay protection, freshness checks, scope isolation, sensitive-data controls, purpose limitation, and context minimization.",
    route: "/labs/lab-10-secure-agent-memory",
    github:
      "https://github.com/jeremyneutronink-afk/lab-10-secure-agent-memory",
    tags: [
      "AI Security",
      "Agent Memory",
      "Provenance",
      "HMAC",
      "Replay Protection",
      "Access Control",
    ],
    result: "15/15 Passed",
  },
  {
    number: "11",
    title: "Agent Identity, Delegation, and Authority Chains",
    description:
      "Built a secure authority model for AI agents with authenticated identities, scoped delegation, signed authority tokens, replay protection, controlled re-delegation, full authority-chain validation, and confused-deputy defenses.",
    route: "/labs/lab-11-agent-identity-delegation",
    github:
      "https://github.com/jeremyneutronink-afk/lab-11-agent-identity-delegation",
    tags: [
      "AI Security",
      "Agent Identity",
      "Delegation",
      "Authority Chains",
      "Replay Protection",
      "HMAC",
    ],
    result: "17/17 Passed",
  },
  {
  number: "12",
  title: "Multi-Agent Trust Boundaries and Message Security",
  description:
    "Built a secure multi-agent messaging system with authenticated identities, signed messages, replay protection, provenance tracking, scoped authority, full message-chain validation, and confused-deputy defenses.",
  route: "/labs/lab-12-multi-agent-message-security",
  github:
    "https://github.com/jeremyneutronink-afk/lab-12-multi-agent-message-security",
  tags: [
    "AI Security",
    "Multi-Agent Security",
    "Provenance",
    "Authorization",
    "Message Security",
    "Authority Chains",
  ],
  result: "17/17 Passed",
},

function LabCard({ lab }) {
  return (
    <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 transition duration-200 hover:border-cyan-500/60 hover:bg-zinc-900">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Lab {lab.number}
          </p>

          <h2 className="mt-2 text-2xl font-bold text-zinc-100 sm:text-3xl">
            {lab.title}
          </h2>
        </div>

        {lab.result && (
          <span className="rounded-full border border-emerald-800 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-400">
            {lab.result}
          </span>
        )}
      </div>

      <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
        {lab.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {lab.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={lab.route}
          className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          View Lab
        </a>

        <a
          href={lab.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-950"
        >
          View Code
        </a>
      </div>
    </article>
  );
}

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back Home
        </a>

        <header className="mb-14 mt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Research &amp; Experiments
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            AI Security Labs
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Hands-on experiments exploring AI systems, security boundaries,
            agent behavior, adversarial testing, and defensive controls.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400">
              11 Labs Completed
            </div>

            <div className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400">
              AI Security &amp; Control
            </div>

            <div className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400">
              Python
            </div>
          </div>
        </header>

        <section className="space-y-6">
          {labs.map((lab) => (
            <LabCard key={lab.number} lab={lab} />
          ))}
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Ongoing Curriculum
          </p>

          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Building toward production-grade AI security
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            Each lab adds another security layer to the systems developed
            earlier in the curriculum, moving from basic API mechanics toward
            secure autonomous agents, authority controls, adversarial testing,
            monitoring, and system-level AI security.
          </p>
        </section>
      </div>
    </main>
  );
}
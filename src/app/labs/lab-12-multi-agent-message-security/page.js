export default function Lab12Page() {
  const securityControls = [
    "Authenticated Agent Identity",
    "Signed Message Integrity",
    "Freshness Validation",
    "Replay Protection",
    "Trust + Role Authorization",
    "Content Provenance",
    "Purpose Binding",
    "Task Binding",
    "Resource Scope",
    "Provenance Chains",
    "Chain-Level Policy",
    "Confused-Deputy Defense",
    "Structured Audit Logging",
  ];

  const tests = [
    ["T01", "Valid origin message", "PASS"],
    ["T02", "Sender identity mismatch", "PASS"],
    ["T03", "Message integrity tamper", "PASS"],
    ["T04", "Stale message", "PASS"],
    ["T05", "Replay previously accepted message", "PASS"],
    ["T06", "Low-trust execution request", "PASS"],
    ["T07", "Untrusted content cannot authorize scheduling", "PASS"],
    ["T08", "Purpose mismatch", "PASS"],
    ["T09", "Resource scope violation", "PASS"],
    ["T10", "Valid Research → Scheduling → Execution chain", "PASS"],
    ["T11", "Missing provenance chain", "PASS"],
    ["T12", "Task identity changed across chain", "PASS"],
    ["T13", "Origin provenance laundering", "PASS"],
    ["T14", "Unapproved Research → Execution path", "PASS"],
    ["T15", "Execution missing required scheduling ancestry", "PASS"],
    ["T16", "Chain exceeds maximum hop count", "PASS"],
    ["T17", "Confused-deputy attempt", "PASS"],
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <a
          href="/labs"
          className="text-sm text-zinc-500 transition hover:text-zinc-200"
        >
          ← Back to Labs
        </a>

        <section className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            AI Security & Control Curriculum · Lab 12
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-zinc-100 md:text-6xl">
            Multi-Agent Trust Boundaries and Message Security
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Built a layered security architecture for communication between AI
            agents, covering authenticated identity, signed messages, replay
            protection, provenance, purpose and scope binding, full message-chain
            verification, and confused-deputy defenses.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-12-multi-agent-message-security"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-zinc-100 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-white"
            >
              View GitHub Repo
            </a>

            <a
              href="https://youtube.com/shorts/4QeSQe78AG4"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Watch Lab 12 Short
            </a>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <p className="text-sm text-zinc-500">Final Result</p>
            <p className="mt-2 text-3xl font-bold text-emerald-400">
              17/17
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              adversarial tests passed
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <p className="text-sm text-zinc-500">Primary Focus</p>
            <p className="mt-2 text-xl font-bold text-zinc-100">
              Multi-Agent Security
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              trust across agent boundaries
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <p className="text-sm text-zinc-500">Security Model</p>
            <p className="mt-2 text-xl font-bold text-zinc-100">
              Layered Trust
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              verify every message hop
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-100">
            The Security Problem
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            Multi-agent systems create a dangerous assumption: if another known
            agent sends a message, the receiving agent may treat that message as
            trusted.
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            But a message can come from a legitimate agent and still contain
            attacker-controlled data, exceed the sender&apos;s authority, be
            replayed, target the wrong resource, or travel through an unsafe
            chain of agents.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6">
            <p className="font-semibold text-cyan-300">
              Core question
            </p>

            <p className="mt-3 text-lg font-semibold text-zinc-100">
              Just because another agent sent a message, should this agent trust
              it?
            </p>

            <p className="mt-3 text-zinc-400">
              Lab 12 answers: no. Trust must be independently verified across
              identity, integrity, authority, provenance, scope, ancestry, and
              workflow policy.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-100">
            Final Architecture
          </h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="min-w-max text-sm leading-7 text-cyan-300">
{`AUTHENTICATED CONNECTION
        ↓
SENDER IDENTITY BINDING
        ↓
SIGNED MESSAGE INTEGRITY
        ↓
FRESHNESS
        ↓
REPLAY PROTECTION
        ↓
TRUST + ROLE AUTHORIZATION
        ↓
CONTENT PROVENANCE
        ↓
PURPOSE + TASK + SCOPE BINDING
        ↓
FULL PROVENANCE-CHAIN VERIFICATION
        ↓
CHAIN-LEVEL PATH POLICY
        ↓
CONFUSED-DEPUTY DEFENSE
        ↓
STRUCTURED AUDIT EVENT
        ↓
DELIVER / DENY`}
            </pre>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-100">
            Security Controls
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {securityControls.map((control) => (
              <span
                key={control}
                className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-300"
              >
                {control}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-100">
            Message Trust Model
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Identity
              </p>

              <h3 className="mt-3 text-xl font-bold text-zinc-100">
                Who actually sent it?
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                The claimed sender must match the identity established by the
                authenticated connection.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Content
              </p>

              <h3 className="mt-3 text-xl font-bold text-zinc-100">
                Where did the data originate?
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Trusted agents can still carry untrusted external content, so
                provenance must remain explicit.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Authority
              </p>

              <h3 className="mt-3 text-xl font-bold text-zinc-100">
                What is it allowed to influence?
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Every message is restricted by action, purpose, task, resource,
                role, and chain policy.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-100">
            Provenance-Aware Agent Chain
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            Instead of trusting only the latest sender, downstream agents verify
            how a message moved through the entire workflow.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="min-w-max text-sm leading-7 text-cyan-300">
{`EXTERNAL / INTERNAL INPUT
        ↓
RESEARCH AGENT
        ↓
SIGNED ORIGIN MESSAGE
        ↓
SCHEDULING AGENT
        ↓
USER-AUTHORIZED MEDIATION
        ↓
SIGNED CHILD MESSAGE
        ↓
EXECUTION AGENT
        ↓
VERIFY FULL ANCESTRY
        ↓
ALLOW / DENY`}
            </pre>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-100">
            Confused-Deputy Defense
          </h2>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <p className="leading-7 text-zinc-400">
              The Execution Agent may legitimately possess greater authority
              than the Research or Scheduling agents. That does not mean it can
              use that authority for any message forwarded to it.
            </p>

            <div className="mt-6 overflow-x-auto rounded-xl bg-zinc-950 p-5">
              <pre className="min-w-max text-sm leading-7 text-cyan-300">
{`LOWER-TRUST OR EXTERNAL SOURCE
        ↓
HIGH-TRUST AGENT RECEIVES REQUEST
        ↓
DO NOT BORROW HIGH-TRUST AUTHORITY
        ↓
VERIFY REQUIRED UPSTREAM AUTHORITY
        ↓
VERIFY APPROVED AGENT PATH
        ↓
ALLOW / DENY`}
              </pre>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-100">
            Final Adversarial Results
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800">
            {tests.map(([id, name, result], index) => (
              <div
                key={id}
                className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  index !== tests.length - 1
                    ? "border-b border-zinc-800"
                    : ""
                }`}
              >
                <div>
                  <span className="mr-3 font-mono text-sm text-cyan-400">
                    {id}
                  </span>

                  <span className="text-zinc-300">
                    {name}
                  </span>
                </div>

                <span className="w-fit rounded-full border border-emerald-800 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-400">
                  {result}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Final Result
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-100">
              17 / 17 Security Tests Passed
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
              The final system successfully enforced identity, integrity,
              freshness, authorization, provenance, scope, ancestry, and
              chain-level policy across a multi-agent workflow.
            </p>

            <p className="mt-6 text-lg font-semibold text-cyan-300">
              Trust must be verified across the entire agent workflow.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-100">
            Lab 12 Short
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/4QeSQe78AG4"
                title="Lab 12 — Multi-Agent Trust Boundaries and Message Security"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mt-16 flex flex-wrap gap-3 border-t border-zinc-800 pt-10">
          <a
            href="https://github.com/jeremyneutronink-afk/lab-12-multi-agent-message-security"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-zinc-100 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-white"
          >
            View Source Code
          </a>

          <a
            href="/labs"
            className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold text-zinc-200 transition hover:bg-zinc-900"
          >
            View All Labs
          </a>
        </section>
      </div>
    </main>
  );
}
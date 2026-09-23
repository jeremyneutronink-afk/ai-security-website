export default function Lab09Page() {
  const securityControls = [
    {
      title: "Tool Allowlisting",
      description:
        "The execution layer uses a default-deny policy so only explicitly approved tools can proceed.",
    },
    {
      title: "Argument Validation",
      description:
        "Tool calls are checked against approved schemas for required fields, data types, and unexpected arguments before execution.",
    },
    {
      title: "Risk Classification",
      description:
        "The application assigns LOW, MEDIUM, and HIGH risk levels instead of allowing the model to classify its own actions.",
    },
    {
      title: "Prompt-Injection Defense",
      description:
        "Instruction provenance is tracked so untrusted documents, webpages, emails, and external tool output cannot directly authorize side-effecting actions.",
    },
    {
      title: "Human Approval",
      description:
        "Higher-impact actions can pause at a human approval gate instead of executing automatically.",
    },
    {
      title: "Scoped Approval Tokens",
      description:
        "Approvals are restricted to exact tools and arguments, tied to reviewers, given expiration times, and protected against replay.",
    },
    {
      title: "Capability-Based Authorization",
      description:
        "Narrow capabilities grant specific actors limited authority for exact actions without giving them broad permanent permissions.",
    },
    {
      title: "Structured Audit Logging",
      description:
        "Every adversarial test records the proposal, security decision, authorization path, execution result, and final test outcome.",
    },
  ];

  const tests = [
    "Trusted low-risk execution",
    "Invented tool denied",
    "Malformed arguments denied",
    "Unexpected arguments denied",
    "Valid scoped capability",
    "Capability mismatch with approval fallback",
    "Mismatched approval denied",
    "Expired approval denied",
    "Document prompt injection denied",
    "Webpage prompt injection denied",
    "Expired capability denied",
    "Unknown source fails closed",
    "Capability replay denied",
    "Approval-token replay denied",
  ];

  const skills = [
    "Python",
    "AI Agent Security",
    "Tool Security",
    "Schema Validation",
    "Prompt Injection",
    "Source Trust",
    "Human-in-the-Loop",
    "Capability Security",
    "Least Privilege",
    "Replay Protection",
    "Adversarial Testing",
    "Audit Logging",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* BACK */}
        <a
          href="/labs"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to Labs
        </a>

        {/* HEADER */}
        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            AI Security &amp; Control Curriculum · Lab 09
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Secure Tool Execution
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A secure execution layer for AI agents that separates model intent
            from execution authority using tool allowlists, argument
            validation, risk classification, source trust, human approval,
            scoped capabilities, replay protection, and adversarial testing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-09-secure-tool-execution"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View GitHub Repo
            </a>

            <a
              href="https://youtube.com/shorts/FyjlSNJTQzA?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Watch Short
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Python",
              "AI Security",
              "Agent Security",
              "Prompt Injection",
              "Capabilities",
              "Least Privilege",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* RESULTS */}
        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Adversarial Tests</p>
            <p className="mt-2 text-4xl font-bold">14</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Passed</p>
            <p className="mt-2 text-4xl font-bold text-emerald-400">14</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Failed</p>
            <p className="mt-2 text-4xl font-bold">0</p>
          </div>
        </section>

        {/* CORE IDEA */}
        <section className="mt-12 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Core Security Idea
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Model intent is not execution authority.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The AI agent can propose an action, but separate application-owned
            security controls determine whether that action is allowed to
            reach the trusted executor.
          </p>
        </section>

        {/* VIDEO */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 09 Short</h2>

          <p className="mt-3 text-zinc-400">
            A short walkthrough of the secure tool execution system and the
            controls added throughout the lab.
          </p>

          <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/FyjlSNJTQzA"
                title="Lab 09 Secure Tool Execution"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* WHAT I BUILT */}
        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Security Controls
          </p>

          <h2 className="mt-3 text-3xl font-bold">What I Built</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {securityControls.map((control) => (
              <div
                key={control.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-100">
                  {control.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {control.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Final Security Architecture</h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`MODEL / AGENT
↓
TOOL PROPOSAL
↓
TOOL ALLOWLIST
↓
ARGUMENT VALIDATION
↓
RISK CLASSIFICATION
↓
SOURCE TRUST
↓
CAPABILITY CHECK
↓
HUMAN APPROVAL IF NEEDED
↓
FINAL POLICY DECISION
↓
TRUSTED EXECUTOR
↓
AUDIT LOG`}
            </pre>
          </div>
        </section>

        {/* PROMPT INJECTION */}
        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Adversarial Example
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Prompt Injection Against Tool Use
          </h2>

          <p className="mt-4 leading-7 text-zinc-300">
            One test simulated an untrusted document telling the agent to
            ignore previous instructions and send information to an external
            address.
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl bg-black p-5">
            <pre className="text-sm leading-7 text-cyan-300">
{`UNTRUSTED DOCUMENT
↓
REQUESTS send_email
↓
SOURCE TRUST CHECK
↓
UNTRUSTED SOURCE
↓
DENY`}
            </pre>
          </div>

          <p className="mt-6 leading-7 text-zinc-400">
            The model may still encounter malicious instructions, but
            untrusted data does not automatically inherit execution authority.
          </p>
        </section>

        {/* CAPABILITIES */}
        <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Least Privilege
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Scoped Capability Authorization
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            Instead of granting broad authority such as “this actor can send
            emails,” a capability can authorize one exact action.
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl bg-black p-5">
            <pre className="text-sm leading-7 text-cyan-300">
{`actor-operator-01
↓
send_email
↓
exact recipient + subject + body
↓
limited expiration
↓
one-time use`}
            </pre>
          </div>
        </section>

        {/* TESTS */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Adversarial Test Coverage</h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {tests.map((test, index) => (
              <div
                key={test}
                className="flex items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3"
              >
                <div>
                  <span className="mr-3 font-mono text-xs text-cyan-400">
                    T{String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-zinc-300">{test}</span>
                </div>

                <span className="text-xs font-semibold text-emerald-400">
                  PASS
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* TAKEAWAYS */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Security Takeaways</h2>

          <div className="mt-6 grid gap-4">
            {[
              [
                "Default deny matters.",
                "Unknown tools should not become executable simply because an AI model requested them.",
              ],
              [
                "Valid tools still need validation.",
                "Malformed or unexpected arguments can make an otherwise approved tool call unsafe.",
              ],
              [
                "Intent is not authority.",
                "The model can propose actions, but trusted application code owns authorization and execution.",
              ],
              [
                "Untrusted data is not authority.",
                "Prompt-injected content should not automatically inherit the permissions of the agent processing it.",
              ],
              [
                "Least privilege reduces exposure.",
                "Exact, temporary capabilities provide narrower authority than broad permanent permissions.",
              ],
              [
                "Authorization should resist replay.",
                "One-time approvals and capabilities should not remain valid after they have already been consumed.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
              >
                <p className="font-semibold text-zinc-100">{title}</p>

                <p className="mt-2 leading-7 text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Skills Practiced</h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* FINAL RESULT */}
        <section className="mt-16 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Final Result
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            14 / 14 adversarial tests passed
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The completed execution layer blocked unknown tools, malformed
            arguments, untrusted prompt-injection sources, expired authority,
            mismatched approvals, and replay attempts while preserving
            legitimate low-risk and scoped-capability execution.
          </p>
        </section>

        {/* LINKS */}
        <section className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-09-secure-tool-execution"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/FyjlSNJTQzA?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold transition hover:bg-zinc-900"
            >
              Watch on YouTube
            </a>

            <a
              href="/labs"
              className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold transition hover:bg-zinc-900"
            >
              Back to Labs
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
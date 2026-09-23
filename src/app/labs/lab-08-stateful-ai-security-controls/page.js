export default function Lab08Page() {
  const securityControls = [
    {
      title: "Progressive Risk Scoring",
      description:
        "Suspicious events contribute immediate risk while larger correlation bonuses are added when behavior forms a stronger pattern across a session.",
    },
    {
      title: "Stateful Session Security",
      description:
        "Sessions move between MONITORING, RESTRICTED, and BLOCKED states as suspicious behavior accumulates over time.",
    },
    {
      title: "Pre-Execution Enforcement",
      description:
        "Security checks happen before high-impact actions execute, while blocked attempts are still recorded as evidence for future risk calculations.",
    },
    {
      title: "Human Approval Workflow",
      description:
        "Restricted high-risk actions can require human review, while blocked sessions remain protected from ordinary approval overrides.",
    },
    {
      title: "Scoped Approval Tokens",
      description:
        "Human approvals are tied to exact tools, exact arguments, expiration times, reviewer identity, and one-time use.",
    },
    {
      title: "Roles vs Capabilities",
      description:
        "Broad role-based permissions are combined with narrow, temporary capabilities to demonstrate least-privilege authorization.",
    },
  ];

  const takeaways = [
    [
      "Stateful security matters.",
      "Earlier behavior should influence how future actions are treated.",
    ],
    [
      "Authorization and trust are different.",
      "A powerful role does not automatically make a suspicious request safe.",
    ],
    [
      "Human approval needs scope.",
      "Approval for one specific action should not become permission for unrelated future actions.",
    ],
    [
      "Least privilege reduces exposure.",
      "Narrow capabilities can grant exactly what is needed without permanently increasing an actor's authority.",
    ],
    [
      "Defense in depth matters.",
      "Roles, capabilities, session state, source trust, approval, and enforcement work better together than any single security rule.",
    ],
  ];

  const skills = [
    "Python",
    "AI Agent Security",
    "Risk Scoring",
    "Event Correlation",
    "RBAC",
    "Capability Security",
    "Least Privilege",
    "Human-in-the-Loop",
    "Pre-Execution Controls",
    "Adversarial Testing",
    "Structured Logging",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <a
          href="/labs"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to Labs
        </a>

        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            AI Security &amp; Control Curriculum · Lab 08
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Stateful AI Security Controls
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A stateful AI-agent security experiment combining progressive risk
            scoring, event correlation, pre-execution enforcement, human
            approval, scoped authorization, role-based access control,
            capability-based permissions, and adversarial testing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-08-stateful-ai-security-controls"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View GitHub Repo
            </a>

            <a
              href="https://youtube.com/shorts/_HbFL3e4D_8"
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
              "Authorization",
              "Risk Scoring",
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

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Adversarial Tests</p>
            <p className="mt-2 text-4xl font-bold">13</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Passed</p>
            <p className="mt-2 text-4xl font-bold text-emerald-400">13</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Failed</p>
            <p className="mt-2 text-4xl font-bold">0</p>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Core Security Idea
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Security state should evolve with behavior.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            Instead of evaluating each request in isolation, the system tracks
            prior events, current risk, role authority, capabilities, and
            approval state before allowing high-impact actions to execute.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 08 Short</h2>

          <p className="mt-3 text-zinc-400">
            A short walkthrough of what I built, what broke during testing, and
            how the security model evolved throughout the lab.
          </p>

          <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/_HbFL3e4D_8"
                title="Lab 08 Stateful AI Security Controls"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

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

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Final Security Flow</h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`REQUEST
↓
IDENTITY / ROLE
↓
CAPABILITY CHECK
↓
SESSION HISTORY
↓
CURRENT RISK STATE
↓
PRE-EXECUTION POLICY
↓
HUMAN APPROVAL IF REQUIRED
↓
FINAL DECISION
↓
EXECUTION / BLOCK
↓
EVENT LOG
↓
EVENT RISK
↓
CORRELATION RISK
↓
UPDATED SESSION STATE`}
            </pre>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Key Finding
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Event risk needs to exist before correlation risk.
          </h2>

          <p className="mt-4 leading-8 text-zinc-300">
            An early version gave suspicious events no immediate risk until a
            correlation threshold was reached. That caused the session to jump
            directly from MONITORING to BLOCKED instead of escalating gradually.
          </p>

          <p className="mt-5 leading-7 text-zinc-400">
            Adding event-level risk produced a more useful progression:
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl bg-black p-5">
            <pre className="text-sm leading-7 text-cyan-300">
{`Event 1 → MONITORING
Event 2 → RESTRICTED
Event 3 → BLOCKED`}
            </pre>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Security Takeaways</h2>

          <div className="mt-6 grid gap-4">
            {takeaways.map(([title, description]) => (
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

        <section className="mt-16 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Final Result
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            13 / 13 adversarial tests passed
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The final system combined event scoring, correlation, session state,
            roles, capabilities, scoped approval, and pre-execution policy into
            one stateful enforcement path while preserving legitimate actions.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-08-stateful-ai-security-controls"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/_HbFL3e4D_8"
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
export default function Lab08Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* BACK LINK */}
        <a
          href="/"
          className="text-sm text-neutral-400 transition hover:text-white"
        >
          ← Back to Portfolio
        </a>

        {/* HEADER */}
        <section className="mt-10">
          <p className="text-sm font-semibold tracking-[0.25em] text-neutral-500">
            LAB 08
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Stateful AI Security Controls
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
            A stateful AI-agent security experiment combining progressive risk
            scoring, event correlation, pre-execution enforcement, human
            approval, scoped authorization, role-based access control,
            capability-based permissions, and adversarial testing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
              Python
            </span>

            <span className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
              AI Security
            </span>

            <span className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
              Authorization
            </span>

            <span className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
              Risk Scoring
            </span>

            <span className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300">
              Least Privilege
            </span>
          </div>
        </section>

        {/* VIDEO */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Video Recap
          </h2>

          <p className="mt-3 text-neutral-400">
            A short walkthrough of what I built, what broke during testing,
            and how the security model evolved throughout the lab.
          </p>

          <div className="mt-8 max-w-sm overflow-hidden rounded-2xl border border-neutral-800">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/_HbFL3e4D_8"
                title="Lab 08 Video Recap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* WHAT I BUILT */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            What I Built
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Progressive Risk Scoring
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Suspicious events contribute immediate risk while larger
                correlation bonuses are added when behavior forms a stronger
                pattern across a session.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Stateful Session Security
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Sessions move between MONITORING, RESTRICTED, and BLOCKED
                states as suspicious behavior accumulates over time.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Pre-Execution Enforcement
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Security checks happen before high-impact actions execute,
                while blocked attempts are still recorded as evidence for
                future risk calculations.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Human Approval Workflow
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Restricted high-risk actions can require human review, while
                blocked sessions remain protected from ordinary approval
                overrides.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Scoped Approval Tokens
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Human approvals are tied to exact tools, exact arguments,
                expiration times, reviewer identity, and one-time use.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Roles vs Capabilities
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Broad role-based permissions are combined with narrow,
                temporary capabilities to demonstrate least-privilege
                authorization.
              </p>
            </div>

          </div>
        </section>

        {/* SECURITY FLOW */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Final Security Flow
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <pre className="text-sm leading-7 text-neutral-300">
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

        {/* KEY FINDING */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Key Finding
          </h2>

          <div className="mt-8 rounded-2xl border border-neutral-800 p-8">
            <p className="text-lg leading-8 text-neutral-300">
              One of the most important discoveries came from an early version
              of the scoring system. Suspicious events initially contributed
              no risk until correlation thresholds were reached, causing the
              attack session to jump directly from MONITORING to BLOCKED.
            </p>

            <p className="mt-5 leading-7 text-neutral-400">
              Adding event-level risk produced a more useful progression:
            </p>

            <div className="mt-6 rounded-xl bg-neutral-950 p-5 font-mono text-sm text-neutral-300">
              Event 1 → MONITORING
              <br />
              Event 2 → RESTRICTED
              <br />
              Event 3 → BLOCKED
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Final Results
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">

            <div className="rounded-2xl border border-neutral-800 p-6">
              <p className="text-sm text-neutral-500">
                ADVERSARIAL TESTS
              </p>

              <p className="mt-2 text-4xl font-bold">
                13
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <p className="text-sm text-neutral-500">
                PASSED
              </p>

              <p className="mt-2 text-4xl font-bold">
                13
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <p className="text-sm text-neutral-500">
                FAILED
              </p>

              <p className="mt-2 text-4xl font-bold">
                0
              </p>
            </div>

          </div>
        </section>

        {/* SECURITY TAKEAWAYS */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Security Takeaways
          </h2>

          <div className="mt-8 space-y-4 text-neutral-400">

            <p>
              <span className="font-semibold text-white">
                Stateful security matters.
              </span>{" "}
              Earlier behavior should influence how future actions are treated.
            </p>

            <p>
              <span className="font-semibold text-white">
                Authorization and trust are different.
              </span>{" "}
              A powerful role does not automatically make a suspicious request
              safe.
            </p>

            <p>
              <span className="font-semibold text-white">
                Human approval needs scope.
              </span>{" "}
              Approval for one specific action should not become permission for
              unrelated future actions.
            </p>

            <p>
              <span className="font-semibold text-white">
                Least privilege reduces exposure.
              </span>{" "}
              Narrow capabilities can grant exactly what is needed without
              permanently increasing an actor&apos;s authority.
            </p>

            <p>
              <span className="font-semibold text-white">
                Defense in depth matters.
              </span>{" "}
              Roles, capabilities, session state, source trust, approval, and
              enforcement work better together than any single security rule.
            </p>

          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Skills Practiced
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">

            {[
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
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300"
              >
                {skill}
              </span>
            ))}

          </div>
        </section>

        {/* LINKS */}
        <section className="mt-20 border-t border-neutral-800 pt-10">
          <div className="flex flex-wrap gap-4">

            <a
              href="https://github.com/jeremyneutronink-afk/lab-08-stateful-ai-security-controls"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-neutral-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/_HbFL3e4D_8"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-neutral-700 px-5 py-3 font-semibold transition hover:bg-neutral-900"
            >
              Watch on YouTube
            </a>

            <a
              href="/"
              className="rounded-lg border border-neutral-700 px-5 py-3 font-semibold transition hover:bg-neutral-900"
            >
              Back to Labs
            </a>

          </div>
        </section>

      </div>
    </main>
  );
}
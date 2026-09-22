export default function Lab09Page() {
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
            LAB 09
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Secure Tool Execution
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
            A secure execution layer for AI agents that separates model intent
            from execution authority using tool allowlists, argument validation,
            risk classification, source trust, human approval, scoped
            capabilities, replay protection, and adversarial testing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
                className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* VIDEO */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Video Recap
          </h2>

          <p className="mt-3 text-neutral-400">
            A short walkthrough of the secure tool execution system and the
            controls added throughout the lab.
          </p>

          <div className="mt-8 max-w-sm overflow-hidden rounded-2xl border border-neutral-800">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/FyjlSNJTQzA"
                title="Lab 09 Video Recap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* CORE IDEA */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Core Security Idea
          </h2>

          <div className="mt-8 rounded-2xl border border-neutral-800 p-8">
            <p className="text-xl font-semibold">
              Model intent is not execution authority.
            </p>

            <p className="mt-4 leading-7 text-neutral-400">
              The AI agent can propose an action, but separate application-owned
              security controls determine whether that action is allowed to
              reach the trusted executor.
            </p>
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
                Tool Allowlisting
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                The execution layer uses a default-deny policy so only
                explicitly approved tools can proceed.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Argument Validation
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Tool calls are checked against approved schemas for required
                fields, data types, and unexpected arguments before execution.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Risk Classification
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                The application assigns LOW, MEDIUM, and HIGH risk levels
                instead of allowing the model to classify its own actions.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Prompt-Injection Defense
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Instruction provenance is tracked so untrusted documents,
                webpages, emails, and external tool output cannot directly
                authorize side-effecting actions.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Human Approval
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Higher-impact actions can pause at a human approval gate instead
                of executing automatically.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Scoped Approval Tokens
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Approvals are restricted to exact tools and arguments, tied to
                reviewers, given expiration times, and protected against replay.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Capability-Based Authorization
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Narrow capabilities grant specific actors limited authority for
                exact actions without giving them broad permanent permissions.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="text-lg font-semibold">
                Structured Audit Logging
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Every adversarial test records the proposal, security decision,
                authorization path, execution result, and final test outcome.
              </p>
            </div>

          </div>
        </section>

        {/* SECURITY FLOW */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Final Security Architecture
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <pre className="text-sm leading-7 text-neutral-300">
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
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Prompt Injection Test
          </h2>

          <div className="mt-8 rounded-2xl border border-neutral-800 p-8">
            <p className="leading-8 text-neutral-300">
              One test simulated an untrusted document telling the agent to
              ignore previous instructions and send information to an external
              address.
            </p>

            <div className="mt-6 rounded-xl bg-neutral-950 p-5 font-mono text-sm leading-7 text-neutral-300">
              document
              <br />
              ↓
              <br />
              send_email
              <br />
              ↓
              <br />
              UNTRUSTED SOURCE
              <br />
              ↓
              <br />
              DENY
            </div>

            <p className="mt-6 leading-7 text-neutral-400">
              The model may still encounter malicious instructions, but
              untrusted data does not automatically inherit execution
              authority.
            </p>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Least-Privilege Capabilities
          </h2>

          <div className="mt-8 rounded-2xl border border-neutral-800 p-8">
            <p className="leading-7 text-neutral-400">
              Instead of granting broad access such as &quot;this actor can send
              emails,&quot; a capability can authorize one exact action:
            </p>

            <div className="mt-6 rounded-xl bg-neutral-950 p-5 font-mono text-sm leading-7 text-neutral-300">
              actor-operator-01
              <br />
              ↓
              <br />
              send_email
              <br />
              ↓
              <br />
              exact recipient + subject + body
              <br />
              ↓
              <br />
              expires after limited time
              <br />
              ↓
              <br />
              one-time use
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
                SECURITY TESTS
              </p>

              <p className="mt-2 text-4xl font-bold">
                14
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 p-6">
              <p className="text-sm text-neutral-500">
                PASSED
              </p>

              <p className="mt-2 text-4xl font-bold">
                14
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

        {/* TEST COVERAGE */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Adversarial Test Coverage
          </h2>

          <div className="mt-8 space-y-3 font-mono text-sm text-neutral-400">
            <p>PASS — trusted low-risk execution</p>
            <p>PASS — invented tool denied</p>
            <p>PASS — malformed arguments denied</p>
            <p>PASS — unexpected arguments denied</p>
            <p>PASS — valid scoped capability</p>
            <p>PASS — capability mismatch with approval fallback</p>
            <p>PASS — mismatched approval denied</p>
            <p>PASS — expired approval denied</p>
            <p>PASS — document prompt injection denied</p>
            <p>PASS — webpage prompt injection denied</p>
            <p>PASS — expired capability denied</p>
            <p>PASS — unknown source fails closed</p>
            <p>PASS — capability replay denied</p>
            <p>PASS — approval-token replay denied</p>
          </div>
        </section>

        {/* TAKEAWAYS */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">
            Security Takeaways
          </h2>

          <div className="mt-8 space-y-4 text-neutral-400">

            <p>
              <span className="font-semibold text-white">
                Default deny matters.
              </span>{" "}
              Unknown tools should not become executable just because an AI
              model requested them.
            </p>

            <p>
              <span className="font-semibold text-white">
                Valid tools still need validation.
              </span>{" "}
              Malformed or unexpected arguments can make an otherwise approved
              tool call unsafe.
            </p>

            <p>
              <span className="font-semibold text-white">
                Intent is not authority.
              </span>{" "}
              The model can propose actions, but trusted application code owns
              authorization and execution.
            </p>

            <p>
              <span className="font-semibold text-white">
                Untrusted data is not authority.
              </span>{" "}
              Prompt-injected content should not automatically inherit the
              permissions of the agent processing it.
            </p>

            <p>
              <span className="font-semibold text-white">
                Least privilege reduces exposure.
              </span>{" "}
              Exact, temporary capabilities provide narrower authority than
              broad permanent permissions.
            </p>

            <p>
              <span className="font-semibold text-white">
                Authorization should resist replay.
              </span>{" "}
              One-time approvals and capabilities should not remain valid after
              they have already been consumed.
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
              href="https://github.com/jeremyneutronink-afk/lab-09-secure-tool-execution"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-neutral-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/FyjlSNJTQzA?feature=share"
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
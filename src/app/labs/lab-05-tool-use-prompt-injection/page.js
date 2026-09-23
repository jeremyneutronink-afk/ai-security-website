export default function Lab05Page() {
  const stages = [
    {
      stage: "Stage 1",
      title: "Model-Only Defense",
      description:
        "The model was instructed to treat the email as untrusted and ignore commands embedded inside it.",
      result: "No unauthorized tool calls were attempted.",
    },
    {
      stage: "Stage 2",
      title: "External Policy Enforcement",
      description:
        "An independent policy layer was added so that the model could propose actions without having authority to execute them.",
      details: [
        "send_email → REQUIRE HUMAN APPROVAL",
        "change_booking → REQUIRE HUMAN APPROVAL",
        'read_file("public_pricing.txt") → ALLOW',
        'read_file("private_customer_records.txt") → DENY',
      ],
    },
    {
      stage: "Stage 3",
      title: "Provenance-Aware Authorization",
      description:
        "The policy layer was expanded to consider where the action originated and whether the human user explicitly authorized it.",
      details: [
        "untrusted_email → send_email → DENY",
        "model → change_booking → REQUIRE HUMAN APPROVAL",
        "user → send_email → ALLOW",
      ],
    },
  ];

  const principles = [
    "Prompt Injection Defense",
    "Tool Authorization",
    "Human Approval Gates",
    "Least Privilege",
    "Provenance Tracking",
    "Allowlisting",
    "Fail-Closed Design",
    "External Policy Enforcement",
    "Agent Security",
    "Threat Modeling",
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
            AI Security &amp; Control Curriculum · Lab 05
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Prompt Injection Against Tool Use
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            An AI agent security lab testing whether untrusted content can
            influence tool use, and whether external authorization controls can
            prevent unsafe actions even when the model proposes them.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-05-tool-use-prompt-injection"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View GitHub Repo
            </a>

            <a
              href="https://youtube.com/shorts/HHbJT_LBBmI"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Watch Short
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "AI Security",
              "Agent Security",
              "Prompt Injection",
              "Authorization",
              "Human Approval",
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

        <section className="mt-12 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Core Security Idea
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Model intelligence does not equal execution authority.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The model can reason about an action and propose it, but a separate
            application-owned security layer should decide whether that action
            is actually permitted to execute.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 05 Short</h2>

          <p className="mt-3 text-zinc-400">
            A short walkthrough of the prompt-injection threat model and the
            authorization controls added around tool use.
          </p>

          <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/HHbJT_LBBmI"
                title="Lab 05 Prompt Injection Against Tool Use"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What I Built
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Simulated Tool-Using AI Workflow
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            I built a simulated tool-using AI workflow with three tools:
            sending email, changing bookings, and reading files. The system
            processes untrusted email content and tests whether malicious
            instructions inside that content can influence the model into
            proposing an external action.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Threat Model
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Untrusted Content Influencing Tool Use
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            The legitimate task is to summarize an email. The email itself is
            untrusted and may contain hidden instructions attempting to trigger
            tool use.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`UNTRUSTED EMAIL CONTENT
↓
AI MODEL
↓
PROPOSED TOOL ACTION
↓
POTENTIAL EXTERNAL SIDE EFFECT`}
            </pre>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Security Progression
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Three Stages of Defense
          </h2>

          <div className="mt-8 grid gap-6">
            {stages.map((item) => (
              <div
                key={item.stage}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  {item.stage}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-zinc-100">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>

                {item.result && (
                  <p className="mt-4 font-medium text-zinc-200">
                    Result: {item.result}
                  </p>
                )}

                {item.details && (
                  <div className="mt-5 rounded-xl bg-black p-5">
                    <div className="space-y-2 font-mono text-sm text-cyan-300">
                      {item.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Final Security Architecture</h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`TRUSTED USER REQUEST
+
UNTRUSTED EXTERNAL CONTENT
↓
MODEL
↓
PROPOSED TOOL ACTION
↓
PROVENANCE-AWARE POLICY LAYER
↓
ALLOW / DENY / REQUIRE HUMAN APPROVAL
↓
SIMULATED EXECUTION`}
            </pre>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Key Finding
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            The model should propose. The security layer should authorize.
          </h2>

          <p className="mt-4 leading-8 text-zinc-300">
            Model intelligence does not equal authorization authority. Even when
            the model can reason about a tool action, trusted application code
            should independently determine whether that action is safe and
            permitted.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Why This Matters
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Tool-using agents create real side effects.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            A chatbot that fails may produce a bad answer. A tool-using agent
            can attempt to send messages, alter records, access files, or call
            external systems. That makes independent authorization and execution
            controls essential for secure agent design.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Security Principles Demonstrated
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {principles.map((principle) => (
              <span
                key={principle}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400"
              >
                {principle}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Final Result
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Tool proposals became policy-controlled actions.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The completed workflow separated model reasoning from execution
            authority using external policy enforcement, provenance-aware
            decisions, human approval gates, least privilege, and fail-closed
            controls.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Next Step
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Test the controller itself.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            The next lab expands this idea by comparing an intentionally
            vulnerable controller with a hardened provenance-aware controller
            under the same adversarial inputs.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-05-tool-use-prompt-injection"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/HHbJT_LBBmI"
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
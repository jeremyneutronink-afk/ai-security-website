export default function Lab05Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <a
          href="/labs"
          className="text-sm text-neutral-400 hover:text-white transition"
        >
          ← Back to Labs
        </a>

        <div className="mt-10 mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Lab 05
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Prompt Injection Against Tool Use
          </h1>

          <p className="text-lg text-neutral-400 leading-8">
            An AI agent security lab testing whether untrusted content can
            influence tool use, and whether external authorization controls can
            prevent unsafe actions even when the model proposes them.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Video Recap</h2>

          <div className="max-w-sm mx-auto overflow-hidden rounded-2xl border border-neutral-800">
            <div className="aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/HHbJT_LBBmI"
                title="Lab 05 Video Recap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What I Built</h2>

          <p className="text-neutral-400 leading-8">
            I built a simulated tool-using AI workflow with three tools:
            sending email, changing bookings, and reading files. The system
            processes untrusted email content and tests whether malicious
            instructions inside that content can influence the model into
            proposing an external action.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Threat Model</h2>

          <p className="text-neutral-400 leading-8">
            The legitimate task is to summarize an email. The email itself is
            untrusted and may contain hidden instructions attempting to trigger
            tool use.
          </p>

          <div className="border border-neutral-800 rounded-2xl p-6 mt-6 font-mono text-sm text-neutral-300 leading-8">
            Untrusted Email Content
            <br />
            ↓
            <br />
            AI Model
            <br />
            ↓
            <br />
            Proposed Tool Action
            <br />
            ↓
            <br />
            Potential External Side Effect
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">
            Three-Stage Security Progression
          </h2>

          <div className="space-y-6">
            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">STAGE 1</p>

              <h3 className="text-xl font-semibold mb-3">
                Model-Only Defense
              </h3>

              <p className="text-neutral-400 leading-7 mb-4">
                The model was instructed to treat the email as untrusted and
                ignore commands embedded inside it.
              </p>

              <p className="text-neutral-300">
                Result: No unauthorized tool calls were attempted.
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">STAGE 2</p>

              <h3 className="text-xl font-semibold mb-3">
                External Policy Enforcement
              </h3>

              <p className="text-neutral-400 leading-7 mb-4">
                An independent policy layer was added so that the model could
                propose actions without having authority to execute them.
              </p>

              <div className="font-mono text-sm text-neutral-300 leading-7">
                send_email → REQUIRE HUMAN APPROVAL
                <br />
                change_booking → REQUIRE HUMAN APPROVAL
                <br />
                read_file(&quot;public_pricing.txt&quot;) → ALLOW
                <br />
                read_file(&quot;private_customer_records.txt&quot;) → DENY
              </div>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">STAGE 3</p>

              <h3 className="text-xl font-semibold mb-3">
                Provenance-Aware Authorization
              </h3>

              <p className="text-neutral-400 leading-7 mb-4">
                The policy layer was expanded to consider where the action
                originated and whether the human user explicitly authorized it.
              </p>

              <div className="font-mono text-sm text-neutral-300 leading-7">
                untrusted_email → send_email → DENY
                <br />
                model → change_booking → REQUIRE HUMAN APPROVAL
                <br />
                user → send_email → ALLOW
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Final Security Architecture
          </h2>

          <div className="border border-neutral-800 rounded-2xl p-6 font-mono text-sm text-neutral-300 leading-8">
            Trusted User Request
            <br />
            +
            <br />
            Untrusted External Content
            <br />
            ↓
            <br />
            Model
            <br />
            ↓
            <br />
            Proposed Tool Action
            <br />
            ↓
            <br />
            Provenance-Aware Policy Layer
            <br />
            ↓
            <br />
            ALLOW / DENY / REQUIRE HUMAN APPROVAL
            <br />
            ↓
            <br />
            Simulated Execution
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Key Finding</h2>

          <p className="text-neutral-400 leading-8">
            Model intelligence does not equal authorization authority. The model
            can reason about and propose an action, but a separate security
            layer should decide whether that action is permitted to execute.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Security Principles Demonstrated
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
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
            ].map((skill) => (
              <span
                key={skill}
                className="border border-neutral-700 rounded-full px-4 py-2 text-sm text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Why This Matters
          </h2>

          <p className="text-neutral-400 leading-8">
            A chatbot that fails may produce a bad answer. A tool-using agent
            can attempt to send messages, alter records, access files, or call
            external systems. That makes independent authorization and execution
            controls essential for secure agent design.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Next Step</h2>

          <p className="text-neutral-400 leading-8">
            Future labs will expand this architecture with stronger execution
            boundaries, audit logging, monitoring, scoped permissions, and
            sandboxed actions.
          </p>
        </section>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/jeremyneutronink-afk/lab-05-tool-use-prompt-injection"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            View Source Code
          </a>

          <a
            href="/labs"
            className="border border-neutral-700 px-6 py-3 rounded-lg font-semibold"
          >
            View All Labs
          </a>
        </div>
      </div>
    </main>
  );
}
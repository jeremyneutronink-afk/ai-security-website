export default function Lab06Page() {
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
            Lab 06
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Prompt Injection Playground
          </h1>

          <p className="text-lg text-neutral-400 leading-8">
            A system-level AI security experiment comparing an intentionally
            vulnerable controller against a provenance-aware hardened controller
            using the same model outputs and attack documents.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Video Recap</h2>

          <div className="max-w-sm mx-auto overflow-hidden rounded-2xl border border-neutral-800">
            <div className="aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/6xlL5atHO98"
                title="Lab 06 Video Recap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What I Built</h2>

          <p className="text-neutral-400 leading-8">
            I built a prompt-injection test environment that first attempted to
            manipulate the model directly, then shifted to testing a more
            realistic application-level weakness: blindly trusting actions
            extracted from untrusted content.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Threat Model</h2>

          <p className="text-neutral-400 leading-8">
            Customer documents are treated as untrusted external data. A
            malicious document can contain an ACTION field that attempts to
            influence downstream application behavior.
          </p>

          <div className="border border-neutral-800 rounded-2xl p-6 mt-6 font-mono text-sm text-neutral-300 leading-8">
            Untrusted Document
            <br />
            ↓
            <br />
            Model Extraction
            <br />
            ↓
            <br />
            ACTION Field
            <br />
            ↓
            <br />
            Application Controller
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">
            Experiment Progression
          </h2>

          <div className="space-y-6">
            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">STAGE 1</p>

              <h3 className="text-xl font-semibold mb-3">
                Basic Prompt Injection
              </h3>

              <p className="text-neutral-400 leading-7 mb-4">
                Five direct text-only prompt-injection attacks were tested.
              </p>

              <p className="text-neutral-300">
                Result: 0/5 successful attacks
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">STAGE 2</p>

              <h3 className="text-xl font-semibold mb-3">
                Stronger Model-Level Attacks
              </h3>

              <p className="text-neutral-400 leading-7 mb-4">
                The attack set was expanded with simulated actions, fake secret
                extraction, developer overrides, and action hijacking.
              </p>

              <p className="text-neutral-300">
                Result: 0/5 successful attacks
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">STAGE 3</p>

              <h3 className="text-xl font-semibold mb-3">
                Vulnerable Controller
              </h3>

              <p className="text-neutral-400 leading-7 mb-4">
                The application blindly treated an ACTION field extracted from
                untrusted content as authority to execute a simulated action.
              </p>

              <p className="text-neutral-300">
                Result: 4/5 failures — 80.0% failure rate
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">STAGE 4</p>

              <h3 className="text-xl font-semibold mb-3">
                Hardened Controller
              </h3>

              <p className="text-neutral-400 leading-7 mb-4">
                The same model outputs and extracted actions were passed through
                a provenance-aware controller that treated extracted actions as
                untrusted data instead of authorization.
              </p>

              <p className="text-neutral-300">
                Result: 0/5 failures — 0.0% failure rate
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Vulnerable vs. Hardened
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">VULNERABLE</p>
              <p className="text-3xl font-bold mb-2">80%</p>
              <p className="text-neutral-400">
                4 security failures out of 5 tests
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">HARDENED</p>
              <p className="text-3xl font-bold mb-2">0%</p>
              <p className="text-neutral-400">
                0 security failures out of 5 tests
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Final Architecture
          </h2>

          <div className="border border-neutral-800 rounded-2xl p-6 font-mono text-sm text-neutral-300 leading-8">
            Untrusted Document
            <br />
            ↓
            <br />
            Model Extraction
            <br />
            ↓
            <br />
            Extracted Action
            <br />
            ↓
            <br />
            Provenance + Authorization Policy
            <br />
            ↓
            <br />
            ALLOW / DENY / REQUIRE APPROVAL
            <br />
            ↓
            <br />
            Simulated Execution
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Key Finding</h2>

          <p className="text-neutral-400 leading-8">
            Untrusted data is not authorization. The model correctly extracting
            an action from attacker-controlled content does not mean the
            application should execute that action.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Why This Matters
          </h2>

          <p className="text-neutral-400 leading-8">
            AI security is not only about whether a model follows malicious
            instructions. A model can behave predictably while insecure
            application logic turns untrusted output into a real security
            failure.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Skills Demonstrated
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "OpenAI Responses API",
              "Prompt Injection",
              "Indirect Prompt Injection",
              "Structured Model Output",
              "Threat Modeling",
              "Adversarial Testing",
              "Provenance Tracking",
              "Authorization Design",
              "Fail-Closed Design",
              "Security Evaluation",
              "Agent Security",
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
          <h2 className="text-2xl font-semibold mb-4">Next Step</h2>

          <p className="text-neutral-400 leading-8">
            Future labs will extend this architecture with audit logging,
            scoped permissions, monitoring, sandboxing, and stronger execution
            controls.
          </p>
        </section>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/jeremyneutronink-afk/lab-06-prompt-injection-playground"
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
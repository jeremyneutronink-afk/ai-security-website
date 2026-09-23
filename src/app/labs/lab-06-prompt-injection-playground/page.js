export default function Lab06Page() {
  const stages = [
    {
      stage: "Stage 1",
      title: "Basic Prompt Injection",
      description:
        "Five direct text-only prompt-injection attacks were tested against the model.",
      result: "0 / 5 successful attacks",
    },
    {
      stage: "Stage 2",
      title: "Stronger Model-Level Attacks",
      description:
        "The attack set was expanded with simulated actions, fake secret extraction, developer overrides, and action hijacking.",
      result: "0 / 5 successful attacks",
    },
    {
      stage: "Stage 3",
      title: "Vulnerable Controller",
      description:
        "The application blindly treated an ACTION field extracted from untrusted content as authority to execute a simulated action.",
      result: "4 / 5 failures — 80.0% failure rate",
    },
    {
      stage: "Stage 4",
      title: "Hardened Controller",
      description:
        "The same model outputs and extracted actions were passed through a provenance-aware controller that treated extracted actions as untrusted data instead of authorization.",
      result: "0 / 5 failures — 0.0% failure rate",
    },
  ];

  const skills = [
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
            AI Security &amp; Control Curriculum · Lab 06
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Prompt Injection Playground
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A system-level AI security experiment comparing an intentionally
            vulnerable controller against a provenance-aware hardened
            controller using the same model outputs and attack documents.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-06-prompt-injection-playground"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View GitHub Repo
            </a>

            <a
              href="https://youtube.com/shorts/6xlL5atHO98"
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
              "Prompt Injection",
              "Provenance",
              "Adversarial Testing",
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

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-red-900/60 bg-red-950/20 p-6">
            <p className="text-sm text-zinc-400">Vulnerable Controller</p>
            <p className="mt-2 text-4xl font-bold text-red-400">80%</p>
            <p className="mt-2 text-sm text-zinc-400">
              4 security failures out of 5 tests
            </p>
          </div>

          <div className="rounded-xl border border-emerald-900/60 bg-emerald-950/20 p-6">
            <p className="text-sm text-zinc-400">Hardened Controller</p>
            <p className="mt-2 text-4xl font-bold text-emerald-400">0%</p>
            <p className="mt-2 text-sm text-zinc-400">
              0 security failures out of 5 tests
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Core Security Idea
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Untrusted data is not authorization.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            A model correctly extracting an action from attacker-controlled
            content does not mean the application should execute that action.
            Model output and execution authority must remain separate.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 06 Short</h2>

          <p className="mt-3 text-zinc-400">
            A short walkthrough of the prompt-injection tests and the shift from
            model-level attacks to application-level security controls.
          </p>

          <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/6xlL5atHO98"
                title="Lab 06 Prompt Injection Playground"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Threat Model
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Untrusted Documents Influencing Application Behavior
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            Customer documents are treated as untrusted external data. A
            malicious document can contain an ACTION field that attempts to
            influence downstream application behavior.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`UNTRUSTED DOCUMENT
↓
MODEL EXTRACTION
↓
ACTION FIELD
↓
APPLICATION CONTROLLER`}
            </pre>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Experiment Progression
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            From Model Testing to System Security
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

                <p className="mt-4 font-medium text-zinc-200">
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">
            Vulnerable vs. Hardened Controller
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-900/60 bg-red-950/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                Vulnerable
              </p>

              <p className="mt-3 text-4xl font-bold">80%</p>

              <p className="mt-3 leading-7 text-zinc-400">
                The application treated actions extracted from untrusted
                documents as authority to execute.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-900/60 bg-emerald-950/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Hardened
              </p>

              <p className="mt-3 text-4xl font-bold">0%</p>

              <p className="mt-3 leading-7 text-zinc-400">
                The controller applied provenance and authorization policy
                before allowing any extracted action to reach execution.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Final Architecture</h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`UNTRUSTED DOCUMENT
↓
MODEL EXTRACTION
↓
EXTRACTED ACTION
↓
PROVENANCE + AUTHORIZATION POLICY
↓
ALLOW / DENY / REQUIRE APPROVAL
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
            The insecure component was the controller, not necessarily the
            model.
          </h2>

          <p className="mt-4 leading-8 text-zinc-300">
            The direct prompt-injection tests produced no successful attacks,
            but the vulnerable application controller still failed four out of
            five system-level tests because it turned untrusted extracted data
            into execution authority.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Why This Matters
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            AI security is a system problem.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            A model can behave predictably while insecure application logic
            turns untrusted output into a real security failure. Secure AI
            systems need boundaries around both model behavior and the software
            that acts on model output.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Skills Demonstrated</h2>

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
            80% failure rate reduced to 0%.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            Using the same model outputs and attack documents, the
            provenance-aware controller eliminated the vulnerable controller's
            four security failures by refusing to treat untrusted extracted
            actions as authorization.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Next Step
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Make security decisions observable.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            The next stage extends this architecture with audit logging,
            detection rules, alerting, risk scoring, and stronger monitoring of
            security-relevant agent behavior.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-06-prompt-injection-playground"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/6xlL5atHO98"
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
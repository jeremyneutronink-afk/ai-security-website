export default function Lab04Page() {
  const experiments = [
    {
      experiment: "Experiment 1",
      title: "Initial Injection Set",
      description:
        "Five basic prompt-injection attempts were tested against both the weak and hardened architectures.",
      weak: "0 / 5 failures",
      hardened: "0 / 5 failures",
    },
    {
      experiment: "Experiment 2",
      title: "Structured Grading",
      description:
        "The attack set was strengthened and the model was given a structured output format with automated grading.",
      weak: "0 / 5 failures",
      hardened: "0 / 5 failures",
    },
    {
      experiment: "Experiment 3",
      title: "Realistic Indirect Injection",
      description:
        "More realistic indirect-injection language was introduced, and the grader evaluated observable behavior instead of relying on model self-reporting.",
      weak: "0 / 5 failures",
      hardened: "0 / 5 failures",
    },
  ];

  const skills = [
    "Python",
    "OpenAI Responses API",
    "Prompt Injection",
    "Indirect Prompt Injection",
    "Threat Modeling",
    "Trusted vs. Untrusted Input",
    "Adversarial Testing",
    "AI Evaluation Design",
    "Failure-Rate Measurement",
    "Model Behavior Analysis",
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
            AI Security &amp; Control Curriculum · Lab 04
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Trusted vs. Untrusted Input
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            An AI security experiment testing whether malicious instructions
            hidden inside untrusted email content could manipulate a
            model&apos;s behavior, and whether stronger trust boundaries changed
            the result.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-04-trusted-untrusted-input"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View GitHub Repo
            </a>

            <a
              href="https://youtube.com/shorts/Berrptj1FLQ"
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
              "Trust Boundaries",
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
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Weak Architecture</p>
            <p className="mt-2 text-4xl font-bold">0 / 15</p>
            <p className="mt-2 text-sm text-zinc-400">
              Observed failures across three experiments
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Hardened Architecture</p>
            <p className="mt-2 text-4xl font-bold text-emerald-400">0 / 15</p>
            <p className="mt-2 text-sm text-zinc-400">
              Observed failures across three experiments
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Core Security Idea
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Trusted instructions and untrusted data should be separated.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The experiment compared a weak architecture that mixed task
            instructions with external email content against a hardened
            architecture that explicitly separated trusted application
            instructions from untrusted data.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 04 Short</h2>

          <p className="mt-3 text-zinc-400">
            A short walkthrough of the trust-boundary experiment and the
            prompt-injection evaluation.
          </p>

          <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/Berrptj1FLQ"
                title="Lab 04 Trusted vs Untrusted Input"
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
            Two Prompt Architectures
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            I created a small email summarization system and compared two
            architectures: a weak version where task instructions and email
            content were mixed together, and a hardened version where trusted
            instructions were separated from explicitly labeled untrusted data.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Weak Design
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Mixed Instruction Context
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Trusted task instructions and attacker-controlled email content
                were placed together without a strong structural trust
                boundary.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-900/60 bg-cyan-950/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Hardened Design
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Explicit Trust Boundary
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Application instructions were kept separate while email content
                was explicitly labeled as untrusted external data.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Threat Model
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Malicious Instructions Hidden in Email Content
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            The email contains legitimate scheduling information, but it may
            also contain instructions attempting to redirect the model away
            from the intended summarization task.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`TRUSTED APPLICATION INSTRUCTIONS
+
UNTRUSTED EMAIL CONTENT
↓
AI MODEL`}
            </pre>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Experiment Progression
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Three Rounds of Prompt-Injection Testing
          </h2>

          <div className="mt-8 grid gap-6">
            {experiments.map((item) => (
              <div
                key={item.experiment}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  {item.experiment}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-zinc-100">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-black p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                      Weak
                    </p>
                    <p className="mt-2 font-mono text-sm text-zinc-300">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl bg-black p-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                      Hardened
                    </p>
                    <p className="mt-2 font-mono text-sm text-emerald-400">
                      {item.hardened}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-amber-900/50 bg-amber-950/10 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Important Evaluation Limitation
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Zero observed failures does not prove security.
          </h2>

          <p className="mt-4 leading-8 text-zinc-300">
            All three experiments produced zero failures in both architectures.
            That means the tested model resisted these particular text-only
            attacks, but the evaluation was not strong enough to clearly
            distinguish the weak design from the hardened one.
          </p>

          <p className="mt-4 leading-7 text-zinc-400">
            The correct conclusion is not that both architectures are secure.
            The correct conclusion is that the attack set and failure condition
            needed to become more demanding.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Security Takeaway
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Evaluate the evaluation.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            A security evaluation must be judged as critically as the model
            itself. Passing a small attack set does not prove robustness.
            Useful AI security testing requires repeatable attacks, measurable
            failure conditions, and increasingly difficult evaluations.
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
            30 prompt-injection evaluations, 0 observed failures.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            Across three experiments, five attacks were tested against both the
            weak and hardened architectures. Neither architecture produced an
            observable failure, revealing an important limitation in the test
            design rather than proving either system secure.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Next Step
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Move from text manipulation to attempted tool use.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            The next lab tests whether untrusted content can influence a model
            into proposing an external action. That creates a more
            security-relevant failure condition than simply producing incorrect
            text.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-04-trusted-untrusted-input"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/Berrptj1FLQ"
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
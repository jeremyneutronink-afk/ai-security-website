export default function Lab04Page() {
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
            Lab 04
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted vs. Untrusted Input
          </h1>

          <p className="text-lg text-neutral-400 leading-8">
            An AI security experiment testing whether malicious instructions
            hidden inside untrusted email content could manipulate a model's
            behavior, and whether stronger trust boundaries changed the result.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Video Recap</h2>

          <div className="max-w-sm mx-auto overflow-hidden rounded-2xl border border-neutral-800">
            <div className="aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Berrptj1FLQ"
                title="Lab 04 Video Recap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What I Built</h2>

          <p className="text-neutral-400 leading-8">
            I created a small email summarization system and compared two
            architectures: a weak version where task instructions and email
            content were mixed together, and a hardened version where trusted
            instructions were separated from explicitly labeled untrusted data.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Threat Model</h2>

          <p className="text-neutral-400 leading-8">
            The email contains legitimate scheduling information, but it may
            also contain instructions attempting to redirect the model away
            from the intended task.
          </p>

          <div className="border border-neutral-800 rounded-2xl p-6 mt-6 font-mono text-sm text-neutral-300 leading-8">
            Trusted Application Instructions
            <br />
            +
            <br />
            Untrusted Email Content
            <br />
            ↓
            <br />
            AI Model
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">
            Experiment Progression
          </h2>

          <div className="space-y-6">
            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">EXPERIMENT 1</p>
              <h3 className="text-xl font-semibold mb-3">
                Initial Injection Set
              </h3>
              <p className="text-neutral-400 leading-7 mb-4">
                Five basic prompt-injection attempts were tested against both
                architectures.
              </p>
              <p className="text-neutral-300">
                Weak: 0/5 failures • Hardened: 0/5 failures
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">EXPERIMENT 2</p>
              <h3 className="text-xl font-semibold mb-3">
                Structured Grading
              </h3>
              <p className="text-neutral-400 leading-7 mb-4">
                The attack set was strengthened and the model was given a
                structured output format with automated grading.
              </p>
              <p className="text-neutral-300">
                Weak: 0/5 failures • Hardened: 0/5 failures
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">EXPERIMENT 3</p>
              <h3 className="text-xl font-semibold mb-3">
                Realistic Indirect Injection
              </h3>
              <p className="text-neutral-400 leading-7 mb-4">
                More realistic indirect-injection language was introduced, and
                the grader evaluated observable behavior instead of relying on
                model self-reporting.
              </p>
              <p className="text-neutral-300">
                Weak: 0/5 failures • Hardened: 0/5 failures
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Key Finding</h2>

          <p className="text-neutral-400 leading-8">
            All three experiments produced zero failures in both architectures.
            That does not establish that either architecture is secure. It means
            the tested model resisted these particular text-only attacks and
            the evaluation was not strong enough to clearly distinguish the
            two designs.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Security Takeaway
          </h2>

          <p className="text-neutral-400 leading-8">
            A security evaluation must be judged as critically as the model
            itself. Passing a small attack set does not prove robustness.
            Useful AI security testing requires repeatable attacks, measurable
            failure conditions, and increasingly difficult evaluations.
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
              "Threat Modeling",
              "Trusted vs. Untrusted Input",
              "Adversarial Testing",
              "AI Evaluation Design",
              "Failure-Rate Measurement",
              "Model Behavior Analysis",
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
            The next lab moves beyond text-only manipulation and tests whether
            untrusted content can influence attempted tool use. That creates a
            more security-relevant failure condition because the model can
            propose an external action instead of merely producing incorrect
            text.
          </p>
        </section>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/jeremyneutronink-afk/lab-04-trusted-untrusted-input"
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
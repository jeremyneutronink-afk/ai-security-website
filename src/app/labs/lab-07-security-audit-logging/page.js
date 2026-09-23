export default function Lab07Page() {
  const stages = [
    {
      stage: "Stage 1",
      title: "Structured Audit Logging",
      description:
        "Each security-relevant tool request was written to a JSONL log with timestamp, source, tool, decision, reason, authorization state, and arguments.",
      result: "6 structured security events recorded",
    },
    {
      stage: "Stage 2",
      title: "Detection Rules",
      description:
        "Detection logic identified denied actions, untrusted sources, unauthorized high-risk tools, restricted file access, and unknown tools.",
      result: "4 alerted events and 8 total alerts",
    },
    {
      stage: "Stage 3",
      title: "Risk Scoring & Severity",
      description:
        "Alerts were weighted and combined into per-event risk scores, which were then classified as INFO, LOW, MEDIUM, HIGH, or CRITICAL.",
      result: "Highest-risk event: score 8 — CRITICAL",
    },
  ];

  const skills = [
    "Python",
    "JSON",
    "JSONL",
    "Security Logging",
    "Detection Engineering",
    "Risk Scoring",
    "Incident Severity",
    "Security Telemetry",
    "Agent Security",
    "Threat Monitoring",
    "Authorization Logging",
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
            AI Security &amp; Control Curriculum · Lab 07
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Security Audit Logging &amp; Incident Scoring
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            An AI security telemetry lab focused on structured audit logging,
            detection rules, alert generation, risk scoring, and incident
            prioritization.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-07-security-audit-logging"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View GitHub Repo
            </a>

            <a
              href="https://youtube.com/shorts/wd1OIWbLxMg"
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
              "Security Telemetry",
              "Detection Engineering",
              "Risk Scoring",
              "Incident Severity",
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

        <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Events</p>
            <p className="mt-2 text-4xl font-bold">6</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Alerts</p>
            <p className="mt-2 text-4xl font-bold">8</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">High Severity</p>
            <p className="mt-2 text-4xl font-bold text-amber-400">2</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Critical</p>
            <p className="mt-2 text-4xl font-bold text-red-400">1</p>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-cyan-900/60 bg-cyan-950/20 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Core Security Idea
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Blocking an action is not enough.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            A mature AI security system also needs telemetry that makes
            suspicious behavior visible, measurable, explainable, and
            prioritizable after the policy decision is made.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 07 Short</h2>

          <p className="mt-3 text-zinc-400">
            A short walkthrough of the security logging, detection, alerting,
            and incident-scoring pipeline.
          </p>

          <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/wd1OIWbLxMg"
                title="Lab 07 Security Audit Logging and Incident Scoring"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Telemetry Pipeline
          </p>

          <h2 className="mt-3 text-3xl font-bold">What I Built</h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            I built a structured security telemetry pipeline that records
            tool-use decisions, detects suspicious patterns, generates alerts,
            assigns risk scores, and classifies incidents by severity.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`TOOL REQUEST
↓
POLICY DECISION
↓
STRUCTURED AUDIT EVENT
↓
DETECTION RULES
↓
ALERTS
↓
RISK SCORE
↓
SEVERITY CLASSIFICATION`}
            </pre>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Build Progression
          </p>

          <h2 className="mt-3 text-3xl font-bold">Three-Stage Progression</h2>

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

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Highest-Risk Event
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            CRITICAL send_email attempt
          </h2>

          <div className="mt-6 overflow-x-auto rounded-xl bg-black p-5">
            <pre className="text-sm leading-7 text-cyan-300">
{`Tool: send_email
Source: untrusted_document
Decision: DENY
Risk score: 8
Severity: CRITICAL`}
            </pre>
          </div>

          <p className="mt-6 leading-7 text-zinc-400">
            The event triggered three security alerts: a denied action, an
            untrusted source, and an unauthorized high-risk tool request.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Key Finding</h2>

          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
            <p className="leading-8 text-zinc-300">
              Blocking a dangerous action is only part of security. A mature AI
              system also needs telemetry that makes suspicious behavior
              visible, measurable, and prioritizable.
            </p>
          </div>
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
            Security events became actionable incident signals.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The completed pipeline transformed raw tool-use decisions into
            structured audit events, alerts, weighted risk scores, and severity
            classifications that could be used to prioritize investigation and
            future automated response.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Next Step
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            From isolated events to stateful security
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            Future labs build on this telemetry foundation with event
            correlation, repeated-attempt detection, automated responses,
            monitoring, and stronger agent containment.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-07-security-audit-logging"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/wd1OIWbLxMg"
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
export default function Lab07Page() {
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
            Lab 07
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Security Audit Logging & Incident Scoring
          </h1>

          <p className="text-lg text-neutral-400 leading-8">
            An AI security telemetry lab focused on structured audit logging,
            detection rules, alert generation, risk scoring, and incident
            prioritization.
          </p>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Video Recap</h2>

          <div className="max-w-sm mx-auto overflow-hidden rounded-2xl border border-neutral-800">
            <div className="aspect-[9/16]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wd1OIWbLxMg"
                title="Lab 07 Video Recap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What I Built</h2>

          <p className="text-neutral-400 leading-8">
            I built a structured security telemetry pipeline that records
            tool-use decisions, detects suspicious patterns, generates alerts,
            assigns risk scores, and classifies incidents by severity.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Security Pipeline</h2>

          <div className="border border-neutral-800 rounded-2xl p-6 font-mono text-sm text-neutral-300 leading-8">
            Tool Request
            <br />
            ↓
            <br />
            Policy Decision
            <br />
            ↓
            <br />
            Structured Audit Event
            <br />
            ↓
            <br />
            Detection Rules
            <br />
            ↓
            <br />
            Alerts
            <br />
            ↓
            <br />
            Risk Score
            <br />
            ↓
            <br />
            Severity Classification
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">
            Three-Stage Progression
          </h2>

          <div className="space-y-6">
            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">STAGE 1</p>

              <h3 className="text-xl font-semibold mb-3">
                Structured Audit Logging
              </h3>

              <p className="text-neutral-400 leading-7 mb-4">
                Each security-relevant tool request was written to a JSONL log
                with timestamp, source, tool, decision, reason, authorization
                state, and arguments.
              </p>

              <p className="text-neutral-300">
                Result: 6 structured security events recorded
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">STAGE 2</p>

              <h3 className="text-xl font-semibold mb-3">
                Detection Rules
              </h3>

              <p className="text-neutral-400 leading-7 mb-4">
                Detection logic identified denied actions, untrusted sources,
                unauthorized high-risk tools, restricted file access, and
                unknown tools.
              </p>

              <p className="text-neutral-300">
                Result: 4 alerted events and 8 total alerts
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">STAGE 3</p>

              <h3 className="text-xl font-semibold mb-3">
                Risk Scoring & Severity
              </h3>

              <p className="text-neutral-400 leading-7 mb-4">
                Alerts were weighted and combined into per-event risk scores,
                which were then classified as INFO, LOW, MEDIUM, HIGH, or
                CRITICAL.
              </p>

              <p className="text-neutral-300">
                Highest-risk event: score 8 — CRITICAL
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Final Results</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">EVENTS</p>
              <p className="text-3xl font-bold mb-2">6</p>
              <p className="text-neutral-400">
                Total structured security events
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">ALERTS</p>
              <p className="text-3xl font-bold mb-2">8</p>
              <p className="text-neutral-400">
                Alerts generated across 4 events
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">HIGH SEVERITY</p>
              <p className="text-3xl font-bold mb-2">2</p>
              <p className="text-neutral-400">
                Events classified as HIGH
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <p className="text-sm text-neutral-500 mb-2">CRITICAL</p>
              <p className="text-3xl font-bold mb-2">1</p>
              <p className="text-neutral-400">
                Event classified as CRITICAL
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Highest-Risk Event
          </h2>

          <div className="border border-neutral-800 rounded-2xl p-6 font-mono text-sm text-neutral-300 leading-8">
            Tool: send_email
            <br />
            Source: untrusted_document
            <br />
            Decision: DENY
            <br />
            Risk score: 8
            <br />
            Severity: CRITICAL
          </div>

          <p className="text-neutral-400 leading-8 mt-6">
            The event triggered three security alerts: a denied action, an
            untrusted source, and an unauthorized high-risk tool request.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Key Finding</h2>

          <p className="text-neutral-400 leading-8">
            Blocking a dangerous action is only part of security. A mature AI
            system also needs telemetry that makes suspicious behavior visible,
            measurable, and prioritizable.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Skills Demonstrated
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
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
            Future labs will build on this telemetry foundation with event
            correlation, repeated-attempt detection, automated responses,
            monitoring, and stronger agent containment.
          </p>
        </section>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/jeremyneutronink-afk/lab-07-security-audit-logging"
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
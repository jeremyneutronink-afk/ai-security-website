export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          AI Security &amp; Control Curriculum · Lab 10
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
          Secure Agent Memory and State
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Built a secure persistent-memory layer for AI agents with provenance
          verification, tamper detection, replay protection, freshness checks,
          scope isolation, sensitive-data controls, purpose limitation, and
          context minimization.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/jeremyneutronink-afk/lab-10-secure-agent-memory"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-black"
          >
            View GitHub Repo
          </a>

          <a
            href="https://youtube.com/shorts/cMJmnLy_7cM?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold"
          >
            Watch Short
          </a>
        </div>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Tests</p>
            <p className="mt-2 text-4xl font-bold">15</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Passed</p>
            <p className="mt-2 text-4xl font-bold text-green-400">15</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Failed</p>
            <p className="mt-2 text-4xl font-bold">0</p>
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">Final Architecture</h2>

          <div className="mt-5 overflow-x-auto rounded-lg bg-zinc-950 p-5">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`INPUT
↓
PROVENANCE
↓
SIGNATURE / INTEGRITY
↓
WRITE POLICY
↓
TRUSTED STORE / QUARANTINE
↓
FRESHNESS
↓
SCOPE
↓
SENSITIVITY
↓
PURPOSE
↓
RELEVANCE
↓
CONTEXT BUDGET
↓
AGENT`}
            </pre>
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">Security Controls</h2>

          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>Application-owned source trust</li>
            <li>Signed provenance using HMAC</li>
            <li>Content hashing and integrity verification</li>
            <li>Nonce and event replay protection</li>
            <li>Memory expiration and freshness checks</li>
            <li>Superseded-memory handling</li>
            <li>Owner, session, tenant, and namespace isolation</li>
            <li>Sensitivity classification and access control</li>
            <li>Purpose-limited disclosure</li>
            <li>Retrieval-time context minimization</li>
            <li>Structured JSONL audit logging</li>
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">Adversarial Tests</h2>

          <div className="mt-5 space-y-3 text-sm text-zinc-300">
            <p><strong>T01:</strong> Valid trusted write — PASS</p>
            <p><strong>T02:</strong> Untrusted webpage persistence — PASS</p>
            <p><strong>T03:</strong> Forged signed provenance metadata — PASS</p>
            <p><strong>T04:</strong> Content tampering — PASS</p>
            <p><strong>T05:</strong> Expired provenance — PASS</p>
            <p><strong>T06:</strong> Provenance replay — PASS</p>
            <p><strong>T07:</strong> High-risk trusted content — PASS</p>
            <p><strong>T08:</strong> Stale memory — PASS</p>
            <p><strong>T09:</strong> Superseded memory — PASS</p>
            <p><strong>T10:</strong> Cross-user access — PASS</p>
            <p><strong>T11:</strong> Cross-tenant access — PASS</p>
            <p><strong>T12:</strong> Sensitive-data access violation — PASS</p>
            <p><strong>T13:</strong> Unauthorized purpose — PASS</p>
            <p><strong>T14:</strong> Unknown task requests all memory — PASS</p>
            <p><strong>T15:</strong> Context minimization — PASS</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 10 Short</h2>

          <div className="mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/cMJmnLy_7cM"
                title="Lab 10 Secure Agent Memory and State"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-cyan-900 bg-cyan-950/20 p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Final Result
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            15 / 15 adversarial tests passed
          </h2>

          <p className="mt-4 leading-7 text-zinc-300">
            Persistent memory is treated as a security boundary. The system
            re-checks trust, freshness, scope, sensitivity, purpose, and
            relevance before memory reaches the agent.
          </p>
        </section>
      </div>
    </main>
  );
}
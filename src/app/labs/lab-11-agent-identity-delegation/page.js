export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          AI Security &amp; Control Curriculum · Lab 11
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
          Agent Identity, Delegation, and Authority Chains
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          Built a secure authority system for AI agents with authenticated
          identities, direct permissions, scoped delegation, expiration,
          revocation, signed authority tokens, replay protection, controlled
          re-delegation, full authority-chain validation, and confused-deputy
          defenses.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/jeremyneutronink-afk/lab-11-agent-identity-delegation"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-black"
          >
            View GitHub Repo
          </a>

          <a
            href="https://youtube.com/shorts/ti7Gw6fY1_o?feature=share"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold"
          >
            Watch Short
          </a>
        </div>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Adversarial Tests</p>
            <p className="mt-2 text-4xl font-bold">17</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Passed</p>
            <p className="mt-2 text-4xl font-bold text-green-400">17</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Failed</p>
            <p className="mt-2 text-4xl font-bold">0</p>
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">What This Lab Secures</h2>

          <p className="mt-4 leading-7 text-zinc-300">
            AI agents should not be able to claim identities, inherit unlimited
            permissions, or pass authority to other agents without strict
            controls. This lab models how authority can move through a
            multi-agent system while remaining authenticated, scoped,
            temporary, integrity-protected, and auditable.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">Final Architecture</h2>

          <div className="mt-5 overflow-x-auto rounded-lg bg-zinc-950 p-5">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`AUTHENTICATED IDENTITY
↓
IDENTITY CLAIM VALIDATION
↓
DIRECT OR DELEGATED AUTHORITY
↓
REQUEST CONTEXT BINDING
↓
FULL AUTHORITY-CHAIN RECONSTRUCTION
↓
SIGNATURE + LIFECYCLE VALIDATION
↓
PARENT / CHILD CONTINUITY
↓
PERMISSION / SCOPE MONOTONICITY
↓
PURPOSE / ACTION MONOTONICITY
↓
ROOT AUTHORITY VALIDATION
↓
REPLAY PROTECTION
↓
ONE-TIME AUTHORITY CONSUMPTION
↓
TRUSTED EXECUTION
↓
STRUCTURED AUDIT LOG`}
            </pre>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold">Security Controls</h2>

            <ul className="mt-5 space-y-3 text-zinc-300">
              <li>Authenticated actor identity</li>
              <li>Identity claim verification</li>
              <li>Application-owned permission mapping</li>
              <li>Scoped delegation</li>
              <li>Delegation expiration</li>
              <li>Revocation</li>
              <li>HMAC-SHA256 signed authority tokens</li>
              <li>Nonce and use-ID replay protection</li>
              <li>Controlled re-delegation</li>
              <li>Delegation depth limits</li>
              <li>Permission and scope monotonicity</li>
              <li>Full authority-chain reconstruction</li>
              <li>Root authority validation</li>
              <li>Confused-deputy defenses</li>
              <li>Structured JSONL auditing</li>
            </ul>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-2xl font-bold">Key Principles</h2>

            <div className="mt-5 space-y-4 text-zinc-300">
              <p>Identity claims are not authentication.</p>
              <p>Authentication is not authorization.</p>
              <p>Delegation should transfer minimum authority.</p>
              <p>Authority should be temporary and revocable.</p>
              <p>Authority metadata must be integrity-protected.</p>
              <p>Valid authority should not automatically be reusable.</p>
              <p>Re-delegated authority must only shrink.</p>
              <p>
                Authority is only as trustworthy as every link in its chain.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">Adversarial Test Results</h2>

          <div className="mt-5 space-y-3 text-sm text-zinc-300">
            <p><strong>T01:</strong> Valid full delegated authority chain — PASS</p>
            <p><strong>T02:</strong> Identity impersonation attempt — PASS</p>
            <p><strong>T03:</strong> No authority path — PASS</p>
            <p><strong>T04:</strong> Signed metadata tampering — PASS</p>
            <p><strong>T05:</strong> Expired delegation — PASS</p>
            <p><strong>T06:</strong> Revoked delegation — PASS</p>
            <p><strong>T07:</strong> Delegation replay — PASS</p>
            <p><strong>T08:</strong> Confused deputy: wrong purpose — PASS</p>
            <p><strong>T09:</strong> Confused deputy: wrong action — PASS</p>
            <p><strong>T10:</strong> Confused deputy: wrong target — PASS</p>
            <p><strong>T11:</strong> Missing parent delegation — PASS</p>
            <p><strong>T12:</strong> Broken actor continuity — PASS</p>
            <p><strong>T13:</strong> Invalid root authority — PASS</p>
            <p><strong>T14:</strong> Permission escalation attempt — PASS</p>
            <p><strong>T15:</strong> Scope escalation attempt — PASS</p>
            <p><strong>T16:</strong> Invalid delegation depth — PASS</p>
            <p><strong>T17:</strong> Direct authority still works — PASS</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 11 Short</h2>

          <div className="mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ti7Gw6fY1_o"
                title="Lab 11 Agent Identity Delegation and Authority Chains"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">What I Learned</h2>

          <p className="mt-4 leading-7 text-zinc-300">
            The biggest lesson from this lab was that identity and authority
            are separate security problems. Knowing who an actor is does not
            prove that the actor has permission to perform an action.
          </p>

          <p className="mt-4 leading-7 text-zinc-300">
            Delegation also cannot be treated as a simple permission transfer.
            Secure delegation requires scope limits, expiration, revocation,
            integrity protection, replay resistance, and validation of the
            entire authority chain before execution.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-cyan-900 bg-cyan-950/20 p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Final Result
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            17 / 17 adversarial tests passed
          </h2>

          <p className="mt-4 leading-7 text-zinc-300">
            The completed system blocked impersonation, unauthorized authority
            claims, delegation tampering, expiration abuse, revocation bypass,
            replay, authority escalation, broken delegation chains, and
            confused-deputy misuse while preserving legitimate direct and
            delegated execution.
          </p>
        </section>
      </div>
    </main>
  );
}
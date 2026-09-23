export default function Lab01Page() {
  const securityTakeaways = [
    {
      title: "Authentication",
      description: "Confirms who is making the request.",
    },
    {
      title: "Authorization",
      description:
        "Determines what that authenticated identity is allowed to do.",
    },
    {
      title: "Secret Handling",
      description:
        "API keys should not be hard-coded into public source code.",
    },
    {
      title: "Environment Variables",
      description:
        "Allow code to remain public while credentials stay outside the repository.",
    },
    {
      title: "Fail Safely",
      description:
        "The script stops if the required credential is missing instead of continuing with invalid configuration.",
    },
  ];

  const skills = [
    "Python",
    "API Structure",
    "Authentication",
    "Authorization",
    "Environment Variables",
    "Secret Handling",
    "Fail-Safe Design",
    "Git",
    "GitHub",
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
            AI Security &amp; Control Curriculum · Lab 01
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Anatomy of an AI API Request
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A foundational AI security lab exploring how an application sends
            information to an AI model, where authentication lives, how request
            data is structured, and why secrets should remain outside public
            source code.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-01-ai-request"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View GitHub Repo
            </a>

            <a
              href="https://youtube.com/shorts/nf9l47A2pno"
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
              "API Structure",
              "Authentication",
              "Authorization",
              "Secret Handling",
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
            Security begins before the model sees the request.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            An AI request still depends on ordinary software-security
            boundaries: authentication, authorization, secret handling,
            configuration, transport, and deliberate failure behavior.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 01 Short</h2>

          <p className="mt-3 text-zinc-400">
            A short walkthrough of the anatomy of an AI API request and the
            basic security boundaries around it.
          </p>

          <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/nf9l47A2pno"
                title="Lab 01 Anatomy of an AI API Request"
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
            A Request Broken Into Security-Relevant Parts
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            I created a small Python script that models the structure of an AI
            API request. The script separates the endpoint, request headers,
            authentication credential, and JSON body so each part can be
            inspected independently.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Endpoint
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Where the request goes
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                The endpoint identifies the remote API resource the application
                intends to call.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Headers
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Request metadata
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Headers carry information such as authentication and content
                type alongside the request.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Credential
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Who is making the request
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                The credential establishes authenticated identity and should be
                kept outside public source code.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                JSON Body
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                What the application is asking for
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                The body contains structured request data such as model input
                and configuration.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Request Flow
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            From Application to Model Response
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`APPLICATION
↓
BUILD REQUEST
↓
ATTACH AUTHENTICATION
↓
SEND TO API ENDPOINT
↓
SERVER VALIDATES REQUEST
↓
MODEL PROCESSES INPUT
↓
RESPONSE RETURNED`}
            </pre>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Security Takeaways
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Foundational Security Boundaries
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {securityTakeaways.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-100">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            What I Learned
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Authentication and authorization are different controls.
          </h2>

          <p className="mt-4 leading-8 text-zinc-300">
            This lab clarified how API credentials are passed with requests,
            how authenticated identity differs from authorization, and why
            important security boundaries need to exist outside the AI model
            itself.
          </p>

          <p className="mt-4 leading-7 text-zinc-400">
            It also established the foundation for later work involving prompt
            injection, agent permissions, tool access, secure memory, delegated
            authority, and broader AI system security.
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
            The security boundaries of an AI request made explicit.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The lab separated the endpoint, authentication, headers, and request
            body into understandable components while introducing secure secret
            handling, environment variables, fail-safe configuration, and the
            distinction between authentication and authorization.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Next Step
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Send a real request and deliberately break it.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            Lab 02 takes this request structure and applies it to a live API,
            adding HTTP response validation, JSON parsing, connection failures,
            timeout handling, and defensive programming.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-01-ai-request"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/nf9l47A2pno"
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
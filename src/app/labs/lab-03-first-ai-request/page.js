export default function Lab03Page() {
  const securityControls = [
    {
      title: "Environment Variables",
      description:
        "The API key stays outside the source code and public repository.",
    },
    {
      title: "Least Privilege",
      description:
        "The API key is restricted to only the model capability required for this lab.",
    },
    {
      title: "Fail Safely",
      description:
        "The script stops if the required API credential is missing.",
    },
    {
      title: "Defensive Error Handling",
      description:
        "The script handles quota, connection, API status, and unexpected errors deliberately.",
    },
  ];

  const lessons = [
    "A model request is still a normal authenticated API request with familiar security boundaries.",
    "AI API credentials should never be hard-coded into public source code.",
    "Restricting credentials limits the damage if a key is ever exposed.",
    "Response IDs and token usage provide useful operational data beyond the generated answer itself.",
    "Reliable AI applications need to handle API failures just like any other production software.",
  ];

  const skills = [
    "Python",
    "OpenAI SDK",
    "Responses API",
    "Authenticated APIs",
    "Environment Variables",
    "Secret Management",
    "Least Privilege",
    "Token Monitoring",
    "API Error Handling",
    "Defensive Programming",
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
            AI Security &amp; Control Curriculum · Lab 03
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            First Real AI Model Request
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A hands-on Python lab using the OpenAI Responses API to make an
            authenticated model request, inspect response metadata, track token
            usage, and apply safer credential and error-handling practices.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-03-first-ai-request"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View GitHub Repo
            </a>

            <a
              href="https://youtube.com/shorts/6rY20-F-L58"
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
              "OpenAI API",
              "Secret Management",
              "Least Privilege",
              "Defensive Programming",
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
            AI requests still depend on ordinary API security.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The model may be new, but the surrounding security boundaries are
            familiar: authentication, secret handling, network requests,
            error handling, observability, and least-privilege access still
            matter.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 03 Short</h2>

          <p className="mt-3 text-zinc-400">
            A short walkthrough of the first live model request and the
            security controls around credentials, metadata, and failures.
          </p>

          <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/6rY20-F-L58"
                title="Lab 03 First Real AI Model Request"
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
            Authenticated AI API Client
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            I created a Python script that connects to a real AI model through
            the OpenAI Responses API. The script reads the API key from an
            environment variable, sends a model request, prints the generated
            response, and inspects metadata such as the response ID, model name,
            and token usage.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Request Flow
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            From Local Python to Model Response
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`PYTHON APPLICATION
↓
ENVIRONMENT VARIABLE
↓
OPENAI SDK
↓
AUTHENTICATED HTTPS REQUEST
↓
RESPONSES API
↓
AI MODEL
↓
GENERATED OUTPUT + METADATA
↓
PYTHON APPLICATION`}
            </pre>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Security Design
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Safer Credential and Failure Handling
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {securityControls.map((control) => (
              <div
                key={control.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-100">
                  {control.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {control.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Response Metadata
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            The response is more than generated text.
          </h2>

          <p className="mt-4 leading-8 text-zinc-300">
            The script inspects the response ID, model name, and token usage in
            addition to the model&apos;s text output. That metadata can support
            debugging, cost monitoring, request tracing, and later security
            analysis.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-black p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                Response ID
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-300">
                Request tracing
              </p>
            </div>

            <div className="rounded-xl bg-black p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                Model
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-300">
                Execution context
              </p>
            </div>

            <div className="rounded-xl bg-black p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                Token Usage
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-300">
                Cost + monitoring
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">What I Learned</h2>

          <div className="mt-6 grid gap-4">
            {lessons.map((lesson) => (
              <div
                key={lesson}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
              >
                <p className="leading-7 text-zinc-300">{lesson}</p>
              </div>
            ))}
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
            First authenticated AI request completed securely.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The lab progressed from understanding API anatomy to making a real
            model request with environment-based secret handling,
            least-privilege access, metadata inspection, token monitoring, and
            deliberate error handling.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Next Step
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Start testing trust boundaries.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            The next lab moves beyond basic API use and begins testing how
            trusted application instructions interact with attacker-controlled
            external content.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-03-first-ai-request"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/6rY20-F-L58"
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
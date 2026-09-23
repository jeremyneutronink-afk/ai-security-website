export default function Lab02Page() {
  const failureTests = [
    {
      title: "404 — Resource Not Found",
      description:
        "I deliberately requested a repository that does not exist. The application caught the bad HTTP status instead of continuing as if the request had succeeded.",
    },
    {
      title: "Connection Failure",
      description:
        "I tested an unreachable API endpoint and handled the connection failure explicitly rather than allowing the program to crash unexpectedly.",
    },
    {
      title: "Timeout",
      description:
        "I reduced the request timeout to force a failure and verified that the application correctly caught and reported the timeout.",
    },
  ];

  const lessons = [
    "HTTP status codes provide a fast signal about whether a request succeeded.",
    "JSON responses need to be parsed before an application can use their structured data.",
    "Network requests can fail for many reasons and should be wrapped in intentional error handling.",
    "Defensive programming means designing for failure instead of assuming the happy path will always work.",
  ];

  const skills = [
    "Python",
    "REST APIs",
    "HTTPS",
    "JSON",
    "HTTP Status Codes",
    "Exception Handling",
    "Timeout Handling",
    "Defensive Programming",
    "API Reliability Testing",
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
            AI Security &amp; Control Curriculum · Lab 02
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Real API Requests &amp; Failure Handling
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A hands-on Python lab using the live GitHub API to send real HTTPS
            requests, inspect responses, parse JSON, and handle failure
            conditions safely.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-02-real-api-request"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View GitHub Repo
            </a>

            <a
              href="https://youtube.com/shorts/uBrNoWBj34s"
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
              "REST APIs",
              "HTTPS",
              "JSON",
              "Failure Handling",
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
            Core Reliability Idea
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            External systems should be expected to fail.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            Reliable software does not assume every API call will succeed. It
            validates responses, handles unavailable services, catches
            timeouts, and stops safely when external dependencies fail.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Lab 02 Short</h2>

          <p className="mt-3 text-zinc-400">
            A short walkthrough of the live GitHub API request and the failure
            conditions tested in the lab.
          </p>

          <div className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="aspect-[9/16]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/uBrNoWBj34s"
                title="Lab 02 Real API Requests and Failure Handling"
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
            Live GitHub API Client
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            I created a Python client that sends a real request to the GitHub
            REST API and retrieves information about my AI security portfolio
            repository. The script validates the HTTP response, reads response
            headers, parses JSON, and extracts specific fields from the returned
            data.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Request Flow
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            From Python Request to Parsed Data
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <pre className="whitespace-pre text-sm leading-7 text-cyan-300">
{`PYTHON APPLICATION
↓
HTTPS REQUEST
↓
GITHUB API
↓
HTTP RESPONSE
↓
STATUS VALIDATION
↓
JSON PARSING
↓
SELECTED DATA DISPLAYED`}
            </pre>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Failure Testing
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Failure Conditions Tested
          </h2>

          <div className="mt-8 grid gap-6">
            {failureTests.map((test) => (
              <div
                key={test.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="text-xl font-semibold text-zinc-100">
                  {test.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {test.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Security &amp; Reliability Takeaway
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Design for failure, not just the happy path.
          </h2>

          <p className="mt-4 leading-8 text-zinc-300">
            External systems should never be assumed to work perfectly. A
            secure and reliable application needs to handle unavailable
            services, invalid resources, slow responses, and malformed data in
            a deliberate way.
          </p>

          <p className="mt-4 leading-7 text-zinc-400">
            This becomes even more important for autonomous AI agents because a
            single task may depend on several APIs, tools, files, or network
            services. One unhandled failure can cause bad behavior elsewhere in
            the workflow.
          </p>
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
            A real API client that fails deliberately instead of unpredictably.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
            The completed client handled successful requests while also
            detecting invalid resources, connection failures, and timeouts
            instead of assuming the network would always behave correctly.
          </p>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Next Step
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Apply the same API discipline to an AI model.
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            The next lab takes these request, authentication, metadata, and
            error-handling concepts and applies them to a real AI model request.
          </p>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-10">
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/jeremyneutronink-afk/lab-02-real-api-request"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View Code on GitHub
            </a>

            <a
              href="https://youtube.com/shorts/uBrNoWBj34s"
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
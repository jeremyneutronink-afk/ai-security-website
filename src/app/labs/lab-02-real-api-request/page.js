export default function Lab02Page() {
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
            Lab 02
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real API Requests & Failure Handling
          </h1>

          <p className="text-lg text-neutral-400 leading-8">
            A hands-on Python lab using the live GitHub API to send real HTTPS
            requests, inspect responses, parse JSON, and handle failure
            conditions safely.
          </p>
        </div>

<section className="mb-14">
  <h2 className="text-2xl font-semibold mb-4">Video Recap</h2>

  <div className="max-w-sm mx-auto overflow-hidden rounded-2xl border border-neutral-800">
    <div className="aspect-[9/16]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/uBrNoWBj34s"
        title="Lab 02 Video Recap"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What I Built</h2>

          <p className="text-neutral-400 leading-8">
            I created a Python client that sends a real request to the GitHub
            REST API and retrieves information about my AI security portfolio
            repository. The script validates the HTTP response, reads response
            headers, parses JSON, and extracts specific fields from the returned
            data.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Normal Request Flow</h2>

          <div className="border border-neutral-800 rounded-2xl p-6 font-mono text-sm text-neutral-300 leading-8">
            Python Application
            <br />
            ↓
            <br />
            HTTPS Request
            <br />
            ↓
            <br />
            GitHub API
            <br />
            ↓
            <br />
            HTTP Response
            <br />
            ↓
            <br />
            Status Validation
            <br />
            ↓
            <br />
            JSON Parsing
            <br />
            ↓
            <br />
            Selected Data Displayed
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Failure Conditions Tested
          </h2>

          <div className="space-y-6">
            <div className="border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                404 — Resource Not Found
              </h3>

              <p className="text-neutral-400 leading-7">
                I deliberately requested a repository that does not exist. The
                application caught the bad HTTP status instead of continuing as
                if the request had succeeded.
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Connection Failure
              </h3>

              <p className="text-neutral-400 leading-7">
                I tested an unreachable API endpoint and handled the connection
                failure explicitly rather than allowing the program to crash
                unexpectedly.
              </p>
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Timeout</h3>

              <p className="text-neutral-400 leading-7">
                I reduced the request timeout to force a failure and verified
                that the application correctly caught and reported the timeout.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Security & Reliability Takeaway
          </h2>

          <p className="text-neutral-400 leading-8">
            External systems should never be assumed to work perfectly. A
            secure and reliable application needs to handle unavailable
            services, invalid resources, slow responses, and malformed data in
            a deliberate way.
          </p>

          <p className="text-neutral-400 leading-8 mt-4">
            This becomes even more important for autonomous AI agents because a
            single task may depend on several APIs, tools, files, or network
            services. One unhandled failure can cause bad behavior elsewhere in
            the workflow.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>

          <ul className="space-y-4 text-neutral-400 leading-7">
            <li>
              HTTP status codes provide a fast signal about whether a request
              succeeded.
            </li>
            <li>
              JSON responses need to be parsed before an application can use
              their structured data.
            </li>
            <li>
              Network requests can fail for many reasons and should be wrapped
              in intentional error handling.
            </li>
            <li>
              Defensive programming means designing for failure instead of
              assuming the happy path will always work.
            </li>
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Skills Demonstrated
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "REST APIs",
              "HTTPS",
              "JSON",
              "HTTP Status Codes",
              "Exception Handling",
              "Timeout Handling",
              "Defensive Programming",
              "API Reliability Testing",
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

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/jeremyneutronink-afk/lab-02-real-api-request"
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
export default function Lab03Page() {
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
            Lab 03
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            First Real AI Model Request
          </h1>

          <p className="text-lg text-neutral-400 leading-8">
            A hands-on Python lab using the OpenAI Responses API to make an
            authenticated model request, inspect response metadata, track token
            usage, and apply safer credential and error-handling practices.
          </p>
        </div>

        <section className="mb-14">
  <h2 className="text-2xl font-semibold mb-4">Video Recap</h2>

  <div className="max-w-sm mx-auto overflow-hidden rounded-2xl border border-neutral-800">
    <div className="aspect-[9/16]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/6rY20-F-L58"
        title="Lab 03 Video Recap"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What I Built</h2>

          <p className="text-neutral-400 leading-8">
            I created a Python script that connects to a real AI model through
            the OpenAI Responses API. The script reads the API key from an
            environment variable, sends a model request, prints the generated
            response, and inspects metadata such as the response ID, model name,
            and token usage.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Request Flow</h2>

          <div className="border border-neutral-800 rounded-2xl p-6 font-mono text-sm text-neutral-300 leading-8">
            Python Application
            <br />
            ↓
            <br />
            Environment Variable
            <br />
            ↓
            <br />
            OpenAI SDK
            <br />
            ↓
            <br />
            Authenticated HTTPS Request
            <br />
            ↓
            <br />
            Responses API
            <br />
            ↓
            <br />
            AI Model
            <br />
            ↓
            <br />
            Generated Output + Metadata
            <br />
            ↓
            <br />
            Python Application
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Security Design</h2>

          <ul className="space-y-4 text-neutral-400 leading-7">
            <li>
              <strong className="text-white">Environment variables:</strong>{" "}
              the API key stays outside the source code and public repository.
            </li>

            <li>
              <strong className="text-white">Least privilege:</strong> the API
              key is restricted to only the model capability required for this
              lab.
            </li>

            <li>
              <strong className="text-white">Fail safely:</strong> the script
              stops if the required API credential is missing.
            </li>

            <li>
              <strong className="text-white">Defensive error handling:</strong>{" "}
              the script handles quota, connection, API status, and unexpected
              errors deliberately.
            </li>
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Response Metadata
          </h2>

          <p className="text-neutral-400 leading-8">
            The script inspects more than the model&apos;s text output. It also
            captures the response ID, model name, and token usage. This metadata
            is useful for debugging, cost monitoring, request tracing, and
            future security analysis.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>

          <ul className="space-y-4 text-neutral-400 leading-7">
            <li>
              A model request is still a normal authenticated API request with
              familiar security boundaries.
            </li>

            <li>
              AI API credentials should never be hard-coded into public source
              code.
            </li>

            <li>
              Restricting credentials limits the damage if a key is ever
              exposed.
            </li>

            <li>
              Response IDs and token usage provide useful operational data
              beyond the generated answer itself.
            </li>

            <li>
              Reliable AI applications need to handle API failures just like
              any other production software.
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
              "OpenAI SDK",
              "Responses API",
              "Authenticated APIs",
              "Environment Variables",
              "Secret Management",
              "Least Privilege",
              "Token Monitoring",
              "API Error Handling",
              "Defensive Programming",
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
            href="https://github.com/jeremyneutronink-afk/lab-03-first-ai-request"
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
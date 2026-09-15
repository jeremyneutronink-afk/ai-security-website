export default function Lab01Page() {
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
            Lab 01
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Anatomy of an AI API Request
          </h1>

          <p className="text-lg text-neutral-400 leading-8">
            A foundational AI security lab exploring how an application sends
            information to an AI model, where authentication lives, how request
            data is structured, and why secrets should remain outside public
            source code.
          </p>
        </div>

        <section className="mb-14">
  <h2 className="text-2xl font-semibold mb-4">Video Recap</h2>

  <div className="max-w-sm mx-auto overflow-hidden rounded-2xl border border-neutral-800">
    <div className="aspect-[9/16]">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/nf9l47A2pno"
        title="Lab 01 Video Recap"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What I Built</h2>

          <p className="text-neutral-400 leading-8">
            I created a small Python script that models the structure of an AI
            API request. The script separates the endpoint, request headers,
            authentication credential, and JSON body so each part can be
            inspected independently.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Security Takeaways</h2>

          <ul className="space-y-4 text-neutral-400 leading-7">
            <li>
              <strong className="text-white">Authentication:</strong> confirms
              who is making the request.
            </li>

            <li>
              <strong className="text-white">Authorization:</strong> determines
              what that authenticated identity is allowed to do.
            </li>

            <li>
              <strong className="text-white">Secret handling:</strong> API keys
              should not be hard-coded into public source code.
            </li>

            <li>
              <strong className="text-white">Environment variables:</strong>{" "}
              allow code to remain public while credentials stay outside the
              repository.
            </li>

            <li>
              <strong className="text-white">Fail safely:</strong> the script
              stops if the required credential is missing instead of continuing
              with invalid configuration.
            </li>
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Request Flow</h2>

          <div className="border border-neutral-800 rounded-2xl p-6 font-mono text-sm text-neutral-300 leading-8">
            Application
            <br />
            ↓
            <br />
            Build Request
            <br />
            ↓
            <br />
            Attach Authentication
            <br />
            ↓
            <br />
            Send to API Endpoint
            <br />
            ↓
            <br />
            Server Validates Request
            <br />
            ↓
            <br />
            Model Processes Input
            <br />
            ↓
            <br />
            Response Returned
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>

          <p className="text-neutral-400 leading-8">
            This lab helped clarify the difference between authentication and
            authorization, how API credentials are passed with requests, and why
            security boundaries need to exist outside the AI model itself. It
            also establishes the foundation for later work involving prompt
            injection, agent permissions, tool access, and secure AI system
            design.
          </p>
        </section>

        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com/jeremyneutronink-afk/lab-01-ai-request"
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

        <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">Skills Demonstrated</h2>

            <div className="flex flex-wrap gap-3">
                {[
                    "Python",
                    "API Structure",
                    "Authentication",
                    "Authorization",
                    "Environment Variables",
                    "Secret Handling",
                    "Fail-Safe Design",
                    "Git",
                    "GitHub",
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
        
      </div>
    </main>
  );
}
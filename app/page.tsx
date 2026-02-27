export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-8 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Musawenkosi Mahlangu
          </h1>
          <p className="text-xl text-gray-400">
            Senior Java Developer | Spring Boot | Microservices | Cloud-Native Systems
          </p>
        </section>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">About</h2>
          <p className="text-gray-300 leading-relaxed">
            Backend-focused engineer specializing in building scalable,
            secure, and resilient enterprise systems. Experienced in
            microservices architecture, REST API design, distributed systems,
            and performance optimization within fintech and enterprise environments.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Technical Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Backend</h3>
              <ul className="space-y-1">
                <li>Java 8–21</li>
                <li>Spring Boot</li>
                <li>JPA / Hibernate</li>
                <li>RESTful API Design</li>
                <li>Microservices Architecture</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">DevOps & Cloud</h3>
              <ul className="space-y-1">
                <li>Docker</li>
                <li>CI/CD Pipelines</li>
                <li>Linux</li>
                <li>AWS / Cloud Platforms</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Highlighted Work</h2>

          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Digital Transaction Processing System
              </h3>
              <p>
                Designed and implemented secure transaction processing APIs
                with idempotency handling and performance optimizations,
                reducing response latency by 35%.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Event-Driven Microservice Platform
              </h3>
              <p>
                Built distributed services following clean architecture
                principles, focusing on scalability, observability,
                and resilience.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-300">
            Email: musawenkosi.mahlangu07@gmail.com
          </p>
          <p className="text-gray-300">
            GitHub: https://github.com/yourusername
          </p>
        </section>

      </div>
    </main>
  );
}
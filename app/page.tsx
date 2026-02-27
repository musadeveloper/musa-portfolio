"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [dark, setDark] = useState(true); // dark theme default

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

    const experience = [
      {
        title: "Java Developer & DevOps Engineer",
        company: "BMW IT Hub | Pretoria, Gauteng",
        period: "June 2024 – Present",
        bullets: [
          "Developed and optimized high-performance 40+ Quarkus microservices serving BMW's global logistics production systems, achieving 99.9% uptime SLA and sub-100ms API response times.",
          "Designed and implemented RESTful APIs with OpenAPI/Swagger specifications for seamless integration across enterprise systems.",
          "Built responsive front-end applications using Angular 19+ collaborating with UX teams to deliver intuitive user interfaces.",
          "Implemented IoC/Dependency Injection patterns using Quarkus Framework, ensuring loose coupling, testability, and maintainable codebases.",
          "Applied design patterns (Factory, Singleton, Strategy, Observer, Repository) to solve complex business problems with clean, scalable solutions.",
          "Maintained and optimized database schemas in PostgreSQL, implementing stored procedures, triggers, and complex queries for high-volume transactional systems. Performed database administration tasks including performance tuning, indexing strategies, query optimization, and patching activities. Implemented ORM solutions using Hibernate/JPA for efficient object-relational mapping and data persistence.",
          "Managed database migrations using Flyway, ensuring version-controlled schema changes across development, staging, and production environments.",
          "Built and maintained CI/CD pipelines using GitHub Actions and GitHub Enterprise, automating build, test, security scanning, and deployment workflows.",
          "Implemented containerized deployments using Docker and Kubernetes (AKS), managing pods, services, deployments, and Helm charts for enterprise applications.",
          "Provisioned infrastructure using Terraform for Infrastructure-as-Code, ensuring reproducible and version-controlled environment configurations",
          "Participated in Agile ceremonies (Sprint Planning, Daily Standups, Retrospectives, Sprint Reviews) contributing to team goals and continuous improvement.",
          "Performed code reviews and peer reviews ensuring adherence to coding standards, SOLID principles, and best practices.",
          "Documented technical specifications using Confluence, maintaining up-to-date architecture decisions, API documentation, and runbooks. Managed work items and sprints using JIRA, tracking user stories, bugs, and technical tasks.",
          "Provided rotational standby support and hyper-care after production deployments, ensuring system stability and rapid incident resolution. Served as L2/L3 support for production incidents, performing root cause analysis (RCA) and driving resolution for P1/P2 issues within defined SLAs.",
          "Troubleshot and resolved software defects, performance bottlenecks, and integration issues across microservices architecture.",
          "Mentored junior developers on Java best practices, Angular development, Kubernetes operations, and DevOps methodologies. Provided technical guidance on design patterns, clean code principles, and test-driven development approaches. Conducted knowledge transfer sessions and prepared training materials for new team members."
        ]
      },
      {
        title: "Software Developer",
        company: "BET Software | Bryanston, Gauteng",
        period: "Dec 2023 – May 2024",
        bullets: [
          "Built high-stakes financial transaction systems processing millions in daily betting and payment volumes using C#/.NET and modern architectural patterns",
          "Developed high-throughput C# backend APIs processing 100,000+ daily withdrawals with zero data loss and sub-second transaction completion.",
          "Designed and implemented RESTful APIs for betting and payment transactions, ensuring PCI DSS compliance and transactional integrity.",
          "Built secure integrations with banking institutions and payment gateways using OAuth 2.0, JWT tokens, and encryption standards.",
          "Optimized system performance by 60% through Redis caching strategies and pub/sub messaging patterns. Implemented message queue integrations using RabbitMQ for asynchronous processing and event-driven architecture.",
          "Implemented Test-Driven Development (TDD) practices with comprehensive automated testing suites.",
          "Streamlined Azure DevOps CI/CD pipelines, accelerating releases and improving deployment reliability.",
          "Supported production monitoring and incident response for critical payment services, maintaining 99.8% system availability.",
          "Collaborated closely with React.js frontend teams to deliver seamless user experiences.",
          "Worked with business stakeholders to gather and refine requirements for payment and transaction features.",
          "Participated in Agile ceremonies and contributed to sprint planning and backlog grooming."
        ]
      },
      {
        title: "Software Developer",
        company: "Barron SA | Edenvale, Gauteng",
        period: "Apr 2023 – Nov 2023",
        bullets: [
          "Delivered full-stack solution integrating enterprise systems with e-commerce platform using Java Spring Boot and Angular",
          "Developed Java Spring Boot APIs integrating product, inventory, and customer systems, handling 5,000+ SKUs with real-time synchronization.",
          "Built Angular front-end applications with TypeScript, HTML5, and CSS3 for administrative dashboards and customer portals.",
          "Implemented RBAC (Role-Based Access Control) securing customer and administrative portals with Spring Security and JWT authentication.",
          "Designed database schemas in SQL Server, implementing stored procedures and optimized queries for high-volume data operations.",
          "Implemented Hibernate/JPA ORM for efficient database interactions and entity mapping.",
          "Built integration adapters for third-party systems including warehouse management and shipping providers.",
          "Set up Azure DevOps CI/CD pipelines automating build, test, and deployment workflows achieving 50% faster release cycles.",
          "Deployed scalable cloud solutions on Azure Static Web Apps and Azure App Services.",
          "Managed Git version control with branching strategies (GitFlow) and pull request workflows.",
          "Wrote unit and integration tests using JUnit and Mockito, ensuring API reliability and correctness",
          "Conducted user acceptance testing (UAT) and training sessions for business process owners."
        ]
      },
      {
        title: "Software Developer",
        company: "Altron | Pretoria, Gauteng",
        period: "Mar 2022 – Mar 2023",
        bullets: [
          "Built & maintained a personal loan management systems using Java Spring Boot and modern web technologies",
          "Developed scalable Spring Boot applications for personal loan processing, ensuring high availability and regulatory compliance.",
          "Built and integrated RESTful APIs with internal systems and external financial services, adhering to security best practices.",
          "Implemented Spring Security with OAuth 2.0 and JWT for secure authentication and authorization.",
          "Applied Object-Oriented Programming (OOP) principles and design patterns for maintainable codebases.",
          "Collaborated with Angular/React.js frontend teams to deliver responsive, user-centric loan application experiences.",
          "Translated design specifications from Figma into functional user interfaces.",
          "Implemented JavaScript (ES6+) components for dynamic form validation and user interactions.",
          "Implemented comprehensive testing strategies using JUnit 5 for unit testing.",
          "Conducted integration testing using Postman and Swagger for API validation.",
          "Performed manual testing and regression testing ensuring feature reliability.",
          "Designed SQL queries and stored procedures in PostgreSQL and Oracle databases.",
          "Optimized database performance through indexing strategies and query tuning.",
          "Managed database migrations and version-controlled schema changes."
        ]
      },
      {
        title: "Java Developer: Intern",
        company: "Karax Holdings | Centurion, Gauteng",
        period: "Jan 2021 – Feb 2022",
        bullets: [
          "Foundation role developing funeral policy applications with Spring ecosystem and modern development practices",
          "Built enterprise Spring Boot applications utilizing dependency injection, REST controllers, and data access layers.",
          "Implemented Hibernate/JPA ORM for high-performance database persistence and transactional integrity.",
          "Developed RESTful services using Spring MVC and JAX-RS for internal and external integrations.",
          "Applied IoC (Inversion of Control) patterns for loosely coupled, testable components.",
          "Designed and optimized SQL queries and stored procedures in MySQL databases.",
          "Implemented database access layers using Spring Data JPA with custom query methods.",
          "Ensured data integrity through proper transaction management and constraint definitions.",
          "Integrated Angular frontends with Spring Boot REST APIs, enabling dynamic, responsive user interfaces.",
          "Developed JavaScript components for client-side validation and user interactions.",
          "Collaborated with UI/UX teams to implement intuitive user experiences.",
          "Participated in Agile/Scrum ceremonies providing technical insights and ensuring timely delivery.",
          "Managed code versions using Git, following branching strategies and code review processes.",
          "Wrote unit tests using JUnit ensuring code quality and preventing regression issues."
        ]
      }
    ];

    const education = [
      {
        degree: "Postgraduate Diploma – Computer Science",
        school: "Tshwane University of Technology",
        period: "2026 – In Progress"
      },
      {
        degree: "Advanced Diploma – Computer Science",
        school: "Tshwane University of Technology",
        period: "2023 – 2024"
      },
      {
        degree: "National Diploma – IT (Software Development)",
        school: "Tshwane University of Technology",
        period: "2018 – 2021"
      },
      {
        degree: "National Senior Certificate",
        school: "Sir Pierre van Ryneveld High School",
        period: "2011 – 2016"
      }
    ];


  return (
    
    <main className="bg-black text-white font-mono transition-colors duration-500 scroll-smooth">
      
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 flex flex-col md:flex-row justify-center items-center px-6 py-4 border-b border-gray-800 space-y-2 md:space-y-0 md:space-x-12">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Musawenkosi Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        {/* Nav Links */}
        <div className="space-x-6 flex flex-wrap justify-center text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#education" className="hover:text-white transition">Education</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold animate-fade-in tracking-wide">
          Musawenkosi Mahlangu
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 animate-slide-up max-w-2xl">
          Java Developer & DevOps Engineer| Spring Boot & Quarkus | Angular & React | Azure | Kubernetes | Technical Leadership &amp; Mentorship
        </p>
        <a
          href="#experience"
          className="mt-6 inline-block px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:-translate-y-1"
        >
          View Experience
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16 space-y-6 text-center">
        <h2 className="text-4xl font-bold mb-4 animate-slide-up border-b border-gray-700 inline-block pb-2">Executive Profile</h2>
        <p className="text-gray-300 leading-relaxed animate-slide-up">
          Java Developer with 5 years of experience designing, building, and owning mission-critical enterprise systems across automotive and fintech industries. I specialize in Java, Spring Boot,
          Quarkus, Angular, and cloud-native microservices, delivering high-performance, scalable solutions from concept to production. I bring advanced expertise in system design, RESTful API architecture, CI/CD automation, and Kubernetes deployments, combined with strong foundations in Test-Driven Development and Agile delivery. I take ownership of technical decisions, enforce code quality standards
          through rigorous reviews, and actively mentor junior developers to elevate team capability. I look forward to driving technical excellence, shaping architectural direction, and leading initiatives that solve complex business problems. I thrive in environments that value engineering leadership, collaboration, and continuous improvement.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16 space-y-6 text-center">
      {/* Centered Heading */}
      <h2 className="text-4xl font-bold mb-6 animate-slide-up border-b border-gray-700 inline-block pb-2">
        Core Competencies
      </h2>

  {/* Skill Lists Left-Aligned */}
      <div className="w-full px-6 md:px-1 py-1 grid md:grid-cols-2 gap-8 text-left animate-slide-up">
  {/* Technical Skills */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-2">Technical Skills</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li><b>Languages</b>: Java 11/17/21+, JavaScript (ES6+), SQL, C# (.NET 6+), Python</li>
            <li><b>Backend</b>: Spring Boot, Quarkus, Spring Security (OAuth2/JWT), Spring Data, Spring Cloud, Hibernate/JPA, Maven</li>
            <li><b>Frontend</b>: Angular 19+, React.js, Node.js, TypeScript, HTML5, CSS3</li>
            <li><b>Databases</b>: PostgreSQL, Oracle, MySQL, MongoDB, Redis, Query Optimization, Indexing, Flyway</li>
            <li><b>APIs & Messaging</b>: RESTful APIs, OpenAPI/Swagger, Kafka, RabbitMQ, Azure Service Bus, Event-Driven Architecture</li>
            <li><b>Cloud & DevOps</b>: Azure (AKS, App Services, Functions, Key Vault, AAD), Docker, Kubernetes, Helm, Terraform, GitHub Actions, Azure DevOps, Jenkins</li>
            <li><b>Testing</b>: JUnit 5, Mockito, TestContainers, xUnit, Postman, Playwright, JMeter, TDD/BDD</li>
            <li><b>Quality & Security</b>: SonarQube, CodeQL, GitHub Advanced Security, Secure Coding, Code Reviews</li>
            <li><b>Architecture</b>: Microservices, Event-Driven, Domain-Driven Design (DDD), Clean Architecture, SOLID, Design Patterns</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-2">Soft Skills</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Communication & Collaboration</li>
            <li>Problem Solving & Critical Thinking</li>
            <li>Mentorship & Coaching</li>
            <li>Ownership & Accountability</li>
            <li>Adaptability & Continuous Learning</li>
            <li>Time Management & Conflict Resolution</li>
            <li>Emotional Intelligence</li>
          </ul>
        </div>
      </div>
    </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16 space-y-12">
              <h2 className="text-4xl font-bold mb-6 text-center border-b border-gray-700 pb-2 animate-slide-up">
        Professional Experience
      </h2>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-700 hover:border-white transition transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="italic text-gray-400">{exp.company} | {exp.period}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>


      {/* Education */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-16 space-y-6 text-center">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2 animate-slide-up">Education</h2>
        <div className="space-y-4">
          {education.map((ed, i) => (
            <div key={i} className="text-gray-300">
              <h3 className="text-xl font-bold">{ed.degree}</h3>
              <p className="">{ed.school} | {ed.period}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16 space-y-4 text-center">
        <h2 className="text-4xl font-bold mb-4 animate-slide-up border-b border-gray-700 inline-block pb-2">Contact Me</h2>
        <p className="text-gray-400 animate-slide-up">Email: musawenkosi.mahlangu07@gmail.com</p>
        <p className="text-gray-400 animate-slide-up">Phone: +27 84 454 4240</p>
        <p className="text-gray-400 animate-slide-up">
          GitHub: <a href="https://github.com/musadeveloper" className="text-white hover:underline">github.com/musadeveloper</a>
        </p>
        <p className="text-gray-400 animate-slide-up">
          LinkedIn: <a href="http://linkedin.com/in/musawenkosi-m-83a706a2" className="text-white hover:underline">linkedin.com/in/musawenkosi-m-83a706a2</a>
        </p>
        <a
          href="mailto:musawenkosi.mahlangu07@gmail.com"
          className="mt-6 inline-block px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:-translate-y-1"
        >
          Send a Message
        </a>
      </section>
    </main>
  );
}
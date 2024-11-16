import React from "react";

export default function About() {
  return (
    <div className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
      <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
        <h1 className="mb-6 text-3xl font-bold">About DevFinder</h1>
        <div className="prose prose-lg">
          <p>
            DevFinder is your ultimate solution for discovering talented
            developers who can bring your projects to life.
          </p>

          <h2>Our Mission</h2>
          <p>
            We aim to connect businesses with skilled developers, ensuring that
            you find the right talent to meet your specific needs and drive
            innovation.
          </p>

          <h2>Our Expertise</h2>
          <p>
            With a deep understanding of the tech industry and a vast network of
            professionals, we specialize in matching you with developers who
            have the expertise you require.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We're dedicated to providing exceptional service and continuously
            enhancing our platform based on user feedback and the latest
            industry trends.
          </p>

          <h2>Get Started</h2>
          <p>
            Discover our platform and start connecting with top developers to
            elevate your projects and achieve your business goals.
          </p>

          <h2>Connect With Us</h2>
          <p>
            We value your input! Reach out with your questions, suggestions, or
            success stories, and let's build something great together.
          </p>
        </div>
      </main>
    </div>
  );
}

import React from "react";

export default function About() {
  return (
    <div className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
      <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
        <h1 className="mb-6 text-3xl font-bold">About Monday Pro Apps</h1>
        <div className="prose prose-lg">
          <p>
            Monday Pro Apps is your partner in enhancing productivity and
            streamlining workflows on the Monday.com platform.
          </p>

          <h2>Our Mission</h2>
          <p>
            We create powerful integrations and apps that extend the
            functionality of Monday.com, helping teams work smarter and more
            efficiently.
          </p>

          <h2>Our Expertise</h2>
          <p>
            With years of experience in workflow automation and Monday.com
            development, we craft solutions that address real business needs.
          </p>

          <h2>Our Commitment</h2>
          <p>
            We're committed to providing top-notch support and continuously
            improving our apps based on user feedback and emerging technologies.
          </p>

          <h2>Get Started</h2>
          <p>
            Explore our range of Monday.com apps and integrations to find the
            perfect tools for your team's needs.
          </p>

          <h2>Connect With Us</h2>
          <p>
            We love hearing from our users! Reach out with your questions,
            suggestions, or success stories.
          </p>
        </div>
      </main>
    </div>
  );
}

import React from "react";

export default function Contact() {
  return (
    <div className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
      <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
        <h1 className="mb-6 text-3xl font-bold">Contact Us</h1>
        <div className="prose prose-lg">
          <p>
            We're here to help with any questions about our Monday.com apps and
            integrations.
          </p>

          <h2>Email Support</h2>
          <p>
            <a href="mailto:helloanishjain@gmail.com?subject=Found you from mondayproapps">
              helloanishjain@gmail.com
            </a>
          </p>

          <h2>Business Inquiries</h2>
          <p>
            <a href="mailto:helloanishjain@gmail.com?subject=Found you from mondayproapps">
              helloanishjain@gmail.com
            </a>
          </p>

          <h2>Office Hours</h2>
          <p>Monday to Friday, 9am - 5pm EST</p>
        </div>
      </main>
    </div>
  );
}
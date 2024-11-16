import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
      <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
        <h1 className="mb-6 text-3xl font-bold">Terms and Conditions</h1>
        <div className="prose prose-lg">
          <p>Last updated: August 5, 2024</p>

          <p>
            Welcome to Monday Pro Apps. By using our services, you agree to
            these terms.
          </p>

          <h2>1. Use of Services</h2>
          <p>
            Our apps and integrations are designed to work with Monday.com. You
            must have a valid Monday.com account to use our services.
          </p>

          <h2>2. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and for all activities that occur under your account.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content and functionality of our apps remain the property of
            Monday Pro Apps.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            We strive for high availability but cannot guarantee uninterrupted
            service. We are not liable for any losses resulting from service
            interruptions.
          </p>

          <h2>5. Changes to Terms</h2>
          <p>
            We may update these terms. Continued use of our services after
            changes constitutes acceptance of the new terms.
          </p>

          <h2>6. Contact</h2>
          <p>For any questions about these terms, please contact us at:</p>
          <p>terms@mondayproapps.com</p>
        </div>
      </main>
    </div>
  );
}

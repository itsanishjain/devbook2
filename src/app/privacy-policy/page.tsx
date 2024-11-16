import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
      <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p>Last updated: August 5, 2024</p>

          <p>
            At Monday Pro Apps, we take your privacy seriously. This policy
            explains how we handle your data when you use our Monday.com
            integrations and services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect and process the following types of data:</p>
          <ul>
            <li>Account information from your Monday.com workspace</li>
            <li>Usage data related to our apps and integrations</li>
            <li>Technical data such as IP address and browser information</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our Monday.com apps and integrations</li>
            <li>Respond to your requests and support inquiries</li>
            <li>Analyze usage patterns to enhance our services</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We implement robust security measures to protect your data,
            including encryption and secure data storage practices.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            Contact us to exercise these rights.
          </p>

          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this policy periodically. Check this page for the
            latest version.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            For any questions about this privacy policy, please contact us at:
          </p>
          <p>privacy@mondayproapps.com</p>
        </div>
      </main>
    </div>
  );
}

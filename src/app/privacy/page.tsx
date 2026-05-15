import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Land Your Web",
  description: "How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 prose prose-slate prose-sm sm:prose-base">
      <h1>Privacy Policy</h1>
      <p className="text-slate-500">Last updated: May 15, 2026</p>

      <h2>1. Information We Collect</h2>
      <p>
        When you contact us through our website, we collect the information you provide: your name,
        email address, practice name, website URL, and any message content you choose to share.
      </p>
      <p>
        We also use Plausible Analytics, a privacy-first analytics tool that does not use cookies
        and does not collect personal data. Plausible tracks page views, referrers, and device types
        in aggregate — never at an individual level.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information you provide solely to:</p>
      <ul>
        <li>Respond to your inquiry about our services</li>
        <li>Provide you with information about our packages and pricing</li>
        <li>Deliver the services you&apos;ve contracted us for</li>
      </ul>
      <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

      <h2>3. Data Storage & Security</h2>
      <p>
        Your data is stored securely and accessed only by Land Your Web LLC personnel and authorized
        AI systems involved in delivering your services. We use industry-standard encryption (SSL/TLS)
        for all data transmission.
      </p>

      <h2>4. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Request a copy of any personal data we hold about you</li>
        <li>Request that we correct or delete your personal data</li>
        <li>Opt out of any communications at any time</li>
      </ul>
      <p>To exercise these rights, contact us at hello@landyourweb.com.</p>

      <h2>5. Third-Party Services</h2>
      <p>
        We use the following third-party services in the delivery of our work. Each has its own privacy policy:
      </p>
      <ul>
        <li><strong>Vercel</strong> — website hosting and deployment</li>
        <li><strong>Supabase</strong> — database and authentication</li>
        <li><strong>Plausible Analytics</strong> — privacy-first website analytics</li>
      </ul>

      <h2>6. Contact</h2>
      <p>
        Land Your Web LLC<br />
        Email: hello@landyourweb.com
      </p>
      <p>
        For any questions about this privacy policy or how we handle your data, please reach out.
        We&apos;ll respond within 48 hours.
      </p>
    </div>
  );
}

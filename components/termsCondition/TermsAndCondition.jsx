import React from 'react';
import Head from 'next/head';

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Aapka Care</title>
        <meta name="description" content="Terms and Conditions for Aapka Care services." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">Terms and Conditions</h1>
        <div className="mt-6 text-lg text-gray-700">
          <p className="mb-4">
            <strong>Terms and Conditions for Fuerte Healthcare Private Limited (Aapka Care)</strong>
          </p>
          <p className="mb-4">
            Fuerte Healthcare Private Limited (referred to as “we”, “us”, “Aapka Care”) operates the website, software, and applications under the brand Aapka Care (collectively, the “Services”).
            Aapka Care provides these Services in collaboration with its agents, affiliates, associates, representatives, or third-party partners (“Partners”).
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Nature and Applicability of Terms</h2>
          <p className="mb-4">
            By accessing or using the Services, you agree to abide by these Terms and Conditions (“Terms”) and our Privacy Policy (available at
            <a href="https://www.aapkacare.com/privacyPolicy/" className="text-blue-500"> https://www.aapkacare.com/privacyPolicy/</a>).
            Together, these documents form a legal agreement (“Agreement”) between you and Aapka Care.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Services Overview</h2>
          <p className="mb-4">
            Aapka Care facilitates access to healthcare services, including medical consultations, diagnostic tests, pharmacy services, and related interactions with medical professionals through digital platforms.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. User Responsibilities</h2>
          <p className="mb-4">
            Users must be 18+ years to use the Services.
          </p>
          <p className="mb-4">
            Provide accurate and current information during account creation or service use.
          </p>
          <p className="mb-4">
            Prohibited activities include sharing false information, infringing intellectual property, or engaging in unlawful conduct.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Data Privacy</h2>
          <p className="mb-4">
            Personal/sensitive data is collected, stored, and processed per the Indian IT Act, 2000, and SPI Rules.
            By using our Services, you consent to communication via email/SMS/call for updates, promotions, and support, even if registered under DND/DNC.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Third-Party Content & Disclaimers</h2>
          <p className="mb-4">
            Aapka Care does not guarantee the accuracy of third-party content, services, or linked websites.
            Medical information on the platform is not a substitute for professional advice. For emergencies, contact healthcare providers directly.
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. Intellectual Property</h2>
          <p className="mb-4">
            All content, logos, trademarks, and software on the website/app are owned by Fuerte Healthcare Private Limited or licensed to Aapka Care. Unauthorized use is prohibited.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. Limitation of Liability</h2>
          <p className="mb-4">
            Aapka Care and its Partners are not liable for damages arising from Service use, technical errors, or third-party actions. Liability is capped at INR 1.
          </p>

          <h2 className="text-2xl font-semibold mt-6">8. Governing Law & Dispute Resolution</h2>
          <p className="mb-4">
            These Terms are governed by Indian law. Disputes will be resolved in the courts in Delhi.
          </p>

          <h2 className="text-2xl font-semibold mt-6">9. Grievance Redressal</h2>
          <p className="mb-4">
            Contact our Grievance Officer:
          </p>
          <ul className="list-inside list-disc mb-4">
            <li>Address: Fuerte Healthcare Private Limited, [Insert Registered Office Address]</li>
            <li>Email: <a href="mailto:grievance@aapkacare.com" className="text-blue-500">grievance@aapkacare.com</a></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">10. Amendments</h2>
          <p className="mb-4">
            Aapka Care reserves the right to modify these Terms. Continued use after changes constitutes acceptance.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Key Revisions:
          </p>
          <ul className="list-inside list-disc mb-4">
            
            <li>Privacy Policy URL: Updated to <a href="https://www.aapkacare.com/privacyPolicy/" className="text-blue-500">https://www.aapkacare.com/privacyPolicy/</a></li>
            <li>Contact Details: Grievance Officer email: <a href="mailto:grievance@aapkacare.com" className="text-blue-500">grievance@aapkacare.com</a></li>
            <li>Jurisdiction: Courts at Delhi (retained as default; update if your registered office is elsewhere).</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;

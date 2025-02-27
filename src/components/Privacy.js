import React from 'react';
import { Helmet } from 'react-helmet';

const Privacy = () => {
    
return (<>
 <Helmet>
        <title>Privacy Policy - Kuya Kevin's BBQ</title>
        <meta name="description" content="Read the privacy policy of Kuya Kevin's BBQ. We respect your privacy and are committed to protecting your personal information." />
        <link rel="canonical" href="https://kuyakevinsbbq.com/privacy" />
      </Helmet>
  <div className="container-xxl py-5" style={{ position: 'relative', textAlign: 'left', zIndex:9}}>
    <div className="container">
      <div className="row g-4 align-items-left">
      <h1 className="ff-secondary text-warning fw-normal align-items-left" style={{textAlign:"center"}}>Privacy Policy</h1>

    <div>
      <header>
        <p className="mb-5" style={{textAlign:"center"}}><strong>Effective Date: 01-01-2025</strong></p>
      </header>
      <section>
        <h3 className="ff-secondary text-warning fw-normal">1. Information We Collect</h3>
        <p>When you visit our website, we collect information through Google Analytics, which helps us understand how visitors use our site. The information collected includes:</p>
        
        <ul>
          <li><strong>Cookies</strong>: Small files stored on your device to improve your browsing experience.</li>
          <li><strong>Usage Data</strong>: Information about your interaction with our website (such as pages visited, time spent on pages, and referral sources).</li>
          <li><strong>IP Address</strong>: We may collect your IP address to better understand website traffic and user engagement.</li>
        </ul>
      </section>

      <section>
        <h3 className="ff-secondary text-warning fw-normal">2. Google Analytics</h3>
        <p>We use Google Analytics to monitor and analyze traffic to our website. Google Analytics collects information such as:</p>
        <ul>
          <li>The pages you visit</li>
          <li>The time you spend on our site</li>
          <li>Your location (generalized by city or country)</li>
          <li>The type of device and browser you use</li>
          <li>Referral websites (where you came from before visiting our site)</li>
        </ul>
        <p>Google Analytics does not collect personally identifiable information (PII). All data is anonymized and used only to improve our website experience.</p>
        <p>For more information on how Google Analytics collects and processes data, please refer to Google's privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy & Terms</a>.</p>
        <p>You can also opt out of Google Analytics by using the Google Analytics opt-out browser add-on, available here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a>.</p>
      </section>

      <section>
        <h3 className="ff-secondary text-warning fw-normal">3. How We Use Your Information</h3>
        <p>The information collected through Google Analytics helps us:</p>
        <ul>
          <li>Understand how users interact with our website.</li>
          <li>Improve site performance and user experience.</li>
          <li>Analyze traffic trends and demographics.</li>
        </ul>
      </section>

      <section>
        <h3 className="ff-secondary text-warning fw-normal">4. Cookies</h3>
        <p>Cookies are small data files stored on your device when you visit our site. These cookies are used to remember your preferences and improve user experience. You can control cookie settings through your browser, including disabling cookies or notifying you when cookies are being used.</p>
        <p>For more details, please visit: <a href="https://www.google.com/policies/technologies/cookies/" target="_blank" rel="noopener noreferrer">How Google Uses Cookies</a>.</p>
      </section>

      <section>
        <h3 className="ff-secondary text-warning fw-normal">5. Third-Party Services</h3>
        <p>We may use third-party services (like Google Analytics) to help us analyze website traffic and improve our website. These third-party services may also collect personal information, and you should review their privacy policies to understand how they handle your data.</p>
      </section>

      <section>
        <h3 className="ff-secondary text-warning fw-normal">6. Data Security</h3>
        <p>We take the security of your information seriously. We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, or destruction.</p>
      </section>

      <section>
        <h3 className="ff-secondary text-warning fw-normal">7. Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request corrections to any inaccurate data.</li>
          <li>Request that we delete your data (subject to legal obligations).</li>
          <li>Opt-out of data collection for analytics purposes by disabling cookies in your browser or using the Google Analytics opt-out browser add-on.</li>
        </ul>
      </section>

      <section>
        <h3 className="ff-secondary text-warning fw-normal">8. Changes to This Privacy Policy</h3>
        <p>We reserve the right to update this privacy policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. Please review this privacy policy periodically.</p>
      </section>

      <section>
        <h3 className="ff-secondary text-warning fw-normal">9. Contact Us</h3>
        <p>If you have any questions about this privacy policy or our data practices, please contact us by phone, email or on social!</p>
      </section>
    </div>
        </div>
      </div>
    </div>
  </>
);

};

export default Privacy;

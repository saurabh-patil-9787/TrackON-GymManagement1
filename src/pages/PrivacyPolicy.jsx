import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#111827',
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: 'rgba(17, 24, 39, 0.95)',
    backdropFilter: 'blur(4px)',
    borderBottom: '1px solid #1f2937'
  };

  const headerInnerStyle = {
    maxWidth: '896px',
    margin: '0 auto',
    padding: '0 16px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const logoStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    backgroundColor: '#7c3aed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    boxShadow: '0 0 15px rgba(124,58,237,0.3)'
  };

  const mainStyle = {
    maxWidth: '896px',
    margin: '0 auto',
    padding: '48px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px'
  };

  const navContainerStyle = {
    flex: '0 0 25%',
    position: 'sticky',
    top: '96px',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  const contentContainerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    color: '#d1d5db',
    lineHeight: '1.7'
  };

  const sectionTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '16px',
    paddingLeft: '16px',
    borderLeft: '4px solid #7c3aed'
  };

  const subTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    marginTop: '24px',
    marginBottom: '8px'
  };

  const listStyle = {
    paddingLeft: '20px',
    marginBottom: '24px',
    listStyleType: 'disc'
  };

  const linkStyle = {
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const tocButtonStyle = {
    background: 'none',
    border: 'none',
    borderLeft: '1px solid transparent',
    padding: '8px 0 8px 16px',
    margin: '0 0 0 -1px',
    textAlign: 'left',
    color: '#9ca3af',
    fontSize: '14px',
    cursor: 'pointer',
    width: '100%',
    transition: 'color 0.2s, border-color 0.2s'
  };

  // To support print styles we'd normally use CSS. We will inject a small style tag just for print overrides.
  const printStyles = `
    @media print {
      body { background: white !important; color: black !important; }
      #privacy-container { background: white !important; color: black !important; }
      header, aside, footer { display: none !important; }
      main { padding: 0 !important; }
      h1, h2, h3 { color: black !important; }
      p, li { color: black !important; }
      .print-border { border-color: #e5e7eb !important; }
    }
    @media (min-width: 1024px) {
      .layout-wrapper { flex-direction: row !important; }
    }
  `;

  return (
    <div id="privacy-container" style={containerStyle}>
      <style>{printStyles}</style>

      <header style={headerStyle}>
        <div style={headerInnerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={logoStyle}>T</div>
            <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-0.02em' }}>TrackON</span>
          </div>
          <Link to="/" style={linkStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </Link>
        </div>
      </header>

      <main style={mainStyle}>
        <div style={{ borderBottom: '1px solid #1f2937', paddingBottom: '32px' }} className="print-border">
          <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Privacy Policy
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', color: '#9ca3af', fontSize: '14px' }}>
            <p>Last Updated: April 26, 2026</p>
            <p>Effective Date: April 26, 2026</p>
          </div>
        </div>

        <div className="layout-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          
          <aside style={navContainerStyle}>
            <h3 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b7280', marginBottom: '16px' }}>
              Contents
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid #1f2937' }}>
              {[
                { id: 'section-1', title: '1. Introduction' },
                { id: 'section-2', title: '2. Information We Collect' },
                { id: 'section-3', title: '3. How We Use Your Information' },
                { id: 'section-4', title: '4. WhatsApp API Usage' },
                { id: 'section-5', title: '5. Data Sharing & Disclosure' },
                { id: 'section-6', title: '6. Data Retention' },
                { id: 'section-7', title: '7. Data Security' },
                { id: 'section-8', title: '8. Your Rights' },
                { id: 'section-9', title: '9. Cookies & Tracking' },
                { id: 'section-10', title: '10. Children\'s Privacy' },
                { id: 'section-11', title: '11. International Transfers' },
                { id: 'section-12', title: '12. Third-Party Links' },
                { id: 'section-13', title: '13. Changes to Policy' },
                { id: 'section-14', title: '14. Grievance & Contact' },
                { id: 'section-15', title: '15. Governing Law' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={tocButtonStyle}
                  onMouseOver={(e) => { e.currentTarget.style.color = '#a78bfa'; e.currentTarget.style.borderColor = '#8b5cf6'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.borderColor = 'transparent'; }}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>

          <div style={contentContainerStyle}>
            
            <section id="section-1" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 1: Introduction</h2>
              <p style={{ marginBottom: '16px' }}>
                TrackON ("we", "our", or "us") operates a Gym Management Software-as-a-Service (SaaS) platform accessible via web browser. This Privacy Policy explains how we collect, use, store, share, and protect information when you use our platform. By using TrackON, you agree to the collection and use of information as described in this policy.
              </p>
              <p>
                This policy also governs our use of WhatsApp Business API to send transactional notifications to gym members on behalf of gym owners using our platform.
              </p>
            </section>

            <section id="section-2" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 2: Information We Collect</h2>
              
              <h3 style={subTitleStyle}>2.1 Information Provided by Gym Owners (Our Direct Customers):</h3>
              <ul style={listStyle}>
                <li>Full name, mobile number, email address (for account registration and password recovery)</li>
                <li>Gym name, city, and pincode</li>
                <li>Profile/logo images uploaded to our platform</li>
                <li>Payment information processed via Razorpay (we do not store card details)</li>
              </ul>

              <h3 style={subTitleStyle}>2.2 Information About Gym Members (Processed on Behalf of Gym Owners):</h3>
              <ul style={listStyle}>
                <li>Member name, mobile number, age, date of birth, city</li>
                <li>Membership plan details, joining date, expiry date, fee payment records</li>
                <li>Member photographs uploaded by gym owners for identification purposes</li>
                <li>Physical measurements (height, weight) optionally provided for fitness tracking</li>
              </ul>

              <h3 style={subTitleStyle}>2.3 Automatically Collected Information:</h3>
              <ul style={listStyle}>
                <li>IP address and approximate location</li>
                <li>Browser type, device type, operating system</li>
                <li>Pages visited and features used within the platform</li>
                <li>Login timestamps and session duration</li>
              </ul>

              <h3 style={subTitleStyle}>2.4 WhatsApp Communication Data:</h3>
              <p style={{ marginBottom: '8px' }}>When gym owners use our WhatsApp notification feature to contact their members, we process:</p>
              <ul style={listStyle}>
                <li>Member mobile phone numbers provided by the gym owner</li>
                <li>Message content (membership renewal reminders, payment confirmations)</li>
              </ul>
              <p>We act as a data processor in this context; the gym owner is the data controller.</p>
            </section>

            <section id="section-3" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 3: How We Use Your Information</h2>
              <p style={{ marginBottom: '8px' }}>We use collected information to:</p>
              <ul style={listStyle}>
                <li>Provide, operate, and maintain the TrackON platform</li>
                <li>Create and manage gym owner accounts and their gym profiles</li>
                <li>Enable gym owners to manage their members, fees, and memberships</li>
                <li>Send membership expiry reminders and payment confirmations via WhatsApp (on behalf of gym owners)</li>
                <li>Process payments through Razorpay payment gateway</li>
                <li>Generate AI-powered diet plans using Google Gemini AI (health data is processed in real-time and not stored by the AI provider beyond the session)</li>
                <li>Respond to customer support inquiries</li>
                <li>Detect and prevent fraud, abuse, and security incidents</li>
                <li>Comply with legal obligations under Indian law (IT Act 2000, DPDP Act 2023)</li>
              </ul>
            </section>

            <section id="section-4" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 4: WhatsApp Business API Usage</h2>
              <p style={{ marginBottom: '16px' }}>
                TrackON integrates with the Meta WhatsApp Business API to enable gym owners to send transactional messages to their gym members. This integration is used strictly for:
              </p>
              <ul style={listStyle}>
                <li>Membership renewal reminders</li>
                <li>Payment confirmation messages</li>
                <li>Membership expiry notifications</li>
              </ul>
              <p style={{ marginBottom: '8px', fontWeight: '500', color: '#ffffff' }}>Important disclosures regarding WhatsApp usage:</p>
              <ul style={listStyle}>
                <li>Messages are sent only to members whose phone numbers have been provided by the gym owner</li>
                <li>TrackON does not initiate promotional WhatsApp messages without explicit opt-in</li>
                <li>Phone numbers are never sold, rented, or shared with third parties for marketing purposes</li>
                <li>Members may opt out by contacting their gym owner directly</li>
                <li>TrackON complies with Meta's WhatsApp Business Policy and Commerce Policy</li>
                <li>All message templates are pre-approved by Meta before use in production</li>
              </ul>
              <p>
                Gym owners are responsible for ensuring they have obtained appropriate consent from their members to receive WhatsApp communications.
              </p>
            </section>

            <section id="section-5" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 5: Data Sharing and Disclosure</h2>
              <p style={{ marginBottom: '16px' }}>We do not sell your personal data. We share data only with:</p>

              <h3 style={subTitleStyle}>5.1 Service Providers (Data Processors):</h3>
              <ul style={listStyle}>
                <li><strong>MongoDB Atlas</strong> (Database hosting - USA): Member and gym data storage</li>
                <li><strong>Cloudinary</strong> (Image storage - USA): Profile photos and gym logos</li>
                <li><strong>Razorpay</strong> (Payment processing - India): Payment transaction processing</li>
                <li><strong>Google</strong> (Gemini AI - USA): Real-time diet plan generation (no persistent storage)</li>
                <li><strong>Meta Platforms / WhatsApp Business API</strong>: Message delivery</li>
                <li><strong>Render / Vercel</strong> (Hosting - USA): Application infrastructure</li>
              </ul>

              <h3 style={subTitleStyle}>5.2 Legal Requirements:</h3>
              <p style={{ marginBottom: '24px' }}>
                We may disclose information if required by Indian law, court order, or government authority, including the IT Act 2000 and its amendments.
              </p>

              <h3 style={subTitleStyle}>5.3 Business Transfers:</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, user data may be transferred as part of that transaction with advance notice provided.
              </p>
            </section>

            <section id="section-6" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 6: Data Retention</h2>
              <ul style={listStyle}>
                <li style={{ marginBottom: '8px' }}><strong>Gym owner account data:</strong> Retained for the duration of the subscription and 90 days after cancellation</li>
                <li style={{ marginBottom: '8px' }}><strong>Member data:</strong> Retained as long as the gym owner's account is active; deleted upon account closure</li>
                <li style={{ marginBottom: '8px' }}><strong>Payment records:</strong> Retained for 7 years as required by Indian financial regulations (Companies Act 2013)</li>
                <li style={{ marginBottom: '8px' }}><strong>Profile photos:</strong> Deleted from Cloudinary immediately when removed by the user</li>
                <li style={{ marginBottom: '8px' }}><strong>WhatsApp message logs:</strong> Not stored on our servers; delivery is managed by Meta</li>
                <li style={{ marginBottom: '8px' }}><strong>Refresh tokens:</strong> Automatically expired and purged after 30 days of inactivity</li>
              </ul>
            </section>

            <section id="section-7" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 7: Data Security</h2>
              <p style={{ marginBottom: '16px' }}>We implement industry-standard security measures including:</p>
              <ul style={listStyle}>
                <li>AES-256 encryption for data at rest (via MongoDB Atlas)</li>
                <li>TLS 1.2/1.3 encryption for all data in transit (HTTPS enforced)</li>
                <li>JWT-based authentication with refresh token rotation</li>
                <li>bcrypt password hashing (salt rounds: 10)</li>
                <li>Rate limiting on all API endpoints to prevent brute-force attacks</li>
                <li>HTTP security headers via Helmet.js</li>
                <li>Input validation and NoSQL injection protection on all endpoints</li>
                <li>Role-based access control (Gym Owner vs. System Admin)</li>
              </ul>
              <p>
                Despite these measures, no system is 100% secure. In the event of a data breach affecting your rights and freedoms, we will notify affected users within 72 hours as required by law.
              </p>
            </section>

            <section id="section-8" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 8: Your Rights</h2>
              <p style={{ marginBottom: '16px' }}>
                As a user of TrackON, or as a gym member whose data is processed through TrackON, you have the following rights under the Digital Personal Data Protection Act 2023 (DPDP Act):
              </p>
              <ul style={listStyle}>
                <li><strong>Right to Access:</strong> Request a copy of your personal data we hold</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
                <li><strong>Right to Grievance Redressal:</strong> Lodge a complaint with our grievance officer</li>
              </ul>
              <p>
                To exercise any of these rights, email us at: <a href="mailto:gymosmanagement@gmail.com" style={{ color: '#a78bfa', textDecoration: 'none' }}>gymosmanagement@gmail.com</a><br/>
                We will respond within 30 days of receiving your request.
              </p>
            </section>

            <section id="section-9" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 9: Cookies and Tracking</h2>
              <p style={{ marginBottom: '8px' }}>TrackON uses only functional cookies necessary for:</p>
              <ul style={listStyle}>
                <li>Maintaining your login session (httpOnly, Secure cookies)</li>
                <li>CSRF protection</li>
              </ul>
              <p>
                We do not use advertising cookies, third-party tracking cookies, or sell data to advertisers. TrackON products are advertisement-free.
              </p>
            </section>

            <section id="section-10" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 10: Children's Privacy</h2>
              <p>
                TrackON is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from minors. Gym members must be at least 10 years of age to be registered on the platform (enforced at the application level). If you believe a child's data has been collected in error, contact us immediately at <a href="mailto:gymosmanagement@gmail.com" style={{ color: '#a78bfa', textDecoration: 'none' }}>gymosmanagement@gmail.com</a>.
              </p>
            </section>

            <section id="section-11" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 11: International Data Transfers</h2>
              <p>
                Some of our service providers (Cloudinary, MongoDB Atlas, Google) are located outside India. When transferring data internationally, we ensure appropriate safeguards are in place including Standard Contractual Clauses (SCCs) and adherence to applicable data protection laws.
              </p>
            </section>

            <section id="section-12" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 12: Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party services (Razorpay checkout, WhatsApp). This Privacy Policy does not apply to those third-party sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section id="section-13" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 13: Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. For significant changes, we will notify gym owners via email (if registered) or via an in-app notification. Continued use of the platform after changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section id="section-14" style={{ 
              scrollMarginTop: '96px', 
              backgroundColor: 'rgba(31, 41, 55, 0.5)', 
              padding: '24px', 
              borderRadius: '16px', 
              border: '1px solid rgba(55, 65, 81, 0.5)' 
            }}>
              <h2 style={sectionTitleStyle}>SECTION 14: Grievance Officer & Contact</h2>
              <p style={{ marginBottom: '16px' }}>
                In accordance with the Information Technology Act, 2000 and the DPDP Act 2023, we have appointed a Grievance Officer:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', color: '#ffffff' }}>
                <p><span style={{ color: '#9ca3af' }}>Name:</span> TrackON Support Team</p>
                <p><span style={{ color: '#9ca3af' }}>Email:</span> <a href="mailto:gymosmanagement@gmail.com" style={{ color: '#a78bfa', textDecoration: 'none' }}>gymosmanagement@gmail.com</a></p>
                <p><span style={{ color: '#9ca3af' }}>Address:</span> Pune, Maharashtra, India - 411001</p>
                <p><span style={{ color: '#9ca3af' }}>Response Time:</span> Within 30 days of receipt of complaint</p>
              </div>
              <p>
                For general privacy inquiries or to exercise your data rights, contact us at <a href="mailto:gymosmanagement@gmail.com" style={{ color: '#a78bfa', textDecoration: 'none' }}>gymosmanagement@gmail.com</a>
              </p>
            </section>

            <section id="section-15" style={{ scrollMarginTop: '96px' }}>
              <h2 style={sectionTitleStyle}>SECTION 15: Governing Law</h2>
              <p>
                This Privacy Policy is governed by the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra, India.
              </p>
            </section>
            
          </div>
        </div>
      </main>

      <footer style={{ marginTop: '80px', borderTop: '1px solid #1f2937', padding: '32px 0', backgroundColor: '#111827' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 16px', textAlign: 'center', color: '#6b7280', fontSize: '14px' }}>
          <p>&copy; {new Date().getFullYear()} TrackON. All rights reserved.</p>
          <p style={{ marginTop: '8px' }}>Contact: <a href="mailto:gymosmanagement@gmail.com" style={{ color: '#a78bfa', textDecoration: 'none' }}>gymosmanagement@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}

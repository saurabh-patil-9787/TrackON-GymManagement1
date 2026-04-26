import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Camera, MessageCircle, Mail, Heart } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', to: '/features' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Changelog', to: '#' },
    { label: 'Roadmap', to: '#' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '#' },
  ],
  Resources: [
    { label: 'Documentation', to: '#' },
    { label: 'Support', to: '/contact' },
    { label: 'FAQ', to: '/#faq' },
    { label: 'Blog', to: '#' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', borderTop: '1px solid #1e293b', paddingTop: 72 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48, paddingBottom: 64 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #0d9488, #06b6d4)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Dumbbell size={18} color="white" />
              </div>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#f8fafc' }}>
                Track<span style={{ color: '#0d9488' }}>ON</span>
              </span>
            </Link>
            <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.7, maxWidth: 220, marginBottom: 24 }}>
              The complete gym management platform built for Indian gym owners.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: Camera, label: 'Instagram', href: '#' },
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919876543210' },
                { icon: Mail, label: 'Email', href: 'mailto:gymosmanagement@gmail.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 38,
                    height: 38,
                    background: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  className="social-link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
                {col}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      style={{ color: '#94a3b8', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s ease' }}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:gymosmanagement@gmail.com" style={{ color: '#94a3b8', fontSize: 14, textDecoration: 'none' }} className="footer-link">gymosmanagement@gmail.com</a>
              <a href="https://wa.me/919876543210" style={{ color: '#94a3b8', fontSize: 14, textDecoration: 'none' }} className="footer-link">+91 9699809787</a>
              <span style={{ color: '#94a3b8', fontSize: 14 }}>Pune, Maharashtra, India</span>
              <span style={{ color: '#94a3b8', fontSize: 14 }}>Mon-Sat · 9 AM – 7 PM IST</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1e293b', padding: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#64748b', fontSize: 14 }}>
            © 2025 TrackON. Made with <Heart size={13} style={{ display: 'inline', color: '#ef4444', margin: '0 3px' }} /> in India.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link to="/privacy-policy" style={{ color: '#64748b', fontSize: 13, textDecoration: 'none' }} className="footer-link">Privacy</Link>
            <a href="#" style={{ color: '#64748b', fontSize: 13, textDecoration: 'none' }} className="footer-link">Terms</a>
          </div>
        </div>
      </div>

      <style>{`
        .social-link:hover { background: rgba(13,148,136,0.2) !important; border-color: rgba(13,148,136,0.4) !important; color: #0d9488 !important; transform: translateY(-2px); }
        .footer-link:hover { color: #0d9488 !important; }
      `}</style>
    </footer>
  );
}

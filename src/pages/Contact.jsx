import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: Phone, label: 'Phone Support', value: '+91 9699809787', href: 'tel:+919699809787' },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919699809787' },
    { icon: Mail, label: 'Email', value: 'gymosmanagement@gmail.com', href: 'mailto:gymosmanagement@gmail.com' },
    { icon: MapPin, label: 'Office', value: 'Pune, Maharashtra', href: null },
    { icon: Clock, label: 'Working Hours', value: 'Mon-Sat · 9 AM – 7 PM', href: null },
  ];

  return (
    <>
      <Helmet>
        <title>Contact — TrackON Gym Management Software</title>
        <meta name="description" content="Get in touch with TrackON. Reach out via email, phone, or WhatsApp." />
      </Helmet>

      <section style={{ paddingTop: 160, paddingBottom: 80, background: '#f8fafc', minHeight: '100vh' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div className="badge" style={{ marginBottom: 16 }}>
                <span>📬</span> Contact Us
              </div>
              <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, marginBottom: 16 }}>
                We're here to <span className="gradient-text">help</span>
              </h1>
              <p style={{ fontSize: 18, color: '#475569', maxWidth: 680, margin: '0 auto', lineHeight: 1.7 }}>
                Please reach out to our team directly via WhatsApp, Phone, or Email for technical support or to activate your free trial.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ maxWidth: 850, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
            {/* Master Contact Card */}
            <ScrollReveal delay={0.1}>
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 24,
                padding: 'clamp(32px, 5vw, 48px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
                  {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                      <div style={{
                        width: 48,
                        height: 48,
                        background: 'rgba(13,148,136,0.08)',
                        border: '1px solid rgba(13,148,136,0.15)',
                        borderRadius: 14,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={22} color="#0d9488" />
                      </div>
                      <div style={{ overflow: 'hidden' }}>
                        <p style={{ fontSize: 13, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                          {label}
                        </p>
                        {href ? (
                          <a href={href} className="contact-link" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontSize: 18, color: '#0f172a', fontWeight: 700, textDecoration: 'none', display: 'block', wordBreak: 'break-word', lineHeight: 1.3 }}>
                            {value}
                          </a>
                        ) : (
                          <p style={{ fontSize: 18, color: '#0f172a', fontWeight: 700, wordBreak: 'break-word', lineHeight: 1.3 }}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* In-page promotional banner */}
            <ScrollReveal delay={0.2}>
              <div style={{
                background: 'linear-gradient(135deg, #0d9488, #0f766e)',
                borderRadius: 24,
                padding: 'clamp(32px, 5vw, 48px)',
                color: 'white',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(13,148,136,0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(30px)' }} />
                <div style={{ position: 'absolute', bottom: -50, left: -50, width: 150, height: 150, background: 'rgba(255,255,255,0.06)', borderRadius: '50%', filter: 'blur(20px)' }} />
                
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 800, marginBottom: 16, position: 'relative', zIndex: 1, letterSpacing: '-0.02em' }}>
                  Start Your 1 Month Free Trial
                </h2>
                <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 500, margin: '0 auto 32px', position: 'relative', zIndex: 1 }}>
                  Get complete access to all TrackON features. No up-front payment, no credit card required.
                </p>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                    <a href="https://wa.me/919699809787?text=Hi%20TrackON%2C%20I%20want%20to%20start%20my%201%20month%20free%20trial!" target="_blank" rel="noopener noreferrer" style={{
                      background: 'white',
                      color: '#0d9488',
                      padding: '16px 32px',
                      borderRadius: 12,
                      fontWeight: 700,
                      fontSize: 16,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                    }}>
                      Claim Offer on WhatsApp <ArrowRight size={18} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <style>{`
        .contact-link {
          transition: color 0.2s ease;
        }
        .contact-link:hover {
          color: #0d9488 !important;
        }
      `}</style>
    </>
  );
}

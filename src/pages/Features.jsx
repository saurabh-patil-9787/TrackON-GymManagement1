import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { BrowserScreenshot, MobileScreenshots } from '../components/ScreenshotFrame';
import { Users, CreditCard, MessageCircle, LayoutDashboard, Utensils, BarChart3, Bell, Download, ArrowRight, Shield, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

import dashboardImg from '../assets/screenshots/dashboard_desktop.png';
import membersImg from '../assets/screenshots/members_desktop.png';
import followupImg from '../assets/screenshots/followup_desktop.png';
import revenueImg from '../assets/screenshots/revenue page.png';
import addMemberImg from '../assets/screenshots/add member.png';
import renewMemberImg from '../assets/screenshots/renew member.png';
import dashboardMobileImg from '../assets/screenshots/dashboard_mobile.png';
import revenueMobileImg from '../assets/screenshots/mobile revenue page.jpeg';

const featureDetails = [
  {
    icon: LayoutDashboard,
    title: 'Smart Dashboard',
    desc: 'Get a bird\'s-eye view of your gym — active members, today\'s follow-ups, expiring memberships, and revenue at a glance. Make data-driven decisions instantly.',
    img: dashboardImg,
    type: 'desktop',
  },
  {
    icon: Users,
    title: 'Member Management',
    desc: 'Add and manage members with detailed profiles, payment history, and membership status. Smart search, advanced filters, and one-click actions save you hours.',
    img: membersImg,
    type: 'desktop',
  },
  {
    icon: CreditCard,
    title: 'Payment & Revenue Tracking',
    desc: 'Track every rupee — record payments, manage pending dues, and view revenue charts. Monthly and yearly breakdowns help you understand your cash flow.',
    img: revenueImg,
    type: 'desktop',
  },
  {
    icon: Bell,
    title: 'Follow-Up Automation',
    desc: 'Never miss a renewal again. TrackON automatically creates follow-up lists for expiring and expired memberships, with one-click WhatsApp messaging.',
    img: followupImg,
    type: 'desktop',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    desc: 'Send personalized renewal reminders, birthday wishes, and announcements directly via WhatsApp. Pre-built message templates save you time.',
    img: dashboardMobileImg,
    img2: revenueMobileImg,
    type: 'mobile',
  },
  {
    icon: Utensils,
    title: 'AI Diet Plans',
    desc: 'Generate personalized diet and nutrition plans for your members using AI. Customize based on fitness goals, dietary preferences, and health conditions.',
    img: addMemberImg,
    type: 'desktop',
  },
];

const extraFeatures = [
  { icon: BarChart3, title: 'Analytics & Reports', desc: 'Detailed revenue and member analytics with visual charts.' },
  { icon: Download, title: 'Excel Export', desc: 'Export all data to Excel with one click.' },
  { icon: Shield, title: 'Data Security', desc: 'Bank-grade encryption and isolated data per gym.' },
  { icon: Settings, title: 'Custom Settings', desc: 'Configure membership plans, fees, and gym details.' },
];

export default function Features() {
  return (
    <>
      <Helmet>
        <title>Features — TrackON Gym Management Software</title>
        <meta name="description" content="Explore TrackON's powerful features: member management, payment tracking, WhatsApp integration, AI diet plans, and more." />
      </Helmet>

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: '#f8fafc' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span>⚡</span> Features
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, marginBottom: 16 }}>
              Everything to <span className="gradient-text">run & grow</span> your gym
            </h1>
            <p style={{ fontSize: 18, color: '#475569', maxWidth: 560, margin: '0 auto' }}>
              From member management to AI-powered diet plans — TrackON is the complete toolkit for modern gym owners.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature Sections */}
      <section style={{ background: '#f8fafc', paddingBottom: 48 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {featureDetails.map((f, i) => (
              <ScrollReveal key={i} delay={0.1}>
                <div 
                  className={`feature-row ${i % 2 !== 0 ? 'screenshot-left' : ''}`}
                  style={{ padding: '40px 0', borderTop: i > 0 ? '1px solid #e2e8f0' : 'none' }}
                >
                  {/* Text */}
                  <div style={ i % 2 !== 0 ? { order: 2 } : { order: 1 } } className="text-column">
                    <div style={{
                      width: 52,
                      height: 52,
                      background: 'rgba(13,148,136,0.08)',
                      border: '1px solid rgba(13,148,136,0.2)',
                      borderRadius: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 20,
                    }}>
                      <f.icon size={24} color="#0d9488" />
                    </div>
                    <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, color: '#0f172a', marginBottom: 14, lineHeight: 1.2 }}>
                      {f.title}
                    </h2>
                    <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.7, marginBottom: 24 }}>
                      {f.desc}
                    </p>
                    <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#0d9488', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                      Try it free <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Image */}
                  {f.type === 'desktop' ? (
                    <BrowserScreenshot
                      src={f.img}
                      alt={f.title}
                      direction={i % 2 !== 0 ? 'left' : 'right'}
                      label={f.title}
                    />
                  ) : (
                    <MobileScreenshots
                      phone1src={f.img}
                      phone2src={f.img2}
                    />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Features Grid */}
      <section className="section" style={{ background: '#f1f5f9' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>
                And so much more...
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {extraFeatures.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ translateY: -3 }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: 14,
                    padding: 24,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  <f.icon size={24} color="#0d9488" style={{ marginBottom: 14 }} />
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{f.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0f172a', marginBottom: 16 }}>
              Ready to see it in action?
            </h2>
            <p style={{ fontSize: 17, color: '#475569', marginBottom: 28 }}>
              Start your 1 month free trial — no credit card needed.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started Free <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .feature-detail-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .feature-detail-text { order: 2 !important; text-align: center; }
          .feature-detail-img { order: 1 !important; }
          .feature-detail-img > div { flex-direction: column !important; align-items: center !important; }
        }
      `}</style>
    </>
  );
}

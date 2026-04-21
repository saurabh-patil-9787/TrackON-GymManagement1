import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import CTABanner from '../sections/CTABanner';
import { Target, Heart, Zap, Shield, Building2, Users, TrendingUp, Star } from 'lucide-react';

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'We exist to empower Indian gym owners with technology that was previously only available to large chains.' },
  { icon: Heart, title: 'Customer First', desc: 'Every feature we build starts with a real problem faced by a gym owner. Our roadmap is driven by customer feedback.' },
  { icon: Zap, title: 'Simple & Powerful', desc: 'Complexity kills adoption. We design every screen to be intuitive enough that anyone can use it from day one.' },
  { icon: Shield, title: 'Trust & Security', desc: 'Your data is your business. We use bank-grade encryption and keep every gym\'s data completely isolated.' },
];

const stats = [
  { icon: Building2, value: 5, suffix: '+', label: 'Gyms Onboarded' },
  { icon: Users, value: 2500, suffix: '+', label: 'Members Managed' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Renewal Rate' },
  { icon: Star, value: 4.9, suffix: '', label: 'Average Rating', decimal: true },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — TrackON Gym Management Software</title>
        <meta name="description" content="Learn about TrackON — the gym management platform built for Indian gym owners. Our mission, values, and story." />
      </Helmet>

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 72, background: '#f8fafc' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span>🏋️</span> About TrackON
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, marginBottom: 16 }}>
              Built for gyms, <span className="gradient-text">by gym people</span>
            </h1>
            <p style={{ fontSize: 18, color: '#475569', maxWidth: 580, margin: '0 auto' }}>
              We understand the daily grind of running a gym. TrackON was born out of frustration with pen-and-paper management and overpriced software that doesn't fit Indian gyms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" style={{ background: '#f1f5f9' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <ScrollReveal>
            <div style={{ background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0', padding: 'clamp(32px, 5vw, 56px)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0f172a', marginBottom: 20 }}>
                Our Story
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 16, color: '#475569', lineHeight: 1.8 }}>
                <p>
                  TrackON started with a simple observation — many gym owners in villages and small towns were still managing everything on paper registers.
                </p>
                <p>
                  No digital system. No proper tracking.
                </p>
                <p>
                  Members were written in notebooks, fees were tracked manually, and renewals were often missed. This not only caused revenue loss but also made daily gym management stressful and time-consuming.
                </p>
                <p>
                  We built TrackON to solve this exact problem.
                </p>
                <p>
                  TrackON is a simple and affordable gym management platform designed especially for gym owners who are still running their gyms manually and want to move towards digital — without complexity.
                </p>
                <p>
                  No technical knowledge required. No complicated setup.
                </p>
                <p>
                  With TrackON, gym owners can:
                </p>
                <ul style={{ paddingLeft: '24px', margin: '8px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Track member expiry and renewals easily</li>
                  <li>Manage fees and payment records properly</li>
                  <li>View active, expired, and upcoming members in one dashboard</li>
                  <li>Send reminders to members on time</li>
                  <li>Run their gym in a more organized and professional way</li>
                </ul>
                <p>
                  Starting from just ₹249/month, TrackON helps gym owners shift from manual work to smart management — saving time, reducing mistakes, and improving their business.
                </p>
                <p>
                  Today, TrackON is helping gyms across villages and small cities take their first step towards digital growth.
                </p>
                <p>
                  And this is just the beginning.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '64px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 32 }}>
              {stats.map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <s.icon size={24} color="#0d9488" style={{ marginBottom: 8 }} />
                  <div style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#f8fafc' }}>
                    {s.decimal ? s.value : <AnimatedCounter target={s.value} />}
                    <span style={{ color: '#0d9488' }}>{s.suffix}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>
                Our <span className="gradient-text">Values</span>
              </h2>
              <p style={{ fontSize: 17, color: '#475569', maxWidth: 500, margin: '0 auto' }}>
                The principles that guide everything we build.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ translateY: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: 16,
                    padding: 28,
                    height: '100%',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    background: 'rgba(13,148,136,0.08)',
                    border: '1px solid rgba(13,148,136,0.2)',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18,
                  }}>
                    <v.icon size={22} color="#0d9488" />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{v.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

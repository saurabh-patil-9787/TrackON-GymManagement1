import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { UserPlus, BarChart3, Bell, Rocket } from 'lucide-react';

const steps = [
  { icon: UserPlus, num: '01', title: 'Sign Up & Setup', desc: 'Create your account and set up your gym profile in under 2 minutes. No credit card required.' },
  { icon: UserPlus, num: '02', title: 'Add Members', desc: 'Import your existing members or add them one by one with our quick-add form. Bulk upload via Excel supported.' },
  { icon: BarChart3, num: '03', title: 'Track & Manage', desc: 'Track payments, manage renewals, and monitor your gym\'s health from a unified dashboard.' },
  { icon: Rocket, num: '04', title: 'Grow Your Business', desc: 'Use analytics, automated follow-ups, and WhatsApp integration to maximize renewals and revenue.' },
];

export default function HowItWorks() {
  return (
    <section className="section" style={{ background: '#f1f5f9' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span>🚀</span> How It Works
            </div>
            <h2 className="section-title">
              Up and running in <span className="gradient-text">4 simple steps</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              Start managing your gym professionally in less than 5 minutes.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ translateY: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 16,
                  padding: 28,
                  textAlign: 'center',
                  position: 'relative',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  height: '100%',
                }}
              >
                {/* Step number */}
                <div style={{
                  width: 56,
                  height: 56,
                  background: 'linear-gradient(135deg, #0d9488, #06b6d4)',
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 4px 14px rgba(13,148,136,0.25)',
                }}>
                  <span style={{ color: 'white', fontSize: 20, fontWeight: 800 }}>{step.num}</span>
                </div>

                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

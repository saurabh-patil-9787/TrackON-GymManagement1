import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { FileWarning, Clock, DollarSign } from 'lucide-react';

const painPoints = [
  {
    icon: FileWarning,
    title: 'Scattered Spreadsheets',
    description: 'Managing members across Excel files, notebooks, and WhatsApp groups makes tracking impossible. One mistake means lost revenue.',
    color: '#ef4444',
  },
  {
    icon: Clock,
    title: 'Manual Follow-Ups',
    description: 'Chasing expired members with phone calls wastes hours every day. Renewals slip through the cracks, and you can\'t scale.',
    color: '#f59e0b',
  },
  {
    icon: DollarSign,
    title: 'Revenue Leaks',
    description: 'Without clear payment tracking, pending dues pile up. You don\'t know who paid, who owes, or where your money went.',
    color: '#dc2626',
  },
];

export default function ProblemSection() {
  return (
    <section className="section" style={{ background: '#f1f5f9' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span>💡</span> The Problem
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: 14 }}>
              Running a gym shouldn't feel like this...
            </h2>
            <p style={{ fontSize: 17, color: '#475569', maxWidth: 560, margin: '0 auto' }}>
              Most gym owners waste 3-4 hours daily on admin tasks that could be automated. Sound familiar?
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }} className="problem-grid">
          {painPoints.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ translateY: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 16,
                  padding: 32,
                  height: '100%',
                  minHeight: 240,
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: point.color }} />

                <div style={{
                  width: 52,
                  height: 52,
                  background: `${point.color}10`,
                  border: `1px solid ${point.color}25`,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <point.icon size={24} color={point.color} />
                </div>

                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>
                  {point.title}
                </h3>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7, flex: 1 }}>
                  {point.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Solution hint */}
        <ScrollReveal delay={0.4}>
          <motion.div
            style={{
              marginTop: 48,
              textAlign: 'center',
              padding: '24px 32px',
              background: 'linear-gradient(135deg, rgba(13,148,136,0.06), rgba(6,182,212,0.04))',
              border: '1px solid rgba(13,148,136,0.2)',
              borderRadius: 14,
            }}
          >
            <p style={{ fontSize: 17, color: '#0f172a', fontWeight: 600 }}>
              ✨ There's a better way — <span className="gradient-text">TrackON automates all of this</span>
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

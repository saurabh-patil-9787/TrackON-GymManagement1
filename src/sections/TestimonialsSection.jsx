import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Patil',
    role: 'Owner, FitZone Gym, Pune',
    quote: 'TrackON saved me 3 hours daily. I used to track everything in notebooks — now it\'s all automated. The WhatsApp reminders alone doubled my renewal rate.',
    rating: 5,
  },
  {
    name: 'Rafik Sir',
    role: 'Owner, RJ Fitness, Rendal',
    quote: 'The dashboard gives me a complete picture of my gym in seconds. Revenue tracking and member analytics helped us grow 40% in 6 months.',
    rating: 5,
  },
  {
    name: 'Amit Joshi',
    role: 'Owner, Power House Gym, Hupari',
    quote: 'Best investment for my gym. The AI diet plan feature is a game-changer — members love the personalized plans. Support team is also very responsive.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section" style={{ background: '#f1f5f9' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span>💬</span> Testimonials
            </div>
            <h2 className="section-title">
              Loved by <span className="gradient-text">gym owners</span> across India
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              Don't take our word for it — hear from gyms using TrackON every day.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ translateY: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 16,
                  padding: 32,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  position: 'relative',
                }}
              >
                {/* Quote icon */}
                <div style={{ position: 'absolute', top: 20, right: 24, opacity: 0.08 }}>
                  <Quote size={48} color="#0d9488" />
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {/* Quote */}
                <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, flex: 1, marginBottom: 24 }}>
                  "{t.quote}"
                </p>

                {/* Author */}
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16 }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    background: 'linear-gradient(135deg, #0d9488, #06b6d4)',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 10,
                  }}>
                    {t.name.charAt(0)}
                  </div>
                  <p style={{ fontWeight: 700, color: '#0f172a', fontSize: 15, marginBottom: 2 }}>{t.name}</p>
                  <p style={{ fontSize: 13, color: '#94a3b8' }}>{t.role}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

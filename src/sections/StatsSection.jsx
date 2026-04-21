import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import { Users, Building2, TrendingUp, Star } from 'lucide-react';

const stats = [
  { icon: Building2, value: 5, suffix: '+', label: 'Gyms Onboarded', color: '#0d9488' },
  { icon: Users, value: 2500, suffix: '+', label: 'Members Managed', color: '#06b6d4' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Renewal Success', color: '#16a34a' },
  { icon: Star, value: 4.9, suffix: '', label: 'User Rating', color: '#f59e0b', decimal: true },
];

export default function StatsSection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '72px 0' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                  <s.icon size={28} color={s.color} />
                </div>
                <div style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 800, color: '#f8fafc', lineHeight: 1 }}>
                  {s.decimal ? (
                    <span>{s.value}</span>
                  ) : (
                    <AnimatedCounter target={s.value} />
                  )}
                  <span style={{ color: s.color }}>{s.suffix}</span>
                </div>
                <p style={{ fontSize: 14, color: '#94a3b8', marginTop: 8, fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

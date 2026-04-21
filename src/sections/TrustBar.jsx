import React from 'react';
import { motion } from 'framer-motion';

const cities = ['Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Surat', 'Jaipur', 'Ahmedabad', 'Kolkata', 'Nagpur', 'Lucknow'];

export default function TrustBar() {
  const doubled = [...cities, ...cities];

  return (
    <section style={{ padding: '36px 0', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
          Powering gyms across India
        </p>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #0f172a, transparent)', zIndex: 1 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #0f172a, transparent)', zIndex: 1 }} />

        <motion.div
          animate={{ x: [0, -50 * cities.length] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          style={{ display: 'flex', gap: 0, width: 'max-content' }}
        >
          {doubled.map((city, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <span style={{ fontSize: 15, color: '#64748b', fontWeight: 500, padding: '0 24px', whiteSpace: 'nowrap' }}>
                {city}
              </span>
              <span style={{ color: '#334155', fontSize: 18 }}>·</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

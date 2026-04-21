import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingCard({ name, price, description, features, highlighted = false, badge, btnLabel = 'Start Free Trial', yearlyPrice, isYearly }) {
  const displayPrice = isYearly ? yearlyPrice : price;

  return (
    <motion.div
      whileHover={{ translateY: -6 }}
      transition={{ type: 'spring', stiffness: 250 }}
      style={{
        background: highlighted ? 'linear-gradient(135deg, rgba(13,148,136,0.04), #ffffff)' : '#ffffff',
        border: highlighted ? '2px solid #0d9488' : '1px solid #e2e8f0',
        borderRadius: 20,
        padding: 36,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: highlighted ? '0 20px 50px rgba(13,148,136,0.12)' : '0 1px 3px rgba(0,0,0,0.04)',
        flex: 1,
        minWidth: 280,
        maxWidth: 400,
      }}
    >
      {/* Popular badge */}
      {badge && (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          background: 'linear-gradient(135deg, #0d9488, #06b6d4)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: 9999,
          fontSize: 11,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: 20,
        }}>
          <Zap size={10} /> {badge}
        </div>
      )}

      <div style={{ marginBottom: badge ? 0 : 20, paddingTop: badge ? 0 : 4 }}>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>{name}</h3>
        <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 24 }}>{description}</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
          <span style={{ fontSize: 13, color: '#94a3b8', paddingBottom: 8 }}>₹</span>
          <span style={{ fontSize: 48, fontWeight: 800, color: highlighted ? '#0d9488' : '#0f172a', lineHeight: 1 }}>{displayPrice.toLocaleString('en-IN')}</span>
          <span style={{ fontSize: 14, color: '#94a3b8', paddingBottom: 8 }}>/month</span>
        </div>
        {isYearly && <p style={{ fontSize: 13, color: '#16a34a', marginBottom: 0 }}>20% off — billed annually</p>}
      </div>

      <div style={{ borderTop: '1px solid #e2e8f0', margin: '24px 0', paddingTop: 24 }}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {features.map((f, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#475569' }}>
              <Check size={16} color={highlighted ? '#0d9488' : '#16a34a'} style={{ marginTop: 2, flexShrink: 0 }} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link
          to="/contact"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '14px 0',
            borderRadius: 12,
            background: highlighted ? 'linear-gradient(135deg, #0d9488, #0f766e)' : 'transparent',
            border: highlighted ? 'none' : '1.5px solid #e2e8f0',
            color: highlighted ? 'white' : '#0f172a',
            fontWeight: 600,
            fontSize: 15,
            textDecoration: 'none',
            boxShadow: highlighted ? '0 4px 14px rgba(13,148,136,0.3)' : 'none',
            transition: 'all 0.2s ease',
          }}
          className={highlighted ? '' : 'btn-ghost-link'}
        >
          {btnLabel}
        </Link>
      </motion.div>

      <style>{`
        .btn-ghost-link:hover { border-color: #0d9488 !important; color: #0d9488 !important; }
      `}</style>
    </motion.div>
  );
}

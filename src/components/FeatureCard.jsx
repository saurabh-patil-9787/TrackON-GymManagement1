import React from 'react';
import { motion } from 'framer-motion';
import { staggerItem } from './ScrollReveal';

export default function FeatureCard({ icon: Icon, title, description, accentColor = '#0d9488', emoji }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ translateY: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: 16,
        padding: 28,
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
      className="feature-card"
    >
      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          background: `${accentColor}12`,
          border: `1px solid ${accentColor}30`,
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        className="feature-icon"
      >
        {Icon && <Icon size={24} color={accentColor} />}
        {emoji && <span style={{ fontSize: 22 }}>{emoji}</span>}
      </div>

      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 10, lineHeight: 1.3 }}>
        {title}
      </h3>
      <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7 }}>
        {description}
      </p>

      <style>{`
        .feature-card:hover {
          border-color: rgba(13,148,136,0.3) !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08) !important;
        }
        .feature-card:hover .feature-icon {
          transform: rotate(10deg);
          box-shadow: 0 0 20px rgba(13,148,136,0.2);
        }
      `}</style>
    </motion.div>
  );
}

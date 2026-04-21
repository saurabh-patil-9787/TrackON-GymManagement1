import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function CTABanner() {
  return (
    <section style={{ padding: '0 0 100px' }}>
      <div className="container">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 50%, #115e59 100%)',
              borderRadius: 24,
              padding: 'clamp(40px, 6vw, 72px) clamp(24px, 4vw, 56px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(13,148,136,0.3)',
            }}
          >
            {/* Pattern overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
                padding: '6px 14px',
                borderRadius: 9999,
                fontSize: 13,
                fontWeight: 600,
                color: 'white',
                marginBottom: 24,
              }}>
                <Sparkles size={14} /> Limited Time Offer
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'white', lineHeight: 1.15, marginBottom: 16 }}>
                Ready to transform your gym?
              </h2>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.6 }}>
                Join 5+ gym owners who manage their business smarter with TrackON. Start your 1 month free trial today.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '16px 36px',
                      background: 'white',
                      color: '#0f766e',
                      borderRadius: 12,
                      fontWeight: 700,
                      fontSize: 16,
                      textDecoration: 'none',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Start Free Trial <ArrowRight size={18} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/pricing"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '16px 36px',
                      background: 'rgba(255,255,255,0.12)',
                      border: '1.5px solid rgba(255,255,255,0.3)',
                      color: 'white',
                      borderRadius: 12,
                      fontWeight: 600,
                      fontSize: 16,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    View Pricing
                  </Link>
                </motion.div>
              </div>

              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 20 }}>
                No credit card required · Setup in 2 minutes · Cancel anytime
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

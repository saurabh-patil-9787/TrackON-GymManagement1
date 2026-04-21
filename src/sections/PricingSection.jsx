import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import PricingCard from '../components/PricingCard';

const allFeatures = [
  'Unlimited Members',
  'Payment Tracking & Dues',
  'WhatsApp Reminders',
  'Smart Dashboard & Analytics',
  'AI Diet Plan Generator',
  'Member Follow-Up Automation',
  'Excel Export & Reports',
  'Priority Support',
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span>💰</span> Simple Pricing
            </div>
            <h2 className="section-title">
              One plan, <span className="gradient-text">all features</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              No hidden fees. No feature gating. Get everything from day one.
            </p>

            {/* Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 32 }}>
              <span style={{ fontSize: 15, fontWeight: isYearly ? 500 : 700, color: isYearly ? '#94a3b8' : '#0f172a', transition: 'all 0.2s' }}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                style={{
                  width: 56,
                  height: 30,
                  borderRadius: 15,
                  border: 'none',
                  background: isYearly ? '#0d9488' : '#cbd5e1',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'background 0.3s ease',
                  padding: 0,
                }}
                aria-label="Toggle yearly pricing"
              >
                <div style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  background: 'white',
                  position: 'absolute',
                  top: 3,
                  left: isYearly ? 29 : 3,
                  transition: 'left 0.3s ease',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                }} />
              </button>
              <span style={{ fontSize: 15, fontWeight: isYearly ? 700 : 500, color: isYearly ? '#0f172a' : '#94a3b8', transition: 'all 0.2s' }}>
                Yearly
                <span style={{ background: '#dcfce7', color: '#16a34a', padding: '2px 8px', borderRadius: 9999, fontSize: 11, fontWeight: 700, marginLeft: 8 }}>
                  SAVE 20%
                </span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <PricingCard
              name="Monthly"
              price={249}
              yearlyPrice={249}
              description="Pay as you go, cancel anytime"
              features={allFeatures}
              isYearly={false}
              btnLabel="Start 1 Month Free Trial"
            />
            <PricingCard
              name="Yearly"
              price={2400}
              yearlyPrice={200}
              description="Best value — save ₹588/year"
              features={allFeatures}
              highlighted
              badge="Best Value"
              isYearly={isYearly || true}
              btnLabel="Start 1 Month Free Trial"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

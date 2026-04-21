import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';
import PricingCard from '../components/PricingCard';
import FAQSection from '../sections/FAQSection';
import CTABanner from '../sections/CTABanner';
import { Check, X } from 'lucide-react';

const allFeatures = [
  'Unlimited Members',
  'Payment & Dues Tracking',
  'WhatsApp Reminders',
  'Smart Dashboard & Analytics',
  'AI Diet Plan Generator',
  'Follow-Up Automation',
  'Excel Export & Reports',
  'Revenue Analytics',
  'Priority Support',
  'Custom Gym Profile',
];

const comparisonFeatures = [
  { name: 'Unlimited Members', monthly: true, yearly: true },
  { name: 'Payment Tracking', monthly: true, yearly: true },
  { name: 'WhatsApp Integration', monthly: true, yearly: true },
  { name: 'Smart Dashboard', monthly: true, yearly: true },
  { name: 'AI Diet Plans', monthly: true, yearly: true },
  { name: 'Follow-Up Automation', monthly: true, yearly: true },
  { name: 'Excel Export', monthly: true, yearly: true },
  { name: 'Revenue Analytics', monthly: true, yearly: true },
  { name: 'Priority Support', monthly: true, yearly: true },
  { name: 'Save 20%', monthly: false, yearly: true },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <Helmet>
        <title>Pricing — TrackON Gym Management Software</title>
        <meta name="description" content="Simple, transparent pricing for TrackON. ₹249/month or ₹2,400/year. All features included. 1 month free trial." />
      </Helmet>

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 60, background: '#f8fafc' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span>💰</span> Pricing
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, marginBottom: 16 }}>
              Simple, <span className="gradient-text">transparent</span> pricing
            </h1>
            <p style={{ fontSize: 18, color: '#475569', maxWidth: 520, margin: '0 auto 36px' }}>
              One plan with all features. Choose monthly or yearly — save 20% on the annual plan.
            </p>

            {/* Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <span style={{ fontSize: 15, fontWeight: isYearly ? 500 : 700, color: isYearly ? '#94a3b8' : '#0f172a' }}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                style={{
                  width: 56, height: 30, borderRadius: 15, border: 'none',
                  background: isYearly ? '#0d9488' : '#cbd5e1', cursor: 'pointer',
                  position: 'relative', padding: 0,
                }}
                aria-label="Toggle yearly"
              >
                <div style={{ width: 24, height: 24, borderRadius: 12, background: 'white', position: 'absolute', top: 3, left: isYearly ? 29 : 3, transition: 'left 0.3s', boxShadow: '0 2px 5px rgba(0,0,0,0.15)' }} />
              </button>
              <span style={{ fontSize: 15, fontWeight: isYearly ? 700 : 500, color: isYearly ? '#0f172a' : '#94a3b8' }}>
                Yearly
                <span style={{ background: '#dcfce7', color: '#16a34a', padding: '2px 8px', borderRadius: 9999, fontSize: 11, fontWeight: 700, marginLeft: 8 }}>SAVE 20%</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cards */}
      <section style={{ paddingBottom: 80, background: '#f8fafc' }}>
        <div className="container">
          <ScrollReveal>
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
                isYearly={true}
                btnLabel="Start 1 Month Free Trial"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section" style={{ background: '#f1f5f9' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>
                Feature comparison
              </h2>
              <p style={{ fontSize: 16, color: '#475569' }}>Both plans include all features. Yearly just saves you more.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div style={{ background: 'white', borderRadius: 16, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px', padding: '16px 24px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <span style={{ fontWeight: 700, color: '#0f172a', fontSize: 14 }}>Feature</span>
                <span style={{ fontWeight: 700, color: '#0f172a', fontSize: 14, textAlign: 'center' }}>Monthly</span>
                <span style={{ fontWeight: 700, color: '#0d9488', fontSize: 14, textAlign: 'center' }}>Yearly</span>
              </div>
              {comparisonFeatures.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px', padding: '14px 24px', borderBottom: i < comparisonFeatures.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <span style={{ fontSize: 14, color: '#475569' }}>{f.name}</span>
                  <span style={{ textAlign: 'center' }}>
                    {f.monthly ? <Check size={16} color="#16a34a" /> : <X size={16} color="#cbd5e1" />}
                  </span>
                  <span style={{ textAlign: 'center' }}>
                    {f.yearly ? <Check size={16} color="#0d9488" /> : <X size={16} color="#cbd5e1" />}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQSection />
      <CTABanner />
    </>
  );
}

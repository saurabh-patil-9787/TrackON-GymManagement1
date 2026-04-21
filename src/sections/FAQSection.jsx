import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes! You get a full 1 month free trial with access to all features. No credit card required to start.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major payment methods through Razorpay — UPI, credit/debit cards, net banking, and wallets.' },
  { q: 'Can I switch from monthly to yearly?', a: 'Absolutely! You can upgrade from monthly to yearly anytime from your dashboard. The remaining balance is adjusted automatically.' },
  { q: 'Is my data secure?', a: 'Yes. We use industry-standard encryption, secure databases, and regular backups. Each gym\'s data is completely isolated and private.' },
  { q: 'Do you support WhatsApp Business API?', a: 'We integrate directly with WhatsApp for sending reminders, birthday wishes, and announcements. One-click messaging from the member list.' },
  { q: 'Can I export my data?', a: 'Yes! You can export member lists, payment records, and reports to Excel anytime with a single click.' },
  { q: 'What if I need help?', a: 'Our support team is available via WhatsApp and email, Monday to Saturday, 9 AM – 7 PM IST. We typically respond within 30 minutes.' },
];

function FAQItem({ q, a, open, onClick }) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: `1px solid ${open ? 'rgba(13,148,136,0.3)' : '#e2e8f0'}`,
        borderRadius: 14,
        overflow: 'hidden',
        transition: 'all 0.2s ease',
        boxShadow: open ? '0 4px 15px rgba(0,0,0,0.06)' : '0 1px 3px rgba(0,0,0,0.02)',
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: open ? '#0d9488' : '#0f172a', transition: 'color 0.2s' }}>
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={18} color={open ? '#0d9488' : '#94a3b8'} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ padding: '0 24px 18px', fontSize: 15, color: '#64748b', lineHeight: 1.7 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section" id="faq" style={{ background: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span>❓</span> FAQ
            </div>
            <h2 className="section-title">
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem
                q={faq.q}
                a={faq.a}
                open={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

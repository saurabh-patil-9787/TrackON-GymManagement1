import React from 'react';
import ScrollReveal, { staggerContainer, staggerItem } from '../components/ScrollReveal';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import { Users, CreditCard, MessageCircle, LayoutDashboard, Utensils, BarChart3, Bell, Download } from 'lucide-react';

const features = [
  { icon: Users, title: 'Member Management', description: 'Add, track, and manage all members with smart search, filters, and profile cards.' },
  { icon: CreditCard, title: 'Payment Tracking', description: 'Record dues, track pending payments, and never miss a payment with auto-reminders.' },
  { icon: MessageCircle, title: 'WhatsApp Integration', description: 'Send renewal reminders, birthday wishes, and announcements directly via WhatsApp.' },
  { icon: LayoutDashboard, title: 'Smart Dashboard', description: 'Get real-time stats on active members, revenue, expiring memberships, and trends.' },
  { icon: Utensils, title: 'AI Diet Plans', description: 'Generate personalized diet and workout plans for members powered by AI.' },
  { icon: BarChart3, title: 'Revenue Analytics', description: 'Detailed charts showing monthly revenue, collection rates, and growth patterns.' },
  { icon: Bell, title: 'Auto Follow-Ups', description: 'Automated reminders for expiring memberships and pending follow-ups — zero manual effort.' },
  { icon: Download, title: 'Excel Export', description: 'Export member lists, payment data, and reports to Excel with one click.' },
];

export default function FeaturesGrid() {
  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span>⚡</span> Features
            </div>
            <h2 className="section-title" style={{ marginBottom: 14 }}>
              Everything you need to <span className="gradient-text">run your gym</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From member management to AI diet plans — TrackON gives you the complete toolkit to grow your gym business.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

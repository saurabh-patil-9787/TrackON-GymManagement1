import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { BrowserScreenshot, MobileScreenshots } from '../components/ScreenshotFrame';

import dashboardImg from '../assets/screenshots/dashboard_desktop.png';
import membersImg from '../assets/screenshots/members_desktop.png';
import followupImg from '../assets/screenshots/followup_desktop.png';
import dashboardMobileImg from '../assets/screenshots/dashboard_mobile.png';
import revenueMobileImg from '../assets/screenshots/mobile revenue page.jpeg';

const showcases = [
  {
    title: 'Powerful Dashboard',
    subtitle: 'Everything at a glance',
    description: 'See active members, revenue stats, today\'s follow-ups, and expiring memberships — all on one clean dashboard. No more switching between apps.',
    image: dashboardImg,
    type: 'desktop',
    tags: ['Real-time Stats', 'Quick Actions', 'Today\'s Tasks'],
  },
  {
    title: 'Member Management',
    subtitle: 'Complete member profiles',
    description: 'Add members in seconds, track their payment history, membership status, and personal details. Smart search and filters make finding anyone instant.',
    image: membersImg,
    type: 'desktop',
    tags: ['Smart Search', 'Payment History', 'Status Tracking'],
    reverse: true,
  },
  {
    title: 'Mobile Ready',
    subtitle: 'Manage from anywhere',
    description: 'Access your dashboard, send WhatsApp reminders, and track payments right from your phone. TrackON works beautifully on every screen size.',
    image: dashboardMobileImg,
    image2: revenueMobileImg,
    type: 'mobile',
    tags: ['Responsive', 'WhatsApp Ready', 'On-the-Go'],
  },
  {
    title: 'Smart Follow-Ups',
    subtitle: 'Never miss a renewal',
    description: 'Automated follow-up lists show you every member who needs attention. One-click WhatsApp messages make renewals effortless.',
    image: followupImg,
    type: 'desktop',
    tags: ['Auto Reminders', 'WhatsApp', 'One-Click'],
    reverse: true,
  },
];

export default function ScreenshotShowcase() {
  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span>📱</span> Product Tour
            </div>
            <h2 className="section-title">
              See <span className="gradient-text">TrackON</span> in action
            </h2>
            <p className="section-subtitle" style={{ margin: '12px auto 0' }}>
              Built to be intuitive from day one. Here's what you get.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          {showcases.map((item, i) => (
            <ScrollReveal key={i} delay={0.1}>
              <div className={`feature-row ${item.reverse ? 'screenshot-left' : ''}`}>
                {/* Text */}
                <div className="text-column">
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                    {item.subtitle}
                  </p>
                  <h3 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, color: '#0f172a', marginBottom: 14, lineHeight: 1.2 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.7, marginBottom: 24 }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {item.tags.map(tag => (
                      <span key={tag} style={{
                        padding: '5px 12px',
                        background: 'rgba(13,148,136,0.08)',
                        border: '1px solid rgba(13,148,136,0.2)',
                        borderRadius: 9999,
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#0d9488',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                {item.type === 'desktop' ? (
                  <BrowserScreenshot
                    src={item.image}
                    alt={item.title}
                    direction={item.reverse ? 'left' : 'right'}
                  />
                ) : (
                  <MobileScreenshots
                    phone1src={item.image}
                    phone2src={item.image2}
                  />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


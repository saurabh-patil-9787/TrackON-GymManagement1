import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrowserScreenshot } from '../components/ScreenshotFrame';
import dashboardImg from '../assets/screenshots/dashboard_desktop.png';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 80 }}>
      {/* Subtle decorative orbs */}
      <div style={{ position: 'absolute', width: 500, height: 500, background: 'radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)', top: -100, right: -100, borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)', bottom: -50, left: -100, borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">

          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge" style={{ marginBottom: 20 }}>
              <Zap size={14} /> Built for Indian Gyms
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, color: '#0f172a', marginBottom: 20, letterSpacing: '-0.02em' }}>
              Run Your Gym{' '}
              <span className="gradient-text">Without Registers</span>
            </h1>

            <p style={{ fontSize: 18, color: '#475569', lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
              Register me likh likh ke thak gaye?<br/>
              Members, fees aur renewals ab mobile par easily manage karo — TrackON ke saath.<br/>
              Small town aur village gym owners ke liye simple digital solution.
            </p>

            {/* CTA */}
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Start Free Trial <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/features" className="btn btn-ghost btn-lg">
                  See Features
                </Link>
              </motion.div>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
              {[
                { icon: Shield, text: '1 Month Free Trial' },
                { icon: Users, text: 'Trusted by 5+ Gyms' },
                { icon: Star, text: '4.9/5 Rating' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#64748b', fontWeight: 500 }}>
                  <Icon size={15} color="#0d9488" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Screenshot */}
          <div>
            <BrowserScreenshot
              src={dashboardImg}
              alt="TrackON Dashboard Overview"
              direction="right"
              isHero={true}
            />
          </div>
        </div>
      </div>


    </section>
  );
}

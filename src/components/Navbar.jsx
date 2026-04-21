import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 40,
        background: 'linear-gradient(90deg, #0d9488, #0f766e)',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 600,
        zIndex: 1001,
        letterSpacing: '0.02em',
      }}>
        🎉 Special Offer: Get 1 Month Completely Free! <span style={{ marginLeft: 8, opacity: 0.85, fontWeight: 500 }} className="desktop-only-text">No credit card required.</span>
      </div>

      <motion.nav
        style={{
          position: 'fixed',
          top: 40,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 10px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ width: 38, height: 38, background: 'linear-gradient(135deg, #0d9488, #06b6d4)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(13,148,136,0.3)' }}
            >
              <Dumbbell size={20} color="white" />
            </motion.div>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
              Track<span style={{ color: '#0d9488' }}>ON</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                style={({ isActive }) => ({
                  padding: '8px 16px',
                  borderRadius: 8,
                  color: isActive ? '#0d9488' : '#475569',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: 15,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                })}
                className="nav-link"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="desktop-nav">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: 14 }}>
                Get Started Free <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#0f172a', display: 'none' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 112,
              left: 0,
              right: 0,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid #e2e8f0',
              zIndex: 999,
              padding: '20px 24px 28px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  style={({ isActive }) => ({
                    padding: '14px 16px',
                    borderRadius: 10,
                    color: isActive ? '#0d9488' : '#475569',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: 16,
                    textDecoration: 'none',
                    background: isActive ? 'rgba(13,148,136,0.06)' : 'transparent',
                    borderLeft: isActive ? '3px solid #0d9488' : '3px solid transparent',
                    transition: 'all 0.2s ease',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
              <div style={{ marginTop: 12 }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Get Started Free <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .desktop-only-text { display: none !important; }
        }
        .nav-link:hover { color: #0d9488 !important; background: rgba(13,148,136,0.05); }
      `}</style>
    </>
  );
}

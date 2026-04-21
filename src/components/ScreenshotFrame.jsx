import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useWindowSize } from '../hooks/useWindowSize';

export function BrowserScreenshot({ 
  src, 
  alt, 
  direction = 'right', 
  label, 
  isHero = false 
}) {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.15
  });

  const { isMobile } = useWindowSize();

  const desktopVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === 'right' ? 60 : -60,
      scale: 0.96
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.75, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const mobileVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.94
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.65, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const heroProps = {
    initial: { opacity: 0, y: 40, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.85, delay: 0.35, ease: 'easeOut' }
  };

  if (isHero) {
    return (
      <motion.div
        className="screenshot-column"
        {...heroProps}
      >
        <div className="screenshot-glow" />
        {label && (
          <span className="screenshot-badge">{label}</span>
        )}
        <div className="chrome-frame hero-chrome-frame hero-screenshot-wrap">
          <div className="chrome-bar">
            <div className="chrome-dot" style={{ background: '#ff5f57' }} />
            <div className="chrome-dot" style={{ background: '#febc2e' }} />
            <div className="chrome-dot" style={{ background: '#28c840' }} />
            <div className="chrome-url">app.trackon.in</div>
          </div>
          <img
            src={src}
            alt={alt}
            className="chrome-screenshot"
            loading="lazy"
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="screenshot-column"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={isMobile ? mobileVariants : desktopVariants}
    >
      {/* Background glow */}
      <div className="screenshot-glow" />

      {/* Feature badge */}
      {label && (
        <motion.span
          className="screenshot-badge"
          initial={{ opacity: 0, y: -8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ display: 'inline-block', marginBottom: '12px' }}
        >
          {label}
        </motion.span>
      )}

      {/* Chrome frame */}
      <div className="chrome-frame">
        <div className="chrome-bar">
          <div className="chrome-dot" style={{ background: '#ff5f57' }} />
          <div className="chrome-dot" style={{ background: '#febc2e' }} />
          <div className="chrome-dot" style={{ background: '#28c840' }} />
          <div className="chrome-url">app.trackon.in</div>
        </div>
        <img
          src={src}
          alt={alt}
          className="chrome-screenshot"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

export function MobileScreenshots({ phone1src, phone2src }) {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.15
  });

  const { isMobile } = useWindowSize();

  return (
    <motion.div
      ref={ref}
      className="screenshot-column"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="screenshot-glow" 
           style={{ width: '80%', height: '70%' }} />

      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'relative',
        minHeight: isMobile ? '380px' : '520px',
        paddingTop: '40px',
      }}>

        {/* Phone 1 */}
        <div
          className="phone-frame"
          style={{
            width: isMobile ? '48%' : '260px',
            maxWidth: isMobile ? '220px' : '260px',
            animation: 'floatPhone1 5s ease-in-out infinite',
            zIndex: 2,
            position: 'relative',
          }}
        >
          <img 
            src={phone1src} 
            alt="TrackON mobile dashboard"
            style={{ width: '100%', height: 'auto', display: 'block',
                     borderRadius: '32px' }}
          />
        </div>

        {/* Phone 2 */}
        <div
          className="phone-frame"
          style={{
            width: isMobile ? '48%' : '260px',
            maxWidth: isMobile ? '220px' : '260px',
            marginLeft: isMobile ? '-24px' : '-40px',
            marginTop: isMobile ? '-24px' : '-40px',
            animation: 'floatPhone2 5.5s ease-in-out infinite 1s',
            zIndex: 1,
            position: 'relative',
          }}
        >
          <img 
            src={phone2src} 
            alt="TrackON mobile revenue"
            style={{ width: '100%', height: 'auto', display: 'block',
                     borderRadius: '32px' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default BrowserScreenshot;

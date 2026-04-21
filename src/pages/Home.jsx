import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../sections/HeroSection';
import ProblemSection from '../sections/ProblemSection';
import FeaturesGrid from '../sections/FeaturesGrid';
import ScreenshotShowcase from '../sections/ScreenshotShowcase';
import HowItWorks from '../sections/HowItWorks';
import StatsSection from '../sections/StatsSection';
import PricingSection from '../sections/PricingSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FAQSection from '../sections/FAQSection';
import CTABanner from '../sections/CTABanner';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>TrackON — Smart Gym Management Software for Indian Gyms</title>
        <meta name="description" content="TrackON helps gym owners manage members, track payments, send WhatsApp reminders, and grow revenue. 1 month free trial." />
      </Helmet>
      <HeroSection />
      <ProblemSection />
      <FeaturesGrid />
      <ScreenshotShowcase />
      <HowItWorks />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}

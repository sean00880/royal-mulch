import React from 'react';
import FooterTwo from '../../layout/footers/footer';
import HeaderTwo from '../../layout/headers/headertwo';
import BrandSliderTwo from '../elements/brand/brand-slider-two';
import HeroSliderTwo from '../elements/hero/hero-slider-two';
import PortfolioSlider from '../elements/portfolio/portfolio-slider';
import TestimonialSliderTwo from '../elements/testimonial/testimonial-slider-two';
import AboutSectionTwo from '../home-3/about-section-three';
import BlogSectionTwo from './blog-section-two';
import ContactSection from './contact-section';
import FaqSectionTwo from './faq-section-two';
import NewsletterSection from './newsletter-section';
import ServiceSectionTwo from './service-section-two';


const index = () => {
  return (
    <main>
      <HeaderTwo />
      <HeroSliderTwo />
      <AboutSectionTwo/>
      <ServiceSectionTwo />
      <PortfolioSlider />    
      <FaqSectionTwo />
      <BlogSectionTwo />
      <ContactSection />
      <FooterTwo />
    </main>
  );
};

export default index;
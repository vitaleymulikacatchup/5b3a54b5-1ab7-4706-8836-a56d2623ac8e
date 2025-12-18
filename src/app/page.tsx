"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardEleven from '@/components/sections/feature/FeatureCardEleven';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumSizeExtraLargeTitles"
      background="circleGradient"
      cardStyle="gradient-subtle"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Order Now", href: "contact" }}
          brandName="Mureli"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Mureli"
          description="Premium coffee crafted with passion. Your daily escape in every cup."
          buttons={[
            { text: "Explore Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072256607-48o3q63l.jpg"
          imageAlt="Premium coffee cup"
          showDimOverlay={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Mureli brings" },
            { type: "text", content: "authentic coffee culture to your neighborhood" }
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Our Story", href: "#" }
          ]}
        />
      </div>
      
      <div id="menu" data-section="menu">
        <FeatureCardEleven
          title="Our Signature Drinks"
          description="Handpicked blends and carefully prepared drinks that define the Mureli experience"
          features={[
            {
              id: 1,
              title: "Espresso Classic",
              description: "Rich, bold espresso shots from premium single-origin beans. The foundation of all our drinks.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072258848-gplqn194.jpg",
              imageAlt: "Espresso shot"
            },
            {
              id: 2,
              title: "Cappuccino Perfetto",
              description: "Silky microfoam meets perfect espresso. Our baristas craft each cup with precision and care.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072259772-irg1vrov.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: 3,
              title: "Pastry Pairing",
              description: "Fresh baked pastries and croissants from local bakeries. The perfect complement to your morning coffee.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072260886-pxvw9bd0.jpg",
              imageAlt: "Fresh pastry and croissant"
            }
          ]}
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          usePrimaryButtonImage={false}
          tag="Menu"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              handle: "@sarahchen",
              testimonial: "Mureli is my happy place. The coffee is exceptional and the atmosphere makes me want to stay all day.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072262056-5fc6gm95.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              handle: "@marcusj",
              testimonial: "Best cappuccino in town. The baristas really know their craft. I've been coming here every morning.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072262868-xhcc7k2g.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              handle: "@elenarod",
              testimonial: "Love the cozy vibe and quality products. Mureli feels like home. Highly recommended!",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072263646-sc25uolx.jpg",
              imageAlt: "Elena Rodriguez"
            },
            {
              id: "4",
              name: "James Liu",
              handle: "@jamesliu",
              testimonial: "The attention to detail in every cup shows. This is not just coffee, it's an experience.",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072264557-nwn1qdme.jpg",
              imageAlt: "James Liu"
            }
          ]}
          showRating={true}
          animationType="slide-up"
          containerStyle="default"
          title="What Our Customers Say"
          description="Join hundreds of coffee lovers who have made Mureli their daily destination"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="customers-say" data-section="customers-say" className="relative">
        <div className="w-full max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col items-center gap-8">
            <div className="inline-block px-6 py-3 bg-[var(--card)] text-[var(--foreground)] rounded-full shadow-lg border border-[var(--border)] backdrop-blur-sm">
              <span className="text-sm font-semibold">Join 2,000+ coffee enthusiasts</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--card)] shadow-md hover:shadow-lg transition-shadow">
                <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072262056-5fc6gm95.jpg" alt="Customer 1" className="w-full h-full object-cover" />
              </div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--card)] shadow-md hover:shadow-lg transition-shadow">
                <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072262868-xhcc7k2g.jpg" alt="Customer 2" className="w-full h-full object-cover" />
              </div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--card)] shadow-md hover:shadow-lg transition-shadow">
                <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072263646-sc25uolx.jpg" alt="Customer 3" className="w-full h-full object-cover" />
              </div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--card)] shadow-md hover:shadow-lg transition-shadow">
                <img src="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766072264557-nwn1qdme.jpg" alt="Customer 4" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <p className="text-center text-[var(--foreground)]/75 text-sm font-medium mt-4">
              Our valued community members enjoying premium Mureli coffee every day
            </p>
          </div>
        </div>
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Get Updates on New Blends & Events"
          description="Subscribe to our newsletter for exclusive coffee recipes, brewing tips, and special promotions."
          useInvertedBackground="noInvert"
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Mureli"
          columns={[
            {
              title: "Coffee",
              items: [
                { label: "Our Blends", href: "#" },
                { label: "Single Origins", href: "#" },
                { label: "Brewing Guide", href: "#" }
              ]
            },
            {
              title: "Visit Us",
              items: [
                { label: "Locations", href: "#" },
                { label: "Hours", href: "#" },
                { label: "Contact", href: "#" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Blog", href: "#" },
                { label: "Events", href: "#" },
                { label: "Careers", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
          copyrightText="© Mureli Coffee Shop, 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}

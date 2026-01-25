"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { heroSectionContent } from "@/lib/data"
import { getIcon } from "@/lib/icon-map"

interface ParticleStyle {
  left?: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
  transform?: string;
  opacity?: number;
}

interface Particle {
  type: 'leaf' | 'grass' | 'wind' | 'cloud';
  style: ParticleStyle;
  className?: string;
}

function WindyDayBackground() {
  const [particles, setParticles] = React.useState<Particle[]>([]);

  React.useEffect(() => {
    const items: Particle[] = [];
    const leafClasses = ['blowing-leaf-1', 'blowing-leaf-2', 'blowing-leaf-3'];
    // Leaves
    for (let i = 0; i < 30; i++) {
      items.push({
        type: 'leaf',
        className: leafClasses[Math.floor(Math.random() * leafClasses.length)],
        style: {
          left: `${Math.random() * -15 - 5}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${Math.random() * 10 + 10}s`, // More speed variation
          transform: `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 6 - 3}deg)`, // Scale and slight angle
          opacity: Math.random() * 0.5 + 0.25, // Transparency between 25% and 75%
        }
      });
    }
    // Grass clippings
    for (let i = 0; i < 20; i++) {
      items.push({
        type: 'grass',
        style: {
          left: `${Math.random() * -15 - 5}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${Math.random() * 10 + 8}s`, // More speed variation
        }
      });
    }
    // Wind lines
    for (let i = 0; i < 10; i++) {
      items.push({
        type: 'wind',
        style: {
          left: `${Math.random() * -15 - 5}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${Math.random() * 5 + 7}s`, // More speed variation
        }
      });
    }
    // Wind Clouds
    for (let i = 0; i < 5; i++) {
      items.push({
          type: 'cloud',
          style: {
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * -20 - 10}%`, // Start further off-screen
              transform: `scale(${Math.random() * 0.6 + 0.7})`, // Varied sizes
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 15 + 15}s`, // Slower, more majestic movement
          }
      });
    }
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => {
        if (p.type === 'leaf') {
          return <div key={i} className={p.className} style={p.style as React.CSSProperties} />;
        }
        if (p.type === 'grass') {
          return <div key={i} className="blowing-grass" style={p.style as React.CSSProperties} />;
        }
        if (p.type === 'wind') {
          return <div key={i} className="wind-line" style={p.style as React.CSSProperties} />;
        }
        if (p.type === 'cloud') {
          return <div key={i} className="wind-cloud" style={p.style as React.CSSProperties} />;
        }
        return null;
      })}
    </div>
  );
}

export function HeroSection() {
  // Reference to the main container for scroll-based animations.
  const containerRef = React.useRef<HTMLDivElement>(null)
  // useScroll hook tracks the scroll progress of the container.
  // offset: ["start start", "end start"] means the scroll progress is 0 when the top of the container hits the top of the viewport,
  // and 1 when the bottom of the container hits the top of the viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // useTransform maps the scrollYProgress (0 to 1) to other values for animation.
  // 'y' transforms scroll progress to a vertical translation, creating a parallax effect.
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  // 'opacity' transforms scroll progress to an opacity value, making elements fade out.
  // The fade starts when the section is approximately 60% scrolled and completes by the end of the scroll target.
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0])

  return (
    // Main section for the hero component, covering the full viewport height.
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background water-pattern"
    >
      {/* Renders the animated background elements. */}
      <WindyDayBackground />

      {/* Main content wrapper, applies parallax 'y' and fade 'opacity' animations. */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main Hero Content - Title, subtitle, and primary/secondary call-to-action buttons. */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Initial animation state (hidden, slightly below)
            animate={{ opacity: 1, y: 0 }} // Animation target (visible, at original position)
            transition={{ duration: 0.6, delay: 0.1 }} // Animation properties
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <Image
              src="/branding/logo-transparent.png"
              alt="Cale's Lawncare Logo"
              width={500} // Increased width for better quality on larger screens
              height={300} // Increased height for better quality on larger screens
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-auto"
              priority
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {heroSectionContent.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA Button */}
            <Button asChild size="lg" className="text-base px-8 glow-blue">
              <Link href={heroSectionContent.buttons.primary.href}>
                {heroSectionContent.buttons.primary.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            {/* Secondary CTA Button */}
            <Button asChild variant="outline" size="lg" className="text-base px-8 glass">
              <Link href={heroSectionContent.buttons.secondary.href}>
                {heroSectionContent.buttons.secondary.text}
              </Link>
            </Button>
          </motion.div>


        </div>

        {/* Hero Cards Grid - Displays feature/service highlights in a grid layout. */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {heroSectionContent.heroCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }} // Cards initially hidden and slightly below their final position.
              animate={{ opacity: 1, y: 0 }} // Animate to full opacity and correct vertical position.
              transition={{ duration: 0.6, delay: 0.4 + card.delay }} // Staggered animation delay.
              whileHover={{ y: -8, scale: 1.02 }} // Interactive hover effect.
              className="group relative"
            >
              {/* Decorative background blur on hover. */}
              <div className={`
                absolute inset-0 rounded-2xl bg-primary/20 opacity-0
                group-hover:opacity-100 blur-xl transition-opacity duration-500
              `} />
              {/* Card content wrapper. */}
              <div className={`
                relative h-full p-8 rounded-2xl
                ${card.cardClass}
                overflow-hidden
                ${index === 1 ? 'md:-mt-4 md:mb-4' : ''} // Styling adjustment for the middle card.
              `}>
                {/* Shimmer Effect for visual flair on hover. */}
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Individual Card Content */}
                <div className="relative z-10">
                  {/* Card Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl bg-primary/20
                    flex items-center justify-center mb-6
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    {(() => {
                      const Icon = getIcon(card.icon);
                      return Icon ? <Icon className="w-7 h-7 text-primary" /> : null;
                    })()}
                  </div>

                  {/* Card Title and Subtitle */}
                  <p className="text-sm text-primary font-medium mb-2">{card.subtitle}</p>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-6">{card.description}</p>

                  {/* Call to action within the card. */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{card.stats}</span>
                  </div>
                </div>

                {/* Decorative background elements within the card. */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { AboutSection } from "@/components/sections/about"
import { ShowcaseSection } from "@/components/sections/showcase"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { siteConfig, companyInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: `${companyInfo.name} | Professional LawnCare Services`,
  description: `${companyInfo.name} provides professional lawn care services in Macomb and Rushville, IL. ${companyInfo.tagline}. Get a free quote today!`,
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {siteConfig.homepageSections.hero.enabled && <HeroSection />}
        {siteConfig.homepageSections.services.enabled && <ServicesSection />}
        {siteConfig.homepageSections.about.enabled && <AboutSection />}
        {siteConfig.homepageSections.showcase.enabled && <ShowcaseSection />}
        {siteConfig.homepageSections.testimonials.enabled && <TestimonialsSection />}
        {siteConfig.homepageSections.contact.enabled && <ContactSection />}
      </main>
      <Footer />
    </>
  )
}

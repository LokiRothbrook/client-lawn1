"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { callToActionSectionContent, companyInfo } from "@/lib/data"

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 water-pattern" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-primary shadow-2xl shadow-primary/30 overflow-hidden"
        >
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
          {/* Blurred accent glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-accent/20 blur-[60px]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-foreground">
              {callToActionSectionContent.title}
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              {callToActionSectionContent.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="text-base border-transparent text-primary-foreground shadow-lg bg-white/30 hover:border-white hover:shadow-xl">
                <motion.a
                  href={callToActionSectionContent.primaryButton.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {callToActionSectionContent.primaryButton.text}
                </motion.a>
              </Button>
              <Button asChild size="lg" className="text-base border-transparent text-primary-foreground shadow-lg bg-white/30 hover:border-white hover:shadow-xl">
                <motion.a
                  href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                  </motion.div>
                  Call Now
                </motion.a>
              </Button>
              <Button asChild size="lg" className="text-base border-transparent text-primary-foreground shadow-lg bg-white/30 hover:border-white hover:shadow-xl">
                <motion.a
                  href={callToActionSectionContent.secondaryButton.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {callToActionSectionContent.secondaryButton.text}
                </motion.a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

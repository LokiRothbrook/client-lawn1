// lib/data/seo.ts

/**
 * Centralized SEO configuration for page-level metadata.
 *
 * Pages that already pull their SEO metadata from their own data files
 * (about, gallery, pricing, faq) are NOT included here — those stay
 * in their respective data files.
 *
 * This file covers pages that previously had hardcoded metadata:
 * - Homepage
 * - Services index
 * - Privacy Policy
 * - Terms of Service
 *
 * === How to Customize ===
 * - Update titles and descriptions for each page.
 * - The `titleSuffix` is used in the root layout title template.
 * - `defaultDescription` is the site-wide fallback used in the root layout.
 */

import { companyInfo } from "./global";

// ============================================================================
// Site-wide SEO Defaults
// ============================================================================

export const seoConfig = {
  titleSuffix: "Professional Lawn Care Services",

  defaultDescription: `Welcome to ${companyInfo.name}. ${companyInfo.tagline}. Discover our professional services and get a free quote today!`,

  // ============================================================================
  // Per-page SEO Metadata
  // ============================================================================

  pages: {
    home: {
      description: `${companyInfo.name} provides professional lawn care services in ${companyInfo.serviceAreaDescription}. ${companyInfo.tagline}. Get a free quote today!`,
    },

    services: {
      title: "Our Services",
      description: `Professional lawn care services from ${companyInfo.name}. From weekly mowing to complete landscape maintenance, we offer comprehensive services tailored to your needs in ${companyInfo.serviceAreaDescription}.`,
    },

    privacyPolicy: {
      title: "Privacy Policy",
      description: `Learn about ${companyInfo.name}'s data collection, usage, and protection practices.`,
    },

    termsOfService: {
      title: "Terms of Service",
      description: `Understand the terms and conditions governing your use of ${companyInfo.name}'s services.`,
    },
  },
};

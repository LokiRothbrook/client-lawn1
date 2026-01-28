// lib/data/about.ts

import { Users, Trophy, Sparkles, ThumbsUp } from "lucide-react";

/**
 * This file contains data specific to the "About Us" section and page.
 * It includes content for the About section on the homepage and potentially
 * a dedicated About page.
 *
 * === How to Customize ===
 *
 * 1.  **About Section Content (`aboutSectionContent`):**
 *     -   `sectionTitle`: The small title above the main heading.
 *     -   `title`: The main heading, split into two lines for styling.
 *     -   `paragraphs`: Update these with your company's story, mission,
 *         and values. Each string in the array is a separate paragraph.
 *     -   `image`: Customize the year of experience and descriptive lines.
 *     -   `statsCard`: A featured statistic with a value and label.
 *     -   `stats`: An array of smaller statistics with icons (`lucide-react`),
 *         values, and labels.
 *     -   `values`: Highlight your core company values with titles and descriptions.
 *         The `icon` property uses icons from `lucide-react`.
 */

// ============================================================================
// About Section Content
// ============================================================================

export const aboutPageContent = {
  pageHeader: {
    title: "About Us",
    subtitle: "Our story, values, and commitment to your lawn.",
  },
};

export const aboutSectionContent = {
  sectionTitle: "About Us",
  title: {
    line1: "Your Local",
    line2: "Lawn Care Experts"
  },
  paragraphs: [
    "At Cales Lawncare, we strive to ensure every homeowner and business owner has the best-looking property around! We provide high-end quality at budget-friendly prices.", 
    "Our main focus is ensuring our customers are always taken care of and happy with our service. As a local small business, we are dedicated to seeing improvements in the beauty of our surrounding community."
  ],
  image: {
    /** Path to the about section image. Set to null to use the animated visual instead. */
    src: "/branding/about_us.jpeg",
    /** The main number/stat displayed prominently (e.g., "10+" for years) */
    year: "2+",
    /** First line of text below the year (e.g., "Years of Excellence") */
    line1: "Years of Excellence",
    /** Second line of text (e.g., "Serving Clients Since 2015") */
    line2: "Serving Lawns Since 2025",
  },
  statsCard: {
    value: "99%",
    label: "Satisfaction"
  },
  stats: [
    { icon: Users, value: "25+", label: "Happy Customers" },
    { icon: Trophy, value: "2+", label: "Years Experience" },
    { icon: Sparkles, value: "25+", label: "Lawns Serviced" },
    { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate" },
  ],
  values: [
    {
      title: "Lawn Expertise",
      description: "We understand grass types, soil conditions, and regional climate to give your lawn exactly what it needs.",
    },
    {
      title: "Reliable Service",
      description: "Rain or shine, we show up on schedule. You can count on us to keep your lawn looking great week after week.",
    },
    {
      title: "Eco-Friendly",
      description: "We use environmentally responsible products and practices that are safe for your family, pets, and the planet.",
    },
    {
      title: "Fair Pricing",
      description: "Transparent quotes with no hidden fees. We'll never surprise you with unexpected charges.",
    },
  ]
};

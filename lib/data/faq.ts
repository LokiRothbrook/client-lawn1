// lib/data/faq.ts

/**
 * This file contains data specific to the "Frequently Asked Questions" (FAQ) section and page.
 * It defines the structure for individual FAQ items and provides an array of
 * common questions and answers, along with content for the FAQ page itself.
 *
 * === How to Customize ===
 *
 * 1.  **FAQ Item Interface (`FAQItem`):**
 *     -   Defines the properties for each FAQ entry (question, answer).
 *
 * 2.  **FAQ Data Array (`faqData`):**
 *     -   Add, remove, or modify objects in this array to update your FAQs.
 *     -   Replace placeholder text with your actual questions and answers.
 *
 * 3.  **FAQ Page Content (`faqPageContent`):**
 *     -   Customize the `title` and `description` (for SEO) for the main
 *         FAQ page.
 */

// ============================================================================
// FAQ Item Interface and Data
// ============================================================================

/**
 * @interface FAQItem
 * Defines the structure for a single FAQ item.
 *
 * @property {string} question - The question asked in the FAQ.
 * @property {string} answer - The answer to the FAQ question.
 */
export interface FAQItem {
  question: string
  answer: string
}

/**
 * @const faqData
 * An array of frequently asked questions and their answers.
 * This data populates the FAQ section and can be reused where needed.
 *
 * === How to Customize ===
 * - Add, remove, or modify objects in this array to update your FAQs.
 * - Replace placeholder text with your actual questions and answers.
 */
export const faqData: FAQItem[] = [
  {
    question: "How often should I have my lawn mowed?",
    answer:
      "During the growing season (spring through fall), we recommend weekly mowing for most lawns. During peak growth periods, twice-weekly mowing may be beneficial. We'll help you determine the best schedule based on your grass type and conditions.",
  },
  {
    question: "How do I get a quote for lawn care services?",
    answer:
      "Getting a quote is easy! Simply fill out our contact form or call us at (309) 333-7599. We'll schedule a free on-site assessment to measure your property and discuss your needs. You'll receive a detailed, no-obligation estimate within 24 hours.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Macomb, Rushville and the surrounding communities within a 30-mile radius, including Littleton, Augusta, and Camden. Contact us to confirm service availability in your area.",
  },
  {
    question: "What makes Cale's Lawncare different from other lawn care companies?",
    answer:
      "We combine professional-grade equipment with certified lawn care expertise. We use eco-friendly products whenever possible. Plus, we guarantee our work - if you're not satisfied, we'll make it right.",
  },
  {
    question: "When is the best time to aerate and overseed my lawn?",
    answer:
      "For cool-season grasses common in Illinois, early fall (late August through September) is ideal for aeration and overseeding. The soil is still warm for seed germination, but cooler air temperatures reduce stress on new grass. Spring is a secondary option.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Absolutely! We provide free, no-obligation estimates for all our lawn care services. We'll visit your property, assess your lawn's needs, and provide a detailed quote."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We currently only accept cash and checks, However we are looking into expanding our payment options in the near future!"
  },
  {
    question: "Are your products safe for pets and children?",
    answer: "Yes! We use EPA-registered products that are safe for families and pets when applied according to label directions. We recommend keeping pets and children off treated areas until the product dries, typically 1-2 hours."
  },
  {
    question: "Do you offer commercial lawn care services?",
    answer: "Yes, we provide comprehensive commercial lawn care for offices, retail centers, HOAs, apartment complexes, and more. Contact us for a custom commercial quote tailored to your property's needs."
  },
  {
    question: "What happens if it rains on my scheduled service day?",
    answer: "Light rain typically doesn't affect mowing services. For heavy rain or storms, we'll reschedule your service to the next available day at no extra charge. Fertilizer and treatment applications may be rescheduled to ensure product effectiveness."
  },
];

// ============================================================================
// FAQ Page Content
// ============================================================================

/**
 * @const faqPageContent
 * An object containing content specific to the FAQ page.
 * This includes metadata for SEO (title and description).
 *
 * === How to Customize ===
 * - `title`: The main title displayed on the FAQ page (important for SEO).
 * - `description`: A brief summary of the FAQ page content (important for SEO).
 */
export const faqPageContent = {
  title: "Frequently Asked Questions",
  description: "Have questions about lawn care? We have answers. Find answers to common questions about our lawn care services, pricing, scheduling, and more.",
};

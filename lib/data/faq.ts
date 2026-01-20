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
    question: "What is the primary service you offer?",
    answer:
      "Our primary service is [Your Primary Service], where we specialize in [briefly describe what you do]. We focus on delivering high-quality results tailored to our clients' needs.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "Getting a quote is easy! Simply navigate to our contact section and fill out the form, or give us a call at [Your Phone Number]. We'll get back to you with a detailed, no-obligation estimate.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve the [Your City/Region] area. If you're located outside this region, please contact us to see if we can accommodate your project.",
  },
  {
    question: "What makes your business different from competitors?",
    answer:
    "We pride ourselves on our commitment to quality, customer satisfaction, and attention to detail. Our team is highly experienced, and we use the latest techniques and equipment to ensure the best possible outcome for your project.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines can vary depending on the scope and complexity. Once we provide a quote, we will also give you an estimated timeline for completion.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured. We believe in providing a professional and secure service for all our clients, giving you peace of mind.",
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all our services. Contact us to schedule your consultation."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, checks, and offer convenient payment plans for larger projects."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. We'll provide a clear timeline during your consultation."
  },
  {
    question: "Do you work with businesses?",
    answer: "Absolutely! We offer comprehensive services for businesses of all sizes. Contact us for a custom quote."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve a wide area. Contact us to confirm service availability in your location."
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
  description: "Have questions? We have answers. Find answers to common questions about our services, pricing, process, and more.",
};

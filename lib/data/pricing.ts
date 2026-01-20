// lib/data/pricing.ts

/**
 * This file contains data specific to the "Pricing" section and page.
 * It defines the structure for pricing plans and individual service pricing,
 * along with content for the pricing page itself.
 *
 * === How to Customize ===
 *
 * 1.  **Pricing Plan Interface (`PricingPlan`):**
 *     -   Defines the properties for each pricing plan (id, name, description, etc.).
 *
 * 2.  **Pricing Plans Array (`pricingPlans`):**
 *     -   Define your pricing tiers by adding or modifying objects in this array.
 *     -   Set `highlighted: true` for the plan you want to emphasize.
 *     -   Use the `badge` property to add extra labels like "Most Popular".
 *
 * 3.  **Pricing Page Content (`pricingPageContent`):**
 *     -   Customize the `title`, `description` (for SEO), and `heroSubtitle`
 *         for the main pricing page header.
 *
 * 4.  **Individual Services Pricing Content (`individualServicesPricingContent`):**
 *     -   Customize the `title` and `subtitle` for the section displaying
 *         individual service pricing, usually found on the pricing page.
 */

// ============================================================================
// Pricing Plan Interface and Data
// ============================================================================

/**
 * @interface PricingPlan
 * Defines the structure for a pricing plan object.
 *
 * @property {string} id - A unique identifier for the pricing plan.
 * @property {string} name - The name of the plan (e.g., "Starter", "Professional").
 * @property {string} description - A brief description of the plan.
 * @property {string} price - The price of the plan (e.g., "$XX", "Custom").
 * @property {string} period - The billing period (e.g., "per month").
 * @property {string[]} features - A list of key features or benefits.
 * @property {boolean} highlighted - Whether the plan should be visually highlighted.
 * @property {string} [badge] - An optional badge (e.g., "Most Popular").
 */
export interface PricingPlan {
  id: string
  name: string
  description: string
  price: string
  period: string
  features: string[]
  highlighted: boolean
  badge?: string
}

/**
 * @const pricingPlans
 * An array of pricing plan objects for your services.
 * This data populates the pricing page.
 *
 * === How to Customize ===
 * - Define your pricing tiers by adding or modifying objects in this array.
 * - Set `highlighted: true` for the plan you want to emphasize.
 * - Use the `badge` property to add extra labels like "Most Popular".
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Starter",
    description: "Perfect for getting started",
    price: "$XX",
    period: "per month",
    features: [
      "Core feature included",
      "Basic support",
      "Standard delivery",
      "Email communication",
      "Monthly reporting"
    ],
    highlighted: false
  },
  {
    id: "professional",
    name: "Professional",
    description: "Most popular choice for growing businesses",
    price: "$XXX",
    period: "per month",
    features: [
      "Everything in Starter",
      "Priority support",
      "Advanced features",
      "Phone & email support",
      "Weekly reporting",
      "Dedicated account manager",
      "Custom solutions"
    ],
    highlighted: true,
    badge: "Most Popular"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Complete solution for large organizations",
    price: "Custom",
    period: "contact us",
    features: [
      "Everything in Professional",
      "24/7 premium support",
      "Unlimited features",
      "Custom integrations",
      "Real-time reporting",
      "Strategic consulting",
      "SLA guarantee"
    ],
    highlighted: false
  }
];

// ============================================================================
// Pricing Page Content
// ============================================================================

/**
 * @const pricingPageContent
 * An object containing content specific to the Pricing page.
 * This includes metadata for SEO (title and description) and hero section content.
 *
 * === How to Customize ===
 * - `title`: The main title displayed on the pricing page (important for SEO).
 * - `description`: A brief summary of the pricing page content (important for SEO).
 * - `heroSubtitle`: The subtitle displayed in the hero section of the pricing page.
 */
export const pricingPageContent = {
  title: "Pricing",
  description: "Explore our simple and transparent pricing plans. We offer a range of packages to suit your needs and budget, from starter options to enterprise solutions.",
  heroSubtitle: "Choose a package that works for you. All plans include our satisfaction guarantee and professional service.",
};

/**
 * @const individualServicesPricingContent
 * An object containing content specific to the individual services pricing section on the Pricing page.
 * This includes the title and subtitle for this section.
 *
 * === How to Customize ===
 * - `title`: The main heading for the individual services pricing section.
 * - `subtitle`: The descriptive text below the heading.
 */
export const individualServicesPricingContent = {
  title: "Individual Service Pricing",
  subtitle: "Need just one service? Here's our pricing for individual services. Custom quotes available for larger properties.",
};
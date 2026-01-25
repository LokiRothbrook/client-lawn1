// lib/data/services.ts

/**
 * This file contains data specific to the "Services" section and pages.
 * It defines the structure of a service and provides an array of services
 * offered by the business, along with content for the services section itself.
 *
 * === How to Customize ===
 *
 * 1.  **Service Interface (`Service`):**
 *     -   Defines the properties for each service (id, title, description, etc.).
 *     -   `iconName`: Use the exact name of an icon from `lucide-react`
 *         (e.g., "Briefcase", "Users"). These are mapped to actual components
 *         in the `ServicesSection` component.
 *
 * 2.  **Services Array (`services`):**
 *     -   This is the core list of services your business offers.
 *     -   Add, remove, or modify service objects in this array.
 *     -   Update `title`, `shortDescription`, `description`, `iconName`,
 *         `features`, `image` path, and `price`.
 *     -   Ensure `image` paths correspond to images in the `public/images` directory.
 *
 * 3.  **Services Section Content (`servicesSectionContent`):**
 *     -   Customize the `sectionTitle`, main `title`, `subtitle`, and the
 *         text/href for the "View All Services" button.
 */

// ============================================================================
// Service Interface and Data
// ============================================================================

/**
 * @interface Service
 * Defines the structure for a service object.
 *
 * @property {string} id - A unique identifier for the service.
 * @property {string} title - The title of the service.
 * @property {string} shortDescription - A brief summary of the service.
 * @property {string} description - A detailed explanation of the service.
 * @property {string} iconName - The name of the Lucide icon to use (e.g., "Briefcase").
 * @property {string[]} features - A list of key features or benefits.
 * @property {string} image - The path to the service's image (e.g., "/images/service-1.jpg").
 * @property {string} price - The starting price or pricing model (e.g., "From $XXX").
 */
export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  iconName: string // Changed from LucideIcon
  features: string[]
  image: string
  price: string
}

/**
 * @const services
 * An array of service objects that represent the services your business offers.
 * This data is used to populate the services section and individual service pages.
 *
 * === How to Customize ===
 * - Add, remove, or reorder objects in this array.
 * - Replace placeholder text with your actual service details.
 * - Change the `iconName` to any valid name from the `lucide-react` library.
 * - Update the `image` path to point to your own service images in `public/images`.
 */
export const services: Service[] = [
  {
    id: "lawn-mowing",
    title: "Lawn Mowing",
    shortDescription: "Weekly and bi-weekly professional mowing",
    description: "Keep your lawn looking pristine with our professional mowing services. We use commercial-grade equipment and follow best practices like alternating mowing patterns to promote healthy grass growth and prevent soil compaction.",
    iconName: "Scissors",
    features: [
      "Weekly or bi-weekly scheduling",
      "Commercial-grade equipment",
      "Alternating mowing patterns",
      "Edging along walkways & driveways",
      "Grass clipping cleanup included"
    ],
    image: "/services/lawn-mowing.webp",
    price: "From $35"
  },
  {
    id: "lawn-fertilization",
    title: "Lawn Fertilization",
    shortDescription: "Custom fertilization programs",
    description: "Give your lawn the nutrients it needs to thrive with our customized fertilization programs. We analyze your soil and grass type to create a tailored feeding schedule that promotes deep root growth and vibrant green color.",
    iconName: "Leaf",
    features: [
      "Soil analysis included",
      "Custom nutrient blends",
      "Seasonal application schedule",
      "Slow-release formulas",
      "Eco-friendly options available"
    ],
    image: "/services/service-2.svg",
    price: "From $45"
  },
  {
    id: "weed-control",
    title: "Weed Control",
    shortDescription: "Pre & post-emergent weed treatment",
    description: "Say goodbye to dandelions, crabgrass, and other invasive weeds. Our comprehensive weed control program includes both pre-emergent treatments to prevent weeds and post-emergent applications to eliminate existing problems.",
    iconName: "Bug",
    features: [
      "Pre-emergent prevention",
      "Post-emergent treatment",
      "Targeted spot treatments",
      "Safe for pets & children",
      "Broadleaf & grassy weed control"
    ],
    image: "/services/service-3.svg",
    price: "From $50"
  },
  {
    id: "aeration-seeding",
    title: "Aeration & Overseeding",
    shortDescription: "Core aeration and lawn renovation",
    description: "Revitalize your lawn with our aeration and overseeding services. Core aeration relieves soil compaction and allows water, air, and nutrients to reach the roots, while overseeding fills in thin spots and introduces improved grass varieties.",
    iconName: "Sprout",
    features: [
      "Core aeration service",
      "Premium grass seed blends",
      "Improved water absorption",
      "Reduced soil compaction",
      "Thicker, healthier lawn"
    ],
    image: "/services/service-4.svg",
    price: "From $150"
  },
  {
    id: "hedge-trimming",
    title: "Hedge & Shrub Trimming",
    shortDescription: "Professional hedge shaping and maintenance",
    description: "Keep your hedges, shrubs, and ornamental plants looking their best with our professional trimming services. We shape and maintain your plants to enhance curb appeal while promoting healthy growth.",
    iconName: "TreeDeciduous",
    features: [
      "Precise shaping & styling",
      "Health-focused pruning",
      "Debris removal included",
      "All shrub types serviced",
      "Seasonal maintenance plans"
    ],
    image: "/services/service-5.svg",
    price: "From $75"
  },
  {
    id: "leaf-removal",
    title: "Leaf Removal",
    shortDescription: "Fall cleanup and leaf management",
    description: "Don't let fallen leaves smother your lawn. Our leaf removal service clears your property of leaves and debris, protecting your grass from disease and ensuring your lawn is ready for winter dormancy.",
    iconName: "Wind",
    features: [
      "Complete leaf clearing",
      "Gutter cleaning available",
      "Mulching or hauling options",
      "Flower bed cleanup",
      "Weekly fall service plans"
    ],
    image: "/services/service-6.svg",
    price: "From $85"
  },
  {
    id: "pest-control",
    title: "Lawn Pest Control",
    shortDescription: "Grub and insect treatment",
    description: "Protect your lawn from destructive pests like grubs, chinch bugs, and armyworms. Our targeted pest control treatments eliminate current infestations and create a barrier against future invasions.",
    iconName: "Shield",
    features: [
      "Grub prevention & treatment",
      "Surface insect control",
      "Pet & family safe products",
      "Preventive applications",
      "Satisfaction guaranteed"
    ],
    image: "/services/service-7.svg",
    price: "From $60"
  },
  {
    id: "spring-cleanup",
    title: "Spring & Fall Cleanup",
    shortDescription: "Seasonal lawn preparation",
    description: "Prepare your lawn for the growing season or winter with our comprehensive cleanup services. We remove debris, dethatch when needed, edge beds, and get your property looking fresh and ready.",
    iconName: "Sun",
    features: [
      "Debris & branch removal",
      "Bed edging & cleanup",
      "Dethatching available",
      "First mow of season",
      "Complete property refresh"
    ],
    image: "/services/service-8.svg",
    price: "From $125"
  }
];

/**
 * @const servicesSectionContent
 * An object containing the content for the services section, typically displayed
 * on the homepage or a dedicated services overview page.
 *
 * === How to Customize ===
 * - `sectionTitle`: The small title above the main heading.
 * - `title`: The main heading for the services section.
 * - `subtitle`: The descriptive text below the main heading.
 * - `button`: Customize the text and link for the call-to-action button
 *   at the bottom of the section.
 */
export const servicesSectionContent = {
  sectionTitle: "Our Services",
  title: "Complete Lawn Care Solutions",
  subtitle: "From routine mowing to specialized treatments, we offer comprehensive lawn care services to keep your property looking beautiful year-round.",
  button: {
    text: "View All Services",
    href: "/services"
  }
};

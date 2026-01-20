// lib/data/testimonials.ts

/**
 * This file contains data specific to client testimonials.
 * It defines the structure for a testimonial and provides an array of
 * customer testimonials, along with content for the testimonials section itself.
 *
 * === How to Customize ===
 *
 * 1.  **Testimonial Interface (`Testimonial`):**
 *     -   Defines the properties for each testimonial (id, name, role, content, etc.).
 *
 * 2.  **Testimonials Array (`testimonials`):**
 *     -   Replace the placeholder content with real quotes from your clients.
 *     -   Update the `name`, `role`, `content`, `rating`, `image` path, and
 *         optional `link` for each testimonial.
 *     -   Ensure `image` paths correspond to images in the `public/testimonials`
 *         directory.
 *
 * 3.  **Testimonials Section Content (`testimonialsSectionContent`):**
 *     -   Customize the `sectionTitle`, main `title`, `subtitle`, and the
 *         `trustIndicators` (e.g., number of happy clients, average rating).
 */

// ============================================================================
// Testimonial Interface and Data
// ============================================================================

/**
 * @const testimonialsSectionContent
 * An object containing the content for the testimonials section, typically displayed
 * on the homepage or a dedicated testimonials page.
 *
 * === How to Customize ===
 * - `sectionTitle`: The small title above the main heading.
 * - `title`: The main heading for the testimonials section.
 * - `subtitle`: The descriptive text below the main heading.
 * - `trustIndicators`: Update values and labels for social proof.
 */
export const testimonialsSectionContent = {
  sectionTitle: "Testimonials",
  title: "What our Clients Say",
  subtitle: "Don't just take our word for it. Here's what homeowners and businesses have to say about our services.",
  trustIndicators: [
    {
      value: "500+",
      label: "Happy Clients"
    },
    {
      value: "4.9",
      label: "Average Rating"
    },
    {
      value: "100%",
      label: "Would Recommend"
    }
  ]
};

/**
 * @interface Testimonial
 * Defines the structure for a testimonial object.
 *
 * @property {number} id - A unique identifier for the testimonial.
 * @property {string} name - The name of the client giving the testimonial.
 * @property {string} role - The role or title of the client (e.g., "Business Owner").
 * @property {string} content - The text of the testimonial.
 * @property {number} rating - A rating from 1 to 5.
 * @property {string} image - The path to the client's image (e.g., "/testimonials/client-1.jpg").
 * @property {string} [link] - An optional URL to the actual review or client website.
 */
export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
  link?: string // Optional link to the actual review
}

/**
 * @const testimonials
 * An array of testimonial objects from your clients.
 * This data is used to build social proof and trust.
 *
 * === How to Customize ===
 * - Replace the placeholder objects with real testimonials.
 * - Update the `name`, `role`, `content`, `rating`, and `image` for each entry.
 * - Ensure the `image` path corresponds to an image in `public/testimonials`.
 * - Optionally add a `link` if the testimonial is verifiable online.
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Client Name",
    role: "Business Owner",
    content: "Add a real testimonial from one of your satisfied customers here. Include specific details about the positive experience they had with your business.",
    rating: 5,
    image: "/testimonials/client-1.jpg",
    link: "#" // Placeholder link
  },
  {
    id: 2,
    name: "Client Name",
    role: "Manager",
    content: "Include another customer testimonial that highlights different aspects of your service, such as professionalism, quality, or customer service.",
    rating: 5,
    image: "/testimonials/client-2.jpg",
    link: "#" // Placeholder link
  },
  {
    id: 3,
    name: "Client Name",
    role: "Director",
    content: "Feature a testimonial that speaks to the results and outcomes your clients have experienced. Specific numbers or achievements work great here.",
    rating: 5,
    image: "/testimonials/client-3.jpg",
    link: "#" // Placeholder link
  },
  {
    id: 4,
    name: "Client Name",
    role: "CEO",
    content: "Add a testimonial from a business client that discusses the value you brought to their organization and how you exceeded their expectations.",
    rating: 5,
    image: "/testimonials/client-4.jpg",
    link: "#" // Placeholder link
  },
  {
    id: 5,
    name: "Client Name",
    role: "Customer",
    content: "Include a testimonial that emphasizes ease of working with your team, communication quality, and overall customer experience.",
    rating: 5,
    image: "/testimonials/client-5.jpg",
    link: "#" // Placeholder link
  },
  {
    id: 6,
    name: "Client Name",
    role: "Partner",
    content: "Feature a testimonial from a long-term client or partner that speaks to reliability, consistency, and the value of your ongoing relationship.",
    rating: 5,
    image: "/testimonials/client-6.jpg",
    link: "#" // Placeholder link
  },
  {
    id: 7,
    name: "Client Name",
    role: "Client",
    content: "Add a testimonial highlighting your problem-solving abilities and how you went above and beyond to deliver exceptional results.",
    rating: 5,
    image: "/testimonials/client-7.jpg",
    link: "#" // Placeholder link
  },
  {
    id: 8,
    name: "Client Name",
    role: "Executive",
    content: "Include a testimonial that discusses value for money, return on investment, or how your services have positively impacted their business.",
    rating: 5,
    image: "/testimonials/client-8.jpg",
    link: "#" // Placeholder link
  },
  {
    id: 9,
    name: "Client Name",
    role: "Customer",
    content: "Feature a testimonial that highlights your expertise, industry knowledge, and the professional advice you provided.",
    rating: 5,
    image: "/testimonials/client-9.jpg",
    link: "#" // Placeholder link
  },
  {
    id: 10,
    name: "Client Name",
    role: "Business Owner",
    content: "Add a testimonial that emphasizes why they would recommend your services to others and why they continue to choose your business.",
    rating: 5,
    image: "/testimonials/client-10.jpg",
    link: "#" // Placeholder link
  }
];

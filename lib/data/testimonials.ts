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
  title: "What Our Customers Say",
  subtitle: "Don't just take our word for it. Here's what homeowners and property managers have to say about our lawn care services.",
  trustIndicators: [
    {
      value: "25+",
      label: "Happy Customers"
    },
    {
      value: "2+",
      label: "Years Experience"
    },
    {
      value: "99%",
      label: "Satisfaction Rate"
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
export const testimonials: Testimonial[] = [];

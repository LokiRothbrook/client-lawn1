// lib/data/gallery.ts

/**
 * This file contains data specific to the "Gallery" section and page,
 * also used for the "Showcase" section on the homepage.
 * It defines the structure for gallery items and provides an array of
 * project examples, along with content for both sections.
 *
 * === How to Customize ===
 *
 * 1.  **Gallery Item Interface (`GalleryItem`):**
 *     -   Defines the properties for each gallery item (id, title, category, etc.).
 *
 * 2.  **Gallery Items Array (`galleryItems`):**
 *     -   Add, remove, or modify objects in this array to showcase your work.
 *     -   Ensure `image` paths correspond to images in the `public/gallery` directory.
 *
 * 3.  **Gallery Page Content (`galleryPageContent`):**
 *     -   Customize the `title` and `description` (for SEO) for the main
 *         gallery page.
 *
 * 4.  **Showcase Section Content (`showcaseSectionContent`):**
 *     -   Customize the `sectionTitle`, main `title`, `subtitle`, and the
 *         text/href for the "View Full Gallery" button, typically for a
 *         homepage showcase section.
 */

// ============================================================================
// Gallery Item Interface and Data
// ============================================================================

/**
 * @const showcaseSectionContent
 * An object containing the content for the showcase section, typically displayed
 * on the homepage to highlight featured projects.
 *
 * === How to Customize ===
 * - `sectionTitle`: The small title above the main heading.
 * - `title`: The main heading for the showcase section.
 * - `subtitle`: The descriptive text below the main heading.
 * - `button`: Customize the text and link for the call-to-action button
 *   at the bottom of the section.
 */
export const showcaseSectionContent = {
  sectionTitle: "Our Work",
  title: "Lawn Transformations",
  subtitle: "Browse our portfolio of lawn care projects and see the beautiful results we deliver for homeowners and businesses.",
  button: {
    text: "View Full Gallery",
    href: "/gallery"
  }
};

/**
 * @interface GalleryItem
 * Defines the structure for a gallery or portfolio item.
 *
 * @property {number} id - A unique identifier for the gallery item.
 * @property {string} title - The title of the project or work sample.
 * @property {string} category - The category of the work (e.g., "Category One").
 * @property {string} image - The path to the item's image (e.g., "/gallery/project-1.jpg").
 * @property {string} description - A brief description of the project.
 */
export interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  description: string
}

/**
 * @const galleryItems
 * An array of gallery item objects to showcase your work.
 * This data is used to populate the gallery or portfolio section.
 *
 * === How to Customize ===
 * - Add your project details to this array.
 * - Ensure the `image` path corresponds to an image in `public/gallery`.
 *   You can use different categories to allow for filtering in the gallery page.
 */
export const galleryItems: GalleryItem[] = [
  { id: 1, title: "Backyard Transformation", category: "Residential", image: "/gallery/backyard-transform.jpeg", description: "Complete lawn renovation including aeration, overseeding, and fertilization program" },
  { id: 2, title: "Office Complex Grounds", category: "Commercial", image: "/gallery/project-2.svg", description: "Weekly maintenance program for a 5-acre corporate campus" },
  { id: 3, title: "Front Yard Makeover", category: "Residential", image: "/gallery/project-3.svg", description: "Weed control and lawn restoration for a neglected front lawn" },
  { id: 4, title: "Fall Cleanup Project", category: "Seasonal", image: "/gallery/project-4.svg", description: "Complete leaf removal and winterization for a large estate" },
  { id: 5, title: "HOA Common Areas", category: "Commercial", image: "/gallery/project-5.svg", description: "Year-round maintenance for community common areas and entrances" },
  { id: 6, title: "New Construction Lawn", category: "Residential", image: "/gallery/project-6.svg", description: "Seeding and establishment program for newly built home" },
  { id: 7, title: "Spring Revival", category: "Seasonal", image: "/gallery/project-7.svg", description: "Spring cleanup, dethatching, and first fertilizer application" },
  { id: 8, title: "Retail Center Landscaping", category: "Commercial", image: "/gallery/project-8.svg", description: "Weekly mowing and trimming for busy shopping center" },
  { id: 9, title: "Corner Lot Renovation", category: "Residential", image: "/gallery/project-9.svg", description: "Addressing drainage issues and establishing healthy turf" },
  { id: 10, title: "Hedge & Shrub Shaping", category: "Seasonal", image: "/gallery/project-10.svg", description: "Professional trimming and shaping of overgrown hedges" },
  { id: 11, title: "Church Grounds", category: "Commercial", image: "/gallery/project-11.svg", description: "Complete lawn care program for local church property" },
  { id: 12, title: "Luxury Home Estate", category: "Residential", image: "/gallery/project-12.svg", description: "Premium lawn care service for 2-acre residential estate" }
]

// ============================================================================
// Gallery Page Content
// ============================================================================

/**
 * @const galleryPageContent
 * An object containing content specific to the Gallery page.
 * This includes metadata for SEO (title and description).
 *
 * === How to Customize ===
 * - `title`: The main title displayed on the gallery page (important for SEO).
 * - `description`: A brief summary of the gallery page content (important for SEO).
 */
export const galleryPageContent = {
  title: "Lawn Care Gallery",
  description: "Browse our gallery of lawn care transformations. See the quality results we deliver for residential and commercial properties throughout Springfield.",
};

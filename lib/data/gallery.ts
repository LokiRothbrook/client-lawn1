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
  { id: 8, title: "Precision Edging Project 1", category: "Edging", image: "/gallery/edging-1.jpg", description: "Clean and sharp edges for a pristine lawn look." },
  { id: 2, title: "Business Grounds", category: "Commercial", image: "/gallery/business-grounds.jpeg", description: "Weekly maintenance program for a 5-acre business campus" },
  { id: 12, title: "Expert Hedge Trimming", category: "Hedge", image: "/gallery/hedge-1.jpg", description: "Neatly trimmed hedges for a manicured garden." },
  { id: 3, title: "Front Yard Makeover", category: "Residential", image: "/gallery/front-yard-makeover.jpeg", description: "Weed control and lawn restoration for a neglected front lawn" },
  { id: 13, title: "Residential Yard Care 1", category: "Residential", image: "/gallery/yard-1.jpg", description: "Comprehensive care for a beautiful home lawn." },
  { id: 4, title: "Fall Cleanup Project", category: "Seasonal", image: "/gallery/fall-cleanup.jpeg", description: "Complete leaf removal and winterization for a large estate" },
  { id: 9, title: "Precision Edging Project 2", category: "Edging", image: "/gallery/edging-2.jpg", description: "Defined borders for flowerbeds and walkways." },
  { id: 5, title: "Large Yard", category: "Residential", image: "/gallery/large-yard.jpeg", description: "Large Yard management and cleanup" },
  { id: 14, title: "Residential Yard Care 2", category: "Residential", image: "/gallery/yard-2.jpg", description: "Lawn health and aesthetic improvement for residences." },
  { id: 6, title: "Business Maintenance", category: "Commercial", image: "/gallery/business.jpeg", description: "Maintaining look and keeping it clean" },
  { id: 10, title: "Precision Edging Project 3", category: "Edging", image: "/gallery/edging-3.jpg", description: "Enhancing landscape features with professional edging." },
  { id: 7, title: "Spring Revival", category: "Commercial", image: "/gallery/business-grounds-2.jpeg", description: "Spring cleanup, dethatching, and first fertilizer application" },
  { id: 15, title: "Residential Yard Care 3", category: "Residential", image: "/gallery/yard-3.jpg", description: "Maintaining lush green spaces for homeowners." },
  { id: 11, title: "Precision Edging Project 4", category: "Edging", image: "/gallery/edging-4.jpg", description: "Creating elegant lines around property boundaries." },
  { id: 16, title: "Residential Yard Care 4", category: "Residential", image: "/gallery/yard-4.jpg", description: "Tailored services to keep residential lawns pristine." },
  { id: 17, title: "Residential Yard Care 5", category: "Residential", image: "/gallery/yard-5.jpg", description: "Dedicated attention to residential garden and lawn areas." },
  { id: 18, title: "Residential Yard Care 6", category: "Residential", image: "/gallery/yard-6.jpg", description: "Ensuring vibrant and healthy residential outdoor spaces." },
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
  description: "Browse our gallery of lawn care transformations. See the quality results we deliver for residential and commercial properties.",
};

import { siteConfig, galleryPageContent } from "@/lib/data";
import { notFound } from "next/navigation";
import GalleryPageClient from "./gallery-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: galleryPageContent.title,
  description: galleryPageContent.description,
};

export default function GalleryPage() {
  if (!siteConfig.pages.gallery.enabled) {
    notFound();
  }

  return <GalleryPageClient />;
}

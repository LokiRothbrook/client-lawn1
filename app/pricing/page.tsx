import { siteConfig, pricingPageContent } from "@/lib/data";
import { notFound } from "next/navigation";
import PricingPageClient from "./pricing-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pricingPageContent.title,
  description: pricingPageContent.description,
};

export default function PricingPage() {
  if (!siteConfig.pages.pricing.enabled) {
    notFound();
  }

  return <PricingPageClient />;
}

import { MetadataRoute } from 'next';
import { services, companyInfo, siteConfig } from '@/lib/data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

type ChangeFrequency = "weekly" | "daily" | "monthly" | "always" | "hourly" | "yearly" | "never";

interface StaticPageConfigItem {
  url: string;
  lastModified: Date;
  changeFrequency: ChangeFrequency;
  priority: number;
  condition: boolean;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPagesConfig: StaticPageConfigItem[] = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1, condition: true },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9, condition: true },
    { url: `${BASE_URL}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8, condition: siteConfig.pages.gallery.enabled },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8, condition: siteConfig.pages.pricing.enabled },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7, condition: siteConfig.pages.faq.enabled },
  ];

  const staticPages: MetadataRoute.Sitemap = staticPagesConfig
    .filter(page => page.condition)
    .map(({ url, lastModified, changeFrequency, priority }) => ({
      url,
      lastModified,
      changeFrequency,
      priority,
    }));


  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}

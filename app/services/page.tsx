import type { Metadata } from "next"
import { companyInfo } from "@/lib/data"
import ServicesClient from "./services-client"

export const metadata: Metadata = {
  title: "Our Services",
  description: `Professional lawn care services from ${companyInfo.name}. From weekly mowing to complete landscape maintenance, we offer comprehensive services tailored to your needs in Macomb and Rushville, IL.`,
  openGraph: {
    url: '/services',
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}

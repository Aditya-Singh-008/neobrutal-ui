"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/home/hero"
import { StatsSection } from "@/components/home/stats"
import { ComponentsShowcase } from "@/components/home/showcase"
import { TestimonialsSection } from "@/components/home/testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-bg font-sans text-text selection:bg-pastel-purple selection:text-text">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <ComponentsShowcase />
        <TestimonialsSection />
        <SiteFooter />
      </main>
    </div>
  )
}

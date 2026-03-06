import { Header } from "@/components/sections/Header"
import { HeroSection } from "@/components/sections/Hero"
import { LegalitySection } from "@/components/sections/LegalitySection"
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { TeachersSection } from "@/components/sections/TeachersSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ComparisonSection } from "@/components/sections/ComparisonSection"
import { GuaranteeSection } from "@/components/sections/GuaranteeSection"
import { UrgencySection } from "@/components/sections/UrgencySection"
import { PricingSection } from "@/components/sections/PricingSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { Footer } from "@/components/sections/Footer"
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp"
import { LiveNotification } from "@/components/ui/LiveNotification"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LegalitySection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <TeachersSection />
      <TestimonialsSection />
      <ComparisonSection />
      <GuaranteeSection />
      <UrgencySection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
      <LiveNotification />
    </div>
  )
}

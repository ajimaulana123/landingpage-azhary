// Type definitions for eLKISI Landing Page

export interface Teacher {
  name: string
  title: string
  education: string
  bio: string
  expertise: string[]
}

export interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  period: string
  featured: boolean
  features: string[]
}

export interface Testimonial {
  name: string
  faculty: string
  year: string
  quote: string
}

export interface ComparisonRow {
  aspect: string
  mandiri: string
  elkisi: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ExamStage {
  stage: number
  title: string
  subtitle: string
  cost: string
  duration: string
  description: string
  isFinal?: boolean
}

# eLKISI Landing Page - Architecture Documentation

## 📁 Project Structure

```
landingpage-azhary/
├── app/
│   ├── page.tsx                 # Main page (orchestrator - 35 lines)
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── sections/                # Page sections (modular)
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Hero.tsx             # Hero section with CTA
│   │   ├── LegalitySection.tsx  # Affiliation & exam stages
│   │   ├── ProblemSolutionSection.tsx  # Problem vs Solution
│   │   ├── FeaturesSection.tsx  # 6 key features
│   │   ├── TeachersSection.tsx  # 3 Masyayikh profiles + schedule
│   │   ├── TestimonialsSection.tsx  # Alumni testimonials
│   │   ├── ComparisonSection.tsx    # Comparison table
│   │   ├── GuaranteeSection.tsx     # 100% guarantee
│   │   ├── UrgencySection.tsx       # Limited seats urgency
│   │   ├── PricingSection.tsx       # Pricing plans + costs
│   │   ├── FAQSection.tsx           # 8 FAQs
│   │   ├── FinalCTASection.tsx      # Final call-to-action
│   │   └── Footer.tsx               # Footer with contacts
│   ├── cards/                   # Reusable card components
│   │   ├── TeacherCard.tsx      # Teacher profile card
│   │   └── PricingCard.tsx      # Pricing plan card
│   └── ui/                      # shadcn/ui components
│       └── button.tsx           # Button component
├── lib/
│   ├── constants/
│   │   └── data.ts              # All static data (single source of truth)
│   ├── types.ts                 # TypeScript interfaces
│   └── utils.ts                 # Utility functions
└── public/                      # Static assets
```

## 🎯 Design Principles

### 1. Separation of Concerns
- **Data Layer** (`lib/constants/data.ts`): All content in one place
- **Type Layer** (`lib/types.ts`): TypeScript interfaces
- **Component Layer** (`components/`): Presentational components
- **Page Layer** (`app/page.tsx`): Composition & orchestration

### 2. Single Source of Truth
All data is centralized in `lib/constants/data.ts`:
- Contact information (WhatsApp, phone, email, Egypt address)
- Statistics (82+ alumni, 100% success rate)
- Teachers profiles (3 Masyayikh)
- Pricing plans (Online & Offline)
- Testimonials (3 alumni)
- FAQs (8 questions)
- Exam stages & costs
- Scholarship programs
- Schedule information

### 3. Reusability
- Card components (`TeacherCard`, `PricingCard`) are reusable
- Section components are self-contained
- Data is imported from constants, not hardcoded

### 4. Maintainability
- Each section is in its own file (~50-150 lines)
- Clear naming conventions
- TypeScript for type safety
- Easy to update content (just edit `data.ts`)

## 🔄 How to Update Content

### Update Contact Information
Edit `lib/constants/data.ts` → `CONTACT` object

### Update Pricing
Edit `lib/constants/data.ts` → `PRICING_PLANS` array

### Update Teachers
Edit `lib/constants/data.ts` → `TEACHERS` array

### Update FAQs
Edit `lib/constants/data.ts` → `FAQS` array

### Add New Section
1. Create new file in `components/sections/NewSection.tsx`
2. Import data from `lib/constants/data.ts`
3. Add to `app/page.tsx` imports and JSX

## 📊 Component Breakdown

| Component | Lines | Purpose |
|-----------|-------|---------|
| `page.tsx` | 35 | Main orchestrator |
| `Header.tsx` | 30 | Navigation |
| `Hero.tsx` | 70 | Hero with CTA |
| `LegalitySection.tsx` | 80 | Affiliation & exams |
| `ProblemSolutionSection.tsx` | 60 | Problem vs Solution |
| `FeaturesSection.tsx` | 90 | 6 features grid |
| `TeachersSection.tsx` | 80 | Teachers + schedule |
| `TestimonialsSection.tsx` | 50 | Alumni quotes |
| `ComparisonSection.tsx` | 70 | Comparison table |
| `GuaranteeSection.tsx` | 50 | 100% guarantee |
| `UrgencySection.tsx` | 40 | Limited seats |
| `PricingSection.tsx` | 120 | Pricing + costs |
| `FAQSection.tsx` | 30 | FAQs |
| `FinalCTASection.tsx` | 40 | Final CTA |
| `Footer.tsx` | 80 | Footer |
| `data.ts` | 350 | All static data |

**Total**: ~1,225 lines (vs 1,000+ lines monolithic)

## 🚀 Benefits of This Architecture

1. **Easy to Navigate**: Each section is clearly labeled
2. **Easy to Update**: Change data in one place
3. **Easy to Test**: Each component can be tested independently
4. **Easy to Scale**: Add new sections without touching existing code
5. **Type Safe**: TypeScript catches errors at compile time
6. **DRY Principle**: No repeated code, data imported from constants
7. **Team Friendly**: Multiple developers can work on different sections

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Icons**: Lucide React

## 📝 Code Quality Standards

- ✅ No hardcoded data (all in `data.ts`)
- ✅ TypeScript interfaces for all data structures
- ✅ Consistent naming conventions
- ✅ Self-contained components
- ✅ Proper imports/exports
- ✅ Accessibility compliant
- ✅ Responsive design
- ✅ Performance optimized

---

**Last Updated**: March 4, 2026
**Architecture**: Modular, Maintainable, Scalable

# eLKISI Landing Page - Project Structure

## 📁 Folder Structure

```
├── app/
│   ├── page.tsx              # Main page (current monolithic)
│   ├── page-new.tsx          # New modular page
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   └── button.tsx
│   │
│   ├── sections/             # Page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Legality.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── Features.tsx
│   │   ├── Teachers.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Comparison.tsx
│   │   ├── Guarantee.tsx
│   │   ├── Urgency.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   │
│   └── cards/                # Reusable card components
│       ├── TeacherCard.tsx
│       ├── PricingCard.tsx
│       ├── TestimonialCard.tsx
│       ├── FeatureCard.tsx
│       └── ExamStageCard.tsx
│
├── lib/
│   ├── types.ts              # TypeScript interfaces
│   ├── constants/
│   │   └── data.ts           # Static data
│   └── utils.ts              # Utility functions
│
└── public/                   # Static assets
```

## 🎯 Design Principles

### 1. **Separation of Concerns**
- **Components**: Reusable UI elements
- **Sections**: Page-specific layouts
- **Data**: Separated from presentation logic
- **Types**: Centralized type definitions

### 2. **Single Responsibility**
Each component has ONE job:
- `TeacherCard` → Display teacher info
- `PricingCard` → Display pricing plan
- `Header` → Navigation and branding

### 3. **DRY (Don't Repeat Yourself)**
- Reusable components for repeated patterns
- Centralized data in `constants/data.ts`
- Shared types in `types.ts`

### 4. **Easy to Maintain**
- Clear file naming conventions
- Logical folder structure
- Self-documenting code

## 📝 Component Guidelines

### Creating a New Section

```typescript
// components/sections/NewSection.tsx
export function NewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section content */}
      </div>
    </section>
  )
}
```

### Creating a New Card Component

```typescript
// components/cards/NewCard.tsx
import { NewType } from "@/lib/types"

interface NewCardProps {
  data: NewType
}

export function NewCard({ data }: NewCardProps) {
  return (
    <div className="rounded-2xl p-6">
      {/* Card content */}
    </div>
  )
}
```

### Adding New Data

```typescript
// lib/constants/data.ts
export const NEW_DATA: NewType[] = [
  {
    // data here
  }
]
```

## 🔄 Migration Plan

### Phase 1: Setup (✅ Done)
- [x] Create folder structure
- [x] Define TypeScript types
- [x] Extract static data
- [x] Create base components

### Phase 2: Component Creation
- [ ] Create all section components
- [ ] Create all card components
- [ ] Test each component individually

### Phase 3: Integration
- [ ] Replace `page.tsx` with `page-new.tsx`
- [ ] Test full page functionality
- [ ] Fix any styling issues

### Phase 4: Optimization
- [ ] Add lazy loading for images
- [ ] Optimize bundle size
- [ ] Add loading states
- [ ] Implement error boundaries

## 🛠️ Development Workflow

### Adding a New Feature

1. **Define Type** (if needed)
```typescript
// lib/types.ts
export interface NewFeature {
  title: string
  description: string
}
```

2. **Add Data**
```typescript
// lib/constants/data.ts
export const NEW_FEATURES: NewFeature[] = [...]
```

3. **Create Component**
```typescript
// components/cards/NewFeatureCard.tsx
export function NewFeatureCard({ feature }: { feature: NewFeature }) {
  return <div>{feature.title}</div>
}
```

4. **Use in Section**
```typescript
// components/sections/Features.tsx
import { NEW_FEATURES } from "@/lib/constants/data"
import { NewFeatureCard } from "@/components/cards/NewFeatureCard"

export function FeaturesSection() {
  return (
    <section>
      {NEW_FEATURES.map((feature, i) => (
        <NewFeatureCard key={i} feature={feature} />
      ))}
    </section>
  )
}
```

## 📊 Benefits of This Structure

### For Developers
✅ Easy to find specific code
✅ Clear component boundaries
✅ Reusable components
✅ Type-safe with TypeScript
✅ Easy to test individual components

### For Maintenance
✅ Update data without touching UI
✅ Change UI without touching data
✅ Add new sections easily
✅ Remove sections without breaking others

### For Performance
✅ Can lazy load sections
✅ Smaller bundle sizes per component
✅ Better code splitting
✅ Easier to optimize

## 🎨 Styling Conventions

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use consistent spacing scale (py-24, py-20, py-16)
- Use consistent color palette (emerald, teal, cyan)
- Use consistent border radius (rounded-2xl, rounded-3xl)

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Use Tailwind breakpoints:
- `md:` for tablet and up
- `lg:` for desktop and up

## 🚀 Next Steps

1. Complete all section components
2. Add animations with Framer Motion
3. Implement form validation
4. Add analytics tracking
5. Optimize images with Next.js Image
6. Add SEO metadata
7. Implement i18n for multi-language support

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

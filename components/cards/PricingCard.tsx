import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { PricingPlan } from "@/lib/types"

interface PricingCardProps {
  plan: PricingPlan
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`rounded-3xl p-8 ${plan.featured ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-2xl scale-105' : 'bg-white border-2 border-gray-200'}`}>
      {plan.featured && (
        <div className="inline-block bg-white text-emerald-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
          🔥 Paling Populer
        </div>
      )}
      <h3 className={`text-3xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
        {plan.name}
      </h3>
      <p className={`mb-6 ${plan.featured ? 'text-emerald-100' : 'text-gray-600'}`}>
        {plan.description}
      </p>
      <div className="mb-8">
        <span className={`text-5xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
          {plan.price}
        </span>
        <span className={`text-lg ${plan.featured ? 'text-emerald-100' : 'text-gray-600'}`}>
          {plan.period}
        </span>
      </div>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check className={`w-5 h-5 mt-1 shrink-0 ${plan.featured ? 'text-white' : 'text-emerald-600'}`} />
            <span className={plan.featured ? 'text-white' : 'text-gray-700'}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full py-6 text-lg font-semibold rounded-full ${plan.featured ? 'bg-white text-emerald-600 hover:bg-gray-100' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}>
        Pilih Program Ini
      </Button>
    </div>
  )
}

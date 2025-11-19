import { DollarSign } from 'lucide-react'

export default function PriceBadge({ price, status }) {
  const formatted = typeof price === 'number' ? price.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) : price
  return (
    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur border border-slate-200 rounded-full px-4 py-2 shadow-sm">
      <DollarSign className="w-4 h-4 text-emerald-600" />
      <span className="text-slate-800 font-semibold">{formatted}</span>
      {status && (
        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          {status}
        </span>
      )}
    </div>
  )
}

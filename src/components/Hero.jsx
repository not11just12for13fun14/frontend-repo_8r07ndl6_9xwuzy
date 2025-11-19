import PriceBadge from './PriceBadge'

export default function Hero({ property }) {
  const bg = property?.photos?.[0]
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-3xl shadow-2xl">
      {bg && (
        <img src={`${bg}&auto=format&fit=crop&w=1600&q=60`} alt={property.title} className="absolute inset-0 w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-12">
        <div className="space-y-4 max-w-3xl">
          <PriceBadge price={property.price} status={property.status} />
          <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow">{property.title}</h1>
          <p className="text-slate-200 text-lg">{property.address}, {property.city}, {property.state} {property.zipcode}</p>
          <div className="flex flex-wrap gap-3 text-slate-100/90">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">{property.beds} bd</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">{property.baths} ba</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">{property.sqft.toLocaleString()} sqft</span>
            {property.lot_size && <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">{property.lot_size} ac lot</span>}
            {property.year_built && <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Built {property.year_built}</span>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function KeyFacts({ property }) {
  const items = [
    { label: 'Price', value: property.price ? `$${property.price.toLocaleString()}` : '-' },
    { label: 'Beds', value: property.beds },
    { label: 'Baths', value: property.baths },
    { label: 'Square Feet', value: property.sqft ? property.sqft.toLocaleString() : '-' },
    { label: 'Price/Sqft', value: property.price_per_sqft ? `$${property.price_per_sqft.toLocaleString()}` : '-' },
    { label: 'Lot Size', value: property.lot_size ? `${property.lot_size} ac` : '-' },
    { label: 'Year Built', value: property.year_built || '-' },
    { label: 'HOA Fee', value: property.hoa_fee ? `$${property.hoa_fee}/mo` : '-' },
    { label: 'Days on Market', value: property.days_on_market ?? '-' },
    { label: 'Property Type', value: property.property_type || '-' },
  ]
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <h2 className="text-xl font-semibold mb-4">Key facts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
        {items.map((it) => (
          <div key={it.label} className="flex justify-between border-b border-slate-100 py-2">
            <span className="text-slate-500">{it.label}</span>
            <span className="font-medium text-slate-900">{it.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

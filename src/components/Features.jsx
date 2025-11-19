export default function Features({ features = [] }) {
  if (!features.length) return null
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <h2 className="text-xl font-semibold mb-4">Home features</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-slate-700">{f}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

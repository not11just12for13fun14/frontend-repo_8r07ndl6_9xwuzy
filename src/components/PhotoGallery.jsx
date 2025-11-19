export default function PhotoGallery({ photos = [] }) {
  if (!photos.length) return null
  const first = photos[0]
  const rest = photos.slice(1, 5)
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <div className="sm:col-span-2">
        <img src={`${first}&auto=format&fit=crop&w=1200&q=70`} alt="Primary" className="w-full h-80 sm:h-full object-cover rounded-2xl" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {rest.map((p, i) => (
          <img key={i} src={`${p}&auto=format&fit=crop&w=600&q=70`} alt={`Photo ${i+2}`} className="w-full h-40 object-cover rounded-2xl" />
        ))}
      </div>
    </section>
  )
}

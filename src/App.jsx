import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import PhotoGallery from './components/PhotoGallery'
import KeyFacts from './components/KeyFacts'
import Features from './components/Features'
import Contact from './components/Contact'

function App() {
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        // Try to fetch first property; if none, seed one
        const listRes = await fetch(`${baseUrl}/api/properties`)
        const list = await listRes.json()
        if (Array.isArray(list) && list.length > 0) {
          setProperty(list[0])
        } else {
          const seedRes = await fetch(`${baseUrl}/api/seed`, { method: 'POST' })
          const seeded = await seedRes.json()
          setProperty(seeded)
        }
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-600">Loading property...</div>
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>
  if (!property) return <div className="min-h-screen flex items-center justify-center text-slate-600">No property found</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Hero property={property} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PhotoGallery photos={property.photos} />
            {property.description && (
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold mb-2">About this home</h2>
                <p className="text-slate-700 leading-7">{property.description}</p>
              </section>
            )}
            <Features features={property.features} />
          </div>
          <div className="space-y-6">
            <KeyFacts property={property} />
            <Contact property={property} />
            {property.schools?.length > 0 && (
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold mb-4">Nearby schools</h2>
                <ul className="space-y-1 text-slate-700">
                  {property.schools.map((s, i) => <li key={i}>• {s}</li>)}
                </ul>
              </section>
            )}
            {property.open_house?.length > 0 && (
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-semibold mb-2">Open house</h2>
                <ul className="space-y-1 text-slate-700">
                  {property.open_house.map((s, i) => <li key={i}>• {s}</li>)}
                </ul>
              </section>
            )}
          </div>
        </div>
        <footer className="text-center text-slate-500 py-6">Powered by your custom listing site</footer>
      </div>
    </div>
  )
}

export default App

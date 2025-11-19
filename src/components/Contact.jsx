import { useState } from 'react'

export default function Contact({ property }) {
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, property_id: property?.id })
      })
      const data = await res.json()
      if (res.ok) setStatus('Thanks! We will be in touch shortly.')
      else setStatus(data.detail || 'Something went wrong')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <h2 className="text-xl font-semibold mb-4">Request a tour or info</h2>
      <form onSubmit={submit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input className="border rounded-lg px-3 py-2" placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
          <input className="border rounded-lg px-3 py-2" placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
        </div>
        <input className="border rounded-lg px-3 py-2 w-full" placeholder="Phone (optional)" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
        <textarea className="border rounded-lg px-3 py-2 w-full" rows="3" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg py-2 font-semibold transition">Contact agent</button>
        {status && <p className="text-sm text-slate-600">{status}</p>}
      </form>
      {property?.agent_name && (
        <div className="mt-4 text-sm text-slate-600">
          <p className="font-medium text-slate-800">Listed by {property.agent_name}</p>
          {property.agent_phone && <p>{property.agent_phone}</p>}
          {property.agent_email && <p>{property.agent_email}</p>}
        </div>
      )}
    </section>
  )
}

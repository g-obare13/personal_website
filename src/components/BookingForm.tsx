import { useState } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! Your booking request has been sent.')
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — copy */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-black text-gray-900 leading-tight">
            <span className="text-[#E84E1B]">Send us</span> a seminar<br />booking request
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            You're here to empower people through manifestation. One keynote, one conversation:
            you're here to empower people through manifestation. One keynote, one conversation.
          </p>

          {/* Photo */}
          <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200 shadow-lg mt-4">
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="w-32 h-52 bg-gradient-to-b from-gray-400 to-gray-600 rounded-t-full opacity-70" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-6xl font-black">JD</span>
            </div>
            <a
              href="#"
              className="absolute bottom-4 right-4 bg-[#E84E1B] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#c93d0f] transition-colors"
            >
              FOLLOW →
            </a>
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500">Full name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
                required
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E84E1B] placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="info@daniel-e..."
                value={form.email}
                onChange={handleChange}
                required
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E84E1B] placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500">Phone number</label>
              <input
                type="tel"
                name="phone"
                placeholder="1234 - 4567 - 4880"
                value={form.phone}
                onChange={handleChange}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E84E1B] placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500">Company name</label>
              <input
                type="text"
                name="company"
                placeholder="Enter your company"
                value={form.company}
                onChange={handleChange}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E84E1B] placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500">Add important information about your Business here.</label>
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E84E1B] resize-none placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E84E1B] text-white font-bold py-4 rounded-full hover:bg-[#c93d0f] transition-colors shadow-lg shadow-orange-200 mt-2"
          >
            Send Booking Request →
          </button>
        </form>
      </div>
    </section>
  )
}

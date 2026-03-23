import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote:
      'Jamie is an amazing coach, she is like a mind-reader, and really knows how to get to the heart of the problem. She has really helped me grow as a person',
    name: 'Sahavardi-kris',
    role: 'founder of passion',
    avatar: 'SK',
    bg: 'from-orange-200 to-orange-300',
  },
  {
    id: 2,
    quote:
      'Jamie is an amazing coach, she is like a mind-reader, and really knows how to get to the heart of the problem. She has really helped me grow as a person',
    name: 'Adam Mccall',
    role: 'founder of passion',
    avatar: 'AM',
    bg: 'from-blue-200 to-blue-300',
  },
  {
    id: 3,
    quote:
      'Working with James completely transformed my mindset around money and business. I went from burnt out to fully booked within 3 months.',
    name: 'Sara Mitchell',
    role: 'online business owner',
    avatar: 'SM',
    bg: 'from-green-200 to-green-300',
  },
  {
    id: 4,
    quote:
      'I was skeptical at first, but the results speak for themselves. James helped me launch my first 10K month using techniques I never would have tried on my own.',
    name: 'Derek Okafor',
    role: 'life strategist',
    avatar: 'DO',
    bg: 'from-purple-200 to-purple-300',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const visible = testimonials.slice(current, current + 2)

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left label */}
          <div className="lg:w-56 shrink-0">
            <h2 className="text-3xl font-black text-gray-900 leading-tight">
              What <span className="text-[#E84E1B]">client say</span>
              <br />about me
            </h2>
          </div>

          {/* Testimonials */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Counter */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="font-bold text-gray-700">/ 0{current + 1}</span>
              <div className="h-px flex-1 bg-gray-200" />
              <span>/ 0{testimonials.length}</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {visible.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
                >
                  <span className="text-[#E84E1B] text-3xl font-black leading-none">"</span>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.bg} flex items-center justify-center text-xs font-bold text-white`}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-800">{t.name}</div>
                      <div className="text-[10px] text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                disabled={current === 0}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 transition-colors"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrent((c) => (c + 2 < testimonials.length ? c + 1 : c))}
                disabled={current + 2 >= testimonials.length}
                className="w-9 h-9 rounded-full bg-[#E84E1B] text-white flex items-center justify-center hover:bg-[#c93d0f] disabled:opacity-30 transition-colors"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

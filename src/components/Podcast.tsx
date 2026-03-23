import { useState } from 'react'

const episodes = [
  {
    id: 1,
    tag: 'BEHIND THE MIC',
    guest: 'Producer, Haley Hatcher',
    category: 'Business',
    bg: 'from-orange-100 to-orange-200',
  },
  {
    id: 2,
    tag: 'BEHIND THE MIC',
    guest: 'Producer, Haley Hatcher',
    category: 'Mindset',
    bg: 'from-gray-700 to-gray-900',
    dark: true,
  },
  {
    id: 3,
    tag: 'BEHIND THE MIC',
    guest: 'Producer, Haley Hatcher',
    category: 'Finance',
    bg: 'from-rose-100 to-rose-200',
  },
  {
    id: 4,
    tag: 'BEHIND THE MIC',
    guest: 'Producer, Haley Hatcher',
    category: 'Growth',
    bg: 'from-amber-100 to-amber-200',
  },
]

const categories = ['All', 'Business', 'Mindset', 'Finance', 'Growth']

export default function Podcast() {
  const [activeCategory, setActiveCategory] = useState('Business')
  const [page, setPage] = useState(0)
  const perPage = 3
  const total = episodes.length
  const start = page * perPage
  const visible = episodes.slice(start, start + perPage)

  return (
    <section id="podcast" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl font-black text-gray-900">
            Most recent{' '}
            <span className="text-[#E84E1B]">podcast</span>
          </h2>

          <div className="flex items-center gap-2 flex-wrap">
            <select
              className="text-sm border border-gray-200 rounded-full px-4 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#E84E1B]"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <button className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:bg-gray-50">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>

        {/* Episode cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((ep) => (
            <div
              key={ep.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Card image */}
              <div className={`h-52 bg-gradient-to-br ${ep.bg} relative flex items-end justify-center`}>
                <div className={`w-28 h-44 rounded-t-full opacity-70 ${ep.dark ? 'bg-gradient-to-b from-gray-400 to-gray-600' : 'bg-gradient-to-b from-gray-300 to-gray-500'}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-4xl font-black ${ep.dark ? 'text-white/20' : 'text-gray-400/30'}`}>JD</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {ep.tag}
                </div>
                <div className="text-[10px] text-gray-400 mb-3">Manifested by · Illuminated | Podcast Production</div>
                <p className="text-sm font-semibold text-gray-800">{ep.guest}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => setPage((p) => (start + perPage < total ? p + 1 : p))}
            disabled={start + perPage >= total}
            className="w-9 h-9 rounded-full bg-[#E84E1B] text-white flex items-center justify-center hover:bg-[#c93d0f] disabled:opacity-30 transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

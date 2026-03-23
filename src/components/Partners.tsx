const partners = [
  {
    name: 'Orbitc',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: 'Glossy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    highlighted: true,
  },
  {
    name: 'PinPoint',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="10" r="3" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      </svg>
    ),
  },
  {
    name: 'Sitemark',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
]

export default function Partners() {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">
              TRUSTED<br />PARTNERS
            </h2>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            {partners.map((p) =>
              p.highlighted ? (
                <div
                  key={p.name}
                  className="flex items-center gap-2 bg-[#E84E1B] text-white px-7 py-3 rounded-full font-semibold text-sm shadow-lg shadow-orange-200"
                >
                  {p.icon}
                  {p.name}
                </div>
              ) : (
                <div key={p.name} className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                  {p.icon}
                  {p.name}
                </div>
              )
            )}
          </div>

          <div className="max-w-xs text-right hidden lg:block">
            <p className="text-sm text-gray-500 leading-relaxed">
              <span className="text-[#E84E1B]">→</span> Your intuitive superpowers to scale without the struggle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

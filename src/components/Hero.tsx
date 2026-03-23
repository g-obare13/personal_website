export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 bg-white overflow-hidden flex items-center"
    >
      {/* Background watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[22vw] font-black text-gray-100 tracking-widest opacity-60 whitespace-nowrap">
          JAMES
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left — photo */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-96 lg:w-96 lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-end justify-center">
              {/* Silhouette placeholder */}
              <div className="w-48 h-72 bg-gradient-to-b from-gray-500 to-gray-700 rounded-t-full opacity-60" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/30 text-7xl font-black">JD</span>
            </div>
          </div>

          {/* Floating tag */}
          <div className="absolute top-8 -right-4 lg:right-0 bg-white shadow-lg rounded-xl px-4 py-3 max-w-[180px] border border-gray-100">
            <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
              <span className="text-[#E84E1B]">→</span>
              I help entrepreneurs use manifestation to grow their businesses!
            </div>
          </div>

          {/* Case study play button */}
          <div className="absolute bottom-8 -left-4 flex items-center gap-3 bg-white shadow-md rounded-full px-4 py-2 border border-gray-100">
            <span className="text-xs text-gray-500">See client<br/>case study</span>
            <button className="w-8 h-8 bg-[#E84E1B] rounded-full flex items-center justify-center shadow-md hover:bg-[#c93d0f] transition-colors">
              <span className="text-white text-xs ml-0.5">▶</span>
            </button>
          </div>
        </div>

        {/* Right — copy */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-7xl lg:text-9xl font-black leading-none tracking-tight">
              <span className="text-gray-900">JAMES</span>{' '}
              <span className="text-[#E84E1B]">DAVID</span>
            </h1>
          </div>

          <p className="text-gray-600 max-w-sm leading-relaxed">
            Learn how to tap into your intuitive superpowers to scale without the struggle.
            Download my FREE Manifestation for Business Workbook to get started.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#E84E1B] text-white font-bold px-8 py-4 rounded-full hover:bg-[#c93d0f] transition-colors shadow-lg shadow-orange-200"
            >
              YES I WANT IT
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

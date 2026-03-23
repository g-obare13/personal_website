export default function AboutIntro() {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E84E1B] uppercase tracking-widest">
            <span>→</span> About Me
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Hi, I'm{' '}
            <span className="text-[#E84E1B]">James David</span>
            <br />
            master certified<br />coach
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-black text-gray-900">10</div>
              <div className="text-xs text-gray-500 mt-1">year of<br/>experience</div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-black text-gray-900">15</div>
              <div className="text-xs text-gray-500 mt-1">awards<br/>winning</div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-black text-gray-900">500+</div>
              <div className="text-xs text-gray-500 mt-1">clients<br/>helped</div>
            </div>
          </div>

          <div className="text-sm text-gray-500">2014 – 2024</div>
        </div>

        {/* Right — photo + tagline */}
        <div className="flex flex-col gap-8">
          {/* Photo */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-200 to-gray-400 flex items-end justify-center">
            <div className="w-36 h-56 bg-gradient-to-b from-gray-500 to-gray-700 rounded-t-full opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-6xl font-black">JD</span>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-[#E84E1B] rounded-2xl p-8 text-white">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4 opacity-70">→ About Me</div>
            <h3 className="text-2xl font-black leading-tight mb-2">
              I help entrepreneurs
            </h3>
            <h3 className="text-2xl font-black leading-tight text-white/80">
              unravel limiting beliefs
            </h3>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#E84E1B] font-bold px-6 py-3 rounded-full text-sm hover:bg-gray-50 transition-colors"
            >
              WORK WITH ME <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

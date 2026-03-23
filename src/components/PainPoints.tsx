import { useState } from 'react'

const painPoints = [
  'Struggling to attract the clients & sales you want.',
  'Doubting the value you bring to the table.',
  "Comparing yourself to other coaches and wondering why YOU haven't hit 5-figure months.",
  'Tensing up every time you look at your bank account.',
  'Second-guessing how much you should charge.',
  'Working yourself to the bone and STILL barely making a profit.',
]

export default function PainPoints() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E84E1B] uppercase tracking-widest">
            <span>→</span> About Me
          </div>

          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            Your{' '}
            <span className="text-[#E84E1B]">coaching business</span>
            <br />
            was supposed to give
            <br />
            you more time
          </h2>

          {/* Photo */}
          <div className="relative w-full max-w-sm h-72 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-200 to-gray-400 flex items-end justify-center">
            <div className="w-32 h-52 bg-gradient-to-b from-gray-500 to-gray-700 rounded-t-full opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-6xl font-black">JD</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm italic">
            It's enough to make you want to call it quits
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 pt-16">
          <h3 className="text-xl font-bold text-gray-900">Yet here you are:</h3>

          <div className="flex flex-col divide-y divide-gray-100">
            {painPoints.map((point, i) => (
              <button
                key={i}
                className="flex items-start justify-between py-4 text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs text-gray-400 mt-1 w-5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-sm leading-relaxed transition-colors ${
                      open === i ? 'text-gray-900 font-medium' : 'text-gray-600'
                    }`}
                  >
                    {point}
                  </span>
                </div>
                <span
                  className={`text-gray-400 shrink-0 transition-transform mt-0.5 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="self-start inline-flex items-center gap-2 bg-[#E84E1B] text-white font-bold px-8 py-4 rounded-full hover:bg-[#c93d0f] transition-colors shadow-lg shadow-orange-200 mt-4"
          >
            WORK WITH ME <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

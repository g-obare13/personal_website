import { useState } from 'react'

const steps = [
  {
    num: '01.',
    title: 'Release & Reprogram Your Limiting Beliefs',
    body: 'Say goodbye to the stories and environments that have kept you from experiencing financial abundance and joy.',
  },
  {
    num: '02.',
    title: 'Shift Your Money Perception',
    body: 'Step into a whole new perception of money that is powerful, light, and FUN. When you learn to love and embody this excitement and joy.',
  },
  {
    num: '03.',
    title: 'Harness the Universal Laws',
    body: 'Learn to work with the Universal Laws and align yourself with the flow of financial abundance. By working within the law of attraction.',
  },
  {
    num: '04.',
    title: 'Create Your Wealthy Financial Reality',
    body: 'Watch your new perception of money become reality by taking courageous & aligned action. With my guidance and tools, you\'ll start to manifest.',
  },
]

export default function Movement() {
  const [open, setOpen] = useState<number[]>([0, 1])

  const toggle = (i: number) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))

  return (
    <section id="movement" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            The Money Manifestation Movement
          </h2>
          <p className="text-gray-500 mt-3">
            blends together mindset and manifestation practices
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {steps.map((step, i) => {
            const isOpen = open.includes(i)
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`text-left rounded-2xl p-6 border transition-all ${
                  isOpen
                    ? 'bg-[#E84E1B] text-white border-[#E84E1B] shadow-lg shadow-orange-200'
                    : 'bg-gray-50 text-gray-700 border-gray-100 hover:border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className={`text-xs font-bold mb-2 ${isOpen ? 'text-white/70' : 'text-gray-400'}`}>
                      {step.num}
                    </div>
                    <h3 className={`font-bold text-sm leading-snug ${isOpen ? 'text-white' : 'text-gray-800'}`}>
                      {step.title}
                    </h3>
                    {isOpen && (
                      <p className="text-white/80 text-xs mt-3 leading-relaxed">{step.body}</p>
                    )}
                  </div>
                  <span className={`shrink-0 text-lg ${isOpen ? 'text-white' : 'text-gray-400'}`}>
                    {isOpen ? '✓' : '+'}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#E84E1B] text-white font-bold px-8 py-4 rounded-full hover:bg-[#c93d0f] transition-colors shadow-lg shadow-orange-200"
          >
            WORK WITH ME <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

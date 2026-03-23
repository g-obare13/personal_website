import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[#E84E1B] font-bold text-xl italic">
          James David
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium bg-gray-900 text-white px-4 py-1.5 rounded-full">
            Home
          </a>
          <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            About Me
          </a>
          <a href="#portfolio" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Portfolio
          </a>
          <a href="#podcast" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Podcast
          </a>
          <a href="#movement" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Join the movement
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#E84E1B] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#c93d0f] transition-colors"
        >
          Get in touch
          <span className="text-xs">↗</span>
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-gray-800 mb-1" />
          <div className="w-5 h-0.5 bg-gray-800 mb-1" />
          <div className="w-5 h-0.5 bg-gray-800" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {['Home', 'About Me', 'Portfolio', 'Podcast', 'Join the movement'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm text-gray-700 hover:text-[#E84E1B] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#E84E1B] text-white text-sm font-semibold px-5 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  )
}

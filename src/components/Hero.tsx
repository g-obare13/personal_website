import { Image } from "@unpic/react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans selection:bg-orange-100">
      {/* Background Watermark Text */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-[60%] select-none pointer-events-none z-0 w-full flex justify-center">
        <h2 className="font-script text-[15rem] md:text-[25rem] text-muted-background opacity-2 whitespace-nowrap">
          David
        </h2>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-12 min-h-screen flex flex-col justify-between max-w-7xl">
        {/* Top Section: Photo and Small Intro */}
        <div className="relative w-full flex-1 flex flex-col items-center md:items-start justify-end mt-10">
          {/* Main Image */}
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg z-10 flex justify-center md:justify-start">
            <div className="w-[85%] md:w-full">
              <Image
                src="/phot.png"
                layout="constrained"
                width={1000}
                aspectRatio={3 / 4}
                alt="James David"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

          {/* Floating Small Text (Right Side) */}
          <div className="hidden md:block absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 max-w-[280px] z-20">
            <p className="text-[17px] font-medium text-muted-foreground leading-snug">
              <span className="inline-flex items-center mr-3 translate-y-[-2px]">
                <span className="w-12 h-[1.5px] bg-orange-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 -ml-1"></span>
              </span>
              I help entrepreneurs use manifestation to grow their businesses!
            </p>
          </div>

          {/* Big Name Section - Overlapping the image */}
          <div className="w-full text-center absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <h1 className="text-[6rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] font-semibold tracking-[-0.05em] leading-[0.75] flex justify-center gap-2 md:gap-6">
              <span className="text-[#1A1A1A]">JAMES</span>
              <span className="bg-linear-to-b from-orange-300 to-orange-500 bg-clip-text text-transparent">
                DAVID
              </span>
            </h1>
          </div>
        </div>

        {/* Footer Section: CTA and Case Study */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-end gap-8 mt-32 md:mt-40 z-30">
          {/* Left: Case Study */}
          <div className="flex items-center gap-4 cursor-pointer group justify-center md:justify-start">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-800 text-right leading-tight">
              See client <br /> case study
            </span>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(255,77,33,0.15)] group-hover:scale-105 transition-transform">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#FF4D21] border-b-[6px] border-b-transparent ml-1"></div>
            </div>
          </div>

          {/* Middle: Description */}
          <div className="text-center md:text-left">
            <p className="text-slate-800 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
              Learn how to tap into your intuitive superpowers to scale without
              the struggle. Download my FREE Manifestation for Business Workbook
              to get started.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex justify-center md:justify-end">
            <Button variant="cta" size="xl" cutCorner>
              YES I WANT IT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

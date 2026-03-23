import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", active: true },
    { name: "About Me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Podcast", href: "#podcast" },
    { name: "Join the movement", href: "#movement" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled
          ? "py-4 bg-white/90 backdrop-blur-md border-b border-slate-100"
          : "py-8 bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-primary text-2xl font-medium tracking-tight"
          style={{ fontFamily: "'Satisfy', cursive" }}
        >
          James David
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-5 py-2 text-sm font-medium rounded-full transition-all duration-200",
                item.active
                  ? "bg-white text-primary border border-primary/30"
                  : "text-foreground/60 hover:text-foreground",
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button variant="cta" size="lg" cutCorner>
            Get in touch
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={cn(
                "w-6 h-0.5 bg-current transition-all",
                menuOpen && "rotate-45 translate-y-1.5",
              )}
            />
            <div
              className={cn(
                "w-6 h-0.5 bg-current my-1.5 transition-all",
                menuOpen && "opacity-0",
              )}
            />
            <div
              className={cn(
                "w-6 h-0.5 bg-current transition-all",
                menuOpen && "-rotate-45 -translate-y-1.5",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-b border-border shadow-xl transition-all duration-300 lg:hidden overflow-hidden",
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button variant="cta" size="lg" cutCorner>
            Get in touch
          </Button>
          {/* <a
            href="#contact"
            className="bg-primary text-white text-center py-4 rounded-xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a> */}
        </div>
      </div>
    </header>
  );
}

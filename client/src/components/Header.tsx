import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

/**
 * Design: Warm Editorial
 * - Clean header with logo and navigation
 * - Mobile hamburger menu
 * - Active link highlighting
 * - Smooth scroll to sections (Gallery, News)
 * - Smooth scroll-to-top for page routes (About, Contact, etc.)
 */

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    // If it's gallery or news, scroll to section on home page
    if (href === "/gallery" || href === "/news") {
      e.preventDefault();
      const sectionId = href.replace("/", "");
      
      // If we're on home page, scroll directly
      if (location === "/") {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: elementPosition, behavior: "smooth" });
          }
        }, 0);
        setIsOpen(false);
      } else {
        // If we're on another page, navigate to home first
        window.location.href = `/#${sectionId}`;
      }
    } else if (href === "/about" || href === "/contact" || href === "/projects" || href === "/achievements") {
      // For page routes, close menu and scroll to top smoothly
      setIsOpen(false);
      // Scroll to top smoothly when navigating to these pages
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    } else if (href === "/") {
      // Home page - close menu and scroll to top
      setIsOpen(false);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container-x flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-display text-xl font-bold text-brand hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold">
            CS
          </div>
          <span className="hidden sm:inline">Clyde</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-brand"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-surface rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-ink" />
          ) : (
            <Menu className="h-6 w-6 text-ink" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-surface">
          <div className="container-x py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "bg-brand/10 text-brand font-medium"
                    : "text-ink-soft hover:bg-surface-elevated"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
